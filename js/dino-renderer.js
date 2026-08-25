(() => {
  'use strict';

  const catalog = window.DINO_COSMETICS;
  if (!catalog) return;

  const defaultAppearance = Object.freeze({
    skinBody: '0',
    skinHead: '0',
    skinLeg: '0',
    pattern: '0',
    bodyColor: '13',
    bellyColor: '3',
    patternColor: '8'
  });
  const imageCache = new Map();
  const tintCache = new Map();
  const renderTokens = new WeakMap();

  function validMapId(map, value, fallback) {
    const candidate = String(value ?? fallback);
    return Object.hasOwn(map, candidate) ? candidate : fallback;
  }

  function normalizeAppearance(value = {}) {
    return {
      skinBody: validMapId(catalog.skinMap.Body, value.skinBody, defaultAppearance.skinBody),
      skinHead: validMapId(catalog.skinMap.Head, value.skinHead, defaultAppearance.skinHead),
      skinLeg: validMapId(catalog.skinMap.Leg, value.skinLeg, defaultAppearance.skinLeg),
      pattern: validMapId(catalog.patternMap.Body, value.pattern, defaultAppearance.pattern),
      bodyColor: String(Math.max(0, Math.min(catalog.colors.length - 1, Number(value.bodyColor ?? defaultAppearance.bodyColor)))),
      bellyColor: String(Math.max(0, Math.min(catalog.colors.length - 1, Number(value.bellyColor ?? defaultAppearance.bellyColor)))),
      patternColor: String(Math.max(0, Math.min(catalog.colors.length - 1, Number(value.patternColor ?? defaultAppearance.patternColor))))
    };
  }

  function selectedSprite(layer, appearance) {
    if (layer.source === 'skin') {
      const stateKey = layer.category === 'Body' ? 'skinBody' : layer.category === 'Head' ? 'skinHead' : 'skinLeg';
      return catalog.skinMap[layer.category]?.[appearance[stateKey]] || catalog.skinMap[layer.category]?.['0'];
    }
    if (layer.source === 'pattern') {
      return catalog.patternMap[layer.category]?.[appearance.pattern] || catalog.patternMap[layer.category]?.['0'];
    }
    return layer.sprite;
  }

  function loadSprite(spriteId) {
    if (!imageCache.has(spriteId)) {
      const sprite = catalog.sprites[spriteId];
      imageCache.set(spriteId, new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Could not load ${sprite?.file || spriteId}`));
        image.src = `assets/cosmetics/${sprite.file}`;
      }));
    }
    return imageCache.get(spriteId);
  }

  function tintedSprite(spriteId, image, color) {
    const key = `${spriteId}:${color}`;
    if (!tintCache.has(key)) {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      context.globalCompositeOperation = 'multiply';
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.globalCompositeOperation = 'destination-in';
      context.drawImage(image, 0, 0);
      context.globalCompositeOperation = 'source-over';
      tintCache.set(key, canvas);
    }
    return tintCache.get(key);
  }

  async function render(canvas, value) {
    if (!(canvas instanceof HTMLCanvasElement)) return;
    const token = (renderTokens.get(canvas) || 0) + 1;
    renderTokens.set(canvas, token);
    const appearance = normalizeAppearance(value);
    const layerData = (await Promise.all(catalog.layers.map(async layer => {
      const spriteId = selectedSprite(layer, appearance);
      const sprite = catalog.sprites[spriteId];
      if (!sprite || sprite.empty) return null;
      return { layer, spriteId, sprite, image: await loadSprite(spriteId) };
    }))).filter(Boolean);
    if (renderTokens.get(canvas) !== token || !layerData.length) return;

    const context = canvas.getContext('2d');
    const minimumX = Math.min(...layerData.map(item => item.sprite.bounds[0]));
    const minimumY = Math.min(...layerData.map(item => item.sprite.bounds[1]));
    const maximumX = Math.max(...layerData.map(item => item.sprite.bounds[2]));
    const maximumY = Math.max(...layerData.map(item => item.sprite.bounds[3]));
    const worldWidth = Math.max(0.01, maximumX - minimumX);
    const worldHeight = Math.max(0.01, maximumY - minimumY);
    const marginX = Math.max(14, canvas.width * 0.08);
    const marginY = Math.max(10, canvas.height * 0.06);
    const pixelsPerWorld = Math.min(
      (canvas.width - marginX * 2) / worldWidth,
      (canvas.height - marginY * 2) / worldHeight
    );
    const centerX = (minimumX + maximumX) / 2;
    const centerY = (minimumY + maximumY) / 2;
    const originX = canvas.width / 2 - centerX * pixelsPerWorld;
    const originY = canvas.height / 2 + centerY * pixelsPerWorld;

    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const { layer, spriteId, sprite, image } of layerData) {
      const scale = pixelsPerWorld / sprite.ppu;
      const x = originX + sprite.bounds[0] * pixelsPerWorld;
      const y = originY - sprite.bounds[3] * pixelsPerWorld;
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      let source = image;
      if (layer.tint) {
        const colorId = layer.tint === 'body' ? appearance.bodyColor : layer.tint === 'belly' ? appearance.bellyColor : appearance.patternColor;
        source = tintedSprite(spriteId, image, catalog.colors[Number(colorId)]?.hex || '#ffffff');
      }
      context.drawImage(source, x, y, width, height);
    }
  }

  window.DinoRenderer = {
    catalog,
    defaultAppearance,
    normalizeAppearance,
    render
  };
})();
