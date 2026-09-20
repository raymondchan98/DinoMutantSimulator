const TEXT = {
  en:{
    brand:'Rune Calculator',health:'Health',attack:'Attack',speed:'Speed',inventory:'Rune inventory',
    pvp:'PvP',structure:'Structure',boss:'Boss',all:'All',search:'Search',owned:'with levels',
    new:'New',rename:'Rename',delete:'Delete',cancel:'Cancel',save:'Save',profileName:'Profile name',
    run:'Find best build',needStats:'Enter Health, Attack and Speed.',needRunes:'Set levels for at least 5 runes.',
    ready:'Ready',working:'Calculating',recommended:'Recommended build',other:'Other strong builds',
    checking:'Checking builds',tournament:'Running PvP tournament',simulating:'Running simulations',
    winRate:'Win rate',avgDamage:'Average damage',hpLeft:'HP left',rounds:'Rounds',
    finalAttack:'Final attack',finalHealth:'Final health',score:'Score',
    confirmDelete:'Delete this profile?',lastProfile:'At least one profile is required.',
    noRunes:'No runes found',
    rarities:{all:'All',Normal:'Normal',Rare:'Rare',Epic:'Epic',Unique:'Unique',Legendary:'Legendary'}
  },
  es:{
    brand:'Calculadora de Runas',health:'Vida',attack:'Ataque',speed:'Velocidad',inventory:'Inventario de runas',
    pvp:'PvP',structure:'Estructura',boss:'Jefe',all:'Todas',search:'Buscar',owned:'con nivel',
    new:'Nuevo',rename:'Renombrar',delete:'Eliminar',cancel:'Cancelar',save:'Guardar',profileName:'Nombre del perfil',
    run:'Buscar mejor set',needStats:'Introduce Vida, Ataque y Velocidad.',needRunes:'Pon nivel a por lo menos 5 runas.',
    ready:'Listo',working:'Calculando',recommended:'Set recomendado',other:'Otros sets fuertes',
    checking:'Revisando sets',tournament:'Ejecutando torneo PvP',simulating:'Ejecutando simulaciones',
    winRate:'Victorias',avgDamage:'Daño medio',hpLeft:'Vida restante',rounds:'Rondas',
    finalAttack:'Ataque final',finalHealth:'Vida final',score:'Puntuación',
    confirmDelete:'¿Eliminar este perfil?',lastProfile:'Se necesita al menos un perfil.',
    noRunes:'No se encontraron runas',
    rarities:{all:'Todas',Normal:'Normal',Rare:'Rara',Epic:'Épica',Unique:'Única',Legendary:'Legendaria'}
  },
  ja:{
    brand:'ルーン計算機',health:'HP',attack:'攻撃力',speed:'速度',inventory:'所持ルーン',
    pvp:'PvP',structure:'建物',boss:'ボス',all:'すべて',search:'検索',owned:'設定済み',
    new:'新規',rename:'名前変更',delete:'削除',cancel:'キャンセル',save:'保存',profileName:'プロフィール名',
    run:'最適セットを検索',needStats:'HP・攻撃力・速度を入力してください。',needRunes:'5個以上のルーンにレベルを設定してください。',
    ready:'準備完了',working:'計算中',recommended:'おすすめセット',other:'他の有力セット',
    checking:'セットを確認中',tournament:'PvPトーナメント中',simulating:'シミュレーション中',
    winRate:'勝率',avgDamage:'平均ダメージ',hpLeft:'残りHP',rounds:'ラウンド',
    finalAttack:'最終攻撃力',finalHealth:'最終HP',score:'スコア',
    confirmDelete:'このプロフィールを削除しますか？',lastProfile:'プロフィールは1つ以上必要です。',
    noRunes:'ルーンが見つかりません',
    rarities:{all:'すべて',Normal:'ノーマル',Rare:'レア',Epic:'エピック',Unique:'ユニーク',Legendary:'レジェンダリー'}
  },
  ko:{
    brand:'룬 계산기',health:'체력',attack:'공격력',speed:'속도',inventory:'룬 인벤토리',
    pvp:'PvP',structure:'건물',boss:'보스',all:'전체',search:'검색',owned:'설정됨',
    new:'새로 만들기',rename:'이름 변경',delete:'삭제',cancel:'취소',save:'저장',profileName:'프로필 이름',
    run:'최적 세트 찾기',needStats:'체력, 공격력, 속도를 입력하세요.',needRunes:'룬 5개 이상에 레벨을 입력하세요.',
    ready:'준비됨',working:'계산 중',recommended:'추천 세트',other:'다른 강력한 세트',
    checking:'세트 확인 중',tournament:'PvP 토너먼트 실행 중',simulating:'시뮬레이션 실행 중',
    winRate:'승률',avgDamage:'평균 피해',hpLeft:'남은 HP',rounds:'라운드',
    finalAttack:'최종 공격력',finalHealth:'최종 체력',score:'점수',
    confirmDelete:'이 프로필을 삭제할까요?',lastProfile:'프로필이 최소 1개 필요합니다.',
    noRunes:'룬을 찾을 수 없습니다',
    rarities:{all:'전체',Normal:'일반',Rare:'희귀',Epic:'에픽',Unique:'유니크',Legendary:'전설'}
  },
  'zh-TW':{
    brand:'符文計算器',health:'生命',attack:'攻擊',speed:'速度',inventory:'符文庫存',
    pvp:'PvP',structure:'建築',boss:'Boss',all:'全部',search:'搜尋',owned:'已設定',
    new:'新增',rename:'重新命名',delete:'刪除',cancel:'取消',save:'儲存',profileName:'設定檔名稱',
    run:'尋找最佳配置',needStats:'請輸入生命、攻擊與速度。',needRunes:'至少為 5 個符文設定等級。',
    ready:'就緒',working:'計算中',recommended:'推薦配置',other:'其他強力配置',
    checking:'檢查配置',tournament:'執行 PvP 對戰',simulating:'執行模擬',
    winRate:'勝率',avgDamage:'平均傷害',hpLeft:'剩餘 HP',rounds:'回合',
    finalAttack:'最終攻擊',finalHealth:'最終生命',score:'分數',
    confirmDelete:'刪除此設定檔？',lastProfile:'至少需要一個設定檔。',
    noRunes:'找不到符文',
    rarities:{all:'全部',Normal:'普通',Rare:'稀有',Epic:'史詩',Unique:'獨特',Legendary:'傳說'}
  }
};

const UI_TEXT={
  en:{brand:'Dino Rune Lab',battleLab:'Battle Lab',buildFinder:'Build Finder',yourDino:'Your dino',opponent:'Opponent',runeLoadout:'Rune loadout',constellation:'Constellation',clear:'Clear',battleArena:'Battle Arena',damage:'Damage',critical:'Critical',skill:'Skill',healing:'Healing',actions:'Actions',yourDamage:'Your damage',enemyDamage:'Enemy damage',mirror:'Mirror',optimizing:'Optimizing against your opponent',finderHint:'The finder uses the exact opponent configured in Battle Lab.',useInBattle:'Use in Battle',chooseRune:'Choose a rune',close:'Close',newBattle:'New battle',step:'Step',play:'Play',pause:'Pause',batchFights:'10K simulations',fighting:'Fighting',victory:'Victory',defeat:'Defeat',draw:'Draw',running:'Running...',baseCritical:'Base critical',profileManual:'Profile / manual',manual:'Manual',burst:'Burst',guard:'Guard',sustain:'Sustain',emptySlot:'Empty slot',removeRune:'Remove this rune',level:'Level',criticalRate:'Critical rate',criticalDamage:'Critical damage',structureDamage:'Structure damage',workshopBuff:'Workshop buff',bossGuard:'Boss guard',bossDamage:'Boss damage',mutation:'Mutation',recovery:'Recovery',createProfileTitle:'Create your profile',createProfileHint:'Create a profile to start. Rune inventory and battle settings are saved separately for each profile.',createProfileButton:'Create profile',configuredOpponent:'configured opponent',dealtTotal:'dealt {value} total',heal:'Heal',criticalShort:'CRIT',hpShort:'HP',attackShort:'ATK',speedShort:'SPD',critDamageShort:'CDMG',basicAttack:'Basic attack',extraStrike:'Extra strike',execute:'Execute',finalGift:'Final Gift',fighterStyle:'Fighter style',savePreset:'Save preset',removePreset:'Delete',presetHint:'Saves stats, runes, constellation, and fighter style. In 5v5, saves the whole team.',batchHint:'Run 10,000 randomized matches for a stable result.',duel1v1:'1v1',team5v5:'5v5',frontRow:'Front',backRow:'Back'},
  es:{brand:'Laboratorio de Runas Dino',battleLab:'Laboratorio de Batalla',buildFinder:'Buscador de Sets',yourDino:'Tu dinosaurio',opponent:'Oponente',runeLoadout:'Set de runas',constellation:'Constelación',clear:'Limpiar',battleArena:'Arena de Batalla',damage:'Daño',critical:'Crítico',skill:'Habilidad',healing:'Curación',actions:'Acciones',yourDamage:'Tu daño',enemyDamage:'Daño enemigo',mirror:'Copiar',optimizing:'Optimizando contra tu oponente',finderHint:'El buscador usa el oponente configurado en el Laboratorio de Batalla.',useInBattle:'Usar en batalla',chooseRune:'Elegir una runa',close:'Cerrar',newBattle:'Nueva batalla',step:'Paso',play:'Reproducir',pause:'Pausa',batchFights:'10K simulaciones',fighting:'Combatiendo',victory:'Victoria',defeat:'Derrota',draw:'Empate',running:'Calculando...',baseCritical:'Crítico base',profileManual:'Perfil / manual',manual:'Manual',burst:'Ráfaga',guard:'Defensa',sustain:'Curación',emptySlot:'Espacio vacío',removeRune:'Quitar esta runa',level:'Nivel',criticalRate:'Prob. crítica',criticalDamage:'Daño crítico',structureDamage:'Daño a estructuras',workshopBuff:'Mejora de taller',bossGuard:'Defensa de jefe',bossDamage:'Daño de jefe',mutation:'Mutación',recovery:'Recuperación',createProfileTitle:'Crea tu perfil',createProfileHint:'Crea un perfil para comenzar. El inventario de runas y los ajustes de batalla se guardan por separado.',createProfileButton:'Crear perfil',configuredOpponent:'oponente configurado',dealtTotal:'infligió {value} en total',heal:'Curación',criticalShort:'CRÍT',hpShort:'VIDA',attackShort:'ATQ',speedShort:'VEL',critDamageShort:'DCRIT',basicAttack:'Ataque básico',extraStrike:'Golpe extra',execute:'Ejecución',finalGift:'Regalo final'},
  ja:{brand:'恐竜ルーン研究所',battleLab:'バトル研究所',buildFinder:'ビルド検索',yourDino:'自分の恐竜',opponent:'対戦相手',runeLoadout:'ルーン構成',constellation:'星座',clear:'クリア',battleArena:'バトルアリーナ',damage:'ダメージ',critical:'会心',skill:'スキル',healing:'回復',actions:'行動数',yourDamage:'自分のダメージ',enemyDamage:'敵のダメージ',mirror:'コピー',optimizing:'対戦相手に合わせて最適化',finderHint:'バトル研究所で設定した対戦相手を使用します。',useInBattle:'バトルで使用',chooseRune:'ルーンを選択',close:'閉じる',newBattle:'新しいバトル',step:'1手進む',play:'再生',pause:'一時停止',batchFights:'1万回シミュレーション',fighting:'戦闘中',victory:'勝利',defeat:'敗北',draw:'引き分け',running:'計算中...',baseCritical:'基本会心',profileManual:'プロフィール / 手動',manual:'手動',burst:'瞬間火力',guard:'防御',sustain:'持久',emptySlot:'空きスロット',removeRune:'このルーンを外す',level:'レベル',criticalRate:'会心率',criticalDamage:'会心ダメージ',structureDamage:'建物ダメージ',workshopBuff:'工房強化',bossGuard:'ボス防御',bossDamage:'ボスダメージ',mutation:'突然変異',recovery:'回復力',createProfileTitle:'プロフィールを作成',createProfileHint:'開始するにはプロフィールを作成してください。ルーンとバトル設定はプロフィールごとに保存されます。',createProfileButton:'プロフィール作成',configuredOpponent:'設定した対戦相手',dealtTotal:'合計 {value} ダメージ',heal:'回復',criticalShort:'会心',hpShort:'HP',attackShort:'攻撃',speedShort:'速度',critDamageShort:'会心DMG',basicAttack:'通常攻撃',extraStrike:'追加攻撃',execute:'即死',finalGift:'最後の贈り物'},
  ko:{brand:'공룡 룬 연구소',battleLab:'전투 연구소',buildFinder:'빌드 찾기',yourDino:'내 공룡',opponent:'상대',runeLoadout:'룬 구성',constellation:'별자리',clear:'초기화',battleArena:'전투 경기장',damage:'피해',critical:'치명타',skill:'스킬',healing:'회복',actions:'행동',yourDamage:'내 피해',enemyDamage:'적 피해',mirror:'복사',optimizing:'상대에 맞춰 최적화',finderHint:'전투 연구소에서 설정한 상대를 사용합니다.',useInBattle:'전투에 사용',chooseRune:'룬 선택',close:'닫기',newBattle:'새 전투',step:'한 단계',play:'재생',pause:'일시정지',batchFights:'1만 시뮬레이션',fighting:'전투 중',victory:'승리',defeat:'패배',draw:'무승부',running:'계산 중...',baseCritical:'기본 치명타',profileManual:'프로필 / 수동',manual:'수동',burst:'폭발',guard:'방어',sustain:'지속',emptySlot:'빈 슬롯',removeRune:'이 룬 제거',level:'레벨',criticalRate:'치명타 확률',criticalDamage:'치명타 피해',structureDamage:'구조물 피해',workshopBuff:'작업장 강화',bossGuard:'보스 방어',bossDamage:'보스 피해',mutation:'돌연변이',recovery:'회복력',createProfileTitle:'프로필 만들기',createProfileHint:'시작하려면 프로필을 만드세요. 룬과 전투 설정은 프로필별로 저장됩니다.',createProfileButton:'프로필 만들기',configuredOpponent:'설정된 상대',dealtTotal:'총 {value} 피해',heal:'회복',criticalShort:'치명타',hpShort:'체력',attackShort:'공격',speedShort:'속도',critDamageShort:'치피',basicAttack:'기본 공격',extraStrike:'추가 타격',execute:'즉사',finalGift:'마지막 선물'},
  'zh-TW':{brand:'恐龍符文研究室',battleLab:'戰鬥研究室',buildFinder:'配置搜尋',yourDino:'你的恐龍',opponent:'對手',runeLoadout:'符文配置',constellation:'星座',clear:'清除',battleArena:'戰鬥競技場',damage:'傷害',critical:'暴擊',skill:'技能',healing:'治療',actions:'行動',yourDamage:'你的傷害',enemyDamage:'敵方傷害',mirror:'複製',optimizing:'針對對手最佳化',finderHint:'搜尋器會使用戰鬥研究室中設定的對手。',useInBattle:'套用至戰鬥',chooseRune:'選擇符文',close:'關閉',newBattle:'新戰鬥',step:'單步',play:'播放',pause:'暫停',batchFights:'1萬次模擬',fighting:'戰鬥中',victory:'勝利',defeat:'失敗',draw:'平手',running:'計算中...',baseCritical:'基礎暴擊',profileManual:'設定檔 / 手動',manual:'手動',burst:'爆發',guard:'防禦',sustain:'續航',emptySlot:'空欄位',removeRune:'移除此符文',level:'等級',criticalRate:'暴擊率',criticalDamage:'暴擊傷害',structureDamage:'建築傷害',workshopBuff:'工坊增益',bossGuard:'Boss 防禦',bossDamage:'Boss 傷害',mutation:'突變',recovery:'恢復',createProfileTitle:'建立設定檔',createProfileHint:'建立設定檔以開始。符文與戰鬥設定會分別儲存在各設定檔中。',createProfileButton:'建立設定檔',configuredOpponent:'已設定的對手',dealtTotal:'總共造成 {value} 傷害',heal:'治療',criticalShort:'暴擊',hpShort:'生命',attackShort:'攻擊',speedShort:'速度',critDamageShort:'暴傷',basicAttack:'普通攻擊',extraStrike:'額外打擊',execute:'處決',finalGift:'最後的贈禮',savePreset:'儲存預設',removePreset:'刪除',presetHint:'儲存數值、符文、星座與造型。5v5 會一次儲存整隊五隻。',duel1v1:'1v1',team5v5:'5v5',frontRow:'前排',backRow:'後排'}
};

const FINDER_TEXT={
  en:{optimizationScope:'Optimization',exactTarget:'Exact target',generalUse:'General use',exactOpponent:'Exact opponent',exactOpponentHint:'Uses the opponent configured in Battle Lab.',generalField:'General matchup field',generalFieldHint:'Tests burst, guard, sustain and balanced opponents at several power levels.',structureTarget:'Enemy structures',structureTargetHint:'Player-only red rune effects are excluded.',fieldScore:'Field win rate',worstMatchup:'Worst matchup'},
  es:{optimizationScope:'Optimización',exactTarget:'Objetivo exacto',generalUse:'Uso general',exactOpponent:'Oponente exacto',exactOpponentHint:'Usa el oponente configurado en el Laboratorio de Batalla.',generalField:'Campo general',generalFieldHint:'Prueba rivales de ráfaga, defensa, curación y equilibrio con varios niveles de poder.',structureTarget:'Estructuras enemigas',structureTargetHint:'Se excluyen los efectos rojos exclusivos de jugadores.',fieldScore:'Victorias generales',worstMatchup:'Peor duelo'},
  ja:{optimizationScope:'最適化',exactTarget:'指定対象',generalUse:'汎用',exactOpponent:'指定した対戦相手',exactOpponentHint:'バトル研究所で設定した相手を使用します。',generalField:'総合対戦フィールド',generalFieldHint:'複数の戦力帯で速攻・防御・回復・バランス構成を検証します。',structureTarget:'敵の建物',structureTargetHint:'プレイヤー専用の赤ルーン効果は除外されます。',fieldScore:'総合勝率',worstMatchup:'最低勝率'},
  ko:{optimizationScope:'최적화',exactTarget:'정확한 대상',generalUse:'범용',exactOpponent:'설정된 상대',exactOpponentHint:'전투 연구소에서 설정한 상대를 사용합니다.',generalField:'종합 매치업',generalFieldHint:'여러 전력대의 폭발, 방어, 회복, 균형 상대를 시험합니다.',structureTarget:'적 구조물',structureTargetHint:'플레이어 전용 빨간 룬 효과는 제외됩니다.',fieldScore:'종합 승률',worstMatchup:'최저 승률'},
  'zh-TW':{optimizationScope:'最佳化',exactTarget:'指定目標',generalUse:'通用',exactOpponent:'指定對手',exactOpponentHint:'使用戰鬥研究室中設定的對手。',generalField:'綜合對戰場',generalFieldHint:'以多個強度測試爆發、防禦、續航與平衡對手。',structureTarget:'敵方建築',structureTargetHint:'不計算僅對玩家生效的紅色符文效果。',fieldScore:'綜合勝率',worstMatchup:'最低勝率'}
};

let lang=(()=>{try{return localStorage.getItem('rune_lang_v5')||localStorage.getItem('rune_language_v4')||'en'}catch(_){return'en'}})();
if(!TEXT[lang])lang='en';
const L=()=>({...TEXT.en,...TEXT[lang],...UI_TEXT.en,...UI_TEXT[lang],...FINDER_TEXT.en,...FINDER_TEXT[lang],rarities:{...TEXT.en.rarities,...TEXT[lang].rarities}});
function T(){return {rarities:L().rarities,objectives:{pvp1v1:L().pvp,edificios:L().structure},level:L().level}}
function runeName(r){return lang==='zh-TW'&&r.zh?r.zh:lang==='es'?r.es:r.en}
function rarityName(r){return L().rarities[r]||r}
function runeIcon(r){
  const index=RUNES.indexOf(r)+1;
  return `assets/runesprite_${Math.max(0,index)}.png?v=20260920o`;
}
function nvals(s){return(s.match(/-?\d+(?:\.\d+)?/g)||[])}
function absNum(v){const x=parseFloat(v);return Number.isFinite(x)?Math.abs(x):v}
function runeDescription(rune, ld){
  if(lang==='es') return ld.es;
  const n=nvals(ld.es), L=lang;
  const byLang=(en,ja,ko,zh)=> L==='ja'?ja:L==='ko'?ko:L==='zh-TW'?zh:en;
  switch(rune.cat){
    case 'aoe': return byLang(
      `On attack, ${n[0]}% chance to deal ${n[1]}% additional skill damage to all enemies in the tile. Legendary passive: +${n[2]}% attack and +${n[3]}% health.`,
      `攻撃時、${n[0]}%の確率で同じマス内のすべての敵に${n[1]}%の追加スキルダメージ。レジェンダリーのパッシブ: 攻撃力+${n[2]}%、HP+${n[3]}%。`,
      `공격 시 ${n[0]}% 확률로 같은 칸의 모든 적에게 ${n[1]}% 추가 스킬 피해를 줍니다. 전설 패시브: 공격력 +${n[2]}%, 체력 +${n[3]}%.`,
      `攻擊時有 ${n[0]}% 機率對同一格內所有敵人造成 ${n[1]}% 額外技能傷害。傳說被動：攻擊 +${n[2]}%、生命 +${n[3]}%。`);
    case 'burst_execute':
      if(n.length>=6) return byLang(
        `On attack, ${n[0]}% chance to deal ${n[1]}% additional skill damage to the enemy unit in battle. If the enemy is below ${n[2]}% health, ${n[3]}% chance of instant death. Legendary passive: +${n[4]}% attack and +${n[5]}% health.`,
        `攻撃時、${n[0]}%の確率で戦闘中の敵ユニットに${n[1]}%の追加スキルダメージ。敵HPが${n[2]}%未満なら${n[3]}%の確率で即死。レジェンダリーのパッシブ: 攻撃力+${n[4]}%、HP+${n[5]}%。`,
        `공격 시 ${n[0]}% 확률로 전투 중인 적 유닛에게 ${n[1]}% 추가 스킬 피해를 줍니다. 적 체력이 ${n[2]}% 미만이면 ${n[3]}% 확률로 즉사합니다. 전설 패시브: 공격력 +${n[4]}%, 체력 +${n[5]}%.`,
        `攻擊時有 ${n[0]}% 機率對戰鬥中的敵方單位造成 ${n[1]}% 額外技能傷害。敵人生命低於 ${n[2]}% 時，有 ${n[3]}% 機率立即死亡。傳說被動：攻擊 +${n[4]}%、生命 +${n[5]}%。`);
      return byLang(
        `On attack, ${n[0]}% chance to deal ${n[1]}% additional skill damage to the enemy unit in battle. Legendary passive: +${n[2]}% attack and +${n[3]}% health.`,
        `攻撃時、${n[0]}%の確率で戦闘中の敵ユニットに${n[1]}%の追加スキルダメージ。レジェンダリーのパッシブ: 攻撃力+${n[2]}%、HP+${n[3]}%。`,
        `공격 시 ${n[0]}% 확률로 전투 중인 적 유닛에게 ${n[1]}% 추가 스킬 피해를 줍니다. 전설 패시브: 공격력 +${n[2]}%, 체력 +${n[3]}%.`,
        `攻擊時有 ${n[0]}% 機率對戰鬥中的敵方單位造成 ${n[1]}% 額外技能傷害。傳說被動：攻擊 +${n[2]}%、生命 +${n[3]}%。`);
    case 'lifesteal': return byLang(`On attack, ${n[0]}% chance to restore health equal to ${n[1]}% of my unit's attack.`,`攻撃時、${n[0]}%の確率で自ユニットの攻撃力${n[1]}%分のHPを回復。`,`공격 시 ${n[0]}% 확률로 내 유닛 공격력의 ${n[1]}%만큼 체력을 회복합니다.`,`攻擊時有 ${n[0]}% 機率恢復相當於我方單位攻擊力 ${n[1]}% 的生命。`);
    case 'crit_rate': return byLang(`Increases critical hit chance by ${n[0]}%.`,`クリティカル率が${n[0]}%上昇。`,`치명타 확률이 ${n[0]}% 증가합니다.`,`暴擊率提高 ${n[0]}%。`);
    case 'crit_dmg': return byLang(`Increases critical damage by ${n[0]}%.`,`クリティカルダメージが${n[0]}%上昇。`,`치명타 피해가 ${n[0]}% 증가합니다.`,`暴擊傷害提高 ${n[0]}%。`);
    case 'passive_heal': return byLang(`When attacked, ${n[0]}% chance to restore ${n[1]} health.`,`攻撃を受けた時、${n[0]}%の確率でHPを${n[1]}回復。`,`피격 시 ${n[0]}% 확률로 체력을 ${n[1]} 회복합니다.`,`受到攻擊時有 ${n[0]}% 機率恢復 ${n[1]} 點生命。`);
    case 'flat_attack': return byLang(`Increases attack power by ${n[0]}.`,`攻撃力が${n[0]}増加。`,`공격력이 ${n[0]} 증가합니다.`,`攻擊力提高 ${n[0]}。`);
    case 'pct_attack': return byLang(`Increases attack power by ${n[0]}%.`,`攻撃力が${n[0]}%増加。`,`공격력이 ${n[0]}% 증가합니다.`,`攻擊力提高 ${n[0]}%。`);
    case 'berserker': return byLang(
      `When health is below ${n[0]}%, increases attack by ${n[1]}%. When health is below ${n[2]}%, increases attack by an additional ${n[3]}%. Does not apply to buildings, and does not increase Drain Life healing.`,
      `HPが${n[0]}%未満の時、攻撃力+${n[1]}%。HPが${n[2]}%未満の時、さらに攻撃力+${n[3]}%。建物には無効。吸血回復量には加算されない。`,
      `체력이 ${n[0]}% 미만이면 공격력 +${n[1]}%. 체력이 ${n[2]}% 미만이면 추가로 공격력 +${n[3]}%. 건물에는 적용되지 않으며, 흡혈 회복량에는 포함되지 않습니다.`,
      `生命低於 ${n[0]}% 時，攻擊提高 ${n[1]}%。生命低於 ${n[2]}% 時，額外再提高 ${n[3]}%。對建築無效，且不會增加吸血回復量。`);
    case 'flat_hp': return byLang(`Increases health by ${n[0]}.`,`HPが${n[0]}増加。`,`체력이 ${n[0]} 증가합니다.`,`生命提高 ${n[0]}。`);
    case 'pct_hp': return byLang(`Increases health by ${n[0]}%.`,`HPが${n[0]}%増加。`,`체력이 ${n[0]}% 증가합니다.`,`生命提高 ${n[0]}%。`);
    case 'death_nuke': return byLang(`On death, ${n[0]}% chance to deal ${n[1]}% of my attack to the enemy unit in combat.`,`死亡時、${n[0]}%の確率で戦闘中の敵ユニットに自分の攻撃力${n[1]}%分のダメージ。`,`사망 시 ${n[0]}% 확률로 전투 중인 적 유닛에게 내 공격력의 ${n[1]}% 피해를 줍니다.`,`死亡時有 ${n[0]}% 機率對戰鬥中的敵方單位造成我方攻擊力 ${n[1]}% 的傷害。`);
    case 'death_heal_team': return byLang(`On death, ${n[0]}% chance to restore ${n[1]} health to my tribe in the same tile.`,`死亡時、${n[0]}%の確率で同じマスの部族のHPを${n[1]}回復。`,`사망 시 ${n[0]}% 확률로 같은 칸의 부족 체력을 ${n[1]} 회복합니다.`,`死亡時有 ${n[0]}% 機率為同一格內的部族恢復 ${n[1]} 點生命。`);
    case 'death_buff_team': return byLang(`On death, ${n[0]}% chance to give +${n[1]} attack to my tribe in the same tile for ${n[2]} turns.`,`死亡時、${n[0]}%の確率で同じマスの部族に${n[2]}ターンの間、攻撃力+${n[1]}。`,`사망 시 ${n[0]}% 확률로 같은 칸의 부족에게 ${n[2]}턴 동안 공격력 +${n[1]}을 부여합니다.`,`死亡時有 ${n[0]}% 機率讓同一格內的部族獲得攻擊 +${n[1]}，持續 ${n[2]} 回合。`);
    case 'group_bonus':
      if(rune.id==='unified_strike') return byLang(`With ${n[0]}+ friendly units in the same tile: +${n[1]} attack and +${n[2]} health.`,`同じマスに味方ユニットが${n[0]}体以上いる時: 攻撃力+${n[1]}、HP+${n[2]}。`,`같은 칸에 아군 유닛이 ${n[0]}기 이상이면: 공격력 +${n[1]}, 체력 +${n[2]}.`,`同一格內有 ${n[0]} 個以上我方單位時：攻擊 +${n[1]}、生命 +${n[2]}。`);
      return byLang(`While in a tile occupied by your tribe: +${n[0]} attack and +${n[1]} health.`,`自分の部族が占領しているマスでは: 攻撃力+${n[0]}、HP+${n[1]}。`,`내 부족이 점령한 칸에서는: 공격력 +${n[0]}, 체력 +${n[1]}.`,`位於你的部族佔領格時：攻擊 +${n[0]}、生命 +${n[1]}。`);
    case 'solo_bonus': return byLang(`With only 1 friendly unit in the tile: +${n[1]} attack and +${n[2]} health.`,`同じマスに自分のユニットが1体だけの時: 攻撃力+${n[1]}、HP+${n[2]}。`,`같은 칸에 내 유닛이 1기만 있으면: 공격력 +${n[1]}, 체력 +${n[2]}.`,`同一格內只有 1 個我方單位時：攻擊 +${n[1]}、生命 +${n[2]}。`);
    case 'glass_cannon': return byLang(`Reduces size, +${n[0]}% attack, -${absNum(n[1])}% maximum health.`,`サイズ縮小、攻撃力+${n[0]}%、最大HP-${absNum(n[1])}%。`,`크기 감소, 공격력 +${n[0]}%, 최대 체력 -${absNum(n[1])}%.`,`體型縮小，攻擊 +${n[0]}%，最大生命 -${absNum(n[1])}%。`);
    case 'tank_form': return byLang(`Increases size, +${n[0]}% health, -${absNum(n[1])}% attack.`,`サイズ拡大、HP+${n[0]}%、攻撃力-${absNum(n[1])}%。`,`크기 증가, 체력 +${n[0]}%, 공격력 -${absNum(n[1])}%.`,`體型增大，生命 +${n[0]}%，攻擊 -${absNum(n[1])}%。`);
    case 'snowball': return byLang(`After defeating an enemy: +${n[0]}% attack for ${n[1]} turns.`,`敵を倒した時: ${n[1]}ターンの間、攻撃力+${n[0]}%。`,`적 처치 시: ${n[1]}턴 동안 공격력 +${n[0]}%.`,`擊敗敵人後：攻擊 +${n[0]}%，持續 ${n[1]} 回合。`);
    case 'terrain': return byLang(`Next to a natural structure: +${n[0]} attack and +${n[1]} health.`,`自然構造物の隣では: 攻撃力+${n[0]}、HP+${n[1]}。`,`자연 구조물 옆에서는: 공격력 +${n[0]}, 체력 +${n[1]}.`,`靠近自然結構時：攻擊 +${n[0]}、生命 +${n[1]}。`);
    case 'dps_filler': return byLang(`Every ${n[0]}rd attack deals ${n[1]}% additional damage based on your attack.`,`${n[0]}回目ごとの攻撃で、自分の攻撃力の${n[1]}%分の追加ダメージ。`,`매 ${n[0]}번째 공격마다 내 공격력의 ${n[1]}% 추가 피해를 줍니다.`,`每第 ${n[0]} 次攻擊造成相當於自身攻擊力 ${n[1]}% 的額外傷害。`);
    case 'flat_dr': return byLang(`Reduces damage received by ${n[0]}.`,`受けるダメージを${n[0]}軽減。`,`받는 피해가 ${n[0]} 감소합니다.`,`受到的傷害降低 ${n[0]}。`);
    case 'chance_dr': return byLang(`When attacked, ${n[0]}% chance to reduce damage by ${n[1]}.`,`攻撃を受けた時、${n[0]}%の確率でダメージを${n[1]}軽減。`,`피격 시 ${n[0]}% 확률로 피해를 ${n[1]} 감소시킵니다.`,`受到攻擊時有 ${n[0]}% 機率使傷害降低 ${n[1]}。`);
    case 'shield_burst': return byLang(`Reduces damage by ${n[0]}% for ${n[1]} enemy attack(s).`,`敵の攻撃${n[1]}回の間、ダメージを${n[0]}%軽減。`,`적 공격 ${n[1]}회 동안 피해를 ${n[0]}% 감소시킵니다.`,`在接下來 ${n[1]} 次敵方攻擊中，傷害降低 ${n[0]}%。`);
    case 'building_dmg': return byLang(`Increases attack by ${n[0]}% against buildings.`,`建物への攻撃力が${n[0]}%増加。`,`건물 대상 공격력이 ${n[0]}% 증가합니다.`,`對建築的攻擊提高 ${n[0]}%。`);
    case 'structure_dr': return ld.es.includes('%') ? byLang(`Reduces damage from structures by ${n[0]}%.`,`構造物から受けるダメージを${n[0]}%軽減。`,`구조물에서 받는 피해가 ${n[0]}% 감소합니다.`,`來自結構的傷害降低 ${n[0]}%。`) : byLang(`Reduces damage from structures by ${n[0]}.`,`構造物から受けるダメージを${n[0]}軽減。`,`구조물에서 받는 피해가 ${n[0]} 감소합니다.`,`來自結構的傷害降低 ${n[0]}。`);
    case 'building_aoe': return byLang(`Every ${n[0]} attacks against buildings, deals ${n[1]}% of final damage to enemy structures within ${n[2]} tile.`,`建物への攻撃${n[0]}回ごとに、${n[2]}マス内の敵構造物へ最終ダメージの${n[1]}%を与える。`,`건물 공격 ${n[0]}회마다 ${n[2]}칸 내 적 구조물에 최종 피해의 ${n[1]}%를 줍니다.`,`每對建築攻擊 ${n[0]} 次，對 ${n[2]} 格內的敵方結構造成最終傷害的 ${n[1]}%。`);
    case 'boss_dmg': return byLang(`+${n[0]}% attack against the Boss.`,`ボスへの攻撃力+${n[0]}%。`,`보스 대상 공격력 +${n[0]}%.`,`對 Boss 攻擊 +${n[0]}%。`);
    case 'boss_dr': return byLang(`Reduces damage by ${n[0]} when the Boss attacks.`,`ボスから攻撃された時、ダメージを${n[0]}軽減。`,`보스가 공격할 때 피해를 ${n[0]} 감소시킵니다.`,`Boss 攻擊時，受到的傷害降低 ${n[0]}。`);
    default: return ld.es;
  }
}

const battleRules={criticalChance:3,criticalMultiplier:1.05,criticalBonusDamage:5};
const PVP_ROUNDS = 40;
const DAMAGE_TRIAL_ATTACKS = 20;

function id(){return'p_'+Math.random().toString(36).slice(2,10)}
const APPEARANCE_PRESETS=Object.freeze([
  {id:'classic',name:'Classic',skin:'0',pattern:'4',bodyColor:'13',bellyColor:'3',patternColor:'8'},
  {id:'astro',name:'Astro',skin:'2010',pattern:'0',bodyColor:'13',bellyColor:'3',patternColor:'8'},
  {id:'holiday',name:'Holiday',skin:'1000',pattern:'4',bodyColor:'1',bellyColor:'3',patternColor:'24'},
  {id:'skyguard',name:'Skyguard',skin:'2007',pattern:'18',bodyColor:'56',bellyColor:'10',patternColor:'30'},
  {id:'explorer',name:'Explorer',skin:'2001',pattern:'10',bodyColor:'49',bellyColor:'3',patternColor:'30'}
]);
function appearanceFromPreset(preset){
  return{skinBody:preset.skin,skinHead:preset.skin,skinLeg:preset.skin,pattern:preset.pattern,bodyColor:preset.bodyColor,bellyColor:preset.bellyColor,patternColor:preset.patternColor};
}
function defaultAppearancePreset(side='user'){return APPEARANCE_PRESETS.find(preset=>preset.id===(side==='opponent'?'holiday':'astro'))||APPEARANCE_PRESETS[0]}
function emptyAppearance(side='user'){return appearanceFromPreset(defaultAppearancePreset(side))}
function appearancePresetFor(value,side='user'){
  const candidate=value&&typeof value==='object'?value:{};
  return APPEARANCE_PRESETS.find(preset=>[candidate.skinBody,candidate.skinHead,candidate.skinLeg].every(skin=>String(skin)===preset.skin))||defaultAppearancePreset(side);
}
function normalizeAppearance(value,side='user'){
  const constrained=appearanceFromPreset(appearancePresetFor(value||emptyAppearance(side),side));
  return window.DinoRenderer?.normalizeAppearance(constrained)||constrained;
}
function emptyTeamMember(side='user'){return{base:{hp:15920,attack:1568,speed:150},slots:[],appearance:emptyAppearance(side)}}
function compactSlots(slots){
  if(!Array.isArray(slots))return[];
  return slots.map(x=>({id:Number(x?.id)||0,level:Math.max(1,Math.min(31,Number(x?.level)||1))})).filter(x=>x.id);
}
function normalizeTeamMember(value,side='user'){
  const m=value&&typeof value==='object'?value:{};
  return{
    base:{hp:Math.max(1,Number(m.base?.hp)||15920),attack:Math.max(1,Number(m.base?.attack)||1568),speed:Math.max(0,Number(m.base?.speed)||150)},
    slots:compactSlots(m.slots),
    appearance:normalizeAppearance(m.appearance,side)
  };
}
function emptyTeam(side='user'){return{members:[0,1,2,3,4].map(()=>emptyTeamMember(side))}}
function normalizeTeam(value,side='user'){return{members:[0,1,2,3,4].map(i=>normalizeTeamMember(value?.members?.[i],side))}}
function emptyBattleProfile(){return{slots:[],main:{},special:{},appearance:emptyAppearance('user'),format:'1v1',team:emptyTeam('user'),opponentTeam:emptyTeam('opponent')}}
function cloneLoadout(base,slots,appearance,side='user'){
  return{
    base:{hp:Math.max(1,Number(base?.hp)||15920),attack:Math.max(1,Number(base?.attack)||1568),speed:Math.max(0,Number(base?.speed)||0)},
    slots:compactSlots(slots),
    appearance:normalizeAppearance(appearance,side)
  };
}
function normalizeBattlePreset(value,index=0){
  const preset=value&&typeof value==='object'?value:{};
  const format=preset.format==='5v5'||preset.team?.members?'5v5':'1v1';
  const team=format==='5v5'?normalizeTeam(preset.team,'user'):undefined;
  const fallback=team?.members?.[0];
  const loadout=cloneLoadout(preset.base||fallback?.base,preset.slots||fallback?.slots,preset.appearance||fallback?.appearance,'user');
  return{
    id:String(preset.id||`preset_${index}_${Math.random().toString(36).slice(2,7)}`),name:String(preset.name||`Preset ${index+1}`).slice(0,40),
    format,
    base:loadout.base,
    slots:loadout.slots,
    main:preset.main&&typeof preset.main==='object'?{...preset.main}:{},special:preset.special&&typeof preset.special==='object'?{...preset.special}:{},
    appearance:loadout.appearance,
    team
  };
}
function emptyProfile(name='Profile 1'){
  return{id:id(),name,base:{hp:15920,attack:1568,speed:150},inventory:{},mode:'pvp',finder:{scope:'exact'},battle:emptyBattleProfile()};
}
function normalizeProfile(p){
  p=p&&typeof p==='object'?p:{};
  const savedBase=p.base||{},hasBase=[savedBase.hp,savedBase.attack??savedBase.att,savedBase.speed??savedBase.vel].some(value=>value!==''&&value!==null&&value!==undefined);
  return{
    id:p.id||id(),name:String(p.name||'Profile').slice(0,40),
    base:hasBase?{hp:savedBase.hp??'',attack:savedBase.attack??savedBase.att??'',speed:savedBase.speed??savedBase.vel??''}:{hp:15920,attack:1568,speed:150},
    inventory:p.inventory&&typeof p.inventory==='object'?p.inventory:{},mode:migrateMode(p.mode||p.objective),
    finder:{scope:p.finder?.scope==='general'?'general':'exact'},
    battle:{
      slots:Array.isArray(p.battle?.slots)?p.battle.slots.map(x=>({id:Number(x.id)||0,level:Math.max(1,Math.min(31,Number(x.level)||1))})).filter(x=>x.id):[],
      main:p.battle?.main&&typeof p.battle.main==='object'?{...p.battle.main}:{},
      special:p.battle?.special&&typeof p.battle.special==='object'?{...p.battle.special}:{},
      appearance:normalizeAppearance(p.battle?.appearance,'user'),
      format:p.battle?.format==='5v5'?'5v5':'1v1',
      team:normalizeTeam(p.battle?.team,'user'),
      opponentTeam:normalizeTeam(p.battle?.opponentTeam,'opponent')
    },
    battlePresets:Array.isArray(p.battlePresets)?p.battlePresets.slice(0,40).map(normalizeBattlePreset):[]
  };
}
const RELEASE_RESET_KEY='dino_rune_lab_release_reset_2026_08';
let data={active:null,profiles:[]},profile=null;
let rarity='all',query='',busy=false,last=null,saveTimer=null,appStarted=false;

function migrateMode(v){
  if(v==='edificios'||v==='structure')return'structure';
  return'pvp';
}
async function loadData(){
  let saved=null,migrated=false;
  try{saved=JSON.parse(localStorage.getItem('rune_profiles_v5')||'null')}catch(_){}
  if(!saved){
    try{
      const old=JSON.parse(localStorage.getItem('rune_profiles_v4')||'null');
      if(old?.profiles?.length){
        saved={
          active:old.activeId,
          profiles:old.profiles.map(p=>({
            id:p.id||id(),name:p.name||'Profile',
            base:{hp:p.base?.hp||'',attack:p.base?.att||p.base?.attack||'',speed:p.base?.vel||p.base?.speed||''},
            inventory:{},mode:migrateMode(p.mode||p.objective),battle:emptyBattleProfile()
          }))
        };
        migrated=true;
      }
    }catch(_){}
  }
  if(!saved)saved={active:null,profiles:[]};
  saved.profiles=Array.isArray(saved.profiles)?saved.profiles.map(normalizeProfile):[];

  // One-time release migration: remove player-owned rune and constellation/loadout data.
  let releaseReset=false;
  try{releaseReset=localStorage.getItem(RELEASE_RESET_KEY)==='1'}catch(_){}
  if(!releaseReset){
    for(const p of saved.profiles){p.inventory={};p.battle=emptyBattleProfile()}
    try{
      localStorage.removeItem('rune_inventory');
      localStorage.removeItem('rune_constellation');
      localStorage.removeItem('constellation_data');
      localStorage.setItem(RELEASE_RESET_KEY,'1');
    }catch(_){}
    migrated=true;
  }

  data=saved;
  profile=data.profiles.find(p=>p.id===data.active)||data.profiles[0]||null;
  data.active=profile?.id||null;
  if(migrated){try{localStorage.setItem('rune_profiles_v5',JSON.stringify(data))}catch(_){}}
}
function saveData(){
  clearTimeout(saveTimer);
  saveTimer=setTimeout(()=>{try{localStorage.setItem('rune_profiles_v5',JSON.stringify(data))}catch(_){}},100);
}
function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function levelData(r,l){return r.levels.find(x=>x.lvl===l)||r.levels[r.levels.length-1]}

function applyText(){
  const x=L();
  document.documentElement.lang=lang==='zh-TW'?'zh-Hant':lang;
  document.title=x.brand;brand.textContent=x.brand;
  document.querySelectorAll('[data-i18n]').forEach(element=>{const value=x[element.dataset.i18n];if(value)element.textContent=value});
  hpLabel.textContent=x.health;attackLabel.textContent=x.attack;speedLabel.textContent=x.speed;
  inventoryTitle.textContent=x.inventory;search.placeholder=x.search;
  newProfile.textContent=x.new;renameProfile.textContent=x.rename;deleteProfile.textContent=x.delete;
  document.querySelector('[data-mode=pvp]').textContent=x.pvp;
  document.querySelector('[data-mode=structure]').textContent=x.structure;
  document.querySelectorAll('.filter').forEach(b=>b.textContent=x.rarities[b.dataset.r]);
  calculate.textContent=busy?x.working:x.run;
  resultTitle.textContent=x.recommended;altTitle.textContent=x.other;
  modalTitle.textContent=x.profileName;modalCancel.textContent=x.cancel;modalSave.textContent=x.save;
  renderProfileSelect();renderRunes();updateStatus();updateFinderTarget();if(last)renderResults(last,false);
  if(appStarted&&$('userConstellation')){
    renderPresetMenus();renderMemberTabs('user');renderMemberTabs('opponent');
    document.querySelectorAll('.format-tab').forEach(tab=>tab.classList.toggle('active',tab.dataset.format===battleFormat));
    renderRuneSlots('user');renderRuneSlots('opponent');renderConstellation('user');renderConstellation('opponent');renderSideStats('user');renderSideStats('opponent');renderBattleInitial();
    $('battleBanner').textContent=x.ready;
    $('criticalRule').textContent=`${x.baseCritical}: ${fmt(battleRules.criticalChance)}% · ${Number(battleRules.criticalMultiplier).toFixed(2)}x`;
  }
}
function renderProfileSelect(){
  profileSelect.innerHTML=data.profiles.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('');
  if(profile)profileSelect.value=profile.id;
}
function syncProfile(){
  if(!profile)return;
  baseHp.value=profile.base?.hp??'';
  baseAttack.value=profile.base?.attack??'';
  baseSpeed.value=profile.base?.speed??'';
  profile.finder=profile.finder||{scope:'exact'};
  document.querySelectorAll('.mode').forEach(b=>b.classList.toggle('active',b.dataset.mode===profile.mode));
  last=null;results.style.display='none';
  renderProfileSelect();renderRunes();updateStatus();updateFinderTarget();
  loadProfileBattleState();
}
function updateBase(){
  profile.base={hp:baseHp.value,attack:baseAttack.value,speed:baseSpeed.value};
  saveData();updateStatus();
}
function updateFinderTarget(){
  if(!profile||!document.getElementById('scopeControl'))return;
  const x=L(),scope=profile.finder?.scope==='general'?'general':'exact',mode=profile.mode;
  document.querySelectorAll('.scope').forEach(button=>button.classList.toggle('active',button.dataset.scope===scope));
  scopeControl.hidden=mode==='structure';
  if(mode==='structure'){
    finderTargetTitle.textContent=x.structureTarget;finderTargetHint.textContent=x.structureTargetHint;
    finderTargetStats.innerHTML=`<b>${x.structure}</b>`;
  }else if(scope==='general'){
    finderTargetTitle.textContent=x.generalField;finderTargetHint.textContent=x.generalFieldHint;
    finderTargetStats.innerHTML=`<b>12</b><span>${x.generalField}</span>`;
  }else{
    const opponent=battleStats('opponent');finderTargetTitle.textContent=x.exactOpponent;finderTargetHint.textContent=x.exactOpponentHint;
    finderTargetStats.innerHTML=`<b>${fmt(opponent.hp)} ${x.hpShort}</b><span>${fmt(opponent.attack)} ${x.attackShort}</span><span>${fmt(opponent.speed)} ${x.speedShort}</span>`;
  }
}
function renderRunes(){
  const inv=profile.inventory||{},q=query.trim().toLowerCase();
  const list=RUNES.filter(r=>(rarity==='all'||r.rarity===rarity)&&(!q||r.en.toLowerCase().includes(q)||r.es.toLowerCase().includes(q)||(r.zh&&r.zh.includes(query.trim()))||r.id.includes(q)));
  runeTable.innerHTML='';
  if(!list.length){runeTable.innerHTML=`<div class="empty">${esc(L().noRunes)}</div>`;renderOwned();return}
  for(const r of list){
    const lv=inv[r.id]||'';
    const row=document.createElement('div');row.className='rune'+(lv?' owned':'');
    row.innerHTML=`<img class="rune-icon" src="${runeIcon(r)}" alt=""><div><div class="rune-name">${esc(runeName(r))}</div><div class="rune-rarity">${rarityName(r.rarity)}</div></div>
      <input class="level" type="number" min="0" max="31" placeholder="0" value="${lv}">`;
    const input=row.querySelector('input');
    input.addEventListener('input',()=>{
      let v=parseInt(input.value,10);
      if(!v||v<1){delete profile.inventory[r.id];input.value='';row.classList.remove('owned')}
      else{v=Math.min(31,v);input.value=v;profile.inventory[r.id]=v;row.classList.add('owned')}
      saveData();renderOwned();updateStatus();
    });
    runeTable.appendChild(row);
  }
  renderOwned();
}
function renderOwned(){ownedCount.textContent=`${Object.keys(profile.inventory||{}).length} ${L().owned}`}

function effect(rune,level){
  const ld=levelData(rune,level),nums=nvals(ld.es).map(Number);
  const e={id:rune.id,cat:rune.cat,...(ld.st||{})};
  if(rune.cat==='aoe'){
    e.proc=nums[0];e.skillPct=nums[1];e.legendAtk=nums[2]||0;e.legendHp=nums[3]||0;
  }else if(rune.cat==='burst_execute'){
    e.proc=nums[0];e.skillPct=nums[1];
    if(nums.length>=6){e.executeHp=nums[2];e.executeChance=nums[3];e.legendAtk=nums[4]||0;e.legendHp=nums[5]||0}
    else{e.legendAtk=nums[2]||0;e.legendHp=nums[3]||0}
  }else if(rune.cat==='lifesteal'){
    e.proc=nums[0];e.healAttackPct=nums[1];
  }else if(rune.cat==='passive_heal'){
    e.proc=+e.proc||nums[0];e.healFlat=+e.heal_flat||nums[1];
  }else if(rune.cat==='death_nuke'){
    e.proc=nums[0];e.deathPct=nums[1];
  }else if(rune.cat==='solo_bonus'){
    e.soloAttack=+e.atk_flat_cond||nums[1]||0;e.soloHp=+e.hp_flat_cond||nums[2]||0;
  }else if(rune.cat==='dps_filler'){
    e.every=nums[0];e.extraPct=nums[1];
  }else if(rune.cat==='shield_burst'){
    e.shieldPct=nums[0];e.shieldAttacks=nums[1];
  }else if(rune.cat==='building_aoe'){
    e.every=nums[0];e.structureSkillPct=+e.building_aoe_pct||nums[1]||0;
  }else if(rune.cat==='berserker'){
    e.hp_lt_pct_1=+e.hp_lt_pct_1||nums[0]||0;e.atk_pct_1=+e.atk_pct_1||nums[1]||0;
    e.hp_lt_pct_2=+e.hp_lt_pct_2||nums[2]||0;e.atk_pct_2=+e.atk_pct_2||nums[3]||0;
  }else if(rune.cat==='group_bonus'){
    if(rune.id==='unified_strike'){e.need=+e.need||nums[0]||5;e.groupAttack=+e.atk_flat_cond||nums[1]||0;e.groupHp=+e.hp_flat_cond||nums[2]||0}
    else{e.need=0;e.groupAttack=+e.atk_flat_cond||nums[0]||0;e.groupHp=+e.hp_flat_cond||nums[1]||0}
  }else if(rune.cat==='death_heal_team'){
    e.proc=+e.proc||nums[0];e.teamHealFlat=+e.heal_flat||nums[1];
  }else if(rune.cat==='death_buff_team'){
    e.proc=nums[0];e.teamAtkFlat=nums[1];e.teamAtkTurns=nums[2];
  }else if(rune.cat==='snowball'){
    e.roarPct=nums[0];e.roarTurns=nums[1];
  }
  return e;
}
function validBuild(build){
  const s=new Set(build.map(x=>x.rune.id));
  return !(s.has('compact_power')&&s.has('mammoth_power'));
}

/* Percent modifiers always reference the original base stat.
   Example: Mammoth -25% + Smite +50% = net +25% of base Attack. */
function stats(build,base,mode,allyCount=1){
  let flatAttack=0,flatHp=0,pctAttack=0,pctHp=0,critChance=battleRules.criticalChance,critDamage=battleRules.criticalBonusDamage;
  const effects=build.map(x=>x.e);
  for(const e of effects){
    flatAttack+=+e.atk_flat||0;flatHp+=+e.hp_flat||0;
    pctAttack+=+e.atk_pct||0;pctHp+=+e.hp_pct||0;
    pctAttack+=+e.legendAtk||0;pctHp+=+e.legendHp||0;
    critChance+=+e.crit_rate||0;critDamage+=+e.crit_dmg||0;

    /* Normal PvP is a single friendly dino vs a single enemy dino. */
    if(mode==='pvp'&&e.cat==='solo_bonus'){
      flatAttack+=e.soloAttack||0;flatHp+=e.soloHp||0;
    }
    if(mode==='team'){
      if(e.cat==='solo_bonus'&&allyCount===1){flatAttack+=e.soloAttack||0;flatHp+=e.soloHp||0}
      if(e.cat==='group_bonus'){
        const need=+e.need||0;
        if(need?allyCount>=need:allyCount>=1){flatAttack+=e.groupAttack||0;flatHp+=e.groupHp||0}
      }
    }
    /* Terrain and building conditions are intentionally not assumed. */
  }
  return{
    attack:Math.max(1,base.attack+flatAttack+base.attack*(pctAttack/100)),
    hp:Math.max(1,base.hp+flatHp+base.hp*(pctHp/100)),
    speed:base.speed,
    critChance:Math.min(100,Math.max(0,critChance)),
    critDamage:Math.max(0,critDamage),
    baseAttack:base.attack,
    effects
  };
}
/* Berserker is a current-HP conditional bonus on original base Attack.
   It is excluded from s.attack so Drain Life / Compact / Smite lifesteal
   keep using the static attack value. */
function berserkerBonusAttack(fighter){
  if(!fighter?.s)return 0;
  const hpPct=fighter.s.hp>0?fighter.hp/fighter.s.hp*100:0;
  let pct=0;
  for(const e of fighter.s.effects){
    if(e.cat!=='berserker')continue;
    if(hpPct<(+e.hp_lt_pct_1||0))pct+=+e.atk_pct_1||0;
    if(hpPct<(+e.hp_lt_pct_2||0))pct+=+e.atk_pct_2||0;
  }
  return (fighter.s.baseAttack||0)*pct/100;
}
function combatAttack(fighter){
  return Math.max(1,fighter.s.attack+berserkerBonusAttack(fighter));
}
function targetAttack(s,mode){
  let pct=0;
  for(const e of s.effects){
    if(mode==='structure')pct+=+e.atk_pct_building||0;
  }
  /* Structure damage bonuses are applied after the static base-stat runes. */
  return s.attack*(1+pct/100);
}
function effectTargetsMode(e,mode){
  /* Meteor and Thunderstrike are unit skills, so their red skill packets do
     not damage structures. */
  return mode!=='structure'||!e.skillPct;
}

function rng(seed){let x=seed>>>0;return()=>{x^=x<<13;x^=x>>>17;x^=x<<5;return(x>>>0)/4294967296}}
function roll(r,p){return p>0&&r()*100<p}
function critDamage(amount,s,r){
  return roll(r,s.critChance)?amount*(1+s.critDamage/100):amount;
}
function damagePacket(defender,amount,r,shieldActive){
  let dmg=amount;
  if(shieldActive?.pct)dmg*=1-shieldActive.pct/100;
  for(const e of defender.s.effects){
    if(e.dr_flat)dmg-=e.dr_flat;
    if(e.dr_chance&&e.dr_amount&&roll(r,e.dr_chance))dmg-=e.dr_amount;
  }
  dmg=Math.max(0,dmg);
  defender.hp-=dmg;
  defender.damageTaken+=dmg;
  return dmg;
}
function structurePacket(amount,s,r){
  return critDamage(amount,s,r);
}

/* A single PvP attack:
   normal hit -> proc skill hit(s) -> execute check -> Drain Life -> defender Heal.
   Skill damage gets its own crit roll and its own damage-reduction calculation. */
function attackPvp(attacker,defender,r){
  if(attacker.hp<=0||defender.hp<=0)return;
  attacker.attacks++;

  const shield=defender.shieldRemaining>0?{pct:defender.shieldPct}:null;
  const atk=combatAttack(attacker);

  let normal=critDamage(atk,attacker.s,r);
  attacker.damageDone+=damagePacket(defender,normal,r,shield);

  if(defender.hp>0){
    for(const e of attacker.s.effects){
      if(e.skillPct&&roll(r,e.proc)){
        let skill=critDamage(atk*(e.skillPct/100),attacker.s,r);
        attacker.damageDone+=damagePacket(defender,skill,r,shield);
      }
      if(e.extraPct&&attacker.attacks%(e.every||3)===0&&defender.hp>0){
        let extra=critDamage(atk*(e.extraPct/100),attacker.s,r);
        attacker.damageDone+=damagePacket(defender,extra,r,shield);
      }
    }
  }

  if(defender.hp>0){
    for(const e of attacker.s.effects){
      if(e.executeHp&&defender.hp/defender.s.hp*100<e.executeHp&&roll(r,e.executeChance)){
        attacker.damageDone+=Math.max(0,defender.hp);defender.hp=0;break;
      }
    }
  }

  for(const e of attacker.s.effects){
    if(e.healAttackPct&&roll(r,e.proc)){
      const heal=attacker.s.attack*(e.healAttackPct/100);
      const real=Math.min(heal,attacker.s.hp-attacker.hp);
      attacker.hp+=real;attacker.healing+=real;
    }
  }

  if(defender.hp>0){
    for(const e of defender.s.effects){
      if(e.healFlat&&roll(r,e.proc)){
        const real=Math.min(e.healFlat,defender.s.hp-defender.hp);
        defender.hp+=real;defender.healing+=real;
      }
    }
  }

  if(defender.shieldRemaining>0)defender.shieldRemaining--;
}
function deathPvp(dead,other,r){
  if(dead.deathDone)return;
  dead.deathDone=true;
  for(const e of dead.s.effects){
    if(e.deathPct&&roll(r,e.proc)){
      const dmg=combatAttack(dead)*(e.deathPct/100);
      dead.damageDone+=damagePacket(other,dmg,r,null);
    }
  }
}
function fighter(build,base){
  const s=stats(build,base,'pvp');
  let shieldPct=0,shieldRemaining=0;
  for(const e of s.effects)if(e.shieldPct){shieldPct=Math.max(shieldPct,e.shieldPct);shieldRemaining=Math.max(shieldRemaining,e.shieldAttacks||0)}
  return{s,hp:s.hp,attacks:0,damageDone:0,damageTaken:0,healing:0,deathDone:false,shieldPct,shieldRemaining};
}
function duel(buildA,buildB,base,r,index){
  const a=fighter(buildA,base),b=fighter(buildB,base);
  let firstA;
  if(a.s.speed>b.s.speed)firstA=true;
  else if(a.s.speed<b.s.speed)firstA=false;
  else firstA=(index&1)===0;

  let rounds=0;
  for(let i=0;i<PVP_ROUNDS;i++){
    rounds=i+1;
    const first=firstA?a:b,second=firstA?b:a;
    attackPvp(first,second,r);
    if(second.hp<=0){
      deathPvp(second,first,r);
      if(first.hp<=0)deathPvp(first,second,r);
      break;
    }
    attackPvp(second,first,r);
    if(first.hp<=0){
      deathPvp(first,second,r);
      if(second.hp<=0)deathPvp(second,first,r);
      break;
    }
  }

  let result=0;
  if(a.hp>0&&b.hp<=0)result=1;
  else if(b.hp>0&&a.hp<=0)result=-1;
  else if(a.hp<=0&&b.hp<=0)result=0;
  else{
    const af=a.hp/a.s.hp,bf=b.hp/b.s.hp;
    if(Math.abs(af-bf)<1e-9)result=0;
    else result=af>bf?1:-1;
  }
  return{result,a,b,rounds};
}

/* Damage-only objectives avoid inventing structure HP or attack.
   Each build gets the same number of attacks, and proc RNG decides average damage. */
function constellationBase(base,model=simSides.user){
  return{hp:base.hp+nodeValue(0,model.main[0]),attack:base.attack+nodeValue(1,model.main[1]),speed:base.speed};
}
function damageTrial(build,base,mode,r){
  const s=modelStats(build,base,simSides.user,mode);
  const attack=targetAttack(s,mode);
  let total=0;
  for(let n=1;n<=DAMAGE_TRIAL_ATTACKS;n++){
    total+=structurePacket(attack,s,r);
    for(const e of s.effects){
      if(effectTargetsMode(e,mode)&&e.skillPct&&roll(r,e.proc)){
        const raw=attack*(e.skillPct/100);
        total+=structurePacket(raw,s,r);
      }
      if(e.extraPct&&n%(e.every||3)===0){
        const raw=attack*(e.extraPct/100);
        total+=structurePacket(raw,s,r);
      }
      if(mode==='structure'&&e.structureSkillPct&&n%(e.every||3)===0){
        total+=structurePacket(attack*(e.structureSkillPct/100),s,r);
      }
    }
  }
  return{damage:total,s};
}

function analytic(build,base,mode){
  const adjustedBase=constellationBase(base),s=modelStats(build,base,simSides.user,mode),atk=targetAttack(s,mode);
  const critMult=1+(s.critChance/100)*(s.critDamage/100);
  let proc=0,sustain=0,mitigation=0;
  for(const e of s.effects){
    if(effectTargetsMode(e,mode)&&e.skillPct)proc+=atk*(e.proc/100)*(e.skillPct/100)*critMult;
    if(e.extraPct)proc+=atk*(e.extraPct/100)/Math.max(1,e.every||3)*critMult;
    if(mode==='structure'&&e.structureSkillPct)proc+=atk*(e.structureSkillPct/100)/Math.max(1,e.every||3)*critMult;
    if(e.healAttackPct)sustain+=s.attack*(e.proc/100)*(e.healAttackPct/100);
    if(e.healFlat)sustain+=(e.proc/100)*e.healFlat;
    if(mode!=='structure'&&e.cat==='berserker')proc+=(s.baseAttack||0)*((+e.atk_pct_1||0)/100)*critMult;
    if(e.dr_flat)mitigation+=e.dr_flat;
    if(e.dr_chance&&e.dr_amount)mitigation+=e.dr_amount*(e.dr_chance/100);
    if(e.shieldPct)mitigation+=adjustedBase.attack*(e.shieldPct/100)*(e.shieldAttacks||1)/PVP_ROUNDS;
  }
  return{
    s,
    dps:atk*critMult+proc,
    hp:s.hp,
    sustain,
    mitigation,
    balance:Math.sqrt(Math.max(1,atk*critMult+proc)*Math.max(1,s.hp+(sustain+mitigation)*PVP_ROUNDS))
  };
}

/* Screening is intentionally diverse: it keeps leaders by damage, health, balance,
   sustain, and also the best builds containing each individual rune.
   No rune receives a positive or negative preference. */
function enumerate(owned,base,mode){
  // Keep several different archetypes, but do not repeatedly sort arrays for
  // every one of the hundreds of thousands of legal combinations.
  const lens=[[],[],[],[]],keep=70,perRune=new Map();
  const combo=[];let total=0;
  function insertTop(arr,item,key,limit){
    if(arr.length===limit && item[key]<=arr[arr.length-1][key])return;
    let lo=0,hi=arr.length;
    while(lo<hi){const mid=(lo+hi)>>1;if(arr[mid][key]>=item[key])lo=mid+1;else hi=mid}
    arr.splice(lo,0,item);
    if(arr.length>limit)arr.pop();
  }
  function record(build){
    if(!validBuild(build))return;
    total++;
    const a=analytic(build,base,mode);
    const item={build:build.slice(),dps:a.dps,hp:a.hp,balance:a.balance,sustain:a.sustain,analytic:a};
    insertTop(lens[0],item,'dps',keep);insertTop(lens[1],item,'hp',keep);
    insertTop(lens[2],item,'balance',keep);insertTop(lens[3],item,'sustain',keep);
    // Preserve a few strong representatives containing every owned rune. This
    // prevents defensive or unusual runes (including Mammoth) from vanishing
    // just because they are not top raw-DPS builds.
    for(const x of build){
      let arr=perRune.get(x.rune.id);if(!arr){arr=[];perRune.set(x.rune.id,arr)}
      insertTop(arr,item,'balance',4);
    }
  }
  function rec(start){
    if(combo.length===5){record(combo);return}
    for(let i=start;i<=owned.length-(5-combo.length);i++){combo.push(owned[i]);rec(i+1);combo.pop()}
  }
  rec(0);
  const map=new Map();
  for(const arr of lens)for(const x of arr)map.set(x.build.map(y=>y.rune.id).sort().join('|'),x);
  for(const arr of perRune.values())for(const x of arr)map.set(x.build.map(y=>y.rune.id).sort().join('|'),x);
  return{candidates:[...map.values()],total};
}
const frame=()=>new Promise(res=>requestAnimationFrame(res));
function setProgress(p,label){
  progress.style.display='block';progressBar.style.width=Math.max(0,Math.min(100,p))+'%';progressLabel.textContent=label;
}

async function runPvP(pool,base){
  // Every candidate fights the exact opponent configured in Battle Lab.
  // The same seeded trials are used for every candidate so proc-heavy builds
  // do not receive a ranking advantage from a lucky qualifier sample.
  const coarse=[];
  const opponentBuild=sideBuild('opponent'),opponentBase=sideBase('opponent');
  const qualifierTrials=240;
  const qualifierSeed=randomBattleSeed(),finalSeed=randomBattleSeed();
  for(let i=0;i<pool.length;i++){
    let wins=0,ties=0,hp=0,damage=0;
    for(let n=0;n<qualifierTrials;n++){
      const d=simulateMatch(pool[i].build,base,simSides.user,opponentBuild,opponentBase,simSides.opponent,(qualifierSeed+n*0x9e3779b9)>>>0,false);
      if(d.result>0)wins++;else if(d.result===0)ties++;
      hp+=Math.max(0,d.a.hp);damage+=d.a.damageDone;
    }
    coarse.push({build:pool[i].build,rate:(wins+ties*.5)/qualifierTrials,hp:hp/qualifierTrials,damage:damage/qualifierTrials});
    if(i%12===0){setProgress(20+32*(i/Math.max(1,pool.length)),`${L().tournament} ${i+1}/${pool.length}`);await frame()}
  }
  coarse.sort((a,b)=>b.rate-a.rate||b.hp-a.hp||b.damage-a.damage);

  // Finalists receive 10,000 exact-match trials with distinct but shared seeds.
  const finalists=coarse.slice(0,Math.min(12,coarse.length));
  const final=[];
  for(let i=0;i<finalists.length;i++){
    let wins=0,ties=0,damage=0,hp=0,actions=0;
    for(let n=0;n<10000;n++){
      const d=simulateMatch(finalists[i].build,base,simSides.user,opponentBuild,opponentBase,simSides.opponent,(finalSeed+n*0x9e3779b9)>>>0,false);
      if(d.result>0)wins++;else if(d.result===0)ties++;
      damage+=d.a.damageDone;hp+=Math.max(0,d.a.hp);actions+=d.actionCount;
      if(n>0&&n%2000===0){
        const local=n/10000;
        setProgress(54+44*((i+local)/Math.max(1,finalists.length)),`${L().tournament} ${i+1}/${finalists.length}`);
        await frame();
      }
    }
    const buildStats=modelStats(finalists[i].build,base,simSides.user);
    final.push({
      build:finalists[i].build,
      score:(wins+ties*.5)/10000,
      win:wins/10000,tie:ties/10000,
      damage:damage/10000,hp:hp/10000,rounds:actions/10000,
      s:buildStats,target:'configured opponent'
    });
    setProgress(54+44*((i+1)/finalists.length),`${L().tournament} ${i+1}/${finalists.length}`);
    await frame();
  }
  final.sort((a,b)=>b.score-a.score);
  return final;
}
function generalPvpTargets(){
  const source=sideBase('opponent'),model=simSides.opponent,targets=[];
  const scales=[.82,1,1.18];
  for(let presetIndex=0;presetIndex<BATTLE_PRESETS.length;presetIndex++)for(const scale of scales){
    const preset=BATTLE_PRESETS[presetIndex];
    const slots=preset.slots.map((id,index)=>({id,level:preset.levels[index]}));
    const build=slots.map(slot=>{const rune=runeByGameId(slot.id);return{rune,level:slot.level,e:effect(rune,slot.level)}});
    targets.push({
      name:`${preset.label}-${scale}`,
      build,
      base:{hp:source.hp*scale,attack:source.attack*scale,speed:Math.max(0,source.speed+(scale-1)*24)},
      model:{slots,main:{...model.main},special:{...model.special}}
    });
  }
  return targets;
}
async function runGeneralPvP(pool,base){
  const targets=generalPvpTargets(),coarse=[],seed=randomBattleSeed(),trials=50;
  for(let i=0;i<pool.length;i++){
    let points=0,damage=0,hp=0,worst=1;
    for(let targetIndex=0;targetIndex<targets.length;targetIndex++){
      const target=targets[targetIndex];let targetPoints=0;
      for(let n=0;n<trials;n++){
        const d=simulateMatch(pool[i].build,base,simSides.user,target.build,target.base,target.model,(seed+targetIndex*0x45d9f3b+n*0x9e3779b9)>>>0,false);
        const point=d.result>0?1:(d.result===0?.5:0);points+=point;targetPoints+=point;damage+=d.a.damageDone;hp+=Math.max(0,d.a.hp);
      }
      worst=Math.min(worst,targetPoints/trials);
    }
    const count=targets.length*trials;
    coarse.push({build:pool[i].build,score:points/count,worst,damage:damage/count,hp:hp/count});
    if(i%8===0){setProgress(20+32*(i/Math.max(1,pool.length)),`${L().tournament} ${i+1}/${pool.length}`);await frame()}
  }
  coarse.sort((a,b)=>b.score-a.score||b.worst-a.worst||b.hp-a.hp||b.damage-a.damage);
  const finalists=coarse.slice(0,Math.min(12,coarse.length)),final=[],finalSeed=randomBattleSeed(),finalTrials=500;
  for(let i=0;i<finalists.length;i++){
    let points=0,wins=0,ties=0,damage=0,hp=0,actions=0,worst=1;
    for(let targetIndex=0;targetIndex<targets.length;targetIndex++){
      const target=targets[targetIndex];let targetPoints=0;
      for(let n=0;n<finalTrials;n++){
        const d=simulateMatch(finalists[i].build,base,simSides.user,target.build,target.base,target.model,(finalSeed+targetIndex*0x45d9f3b+n*0x9e3779b9)>>>0,false);
        const point=d.result>0?1:(d.result===0?.5:0);points+=point;targetPoints+=point;if(d.result>0)wins++;else if(d.result===0)ties++;
        damage+=d.a.damageDone;hp+=Math.max(0,d.a.hp);actions+=d.actionCount;
      }
      worst=Math.min(worst,targetPoints/finalTrials);
    }
    const count=targets.length*finalTrials;
    final.push({build:finalists[i].build,score:points/count,win:wins/count,tie:ties/count,worst,damage:damage/count,hp:hp/count,rounds:actions/count,s:modelStats(finalists[i].build,base,simSides.user),target:'general field'});
    setProgress(54+44*((i+1)/finalists.length),`${L().tournament} ${i+1}/${finalists.length}`);await frame();
  }
  final.sort((a,b)=>b.score-a.score||b.worst-a.worst||b.hp-a.hp);
  return final;
}
async function runDamageMode(pool,base,mode){
  /* Coarse stage uses expected damage, then every finalist gets 10,000 RNG trials. */
  pool.sort((a,b)=>b.dps-a.dps);
  const finalists=pool.slice(0,Math.min(42,pool.length)),final=[],trialSeed=randomBattleSeed();
  for(let i=0;i<finalists.length;i++){
    const rr=rng(trialSeed);
    let damage=0,lastS=null;
    for(let n=0;n<10000;n++){
      const t=damageTrial(finalists[i].build,base,mode,rr);damage+=t.damage;lastS=t.s;
    }
    final.push({build:finalists[i].build,score:damage/10000,damage:damage/10000,s:lastS});
    setProgress(28+70*((i+1)/finalists.length),`${L().simulating} ${i+1}/${finalists.length}`);
    if(i%3===2)await frame();
  }
  final.sort((a,b)=>b.score-a.score);
  return final;
}
async function calculateBest(){
  if(busy)return;
  const err=validation();if(err)return;
  busy=true;applyText();updateStatus();results.style.display='none';

  const base={hp:+profile.base.hp,attack:+profile.base.attack,speed:+profile.base.speed};
  const owned=Object.entries(profile.inventory).map(([rid,lvl])=>{
    const rune=RUNES.find(r=>r.id===rid);
    return rune?{rune,level:+lvl,e:effect(rune,+lvl)}:null;
  }).filter(Boolean);

  setProgress(5,L().checking);await frame();
  const e=enumerate(owned,base,profile.mode);
  setProgress(18,L().checking);await frame();

  let ranked;
  if(profile.mode==='pvp')ranked=profile.finder?.scope==='general'?await runGeneralPvP(e.candidates,base):await runPvP(e.candidates,base);
  else ranked=await runDamageMode(e.candidates,base,profile.mode);

  last={items:ranked.slice(0,4),mode:profile.mode,scope:profile.finder?.scope||'exact',total:e.total};
  renderResults(last,true);
  setProgress(100,L().ready);
  busy=false;applyText();updateStatus();
  setTimeout(()=>progress.style.display='none',650);
}
function validation(){
  if(!(+profile.base.hp>0&&+profile.base.attack>0&&+profile.base.speed>=0))return L().needStats;
  if(Object.keys(profile.inventory||{}).length<5)return L().needRunes;
  return'';
}
function updateStatus(){
  const statusEl=document.getElementById('calcStatus');
  const calculateEl=document.getElementById('calculate');
  const err=validation();
  statusEl.textContent=err||L().ready;
  statusEl.classList.toggle('error',!!err);
  calculateEl.disabled=!!err||busy;
  if(!busy)calculateEl.textContent=L().run;
}
function fmt(v,d=0){return Number(v).toLocaleString(undefined,{maximumFractionDigits:d,minimumFractionDigits:d})}
function fmtTime(seconds){
  if(!Number.isFinite(seconds))return'∞';
  if(seconds<60)return`${seconds.toFixed(1)}s`;
  const minutes=Math.floor(seconds/60),rest=Math.round(seconds%60);return`${minutes}m ${String(rest).padStart(2,'0')}s`;
}
function renderResults(res,scroll=true){
  if(!res?.items?.length)return;
  const best=res.items[0],mode=res.mode;
  resultTitle.textContent=L().recommended;
  if(mode==='pvp')resultNumber.textContent=`${res.scope==='general'?L().fieldScore:L().winRate}: ${(best.score*100).toFixed(1)}%`;
  else resultNumber.textContent=`${L().avgDamage}: ${fmt(best.damage)}`;
  useBuildInBattle.hidden=mode!=='pvp';

  build.innerHTML='';
  for(const p of best.build){
    const el=document.createElement('div');el.className='pick';
    el.innerHTML=`<img class="rune-icon" src="${runeIcon(p.rune)}" alt=""><div class="pick-name">${esc(runeName(p.rune))}</div>
      <div class="pick-meta">${L().level} ${p.level} · ${rarityName(p.rune.rarity)}</div>
      <div class="pick-desc">${runeDescription(p.rune,levelData(p.rune,p.level))}</div>`;
    build.appendChild(el);
  }

  let m;
  if(mode==='pvp')m=[[`${(best.score*100).toFixed(1)}%`,res.scope==='general'?L().fieldScore:L().winRate],[res.scope==='general'?`${(best.worst*100).toFixed(1)}%`:fmt(best.damage),res.scope==='general'?L().worstMatchup:L().avgDamage],[fmt(best.hp),L().hpLeft],[best.rounds.toFixed(1),L().actions]];
  else m=[[fmt(best.damage),L().avgDamage],[fmt(best.s.attack),L().finalAttack],[fmt(best.s.hp),L().finalHealth],[`${best.s.critChance.toFixed(1)}%`,L().critical]];

  metrics.innerHTML=m.map(x=>`<div class="metric"><div class="metric-value">${x[0]}</div><div class="metric-label">${x[1]}</div></div>`).join('');
  altList.innerHTML=res.items.slice(1).map((x,i)=>`<div class="alt-row">
    <div class="alt-rank">#${i+2}</div>
    <div class="alt-names">${x.build.map(p=>esc(runeName(p.rune))).join(' · ')}</div>
    <div class="alt-score">${mode==='pvp'?(x.score*100).toFixed(1)+'%':fmt(x.damage)}</div>
  </div>`).join('');
  alt.style.display=res.items.length>1?'block':'none';
  results.style.display='block';if(scroll)results.scrollIntoView({behavior:'smooth',block:'start'});
}

/* Profile UI */
profileSelect.addEventListener('change',()=>{
  data.active=profileSelect.value;profile=data.profiles.find(p=>p.id===data.active);
  saveData();syncProfile();
});
let modalMode='new';
function openModal(mode){
  modalMode=mode;
  const first=mode==='first';
  modalTitle.textContent=first?L().createProfileTitle:L().profileName;
  modalHint.hidden=!first;
  modalHint.textContent=first?L().createProfileHint:'';
  modalCancel.hidden=first;
  modalSave.textContent=first?L().createProfileButton:L().save;
  profileName.placeholder=first?L().profileName:'';
  profileName.value=mode==='rename'&&profile?profile.name:'';
  modalBg.style.display='flex';setTimeout(()=>profileName.focus(),0);
}
function closeModal(force=false){if(modalMode==='first'&&!force)return;modalBg.style.display='none';modalHint.hidden=true;modalCancel.hidden=false;modalSave.textContent=L().save}
newProfile.addEventListener('click',()=>openModal('new'));
renameProfile.addEventListener('click',()=>{if(profile)openModal('rename')});
modalCancel.addEventListener('click',()=>closeModal());
modalBg.addEventListener('click',e=>{if(e.target===modalBg)closeModal()});
modalSave.addEventListener('click',()=>{
  const name=profileName.value.trim();if(!name)return;
  const first=modalMode==='first';
  if(modalMode==='new'||first){const p=emptyProfile(name);data.profiles.push(p);profile=p;data.active=p.id}
  else if(profile)profile.name=name;
  saveData();closeModal(true);
  if(first)startApp();else syncProfile();
});
profileName.addEventListener('keydown',e=>{if(e.key==='Enter')modalSave.click();if(e.key==='Escape')closeModal()});
deleteProfile.addEventListener('click',()=>{
  if(data.profiles.length<=1){alert(L().lastProfile);return}
  if(!confirm(L().confirmDelete))return;
  data.profiles=data.profiles.filter(p=>p.id!==profile.id);profile=data.profiles[0];data.active=profile.id;
  saveData();syncProfile();
});

[baseHp,baseAttack,baseSpeed].forEach(x=>x.addEventListener('input',updateBase));
modes.addEventListener('click',e=>{
  const b=e.target.closest('.mode');if(!b)return;
  profile.mode=b.dataset.mode;saveData();syncProfile();
});
scopeControl.addEventListener('click',event=>{
  const button=event.target.closest('.scope');if(!button||busy)return;
  profile.finder=profile.finder||{};profile.finder.scope=button.dataset.scope==='general'?'general':'exact';
  last=null;results.style.display='none';saveData();updateFinderTarget();
});
filters.addEventListener('click',e=>{
  const b=e.target.closest('.filter');if(!b)return;
  rarity=b.dataset.r;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderRunes();
});
search.addEventListener('input',e=>{query=e.target.value;renderRunes()});
language.addEventListener('change',()=>{
  lang=language.value;try{localStorage.setItem('rune_lang_v5',lang)}catch(_){}
  applyText();
});
calculate.addEventListener('click',calculateBest);

/* Battle Lab ------------------------------------------------------------ */
const ASSET_ROOT='assets/';
const CONSTELLATION_TYPES=[
  {id:0,label:'health',icon:'constellation_hp_rootimage.png',max:50},
  {id:1,label:'damage',icon:'constellation_damage_rootimage.png',max:50},
  {id:2,label:'criticalRate',icon:'constellation_criticalrate_rootimage.png',max:50},
  {id:3,label:'criticalDamage',icon:'constellation_criticaldamage_rootimage.png',max:50},
  {id:4,label:'structureDamage',icon:'constellation_structuredamage_rootimage.png',max:50},
  {id:5,label:'workshopBuff',icon:'constellation_workshopbuff_rootimage.png',max:50}
];
const SPECIAL_TYPES=[
  {id:100,label:'speed',icon:'constellation_specialnode_speed_active.png'}
];
const CONSTELLATION_LEVEL_VALUES={
  0:[10,10,10,10,20,20,20,20,30,30,30,40,70,80,80,80,80,80,80,90,90,90,90,90,100,100,100,100,100,110,250,280,310,350,380,410,440,470,500,550,1060,1130,1210,1280,1360,1440,1520,1590,1720,1890],
  1:[1,1,1,1,2,2,2,2,3,3,3,4,7,8,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,25,28,31,35,38,41,44,47,50,55,106,113,121,128,136,144,152,159,172,189],
  2:[.02,.02,.02,.02,.04,.04,.04,.04,.06,.06,.06,.07,.13,.15,.15,.15,.15,.15,.15,.17,.17,.17,.17,.17,.19,.19,.19,.19,.19,.2,.46,.52,.57,.65,.7,.76,.81,.87,.93,1.02,1.96,2.09,2.24,2.37,2.52,2.66,2.81,2.94,3.18,3.5],
  3:[.07,.07,.07,.07,.14,.14,.14,.14,.2,.2,.2,.27,.47,.54,.54,.54,.54,.54,.54,.61,.61,.61,.61,.61,.68,.68,.68,.68,.68,.74,1.69,1.89,2.09,2.36,2.57,2.77,2.97,3.17,3.38,3.71,7.16,7.63,8.17,8.64,9.18,9.72,10.26,10.73,11.61,12.76],
  4:[1,1,1,1,2,2,2,2,3,3,3,4,7,8,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,25,28,31,35,38,41,44,47,50,55,106,113,121,128,136,144,152,159,172,189],
  5:[1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,5,6,7,7,8,9,9,10,10,11,35,38,40,43,45,48,50,53,57,63],
  100:[1,2,3,4]
};
const BATTLE_PRESETS=[
  {label:'manual',slots:[1,2,4,5,14],levels:[31,31,31,31,31]},
  {label:'burst',slots:[1,2,4,5,10],levels:[31,31,31,31,31]},
  {label:'guard',slots:[6,11,13,14,28],levels:[31,31,31,31,31]},
  {label:'sustain',slots:[3,6,12,14,29],levels:[31,31,31,31,31]}
];
const nodeValues=CONSTELLATION_LEVEL_VALUES;
let simSides={
  user:{slots:[],main:{},special:{},appearance:emptyAppearance('user')},
  opponent:{slots:BATTLE_PRESETS[0].slots.map((id,i)=>({id,level:BATTLE_PRESETS[0].levels[i]})),main:{},special:{},appearance:emptyAppearance('opponent')}
};
let simTeams={user:emptyTeam('user'),opponent:emptyTeam('opponent')};
let teamEdit={user:0,opponent:0};
let memberPreset={user:['manual','manual','manual','manual','manual'],opponent:['builtin:0','builtin:0','builtin:0','builtin:0','builtin:0']};
let battleFormat='1v1';
let pickerTarget=null,battleReplay=null,battleTimer=null;
const $=id=>document.getElementById(id);
function runeByGameId(id){return RUNES[Number(id)-1]||null}
function clamp(v,min,max){return Math.max(min,Math.min(max,Number(v)||0))}
function isTeamFormat(){return battleFormat==='5v5'}
function activeMember(side){return simTeams[side].members[teamEdit[side]]}
function activeSlots(side){return isTeamFormat()?activeMember(side).slots:simSides[side].slots}
function nodeValue(type,level){
  const values=nodeValues[type]||[],selected=clamp(level,0,values.length);
  return values.slice(0,selected).reduce((total,value)=>total+Number(value||0),0);
}
function sumSpecial(type,count){return (nodeValues[type]||[]).slice(0,Math.max(0,Number(count)||0)).reduce((a,b)=>a+Number(b||0),0)}
function persistUserBattle(){
  if(!profile)return;
  if(isTeamFormat())syncFormToMember('user');
  profile.battle={
    slots:simSides.user.slots.map(x=>({id:Number(x.id),level:clamp(x.level,1,31)})),
    main:{...simSides.user.main},special:{100:Number(simSides.user.special[100]||0)},
    appearance:normalizeAppearance(simSides.user.appearance,'user'),
    format:battleFormat,
    team:normalizeTeam(simTeams.user,'user'),
    opponentTeam:normalizeTeam(simTeams.opponent,'opponent')
  };
  saveData();
}
function loadProfileBattleState(){
  if(!profile)return;
  const b=profile.battle||emptyBattleProfile();
  simSides.user={slots:(b.slots||[]).map(x=>({id:Number(x.id),level:clamp(x.level,1,31)})),main:{...(b.main||{})},special:{100:Number(b.special?.[100]||0)},appearance:normalizeAppearance(b.appearance,'user')};
  battleFormat=b.format==='5v5'?'5v5':'1v1';
  simTeams.user=normalizeTeam(b.team,'user');
  simTeams.opponent=normalizeTeam(b.opponentTeam,'opponent');
  teamEdit={user:0,opponent:0};
  memberPreset={user:emptyMemberPresets('user'),opponent:emptyMemberPresets('opponent')};
  if(!simTeams.opponent.members.some(m=>m.slots.length)){
    const slots=simSides.opponent.slots.map(x=>({...x}));
    const appearance=normalizeAppearance(simSides.opponent.appearance,'opponent');
    simTeams.opponent.members=simTeams.opponent.members.map(m=>({base:{...m.base},slots:slots.map(x=>({...x})),appearance:{...appearance}}));
  }
  applyBattleFormat(false);
  if($('simUserHp')&&!isTeamFormat()){$('simUserHp').value=profile.base?.hp??'';$('simUserAttack').value=profile.base?.attack??'';$('simUserSpeed').value=profile.base?.speed??''}
  if($('userPreset'))syncPresetSelect('user');
  if($('userRuneSlots'))renderRuneSlots('user');
  if($('userConstellation'))renderConstellation('user');
  if($('userFinalStats'))renderSideStats('user');
  if($('userDinoCanvas'))renderArenaDinos();
  invalidateBattle();
}
function sideBase(side){
  const prefix=side==='user'?'simUser':'simOpponent';
  return{hp:+$(prefix+'Hp').value||1,attack:+$(prefix+'Attack').value||1,speed:+$(prefix+'Speed').value||0};
}
function sideBuild(side){return simSides[side].slots.map(slot=>{const rune=runeByGameId(slot.id);return rune?{rune,level:clamp(slot.level,1,31),e:effect(rune,clamp(slot.level,1,31))}:null}).filter(Boolean)}
function memberBuild(member){return (member.slots||[]).map(slot=>{const rune=runeByGameId(slot.id);return rune?{rune,level:clamp(slot.level,1,31),e:effect(rune,clamp(slot.level,1,31))}:null}).filter(Boolean)}
function modelStats(build,base,model,mode='pvp',allyCount=1){
  const s=stats(build,constellationBase(base,model),mode,allyCount);
  s.critChance+=nodeValue(2,model.main[2]);s.critDamage+=nodeValue(3,model.main[3]);
  s.speed+=sumSpecial(100,model.special[100]);
  s.critChance=Math.max(0,Math.min(100,s.critChance));
  s.constellation={structureDamage:nodeValue(4,model.main[4]),workshop:nodeValue(5,model.main[5])};
  return s;
}
function battleStats(side){
  if(isTeamFormat())return modelStats(memberBuild(activeMember(side)),activeMember(side).base,simSides[side],'team',5);
  return modelStats(sideBuild(side),sideBase(side),simSides[side]);
}
function renderSideStats(side){
  const s=battleStats(side),target=$(side==='user'?'userFinalStats':'opponentFinalStats');
  const x=L();target.textContent=`${fmt(s.hp)} ${x.hpShort} · ${fmt(s.attack)} ${x.attackShort} · ${fmt(s.speed)} ${x.speedShort} · ${fmt(s.critChance)}% ${x.criticalShort} · ${fmt(100+s.critDamage)}% ${x.critDamageShort}`;
  if(side==='opponent'&&$('finderTargetStats'))updateFinderTarget();
}
function renderRuneSlots(side){
  const target=$(side+'RuneSlots');target.innerHTML='';
  for(let index=0;index<5;index++){
    const slot=activeSlots(side)[index],rune=slot&&runeByGameId(slot.id),button=document.createElement('button');
    button.type='button';button.className='rune-slot'+(rune?'':' empty');button.title=rune?runeName(rune):L().chooseRune;
    if(rune)button.innerHTML=`<img src="${runeIcon(rune)}" alt="${esc(runeName(rune))}"><input class="slot-level" type="number" min="1" max="31" value="${clamp(slot.level,1,31)}" aria-label="${esc(runeName(rune))} ${L().level}">`;
    button.addEventListener('click',e=>{if(e.target.matches('input'))return;openRunePicker(side,index)});
    const input=button.querySelector('input');if(input){
      input.addEventListener('click',e=>e.stopPropagation());
      input.addEventListener('input',()=>{slot.level=clamp(input.value,1,31);if(side==='user'){persistUserBattle();markUserManual()}renderSideStats(side);invalidateBattle()});
    }
    target.appendChild(button);
  }
  renderSideStats(side);
}
function openRunePicker(side,index){pickerTarget={side,index};$('runePickerBg').style.display='flex';renderRunePicker()}
function renderRunePicker(){
  const grid=$('runePickerGrid');grid.innerHTML=`<button class="picker-item" data-rune="0"><b>${esc(L().emptySlot)}</b><span>${esc(L().removeRune)}</span></button>`;
  for(const rune of RUNES){
    const item=document.createElement('button');item.type='button';item.className='picker-item';item.dataset.rune=String(RUNES.indexOf(rune)+1);
    item.innerHTML=`<img src="${runeIcon(rune)}" alt=""><div><b>${esc(runeName(rune))}</b><span>${esc(rarityName(rune.rarity))}</span></div>`;grid.appendChild(item);
  }
}
function closePicker(){$('runePickerBg').style.display='none';pickerTarget=null}
function renderConstellation(side){
  const root=$(side+'Constellation');root.innerHTML='';
  for(const type of CONSTELLATION_TYPES){
    const node=document.createElement('div');node.className='const-node';
    node.innerHTML=`<img src="${ASSET_ROOT+type.icon}" alt=""><label>${L()[type.label]}</label><input type="number" min="0" max="${type.max}" value="${simSides[side].main[type.id]||0}">`;
    node.querySelector('input').addEventListener('input',e=>{simSides[side].main[type.id]=clamp(e.target.value,0,type.max);if(side==='user'){persistUserBattle();markUserManual()}renderSideStats(side);invalidateBattle()});root.appendChild(node);
  }
  const special=$(side+'Specials');special.innerHTML='';
  for(const type of SPECIAL_TYPES){
    const max=(nodeValues[type.id]||[]).length,count=simSides[side].special[type.id]||0,button=document.createElement('button');
    const name=L()[type.label];button.type='button';button.className='special-toggle'+(count?' active':'');button.title=`${name}: ${count}/${max}`;
    button.innerHTML=`<img src="${ASSET_ROOT+type.icon}" alt=""><span>${name} ${count}/${max}</span>`;
    button.addEventListener('click',()=>{simSides[side].special[type.id]=(count+1)%(max+1);if(side==='user'){persistUserBattle();markUserManual()}renderConstellation(side);renderSideStats(side);invalidateBattle()});special.appendChild(button);
  }
}
function slotsFromPreset(preset){return preset.slots.map((id,index)=>({id:Number(id),level:clamp(preset.levels?.[index]||31,1,31)}))}
function renderPresetMenus(){
  const previousUser=$('userPreset')?.value||'manual',previousOpponent=$('opponentPreset')?.value||'builtin:0';
  const builtins=BATTLE_PRESETS.map((preset,index)=>`<option value="builtin:${index}">${esc(L()[preset.label])}</option>`).join('');
  const custom=(profile?.battlePresets||[]).map(preset=>`<option value="custom:${esc(preset.id)}">${esc(preset.name)}${preset.format==='5v5'?' (5v5)':''}</option>`).join('');
  const customGroup=custom?`<optgroup label="Saved presets">${custom}</optgroup>`:'';
  $('userPreset').innerHTML=`<option value="manual">${esc(L().profileManual)}</option><optgroup label="Starter builds">${builtins}</optgroup>${customGroup}`;
  $('opponentPreset').innerHTML=`<optgroup label="Starter builds">${builtins}</optgroup>${customGroup}`;
  if(isTeamFormat()){syncPresetSelect('user');syncPresetSelect('opponent');return}
  $('userPreset').value=$('userPreset').querySelector(`option[value="${CSS.escape(previousUser)}"]`)?previousUser:'manual';
  $('opponentPreset').value=$('opponentPreset').querySelector(`option[value="${CSS.escape(previousOpponent)}"]`)?previousOpponent:'builtin:0';
  updatePresetButtons();
}
function updatePresetButtons(){$('deleteUserPreset').disabled=!$('userPreset').value.startsWith('custom:')}
function emptyMemberPresets(side='user'){return side==='user'?['manual','manual','manual','manual','manual']:['builtin:0','builtin:0','builtin:0','builtin:0','builtin:0']}
function rememberMemberPreset(side,value){memberPreset[side][teamEdit[side]]=value}
function syncPresetSelect(side){
  const select=$(side==='user'?'userPreset':'opponentPreset');if(!select)return;
  const value=memberPreset[side][teamEdit[side]]||(side==='user'?'manual':'builtin:0');
  select.value=select.querySelector(`option[value="${CSS.escape(value)}"]`)?value:(side==='user'?'manual':'builtin:0');
  if(side==='user')updatePresetButtons();
}
function markUserManual(){
  rememberMemberPreset('user','manual');
  if($('userPreset')){$('userPreset').value='manual';updatePresetButtons()}
}
function loadUserPreset(index=0){
  const preset=BATTLE_PRESETS[index];if(!preset)return;
  const slots=slotsFromPreset(preset);
  if(isTeamFormat()){activeMember('user').slots=slots;loadMemberToForm('user');renderMemberTabs('user');markEditingUnits('user')}
  else simSides.user.slots=slots;
  persistUserBattle();renderRuneSlots('user');rememberMemberPreset('user',`builtin:${index}`);$('userPreset').value=`builtin:${index}`;updatePresetButtons();invalidateBattle();
}
function loadOpponentPreset(index=0){
  const preset=BATTLE_PRESETS[index]||BATTLE_PRESETS[0];
  const slots=slotsFromPreset(preset);
  if(isTeamFormat()){activeMember('opponent').slots=slots;loadMemberToForm('opponent');renderMemberTabs('opponent');markEditingUnits('opponent')}
  else simSides.opponent.slots=slots;
  renderRuneSlots('opponent');rememberMemberPreset('opponent',`builtin:${index}`);$('opponentPreset').value=`builtin:${index}`;invalidateBattle();
}
function captureUserPreset(name){
  const id=`saved_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`;
  if(isTeamFormat()){
    syncFormToMember('user');
    const current=normalizeTeamMember(activeMember('user'),'user');
    return normalizeBattlePreset({id,name,format:'5v5',base:current.base,slots:current.slots,main:simSides.user.main,special:simSides.user.special,appearance:current.appearance,team:normalizeTeam(simTeams.user,'user')});
  }
  return normalizeBattlePreset({id,name,format:'1v1',base:sideBase('user'),slots:simSides.user.slots,main:simSides.user.main,special:simSides.user.special,appearance:simSides.user.appearance});
}
function applyPresetStats(side,base){
  const prefix=side==='user'?'simUser':'simOpponent';
  $(prefix+'Hp').value=base.hp;$(prefix+'Attack').value=base.attack;$(prefix+'Speed').value=base.speed;
}
function presetLoadout(preset,side='user'){return cloneLoadout(preset.base,preset.slots,preset.appearance,side)}
function applyLoadoutToActiveMember(side,loadout){
  const member=activeMember(side);
  member.base={hp:loadout.base.hp,attack:loadout.base.attack,speed:loadout.base.speed};
  member.slots=compactSlots(loadout.slots);
  member.appearance=normalizeAppearance(loadout.appearance,side);
}
function loadSavedPreset(side,presetId){
  const preset=(profile?.battlePresets||[]).find(item=>item.id===presetId);if(!preset)return;
  const loadout=presetLoadout(preset,side);
  if(isTeamFormat()){
    applyLoadoutToActiveMember(side,loadout);
    simSides[side].main={...preset.main};simSides[side].special={...preset.special};
    loadMemberToForm(side);renderConstellation(side);renderMemberTabs(side);markEditingUnits(side);
    rememberMemberPreset(side,`custom:${preset.id}`);syncPresetSelect(side);
    if(side==='user')persistUserBattle();
    invalidateBattle();return;
  }
  applyPresetStats(side,loadout.base);
  simSides[side]={slots:loadout.slots.map(x=>({...x})),main:{...preset.main},special:{...preset.special},appearance:normalizeAppearance(loadout.appearance,side)};
  if(side==='user'){profile.base={...loadout.base};baseHp.value=loadout.base.hp;baseAttack.value=loadout.base.attack;baseSpeed.value=loadout.base.speed}
  renderRuneSlots(side);renderConstellation(side);renderSideStats(side);renderArenaDinos();
  if(side==='user')persistUserBattle();
  invalidateBattle();
}
function openPresetModal(){$('presetName').value='';$('presetModalBg').style.display='flex';setTimeout(()=>$('presetName').focus(),0)}
function closePresetModal(){$('presetModalBg').style.display='none'}
function saveCurrentPreset(){
  const name=$('presetName').value.trim();if(!name)return $('presetName').focus();
  const preset=captureUserPreset(name);profile.battlePresets=profile.battlePresets||[];profile.battlePresets.push(preset);saveData();closePresetModal();rememberMemberPreset('user',`custom:${preset.id}`);renderPresetMenus();
}
function deleteCurrentPreset(){
  const value=$('userPreset').value;if(!value.startsWith('custom:'))return;
  const presetId=value.slice(7),deleted=`custom:${presetId}`,opponentUsedPreset=$('opponentPreset').value===value;
  profile.battlePresets=(profile.battlePresets||[]).filter(item=>item.id!==presetId);
  memberPreset.user=memberPreset.user.map(item=>item===deleted?'manual':item);
  memberPreset.opponent=memberPreset.opponent.map(item=>item===deleted?'builtin:0':item);
  saveData();renderPresetMenus();if(opponentUsedPreset)loadOpponentPreset(0);updatePresetButtons();
}

function memberAppearance(side,slot=teamEdit[side]){return normalizeAppearance(simTeams[side].members[slot]?.appearance||simSides[side].appearance,side)}
function activeAppearance(side){return isTeamFormat()?memberAppearance(side):normalizeAppearance(simSides[side].appearance,side)}
function activeAppearancePreset(side){return appearancePresetFor(activeAppearance(side),side)}
function renderVisualPresetPicker(side){
  const root=$(side+'VisualPresets'),name=$(side+'StyleName');if(!root||!name)return;
  const active=activeAppearancePreset(side);name.textContent=active.name;root.innerHTML='';
  for(const preset of APPEARANCE_PRESETS){
    const button=document.createElement('button');button.type='button';button.className=`visual-preset${preset.id===active.id?' active':''}`;button.dataset.visualPreset=preset.id;button.setAttribute('role','radio');button.setAttribute('aria-checked',String(preset.id===active.id));button.setAttribute('aria-label',preset.name);
    button.innerHTML=`<img src="assets/cosmetics/thumbnails/outfit/${preset.skin}.webp" alt=""><span>${esc(preset.name)}</span>`;
    button.addEventListener('click',()=>applyAppearancePreset(side,preset.id));root.appendChild(button);
  }
}
function applyAppearancePreset(side,presetId){
  const preset=APPEARANCE_PRESETS.find(item=>item.id===presetId)||defaultAppearancePreset(side);
  const appearance=normalizeAppearance(appearanceFromPreset(preset),side);
  if(isTeamFormat())activeMember(side).appearance=appearance;
  else simSides[side].appearance=appearance;
  if(side==='user'){persistUserBattle();markUserManual()}renderArenaDinos();invalidateBattle();
}
function renderArenaDinos(){
  if(window.DinoRenderer){
    if(isTeamFormat()){renderTeamDinos('user');renderTeamDinos('opponent')}
    else{window.DinoRenderer.render($('userDinoCanvas'),simSides.user.appearance);window.DinoRenderer.render($('opponentDinoCanvas'),simSides.opponent.appearance)}
  }
  renderVisualPresetPicker('user');renderVisualPresetPicker('opponent');
}

const TEAM_ACTION_CAP=400;
function teamLiveAttack(f){return Math.max(1,combatAttack(f)+(f.giftAttack||0)+(f.s.baseAttack||0)*((f.roarPct||0)/100))}
function teamLifestealAttack(f){return Math.max(1,f.s.attack+(f.giftAttack||0)+(f.s.baseAttack||0)*((f.roarPct||0)/100))}
function createTeamFighter(side,slot,member,model){
  const build=memberBuild(member),base={hp:+member.base.hp||1,attack:+member.base.attack||1,speed:+member.base.speed||0};
  const s=modelStats(build,base,model,'team',5);
  let shieldPct=0,shieldRemaining=0;
  for(const e of s.effects)if(e.shieldPct){shieldPct=Math.max(shieldPct,e.shieldPct);shieldRemaining=Math.max(shieldRemaining,e.shieldAttacks||0)}
  return{side,slot,build,base,model,s,hp:s.hp,attacks:0,damageDone:0,healing:0,deathDone:false,shieldPct,shieldRemaining,giftAttack:0,giftTurns:0,roarPct:0,roarTurns:0};
}
function refreshTeamStats(team){
  const n=team.filter(f=>f.hp>0).length;
  for(const f of team){
    if(f.hp<=0)continue;
    const oldMax=f.s.hp,oldHp=f.hp;
    f.s=modelStats(f.build,f.base,f.model,'team',Math.max(1,n));
    f.hp=Math.max(0,Math.min(f.s.hp,oldHp+(f.s.hp-oldMax)));
  }
}
function teamTargetPool(team){
  const front=team.filter(f=>f.hp>0&&f.slot<2);
  return front.length?front:team.filter(f=>f.hp>0);
}
function pickTeamTarget(team,r){
  const pool=teamTargetPool(team);
  if(!pool.length)return null;
  return pool[Math.floor(r()*pool.length)]||pool[0];
}
function pickTeamActor(team){
  const live=team.filter(f=>f.hp>0);
  if(!live.length)return null;
  live.sort((a,b)=>a.attacks-b.attacks||b.s.speed-a.s.speed||a.slot-b.slot);
  return live[0];
}
function snapshotTeamHp(userTeam,oppTeam){return{user:userTeam.map(f=>Math.max(0,f.hp)),opponent:oppTeam.map(f=>Math.max(0,f.hp))}}
function teamUnitName(f){return `#${f.slot+1} ${f.slot<2?L().frontRow:L().backRow}`}
function applyTeamDeaths(deadList,killer,userTeam,oppTeam,r,event){
  let changed=false;
  for(const dead of deadList){
    if(!dead||dead.hp>0||dead.deathDone)continue;
    dead.deathDone=true;changed=true;
    const allies=dead.side==='user'?userTeam:oppTeam;
    for(const e of dead.s.effects){
      if(e.deathPct&&roll(r,e.proc)&&killer.hp>0){
        const dealt=simPacket(killer,teamLiveAttack(dead)*(e.deathPct/100),r),amount=dealt.value;
        dead.damageDone+=amount;event.counterDamage=(event.counterDamage||0)+amount;
        event.packets.push({label:L().finalGift,kind:'skill',effect:'final-gift',targetSide:killer.side,targetSlot:killer.slot,amount,raw:dealt.raw,shielded:dealt.shielded,reduced:dealt.reduced,critical:false});
      }
      if(e.teamHealFlat&&roll(r,e.proc)){
        for(const ally of allies){
          if(ally===dead||ally.hp<=0)continue;
          const value=Math.max(0,Math.min(ally.s.hp-ally.hp,e.teamHealFlat));
          if(value<=0)continue;ally.hp+=value;ally.healing+=value;event.heals.push({side:ally.side,slot:ally.slot,amount:value,label:L().heal});
        }
      }
      if(e.teamAtkFlat&&roll(r,e.proc)){
        for(const ally of allies){
          if(ally===dead||ally.hp<=0)continue;
          ally.giftAttack=(ally.giftAttack||0)+e.teamAtkFlat;
          ally.giftTurns=Math.max(ally.giftTurns||0,e.teamAtkTurns||1);
        }
      }
    }
  }
  if(changed){refreshTeamStats(userTeam);refreshTeamStats(oppTeam)}
}
function teamAction(attacker,defender,enemies,allies,userTeam,oppTeam,r){
  attacker.attacks++;
  let damage=0,healing=0,triggers=[],packets=[],heals=[];
  const addPacket=(target,label,kind,hit,effect='')=>{
    const dealt=simPacket(target,hit.amount,r);damage+=dealt.value;
    packets.push({label,kind,effect,targetSide:target.side,targetSlot:target.slot,amount:dealt.value,raw:dealt.raw,shielded:dealt.shielded,reduced:dealt.reduced,critical:!!hit.crit});
    return dealt.value;
  };
  const addHeal=(fighter,requested,label)=>{const value=Math.max(0,Math.min(fighter.s.hp-fighter.hp,requested));if(value<=0)return 0;fighter.hp+=value;fighter.healing+=value;heals.push({side:fighter.side,slot:fighter.slot,amount:value,label});triggers.push(label);return value};
  const atk=teamLiveAttack(attacker);
  const normal=simCrit(atk,attacker.s,r);addPacket(defender,L().basicAttack,'normal',normal);if(normal.crit)triggers.push(L().critical);
  if(defender.hp>0)for(const e of attacker.s.effects){
    if(e.skillPct&&e.cat!=='aoe'&&roll(r,e.proc)){const hit=simCrit(atk*e.skillPct/100,attacker.s,r),rune=RUNES.find(item=>item.id===e.id),name=rune?runeName(rune):L().skill;addPacket(defender,name,'skill',hit,e.id);triggers.push(name)}
    if(e.extraPct&&attacker.attacks%(e.every||3)===0&&defender.hp>0){const hit=simCrit(atk*e.extraPct/100,attacker.s,r);addPacket(defender,L().extraStrike,'skill',hit,'extra-strike')}
  }
  if(defender.hp>0)for(const e of attacker.s.effects)if(e.executeHp&&defender.hp/defender.s.hp*100<e.executeHp&&roll(r,e.executeChance)){const amount=defender.hp;damage+=amount;defender.hp=0;packets.push({label:L().execute,kind:'execute',targetSide:defender.side,targetSlot:defender.slot,amount,raw:amount,shielded:0,reduced:0,critical:false});triggers.push(L().execute);break}
  for(const e of attacker.s.effects){
    if(e.cat==='aoe'&&e.skillPct&&roll(r,e.proc)){
      const rune=RUNES.find(item=>item.id===e.id),name=rune?runeName(rune):L().skill;
      for(const enemy of enemies.filter(f=>f.hp>0)){const hit=simCrit(atk*e.skillPct/100,attacker.s,r);addPacket(enemy,name,'skill',hit,e.id==='meteor'?'meteor':e.id)}
      triggers.push(name);
    }
  }
  for(const e of attacker.s.effects)if(e.healAttackPct&&roll(r,e.proc)){const rune=RUNES.find(item=>item.id===e.id),value=addHeal(attacker,teamLifestealAttack(attacker)*e.healAttackPct/100,rune?runeName(rune):L().healing);healing+=value}
  const hitIds=new Set(packets.map(p=>p.targetSide+':'+p.targetSlot));
  for(const enemy of enemies){
    if(enemy.hp>0&&hitIds.has(enemy.side+':'+enemy.slot)){
      for(const e of enemy.s.effects)if(e.healFlat&&roll(r,e.proc)){const rune=RUNES.find(item=>item.id===e.id);addHeal(enemy,e.healFlat,rune?runeName(rune):L().healing)}
    }
    if(hitIds.has(enemy.side+':'+enemy.slot)&&enemy.shieldRemaining>0)enemy.shieldRemaining--;
  }
  attacker.damageDone+=damage;
  const event={actor:attacker.side,actorSlot:attacker.slot,targetSlot:defender.slot,damage,healing,heals,triggers,packets,hp:null};
  const died=[defender,...enemies].filter((f,i,arr)=>arr.indexOf(f)===i&&f.hp<=0&&!f.deathDone);
  applyTeamDeaths(died,attacker,userTeam,oppTeam,r,event);
  if(died.length){
    for(const e of attacker.s.effects)if(e.roarPct){attacker.roarPct=(attacker.roarPct||0)+e.roarPct;attacker.roarTurns=Math.max(attacker.roarTurns||0,e.roarTurns||1)}
  }
  if(attacker.giftTurns>0){attacker.giftTurns--;if(attacker.giftTurns<=0)attacker.giftAttack=0}
  if(attacker.roarTurns>0){attacker.roarTurns--;if(attacker.roarTurns<=0)attacker.roarPct=0}
  event.hp=snapshotTeamHp(userTeam,oppTeam);
  return event;
}
function simulateTeamMatch(seed,record=true){
  const r=rng(seed>>>0);
  const userTeam=simTeams.user.members.map((member,slot)=>createTeamFighter('user',slot,member,simSides.user));
  const oppTeam=simTeams.opponent.members.map((member,slot)=>createTeamFighter('opponent',slot,member,simSides.opponent));
  refreshTeamStats(userTeam);refreshTeamStats(oppTeam);
  const livingFast=[...userTeam,...oppTeam].filter(f=>f.hp>0).sort((a,b)=>b.s.speed-a.s.speed||a.slot-b.slot);
  let firstSide=livingFast[0]?.side||'user';
  if(livingFast.length>=2&&livingFast[0].s.speed===livingFast[1].s.speed&&livingFast[0].side!==livingFast[1].side&&r()<.5)firstSide=firstSide==='user'?'opponent':'user';
  const events=[];let turnSide=firstSide;
  for(let action=0;action<TEAM_ACTION_CAP;action++){
    const userLive=userTeam.some(f=>f.hp>0),oppLive=oppTeam.some(f=>f.hp>0);
    if(!userLive||!oppLive)break;
    const team=turnSide==='user'?userTeam:oppTeam,enemies=turnSide==='user'?oppTeam:userTeam;
    const attacker=pickTeamActor(team),defender=pickTeamTarget(enemies,r);
    if(!attacker||!defender)break;
    const event=teamAction(attacker,defender,enemies,team,userTeam,oppTeam,r);
    if(record)events.push(event);
    turnSide=turnSide==='user'?'opponent':'user';
  }
  const userLive=userTeam.filter(f=>f.hp>0),oppLive=oppTeam.filter(f=>f.hp>0);
  const result=userLive.length&&!oppLive.length?1:!userLive.length&&oppLive.length?-1:0;
  const a={hp:userTeam.reduce((n,f)=>n+Math.max(0,f.hp),0),s:{hp:userTeam.reduce((n,f)=>n+f.s.hp,0)},damageDone:userTeam.reduce((n,f)=>n+f.damageDone,0)};
  const b={hp:oppTeam.reduce((n,f)=>n+Math.max(0,f.hp),0),s:{hp:oppTeam.reduce((n,f)=>n+f.s.hp,0)},damageDone:oppTeam.reduce((n,f)=>n+f.damageDone,0)};
  return{kind:'team',a,b,events,result,actionCount:events.length,userTeam,oppTeam};
}
function syncFormToMember(side){
  if(!$(side==='user'?'simUserHp':'simOpponentHp'))return;
  const member=activeMember(side);
  member.base=sideBase(side);
  const slots=activeSlots(side);
  $(side+'RuneSlots')?.querySelectorAll('.rune-slot').forEach((button,index)=>{
    const input=button.querySelector('.slot-level');
    if(!input||!slots[index])return;
    slots[index].level=clamp(input.value,1,31);
  });
}
function loadMemberToForm(side){
  const prefix=side==='user'?'simUser':'simOpponent',member=activeMember(side);
  member.appearance=normalizeAppearance(member.appearance,side);
  $(prefix+'Hp').value=member.base.hp;$(prefix+'Attack').value=member.base.attack;$(prefix+'Speed').value=member.base.speed;
  renderRuneSlots(side);renderSideStats(side);renderVisualPresetPicker(side);
}
function renderMemberTabs(side){
  const root=$(side+'MemberTabs');if(!root)return;root.innerHTML='';
  for(let i=0;i<5;i++){
    const button=document.createElement('button');button.type='button';button.className='member-tab'+(teamEdit[side]===i?' active':'');
    button.innerHTML=`${i+1}<small>${i<2?L().frontRow:L().backRow}</small>`;
    button.addEventListener('click',()=>{if(isTeamFormat())syncFormToMember(side);teamEdit[side]=i;if(isTeamFormat())loadMemberToForm(side);renderMemberTabs(side);syncPresetSelect(side);markEditingUnits(side)});
    root.appendChild(button);
  }
}
function markEditingUnits(side){
  const root=$(side+'TeamRoster');if(!root)return;
  root.querySelectorAll('.team-unit').forEach(unit=>unit.classList.toggle('editing',+unit.dataset.slot===teamEdit[side]));
}
function renderTeamDinos(side){
  if(!window.DinoRenderer)return;
  const root=$(side+'TeamRoster');if(!root)return;
  root.querySelectorAll('.team-dino-canvas').forEach(canvas=>window.DinoRenderer.render(canvas,memberAppearance(side,+canvas.dataset.slot)));
}
function ensureTeamRoster(side){
  const root=$(side+'TeamRoster');if(!root)return;
  if(root.dataset.built==='fx1'){markEditingUnits(side);return}
  root.innerHTML='';
  const rows=[[0,1],[2,3,4]];
  rows.forEach((slots,rowIndex)=>{
    const row=document.createElement('div');row.className='team-row '+(rowIndex?'back':'front');
    for(const slot of slots){
      const unit=document.createElement('div');
      unit.className='team-unit '+(slot<2?'front':'back');
      unit.dataset.slot=String(slot);
      unit.innerHTML=`<canvas class="team-dino-canvas" width="260" height="190" data-side="${side}" data-slot="${slot}" role="img" aria-label="${side} dinosaur ${slot+1}"></canvas><div class="unit-id">#${slot+1} ${slot<2?L().frontRow:L().backRow}</div><div class="hp-track"><div class="hp-fill"></div></div><div class="hp-text"></div><div class="damage-stack" aria-hidden="true"></div>`;
      row.appendChild(unit);
    }
    root.appendChild(row);
  });
  root.dataset.built='fx1';
  renderTeamDinos(side);
  markEditingUnits(side);
}
function renderTeamRoster(side,hpList,maxList,actingSlot=-1){
  ensureTeamRoster(side);
  const root=$(side+'TeamRoster');if(!root)return;
  root.querySelectorAll('.team-unit').forEach(unit=>{
    const slot=+unit.dataset.slot;
    const hp=hpList?hpList[slot]:maxList[slot];
    const max=maxList[slot]||1;
    unit.classList.toggle('dead',hp<=0);
    unit.classList.toggle('acting',actingSlot===slot);
    unit.classList.toggle('editing',slot===teamEdit[side]);
    const id=unit.querySelector('.unit-id');if(id)id.textContent=`#${slot+1} ${slot<2?L().frontRow:L().backRow}`;
    const fill=unit.querySelector('.hp-fill');if(fill)fill.style.width=`${Math.max(0,hp/max*100)}%`;
    const text=unit.querySelector('.hp-text');if(text)text.textContent=`${fmt(Math.max(0,hp))} / ${fmt(max)}`;
  });
}
function previewTeamMax(side){
  return simTeams[side].members.map((member,slot)=>createTeamFighter(side,slot,member,simSides[side]).s.hp);
}
function applyBattleFormat(persist=true){
  if(isTeamFormat()&&simTeams.user.members.every(m=>!(m.slots||[]).length)&&simSides.user.slots.length){
    const slots=simSides.user.slots.map(x=>({...x})),base=profile?.base||{hp:15920,attack:1568,speed:150};
    const appearance=normalizeAppearance(simSides.user.appearance,'user');
    simTeams.user.members=simTeams.user.members.map(()=>({base:{hp:+base.hp||15920,attack:+base.attack||1568,speed:+base.speed||150},slots:slots.map(x=>({...x})),appearance:{...appearance}}));
  }
  if(isTeamFormat()&&simTeams.opponent.members.every(m=>!(m.slots||[]).length)&&simSides.opponent.slots.length){
    const slots=simSides.opponent.slots.map(x=>({...x}));
    const appearance=normalizeAppearance(simSides.opponent.appearance,'opponent');
    simTeams.opponent.members=simTeams.opponent.members.map(m=>({base:{...m.base},slots:slots.map(x=>({...x})),appearance:{...appearance}}));
  }
  document.body.dataset.format=battleFormat;
  document.querySelectorAll('.format-tab').forEach(tab=>tab.classList.toggle('active',tab.dataset.format===battleFormat));
  if($('teamStage'))$('teamStage').hidden=!isTeamFormat();
  renderMemberTabs('user');renderMemberTabs('opponent');
  if(isTeamFormat()){loadMemberToForm('user');loadMemberToForm('opponent');syncPresetSelect('user');syncPresetSelect('opponent')}
  else if($('simUserHp')&&profile){$('simUserHp').value=profile.base?.hp??'';$('simUserAttack').value=profile.base?.attack??'';$('simUserSpeed').value=profile.base?.speed??'';renderRuneSlots('user');renderRuneSlots('opponent');renderVisualPresetPicker('user');renderVisualPresetPicker('opponent')}
  if(persist)persistUserBattle();
}
function initializeBattleData(){
  $('criticalRule').textContent=`${L().baseCritical}: ${fmt(battleRules.criticalChance)}% · ${Number(battleRules.criticalMultiplier).toFixed(2)}x`;
  renderPresetMenus();
  $('userPreset').value='manual';
  renderRuneSlots('user');renderConstellation('user');renderConstellation('opponent');renderSideStats('user');updateStatus();resetBattleModel();
}
function createSimFighter(side,build=sideBuild(side),base=sideBase(side),model=simSides[side]){
  const s=modelStats(build,base,model);let shieldPct=0,shieldRemaining=0;
  for(const e of s.effects)if(e.shieldPct){shieldPct=Math.max(shieldPct,e.shieldPct);shieldRemaining=Math.max(shieldRemaining,e.shieldAttacks||0)}
  return{side,s,hp:s.hp,attacks:0,damageDone:0,healing:0,deathDone:false,shieldPct,shieldRemaining};
}
function simCrit(amount,s,r){const crit=roll(r,s.critChance);return{amount:crit?amount*(1+s.critDamage/100):amount,crit}}
function simPacket(defender,amount,r){
  const raw=Math.max(0,amount);let value=raw,shielded=0,reduced=0;if(defender.shieldRemaining>0){const next=value*(1-defender.shieldPct/100);shielded=value-next;value=next}
  for(const e of defender.s.effects){if(e.dr_flat)value-=e.dr_flat;if(e.dr_chance&&e.dr_amount&&roll(r,e.dr_chance))value-=e.dr_amount}
  value=Math.max(0,value);reduced=Math.max(0,raw-shielded-value);defender.hp=Math.max(0,defender.hp-value);return{value,raw,shielded,reduced};
}
function simAction(attacker,defender,r){
  attacker.attacks++;let damage=0,healing=0,triggers=[],packets=[],heals=[];
  const addPacket=(label,kind,hit,effect='')=>{const dealt=simPacket(defender,hit.amount,r);damage+=dealt.value;packets.push({label,kind,effect,targetSide:defender.side,amount:dealt.value,raw:dealt.raw,shielded:dealt.shielded,reduced:dealt.reduced,critical:!!hit.crit});return dealt.value};
  const addHeal=(fighter,requested,label)=>{const value=Math.max(0,Math.min(fighter.s.hp-fighter.hp,requested));if(value<=0)return 0;fighter.hp+=value;fighter.healing+=value;heals.push({side:fighter.side,amount:value,label});triggers.push(label);return value};
  const atk=combatAttack(attacker);
  const normal=simCrit(atk,attacker.s,r);addPacket(L().basicAttack,'normal',normal);if(normal.crit)triggers.push(L().critical);
  if(defender.hp>0)for(const e of attacker.s.effects){
    if(e.skillPct&&roll(r,e.proc)){const hit=simCrit(atk*e.skillPct/100,attacker.s,r),rune=runeByGameId(RUNES.findIndex(x=>x.id===e.id)+1),name=rune?runeName(rune):L().skill;addPacket(name,'skill',hit,e.id);triggers.push(`${name}${hit.crit?' critical':''}`)}
    if(e.extraPct&&attacker.attacks%(e.every||3)===0&&defender.hp>0){const hit=simCrit(atk*e.extraPct/100,attacker.s,r);addPacket(L().extraStrike,'skill',hit,'extra-strike');triggers.push(L().extraStrike)}
  }
  if(defender.hp>0)for(const e of attacker.s.effects)if(e.executeHp&&defender.hp/defender.s.hp*100<e.executeHp&&roll(r,e.executeChance)){const amount=defender.hp;damage+=amount;defender.hp=0;packets.push({label:L().execute,kind:'execute',targetSide:defender.side,amount,raw:amount,shielded:0,reduced:0,critical:false});triggers.push(L().execute);break}
  for(const e of attacker.s.effects)if(e.healAttackPct&&roll(r,e.proc)){const rune=RUNES.find(item=>item.id===e.id),value=addHeal(attacker,attacker.s.attack*e.healAttackPct/100,rune?runeName(rune):L().healing);healing+=value}
  if(defender.hp>0)for(const e of defender.s.effects)if(e.healFlat&&roll(r,e.proc)){const rune=RUNES.find(item=>item.id===e.id);addHeal(defender,e.healFlat,rune?runeName(rune):L().healing)}
  if(defender.shieldRemaining>0)defender.shieldRemaining--;attacker.damageDone+=damage;
  return{actor:attacker.side,damage,healing,heals,triggers,packets,aHp:attacker.side==='user'?attacker.hp:defender.hp,bHp:attacker.side==='user'?defender.hp:attacker.hp};
}
function simDeath(dead,other,r,event){
  if(dead.deathDone)return;dead.deathDone=true;
  for(const e of dead.s.effects)if(e.deathPct&&roll(r,e.proc)){const dealt=simPacket(other,combatAttack(dead)*e.deathPct/100,r),amount=dealt.value;dead.damageDone+=amount;event.counterDamage=(event.counterDamage||0)+amount;event.triggers.push(L().finalGift);event.packets.push({label:L().finalGift,kind:'skill',effect:'final-gift',targetSide:other.side,amount,raw:dealt.raw,shielded:dealt.shielded,reduced:dealt.reduced,critical:false})}
  event.aHp=dead.side==='user'?dead.hp:other.hp;event.bHp=dead.side==='user'?other.hp:dead.hp;
}
function simulateMatch(userBuild,userBase,userModel,opponentBuild,opponentBase,opponentModel,seed,record=true){
  const r=rng(seed>>>0),a=createSimFighter('user',userBuild,userBase,userModel),b=createSimFighter('opponent',opponentBuild,opponentBase,opponentModel),events=[];let first=a.s.speed>=b.s.speed?a:b,second=first===a?b:a;
  if(a.s.speed===b.s.speed&&r()<.5){first=b;second=a}
  for(let action=0;action<80&&a.hp>0&&b.hp>0;action++){
    const attacker=action%2===0?first:second,defender=attacker===a?b:a;if(attacker.hp<=0||defender.hp<=0)break;
    const event=simAction(attacker,defender,r);if(defender.hp<=0)simDeath(defender,attacker,r,event);if(record)events.push(event);
  }
  let result=a.hp>0&&b.hp<=0?1:b.hp>0&&a.hp<=0?-1:(a.hp/a.s.hp>b.hp/b.s.hp?1:a.hp/a.s.hp<b.hp/b.s.hp?-1:0);
  return{a,b,events,result,actionCount:events.length||a.attacks+b.attacks};
}
function simulateBattle(seed,record=true){return simulateMatch(sideBuild('user'),sideBase('user'),simSides.user,sideBuild('opponent'),sideBase('opponent'),simSides.opponent,seed,record)}
function randomBattleSeed(){
  if(globalThis.crypto?.getRandomValues){const value=new Uint32Array(1);crypto.getRandomValues(value);return value[0]||1}
  return((Date.now()^(Math.random()*0xffffffff))>>>0)||1;
}
function playbackDelay(){return Math.max(225,Math.round(900/(Number($('battleSpeed').value)||1)))}
function clearDamageStacks(){$('userDamageStack').innerHTML='';$('opponentDamageStack').innerHTML='';document.querySelectorAll('.team-unit .damage-stack').forEach(stack=>stack.innerHTML='');document.querySelectorAll('.skill-effect').forEach(effect=>effect.remove())}
function invalidateBattle(){clearInterval(battleTimer);battleTimer=null;clearDamageStacks();battleReplay=null;$('battleBanner').textContent=L().ready;renderBattleInitial()}
function renderBattleInitial(){
  clearDamageStacks();$('simTurns').textContent='0';$('simUserDamage').textContent='0';$('simOpponentDamage').textContent='0';$('battleLog').innerHTML='';
  if(isTeamFormat()){
    const userMax=previewTeamMax('user'),oppMax=previewTeamMax('opponent');
    renderTeamRoster('user',userMax,userMax);renderTeamRoster('opponent',oppMax,oppMax);
    renderArenaDinos();
    return;
  }
  renderArenaDinos();
  const a=battleStats('user'),b=battleStats('opponent');
  $('userHpFill').style.width='100%';$('opponentHpFill').style.width='100%';$('userHpText').textContent=`${fmt(a.hp)} / ${fmt(a.hp)}`;$('opponentHpText').textContent=`${fmt(b.hp)} / ${fmt(b.hp)}`;
}
function resetBattleModel(){
  clearInterval(battleTimer);battleTimer=null;clearDamageStacks();const seed=randomBattleSeed();
  if(isTeamFormat())syncFormToMember('user'),syncFormToMember('opponent');
  battleReplay={...(isTeamFormat()?simulateTeamMatch(seed,true):simulateBattle(seed,true)),seed,index:0,userDamage:0,opponentDamage:0};
  $('arenaStage').dataset.battleSeed=String(seed);
  $('battleBanner').textContent=L().ready;renderBattleInitial();
}
function teamUnitEl(side,slot){return $(side+'TeamRoster')?.querySelector(`.team-unit[data-slot="${slot}"]`)}
function animateCombat(event){
  if(isTeamFormat()||battleReplay?.kind==='team'){
    document.querySelectorAll('.team-unit.attacking,.team-unit.hit').forEach(el=>el.classList.remove('attacking','hit'));
    const actor=teamUnitEl(event.actor,event.actorSlot);
    if(actor){actor.classList.add('attacking');setTimeout(()=>actor.classList.remove('attacking'),190)}
    const groups=new Map();
    const addPacket=(side,slot,packet)=>{
      if(side==null||slot==null)return;
      const key=side+':'+slot;
      if(!groups.has(key))groups.set(key,{side,slot,packets:[]});
      groups.get(key).packets.push(packet);
    };
    for(const packet of event.packets||[])addPacket(packet.targetSide||(event.actor==='user'?'opponent':'user'),packet.targetSlot??event.targetSlot,packet);
    for(const heal of event.heals||[])addPacket(heal.side,heal.slot,{label:heal.label,kind:'heal',amount:heal.amount,critical:false});
    for(const group of groups.values()){
      const target=teamUnitEl(group.side,group.slot);if(!target)continue;
      target.classList.remove('hit');void target.offsetWidth;target.classList.add('hit');
      setTimeout(()=>target.classList.remove('hit'),230);
      renderDamageStack(target,group.packets);
    }
    return;
  }
  const actor=$(event.actor+'Combatant');if(!actor)return;actor.classList.add('attacking');setTimeout(()=>actor.classList.remove('attacking'),190);
  for(const side of ['user','opponent']){
    const packets=event.packets.filter(packet=>(packet.targetSide|| (event.actor==='user'?'opponent':'user'))===side);if(!packets.length)continue;
    const target=$(side+'Combatant');target.classList.remove('hit');void target.offsetWidth;target.classList.add('hit');setTimeout(()=>target.classList.remove('hit'),230);renderDamageStack(target,packets);
  }
  for(const side of ['user','opponent']){
    const heals=(event.heals||[]).filter(heal=>heal.side===side);if(!heals.length)continue;
    renderDamageStack($(side+'Combatant'),heals.map(heal=>({label:heal.label,kind:'heal',amount:heal.amount,critical:false})));
  }
}
function combatEffectClass(effect){
  if(effect==='meteor')return'meteor';
  if(effect==='thunderstrike')return'lightning';
  return effect?'skill-impact':'';
}
function renderCombatEffect(combatant,effect,index){
  const type=combatEffectClass(effect);if(!type)return;
  const visual=document.createElement('div');visual.className=`skill-effect ${type}`;visual.setAttribute('aria-hidden','true');visual.style.setProperty('--effect-delay',`${index*85}ms`);
  visual.innerHTML=type==='meteor'?'<i class="meteor-core"></i><i class="meteor-impact"></i>':type==='lightning'?'<i class="lightning-bolt"></i><i class="lightning-flash"></i>':'<i class="skill-impact-ring"></i>';
  combatant.appendChild(visual);
  setTimeout(()=>visual.remove(),1500+index*85);
}
function renderDamageStack(combatant,packets){
  const stack=combatant.querySelector('.damage-stack');if(!stack)return;stack.innerHTML='';combatant.querySelectorAll('.skill-effect').forEach(effect=>effect.remove());
  const compact=combatant.classList.contains('team-unit');
  const positions=compact?[[-20,-2],[16,-10],[-8,14],[22,8],[-24,22],[10,18]]:[[-42,18],[28,2],[-4,49],[52,39],[-57,62],[17,75]];
  packets.forEach((packet,index)=>{
    const row=document.createElement('div'),reduced=(packet.shielded||0)+(packet.reduced||0),position=positions[index%positions.length],effect=combatEffectClass(packet.effect);
    row.className=`damage-stack-row ${packet.kind||'normal'}${packet.critical?' critical':''}${reduced?' reduced':''}${effect?` effect-${effect}`:''}`;
    row.style.setProperty('--hit-x',`${position[0]}px`);row.style.setProperty('--hit-y',`${position[1]}px`);row.style.setProperty('--hit-delay',`${index*70}ms`);
    row.setAttribute('aria-label',`${packet.label}: ${fmt(packet.amount)}${packet.critical?` ${L().criticalShort}`:''}`);
    row.innerHTML=`<strong>${packet.kind==='heal'?'+':''}${fmt(packet.amount)}</strong>`;stack.appendChild(row);
    setTimeout(()=>row.remove(),1300+index*85);
    if(packet.kind==='skill')renderCombatEffect(combatant,packet.effect,index);
  });
}
function applyReplayEvent(){
  if(!battleReplay)resetBattleModel();if(battleReplay.index>=battleReplay.events.length){finishReplay();return false}
  const event=battleReplay.events[battleReplay.index++];
  if(battleReplay.kind==='team'){
    const userMax=battleReplay.userTeam.map(f=>f.s.hp),oppMax=battleReplay.oppTeam.map(f=>f.s.hp);
    renderTeamRoster('user',event.hp.user,userMax,event.actor==='user'?event.actorSlot:-1);
    renderTeamRoster('opponent',event.hp.opponent,oppMax,event.actor==='opponent'?event.actorSlot:-1);
  }else{
    const aMax=battleReplay.a.s.hp,bMax=battleReplay.b.s.hp;
    $('userHpFill').style.width=`${Math.max(0,event.aHp/aMax*100)}%`;$('opponentHpFill').style.width=`${Math.max(0,event.bHp/bMax*100)}%`;
    $('userHpText').textContent=`${fmt(Math.max(0,event.aHp))} / ${fmt(aMax)}`;$('opponentHpText').textContent=`${fmt(Math.max(0,event.bHp))} / ${fmt(bMax)}`;
  }
  if(event.actor==='user')battleReplay.userDamage+=event.damage;else battleReplay.opponentDamage+=event.damage;
  if(event.counterDamage){if(event.actor==='user')battleReplay.opponentDamage+=event.counterDamage;else battleReplay.userDamage+=event.counterDamage}
  $('simTurns').textContent=battleReplay.index;$('simUserDamage').textContent=fmt(battleReplay.userDamage);$('simOpponentDamage').textContent=fmt(battleReplay.opponentDamage);
  const chips=event.packets.map(packet=>`<span class="packet-chip ${packet.kind==='skill'||packet.kind==='execute'?'skill':''} ${packet.critical?'critical':''}">${esc(packet.label)} ${fmt(packet.amount)}${packet.critical?' '+L().criticalShort:''}</span>`).join('')+(event.heals||[]).map(heal=>`<span class="packet-chip heal">${esc(heal.label)} +${fmt(heal.amount)}</span>`).join('');
  const actorName=battleReplay.kind==='team'?`${event.actor==='user'?L().yourDino:L().opponent} #${(event.actorSlot||0)+1}`:(event.actor==='user'?L().yourDino:L().opponent);
  const actionText=L().dealtTotal.replace('{value}',fmt(event.damage));
  const row=document.createElement('div');row.className='battle-log-row';row.innerHTML=`<b>${battleReplay.index}</b><span>${actorName} ${actionText}<div class="packet-breakdown">${chips}</div></span>`;$('battleLog').appendChild(row);$('battleLog').scrollTop=$('battleLog').scrollHeight;animateCombat(event);
  if(battleReplay.index>=battleReplay.events.length)finishReplay();return true;
}
function finishReplay(){
  clearInterval(battleTimer);battleTimer=null;if(!battleReplay)return;const text=battleReplay.result>0?L().victory:battleReplay.result<0?L().defeat:L().draw;$('battleBanner').textContent=text;$('playBattle').textContent=L().play;
}
function playReplay(){
  if(!battleReplay||battleReplay.index>=battleReplay.events.length)resetBattleModel();if(battleTimer){clearInterval(battleTimer);battleTimer=null;$('playBattle').textContent=L().play;return}
  $('battleBanner').textContent=L().fighting;$('playBattle').textContent=L().pause;applyReplayEvent();battleTimer=setInterval(()=>{if(!applyReplayEvent())finishReplay()},playbackDelay());
}
async function batchSimulation(){
  const button=$('batchBattle'),base=randomBattleSeed(),total=10000,chunk=250;button.disabled=true;let wins=0,losses=0,draws=0,actions=0,userDamage=0,opponentDamage=0;
  $('batchDetail').textContent='Preparing 10,000 randomized matches...';await frame();
  for(let start=0;start<total;start+=chunk){
    const end=Math.min(total,start+chunk);
    for(let i=start;i<end;i++){const match=(isTeamFormat()?simulateTeamMatch:simulateBattle)((base+Math.imul(i,0x9e3779b1))>>>0,false);if(match.result>0)wins++;else if(match.result<0)losses++;else draws++;actions+=match.actionCount;userDamage+=match.a.damageDone;opponentDamage+=match.b.damageDone}
    const progress=Math.round(end/total*100);button.textContent=`${progress}%`;$('batchDetail').textContent=`Simulating ${end.toLocaleString()} / ${total.toLocaleString()} matches`;await frame();
  }
  $('simWinRate').textContent=`${((wins+draws*.5)/total*100).toFixed(1)}%`;$('simTurns').textContent=(actions/total).toFixed(1);$('simUserDamage').textContent=fmt(userDamage/total);$('simOpponentDamage').textContent=fmt(opponentDamage/total);
  $('batchDetail').textContent=`${wins.toLocaleString()} wins · ${losses.toLocaleString()} losses · ${draws.toLocaleString()} draws · ${(actions/total).toFixed(1)} average actions`;button.disabled=false;button.textContent=L().batchFights;
}
function initBattleLab(){
  renderPresetMenus();$('userPreset').value='manual';loadOpponentPreset(0);loadProfileBattleState();renderConstellation('opponent');renderBattleInitial();
  document.querySelectorAll('.page-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.page-tab').forEach(x=>x.classList.toggle('active',x===tab));$('battleView').hidden=tab.dataset.view!=='battle';$('calculatorView').hidden=tab.dataset.view!=='calculator'}));
  document.querySelectorAll('.format-tab').forEach(tab=>tab.addEventListener('click',()=>{
    if(isTeamFormat()){syncFormToMember('user');syncFormToMember('opponent')}
    battleFormat=tab.dataset.format==='5v5'?'5v5':'1v1';applyBattleFormat(true);invalidateBattle();
  }));
  $('userPreset').addEventListener('change',e=>{const value=e.target.value;if(value==='manual')loadProfileBattleState();else if(value.startsWith('builtin:'))loadUserPreset(+value.slice(8));else if(value.startsWith('custom:'))loadSavedPreset('user',value.slice(7));updatePresetButtons()});
  $('opponentPreset').addEventListener('change',e=>{const value=e.target.value;if(value.startsWith('builtin:'))loadOpponentPreset(+value.slice(8));else if(value.startsWith('custom:'))loadSavedPreset('opponent',value.slice(7))});
  $('clearUserConstellation').addEventListener('click',()=>{simSides.user.main={};simSides.user.special={};persistUserBattle();markUserManual();renderConstellation('user');renderSideStats('user');invalidateBattle()});
  $('clearOpponentConstellation').addEventListener('click',()=>{simSides.opponent.main={};simSides.opponent.special={};renderConstellation('opponent');renderSideStats('opponent');invalidateBattle()});
  $('mirrorOpponent').addEventListener('click',()=>{
    if(isTeamFormat()){
      syncFormToMember('user');
      simTeams.opponent=normalizeTeam(simTeams.user,'opponent');
      simSides.opponent.main={...simSides.user.main};simSides.opponent.special={...simSides.user.special};
      teamEdit.opponent=teamEdit.user;loadMemberToForm('opponent');renderConstellation('opponent');invalidateBattle();return;
    }
    simSides.opponent=JSON.parse(JSON.stringify(simSides.user));$('simOpponentHp').value=$('simUserHp').value;$('simOpponentAttack').value=$('simUserAttack').value;$('simOpponentSpeed').value=$('simUserSpeed').value;renderRuneSlots('opponent');renderConstellation('opponent');renderArenaDinos();invalidateBattle();
  });
  ['simUserHp','simUserAttack','simUserSpeed','simOpponentHp','simOpponentAttack','simOpponentSpeed'].forEach(id=>$(id).addEventListener('input',()=>{
    const side=id.includes('User')?'user':'opponent';
    if(isTeamFormat()){syncFormToMember(side);if(side==='user')persistUserBattle();renderSideStats(side);invalidateBattle();return}
    if(side==='user'){const base=sideBase('user');profile.base={...base};baseHp.value=base.hp;baseAttack.value=base.attack;baseSpeed.value=base.speed;saveData();markUserManual()}
    renderSideStats(side);invalidateBattle();
  }));
  $('runePickerGrid').addEventListener('click',e=>{const item=e.target.closest('[data-rune]');if(!item||!pickerTarget)return;const id=+item.dataset.rune,slots=activeSlots(pickerTarget.side);if(id){const rune=runeByGameId(id),owned=rune&&profile?.inventory?.[rune.id];slots[pickerTarget.index]={id,level:clamp(owned||1,1,31)}}else slots.splice(pickerTarget.index,1);const side=pickerTarget.side;if(side==='user'){persistUserBattle();markUserManual()}closePicker();renderRuneSlots(side);invalidateBattle()});
  $('closeRunePicker').addEventListener('click',closePicker);$('runePickerBg').addEventListener('click',e=>{if(e.target===$('runePickerBg'))closePicker()});
  $('resetBattle').addEventListener('click',resetBattleModel);$('stepBattle').addEventListener('click',applyReplayEvent);$('playBattle').addEventListener('click',playReplay);$('batchBattle').addEventListener('click',batchSimulation);
  $('battleSpeed').addEventListener('change',()=>{if(battleTimer){clearInterval(battleTimer);battleTimer=setInterval(()=>{if(!applyReplayEvent())finishReplay()},playbackDelay())}});
  $('useBuildInBattle').addEventListener('click',()=>{
    const best=last?.items?.[0];if(!best)return;
    simSides.user.slots=best.build.map(p=>({id:RUNES.indexOf(p.rune)+1,level:p.level}));persistUserBattle();markUserManual();
    $('simUserHp').value=profile.base.hp;$('simUserAttack').value=profile.base.attack;$('simUserSpeed').value=profile.base.speed;
    renderRuneSlots('user');document.querySelector('[data-view="battle"]').click();resetBattleModel();
  });
  $('saveUserPreset').addEventListener('click',openPresetModal);$('deleteUserPreset').addEventListener('click',deleteCurrentPreset);$('cancelPreset').addEventListener('click',closePresetModal);$('confirmPreset').addEventListener('click',saveCurrentPreset);$('presetName').addEventListener('keydown',e=>{if(e.key==='Enter')saveCurrentPreset();if(e.key==='Escape')closePresetModal()});$('presetModalBg').addEventListener('click',e=>{if(e.target===$('presetModalBg'))closePresetModal()});
  initializeBattleData();
}

function startApp(){
  if(appStarted||!profile)return;
  appStarted=true;applyText();syncProfile();initBattleLab();
}
(async()=>{
  await loadData();language.value=lang;
  if(profile)startApp();else openModal('first');
})();
