Delay = (ms) => new Promise(res => setTimeout(res, ms));

const VEHICLES = {
  adder: 3078201489,
  airbus: 1283517198,
  airtug: 1560980623,
  akula: 1181327175,
  akuma: 1672195559,
  alkonost: 3929093893,
  alpha: 767087018,
  alphaz1: 2771347558,
  ambulance: 1171614426,
  annihilator: 837858166,
  annihilator2: 295054921,
  apc: 562680400,
  ardent: 159274291,
  armytanker: 3087536137,
  armytrailer: 2818520053,
  armytrailer2: 2657817814,
  asbo: 1118611807,
  asea: 2485144969,
  asea2: 2487343317,
  asterope: 2391954683,
  astron: 629969764,
  autarch: 3981782132,
  avarus: 2179174271,
  avenger: 2176659152,
  avenger2: 408970549,
  avisa: 2588363614,
  bagger: 2154536131,
  baletrailer: 3895125590,
  baller: 3486135912,
  baller2: 142944341,
  baller3: 1878062887,
  baller4: 634118882,
  baller5: 470404958,
  baller6: 666166960,
  baller7: 359875117,
  banshee: 3253274834,
  banshee2: 633712403,
  barracks: 3471458123,
  barracks2: 1074326203,
  barracks3: 630371791,
  barrage: 4081974053,
  bati: 4180675781,
  bati2: 3403504941,
  benson: 2053223216,
  besra: 1824333165,
  bestiagts: 1274868363,
  bf400: 86520421,
  bfinjection: 1126868326,
  biff: 850991848,
  bifta: 3945366167,
  bison: 4278019151,
  bison2: 2072156101,
  bison3: 1739845664,
  bjxl: 850565707,
  blade: 3089165662,
  blazer: 2166734073,
  blazer2: 4246935337,
  blazer3: 3025077634,
  blazer4: 3854198872,
  blazer5: 2704629607,
  blimp: 4143991942,
  blimp2: 3681241380,
  blimp3: 3987008919,
  blista: 3950024287,
  blista2: 1039032026,
  blista3: 3703315515,
  bmx: 1131912276,
  boattrailer: 524108981,
  bobcatxl: 1069929536,
  bodhi2: 2859047862,
  bombushka: 4262088844,
  boor: 996383885,
  boxville: 2307837162,
  boxville2: 4061868990,
  boxville3: 121658888,
  boxville4: 444171386,
  boxville5: 682434785,
  brawler: 2815302597,
  broadway: 2361724968,
  brickade: 3989239879,
  brickade2: 2718380883,
  brioso: 1549126457,
  brioso2: 1429622905,
  brioso3: 15214558,
  bruiser: 668439077,
  bruiser2: 2600885406,
  bruiser3: 2252616474,
  brutus: 2139203625,
  brutus2: 2403970600,
  brutus3: 2038858402,
  btype: 117401876,
  btype2: 3463132580,
  btype3: 3692679425,
  buccaneer: 3612755468,
  buccaneer2: 3281516360,
  buffalo: 3990165190,
  buffalo2: 736902334,
  buffalo3: 237764926,
  buffalo4: 3675036420,
  bulldozer: 1886712733,
  bullet: 2598821281,
  burrito: 2948279460,
  burrito2: 3387490166,
  burrito3: 2551651283,
  burrito4: 893081117,
  burrito5: 1132262048,
  bus: 3581397346,
  buzzard: 788747387,
  buzzard2: 745926877,
  cablecar: 3334677549,
  caddy: 1147287684,
  caddy2: 3757070668,
  caddy3: 3525819835,
  calico: 3101054893,
  camper: 1876516712,
  caracara: 1254014755,
  caracara2: 2945871676,
  carbonizzare: 2072687711,
  carbonrs: 11251904,
  cargobob: 4244420235,
  cargobob2: 1621617168,
  cargobob3: 1394036463,
  cargobob4: 2025593404,
  cargoplane: 368211810,
  cargoplane2: 2336777441,
  casco: 941800958,
  cavalcade: 2006918058,
  cavalcade2: 3505073125,
  cerberus: 3493417227,
  cerberus2: 679453769,
  cerberus3: 1909700336,
  champion: 3379732821,
  cheburek: 3306466016,
  cheetah: 2983812512,
  cheetah2: 223240013,
  chernobog: 3602674979,
  chimera: 6774487,
  chino: 349605904,
  chino2: 2933279331,
  cinquemila: 2767531027,
  cliffhanger: 390201602,
  clique: 2728360112,
  club: 2196012677,
  coach: 2222034228,
  cog55: 906642318,
  cog552: 704435172,
  cogcabrio: 330661258,
  cognoscenti: 2264796000,
  cognoscenti2: 3690124666,
  comet2: 3249425686,
  comet3: 2272483501,
  comet4: 1561920505,
  comet5: 661493923,
  comet6: 2568944644,
  comet7: 1141395928,
  conada: 3817135397,
  contender: 683047626,
  coquette: 108773431,
  coquette2: 1011753235,
  coquette3: 784565758,
  coquette4: 2566281822,
  corsita: 3540279623,
  cruiser: 448402357,
  crusader: 321739290,
  cuban800: 3650256867,
  cutter: 3288047904,
  cyclone: 1392481335,
  cypher: 1755697647,
  daemon: 2006142190,
  daemon2: 2890830793,
  deathbike: 4267640610,
  deathbike2: 2482017624,
  deathbike3: 2920466844,
  defiler: 822018448,
  deity: 1532171089,
  deluxo: 1483171323,
  deveste: 1591739866,
  deviant: 1279262537,
  diablous: 4055125828,
  diablous2: 1790834270,
  dilettante: 3164157193,
  dilettante2: 1682114128,
  dinghy: 1033245328,
  dinghy2: 276773164,
  dinghy3: 509498602,
  dinghy4: 867467158,
  dinghy5: 3314393930,
  dloader: 1770332643,
  docktrailer: 2154757102,
  docktug: 3410276810,
  dodo: 3393804037,
  dominator: 80636076,
  dominator2: 3379262425,
  dominator3: 3308022675,
  dominator4: 3606777648,
  dominator5: 2919906639,
  dominator6: 3001042683,
  dominator7: 426742808,
  dominator8: 736672010,
  double: 2623969160,
  drafter: 686471183,
  draugur: 3526730918,
  dubsta: 1177543287,
  dubsta2: 3900892662,
  dubsta3: 3057713523,
  dukes: 723973206,
  dukes2: 3968823444,
  dukes3: 2134119907,
  dump: 2164484578,
  dune: 2633113103,
  dune2: 534258863,
  dune3: 1897744184,
  dune4: 3467805257,
  dune5: 3982671785,
  duster: 970356638,
  dynasty: 310284501,
  elegy: 196747873,
  elegy2: 3728579874,
  ellie: 3027423925,
  emerus: 1323778901,
  emperor: 3609690755,
  emperor2: 2411965148,
  emperor3: 3053254478,
  enduro: 1753414259,
  entity2: 2174267100,
  entity3: 1748565021,
  entityxf: 3003014393,
  esskey: 2035069708,
  eudora: 3045179290,
  euros: 2038480341,
  everon: 2538945576,
  everon2: 4163619118,
  exemplar: 4289813342,
  f620: 3703357000,
  faction: 2175389151,
  faction2: 2504420315,
  faction3: 2255212070,
  fagaloa: 1617472902,
  faggio: 2452219115,
  faggio2: 55628203,
  faggio3: 3005788552,
  fbi: 1127131465,
  fbi2: 2647026068,
  fcr: 627535535,
  fcr2: 3537231886,
  felon: 3903372712,
  felon2: 4205676014,
  feltzer2: 2299640309,
  feltzer3: 2728226064,
  firetruk: 1938952078,
  fixter: 3458454463,
  flashgt: 3035832600,
  flatbed: 1353720154,
  fmj: 1426219628,
  forklift: 1491375716,
  formula: 340154634,
  formula2: 2334210311,
  fq2: 3157435195,
  freecrawler: 4240635011,
  freight: 1030400667,
  freightcar: 184361638,
  freightcar2: 3186376089,
  freightcont1: 920453016,
  freightcont2: 240201337,
  freightgrain: 642617954,
  freighttrailer: 3517691494,
  frogger: 744705981,
  frogger2: 1949211328,
  fugitive: 1909141499,
  furia: 960812448,
  furoregt: 3205927392,
  fusilade: 499169875,
  futo: 2016857647,
  futo2: 2787736776,
  gargoyle: 741090084,
  gauntlet: 2494797253,
  gauntlet2: 349315417,
  gauntlet3: 722226637,
  gauntlet4: 1934384720,
  gauntlet5: 2172320429,
  gb200: 1909189272,
  gburrito: 2549763894,
  gburrito2: 296357396,
  glendale: 75131841,
  glendale2: 3381377750,
  gp1: 1234311532,
  graintrailer: 1019737494,
  granger: 2519238556,
  granger2: 4033620423,
  greenwood: 40817712,
  gresley: 2751205197,
  growler: 1304459735,
  gt500: 2215179066,
  guardian: 2186977100,
  habanero: 884422927,
  hakuchou: 1265391242,
  hakuchou2: 4039289119,
  halftrack: 4262731174,
  handler: 444583674,
  hauler: 1518533038,
  hauler2: 387748548,
  havok: 2310691317,
  hellion: 3932816511,
  hermes: 15219735,
  hexer: 301427732,
  hotknife: 37348240,
  hotring: 1115909093,
  howard: 3287439187,
  hunter: 4252008158,
  huntley: 486987393,
  hustler: 600450546,
  hydra: 970385471,
  ignus: 2850852987,
  imorgon: 3162245632,
  impaler: 3001042683,
  impaler2: 1009171724,
  impaler3: 2370166601,
  impaler4: 2550461639,
  imperator: 444994115,
  imperator2: 1637620610,
  imperator3: 3539435063,
  infernus: 418536135,
  infernus2: 2889029532,
  ingot: 3005245074,
  innovation: 4135840458,
  insurgent: 2434067162,
  insurgent2: 2071877360,
  insurgent3: 2370534026,
  intruder: 886934177,
  issi2: 3117103977,
  issi3: 931280609,
  issi4: 628003514,
  issi5: 1537277726,
  issi6: 1239571361,
  issi7: 1854776567,
  issi8: 1550581940,
  italigtb: 2246633323,
  italigtb2: 3812247419,
  italigto: 3963499524,
  italirsx: 3145241962,
  iwagen: 662793086,
  jackal: 3670438162,
  jb700: 1051415893,
  jb7002: 394110044,
  jester: 2997294755,
  jester2: 3188613414,
  jester3: 4080061290,
  jester4: 2712905841,
  jet: 1058115860,
  jetmax: 861409633,
  journey: 4174679674,
  journey2: 2667889793,
  jubilee: 461465043,
  jugular: 4086055493,
  kalahari: 92612664,
  kamacho: 4173521127,
  kanjo: 409049982,
  kanjosj: 4230891418,
  khamelion: 544021352,
  khanjali: 2859440138,
  komoda: 3460613305,
  kosatka: 1336872304,
  krieger: 3630826055,
  kuruma: 2922118804,
  kuruma2: 410882957,
  landstalker: 1269098716,
  landstalker2: 3456868130,
  lazer: 3013282534,
  le7b: 3062131285,
  lectro: 640818791,
  lguard: 469291905,
  limo2: 4180339789,
  lm87: 4284049613,
  locust: 3353694737,
  longfin: 1861786828,
  lurcher: 2068293287,
  luxor: 621481054,
  luxor2: 3080673438,
  lynx: 482197771,
  mamba: 2634021974,
  mammatus: 2548391185,
  manana: 2170765704,
  manana2: 1717532765,
  manchez: 2771538552,
  manchez2: 1086534307,
  manchez3: 1384502824,
  marquis: 3251507587,
  marshall: 1233534620,
  massacro: 4152024626,
  massacro2: 3663206819,
  maverick: 2634305738,
  menacer: 2044532910,
  mesa: 914654722,
  mesa2: 3546958660,
  mesa3: 2230595153,
  metrotrain: 868868440,
  michelli: 1046206681,
  microlight: 2531412055,
  miljet: 165154707,
  minitank: 3040635986,
  minivan: 3984502180,
  minivan2: 3168702960,
  mixer: 3510150843,
  mixer2: 475220373,
  mogul: 3545667823,
  molotok: 1565978651,
  monroe: 3861591579,
  monster: 3449006043,
  monster3: 1721676810,
  monster4: 840387324,
  monster5: 3579220348,
  moonbeam: 525509695,
  moonbeam2: 1896491931,
  mower: 1783355638,
  mule: 904750859,
  mule2: 3244501995,
  mule3: 2242229361,
  mule4: 1945374990,
  mule5: 1343932732,
  nebula: 3412338231,
  nemesis: 3660088182,
  neo: 2674840994,
  neon: 2445973230,
  nero: 1034187331,
  nero2: 1093792632,
  nightblade: 2688780135,
  nightshade: 2351681756,
  nightshark: 433954513,
  nimbus: 2999939664,
  ninef: 1032823388,
  ninef2: 2833484545,
  nokota: 1036591958,
  novak: 2465530446,
  omnis: 3517794615,
  omnisegt: 3789743831,
  openwheel1: 1492612435,
  openwheel2: 1181339704,
  oppressor: 884483972,
  oppressor2: 2069146067,
  oracle: 1348744438,
  oracle2: 3783366066,
  osiris: 1987142870,
  outlaw: 408825843,
  packer: 569305213,
  panthere: 2100457220,
  panto: 3863274624,
  paradise: 1488164764,
  paragon: 3847255899,
  paragon2: 1416466158,
  pariah: 867799010,
  patriot: 3486509883,
  patriot2: 3874056184,
  patriot3: 3624880708,
  patrolboat: 4018222598,
  pbus: 2287941233,
  pbus2: 345756458,
  pcj: 3385765638,
  penetrator: 2536829930,
  penumbra: 3917501776,
  penumbra2: 3663644634,
  peyote: 1830407356,
  peyote2: 2490551588,
  peyote3: 1107404867,
  pfister811: 2465164804,
  phantom: 2157618379,
  phantom2: 2645431192,
  phantom3: 177270108,
  phoenix: 2199527893,
  picador: 1507916787,
  pigalle: 1078682497,
  police: 2046537925,
  police2: 2667966721,
  police3: 1912215274,
  police4: 2321795001,
  policeb: 4260343491,
  policeold1: 2758042359,
  policeold2: 2515846680,
  policet: 456714581,
  polmav: 353883353,
  pony: 4175309224,
  pony2: 943752001,
  powersurge: 2908631255,
  postlude: 4000288633,
  pounder: 2112052861,
  pounder2: 1653666139,
  prairie: 2844316578,
  pranger: 741586030,
  predator: 3806844075,
  premier: 2411098011,
  previon: 1416471345,
  primo: 3144368207,
  primo2: 2254540506,
  proptrailer: 356391690,
  prototipo: 2123327359,
  pyro: 2908775872,
  r300: 1076201208,
  radi: 2643899483,
  raiden: 2765724541,
  raketrailer: 390902130,
  rallytruck: 2191146052,
  rancherxl: 1645267888,
  rancherxl2: 1933662059,
  rapidgt: 2360515092,
  rapidgt2: 1737773231,
  rapidgt3: 2049897956,
  raptor: 3620039993,
  ratbike: 1873600305,
  ratloader: 3627815886,
  ratloader2: 3705788919,
  rcbandito: 4008920556,
  reaper: 234062309,
  rebel: 3087195462,
  rebel2: 2249373259,
  rebla: 83136452,
  reever: 1993851908,
  regina: 4280472072,
  remus: 1377217886,
  rentalbus: 3196165219,
  retinue: 1841130506,
  retinue2: 2031587082,
  revolter: 3884762073,
  rhapsody: 841808271,
  rhinehart: 2439462158,
  rhino: 782665360,
  riata: 2762269779,
  riot: 3089277354,
  riot2: 2601952180,
  ripley: 3448987385,
  rocoto: 2136773105,
  rogue: 3319621991,
  romero: 627094268,
  rrocket: 916547552,
  rt3000: 3842363289,
  rubble: 2589662668,
  ruffian: 3401388520,
  ruiner: 4067225593,
  ruiner2: 941494461,
  ruiner3: 777714999,
  ruiner4: 1706945532,
  rumpo: 1162065741,
  rumpo2: 2518351607,
  rumpo3: 1475773103,
  ruston: 719660200,
  s80: 3970348707,
  sabregt: 2609945748,
  sabregt2: 223258115,
  sadler: 3695398481,
  sadler2: 734217681,
  sanchez: 788045382,
  sanchez2: 2841686334,
  sanctus: 1491277511,
  sandking: 3105951696,
  sandking2: 989381445,
  savage: 4212341271,
  savestra: 903794909,
  sc1: 1352136073,
  scarab: 3147997943,
  scarab2: 1542143200,
  scarab3: 3715219435,
  schafter2: 3039514899,
  schafter3: 2809443750,
  schafter4: 1489967196,
  schafter5: 3406724313,
  schafter6: 1922255844,
  schlagen: 3787471536,
  schwarzer: 3548084598,
  scorcher: 4108429845,
  scramjet: 3656405053,
  scrap: 2594165727,
  seabreeze: 3902291871,
  seashark: 3264692260,
  seashark2: 3678636260,
  seashark3: 3983945033,
  seasparrow: 3568198617,
  seasparrow2: 1229411063,
  seasparrow3: 1593933419,
  seminole: 1221512915,
  seminole2: 2484160806,
  sentinel: 1349725314,
  sentinel2: 873639469,
  sentinel3: 1104234922,
  sentinel4: 2938086457,
  serrano: 1337041428,
  seven70: 2537130571,
  shamal: 3080461301,
  sheava: 819197656,
  sheriff: 2611638396,
  sheriff2: 1922257928,
  shinobi: 1353120668,
  shotaro: 3889340782,
  skylift: 1044954915,
  slamtruck: 3249056020,
  slamvan: 729783779,
  slamvan2: 833469436,
  slamvan3: 1119641113,
  slamvan4: 2233918197,
  slamvan5: 373261600,
  slamvan6: 1742022738,
  sm722: 775514032,
  sovereign: 743478836,
  specter: 1886268224,
  specter2: 1074745671,
  speeder: 231083307,
  speeder2: 437538602,
  speedo: 3484649228,
  speedo2: 728614474,
  speedo4: 219613597,
  squaddie: 4192631813,
  squalo: 400514754,
  stafford: 321186144,
  stalion: 1923400478,
  stalion2: 3893323758,
  stanier: 2817386317,
  starling: 2594093022,
  stinger: 1545842587,
  stingergt: 2196019706,
  stockade: 1747439474,
  stockade3: 4080511798,
  stratum: 1723137093,
  streiter: 1741861769,
  stretch: 2333339779,
  strikeforce: 1692272545,
  stromberg: 886810209,
  stryder: 301304410,
  stunt: 2172210288,
  submersible: 771711535,
  submersible2: 3228633070,
  sugoi: 987469656,
  sultan: 970598228,
  sultan2: 872704284,
  sultan3: 4003946083,
  sultanrs: 3999278268,
  suntrap: 4012021193,
  superd: 1123216662,
  supervolito: 710198397,
  supervolito2: 2623428164,
  surano: 384071873,
  surfer: 699456151,
  surfer2: 2983726598,
  surfer3: 3259477733,
  surge: 2400073108,
  swift: 3955379698,
  swift2: 1075432268,
  swinger: 500482303,
  t20: 1663218586,
  taco: 1951180813,
  tahoma: 3833117047,
  tailgater: 3286105550,
  tailgater2: 3050505892,
  taipan: 3160260734,
  tampa: 972671128,
  tampa2: 3223586949,
  tampa3: 3084515313,
  tanker: 3564062519,
  tanker2: 1956216962,
  tankercar: 586013744,
  taxi: 3338918751,
  technical: 2198148358,
  technical2: 1180875963,
  technical3: 1356124575,
  tempesta: 272929391,
  tenf: 3400983137,
  tenf2: 274946574,
  terbyte: 2306538597,
  tezeract: 1031562256,
  thrax: 1044193113,
  thrust: 1836027715,
  thruster: 1489874736,
  tigon: 2936769864,
  tiptruck: 48339065,
  tiptruck2: 3347205726,
  titan: 1981688531,
  toreador: 1455990255,
  torero: 1504306544,
  torero2: 4129572538,
  tornado: 464687292,
  tornado2: 1531094468,
  tornado3: 1762279763,
  tornado4: 2261744861,
  tornado5: 2497353967,
  tornado6: 2736567667,
  toro: 1070967343,
  toro2: 908897389,
  toros: 3126015148,
  tourbus: 1941029835,
  towtruck: 2971866336,
  towtruck2: 3852654278,
  tr2: 2078290630,
  tr3: 1784254509,
  tr4: 2091594960,
  tractor: 1641462412,
  tractor2: 2218488798,
  tractor3: 1445631933,
  trailerlarge: 1502869817,
  trailerlogs: 2016027501,
  trailers: 3417488910,
  trailers2: 2715434129,
  trailers3: 2236089197,
  trailers4: 3194418602,
  trailersmall: 712162987,
  trailersmall2: 2413121211,
  trash: 1917016601,
  trash2: 3039269212,
  trflat: 2942498482,
  tribike: 1127861609,
  tribike2: 3061159916,
  tribike3: 3894672200,
  trophytruck: 101905590,
  trophytruck2: 3631668194,
  tropic: 290013743,
  tropic2: 1448677353,
  tropos: 1887331236,
  tug: 2194326579,
  tula: 1043222410,
  tulip: 1456744817,
  tulip2: 268758436,
  turismo2: 3312836369,
  turismor: 408192225,
  tvtrailer: 2524324030,
  tyrant: 3918533058,
  tyrus: 2067820283,
  utillitruck: 516990260,
  utillitruck2: 887537515,
  utillitruck3: 2132890591,
  vacca: 338562499,
  vader: 4154065143,
  vagner: 1939284556,
  vagrant: 740289177,
  valkyrie: 2694714877,
  valkyrie2: 1543134283,
  vamos: 4245851645,
  vectre: 2754593701,
  velum: 2621610858,
  velum2: 1077420264,
  verlierer2: 1102544804,
  verus: 298565713,
  vestra: 1341619767,
  vetir: 2014313426,
  veto: 3437611258,
  veto2: 2802050217,
  vigero: 3469130167,
  vigero2: 2536587772,
  vigilante: 3052358707,
  vindicator: 2941886209,
  virgo: 3796912450,
  virgo2: 3395457658,
  virgo3: 16646064,
  viseris: 3903371924,
  visione: 3296789504,
  virtue: 669204833,
  volatol: 447548909,
  volatus: 2449479409,
  voltic: 2672523198,
  voltic2: 989294410,
  voodoo: 2006667053,
  voodoo2: 523724515,
  vortex: 3685342204,
  vstr: 1456336509,
  warrener: 579912970,
  washington: 1777363799,
  wastelander: 2382949506,
  weevil: 1644055914,
  weevil2: 3300595976,
  windsor: 1581459400,
  windsor2: 2364918497,
  winky: 4084658662,
  wolfsbane: 3676349299,
  xa21: 917809321,
  xls: 1203490606,
  xls2: 3862958888,
  yosemite: 1871995513,
  yosemite2: 1693751655,
  yosemite3: 67753863,
  youga: 65402552,
  youga2: 1026149675,
  youga3: 1802742206,
  youga4: 1486521356,
  z190: 838982985,
  zeno: 655665811,
  zentorno: 2891838741,
  zhaba: 1284356689,
  zion: 3172678083,
  zion2: 3101863448,
  zion3: 1862507111,
  zombiea: 3285698347,
  zombieb: 3724934023,
  zorrusso: 3612858749,
  zr350: 2436313176,
  zr380: 540101442,
  zr3802: 3188846534,
  zr3803: 2816263004,
  ztype: 758895617
}

function* generateVehicleHash() {
  for (let i = 0; i < Object.keys(VEHICLES).length; i++) {
    const hash = VEHICLES[Object.keys(VEHICLES)[i]]
    if (i == Object.keys(VEHICLES).length - 1) { return hash }
    else yield hash
  }
}

const generator = (function* () {
  for (let i = 0; i < Object.keys(VEHICLES).length; i++) {
    const hash = VEHICLES[Object.keys(VEHICLES)[i]]
    if (i == Object.keys(VEHICLES).length - 1) { return hash }
    else yield hash
  }
})()

let parsing = false;

RegisterCommand("startParsing", (source, args, raw) => { tryParseNextVehicle(), console.log(source) }, false)
RegisterCommand("stopParsing", (source, args, raw) => { parsing = false })
onNet("onVehicleParsed", () => tryParseNextVehicle() )

async function tryParseNextVehicle() {
  const data = generator.next()

  if (data.done) {
    parsing = false
    console.log("All vehicles parsed.")
    return
  }

  const hash = data.value

  if (!IsModelInCdimage(hash) || !IsModelAVehicle(hash)) {
    console.log(hash)
    return tryParseNextVehicle()
  }

  const name = GetDisplayNameFromVehicleModel(hash).toLocaleString("eu")

  const acceleration = GetVehicleModelAcceleration(hash).toFixed(2)
  const breaking = GetVehicleModelMaxBraking(hash).toFixed(2)
  const traction = GetVehicleModelMaxTraction(hash).toFixed(2)
  const speed = GetVehicleModelEstimatedMaxSpeed(hash).toFixed(2)

  emitNet("saveVehicle", hash, JSON.stringify({name, acceleration, breaking, traction, speed}));
}

RegisterCommand('car', async (source, args, raw) => {
  // account for the argument not being passed
  let model = "adder";
  if (args.length > 0)
  {
    model = args[0].toString();
  }

  // check if the model actually exists
  const hash = GetHashKey(model);
  if (!IsModelInCdimage(hash) || !IsModelAVehicle(hash))
  {
    emit('chat:addMessage', {
      args: [`It might have been a good thing that you tried to spawn a ${model}. Who even wants their spawning to actually ^*succeed?`]
    });
    return;   
  }

  // Request the model and wait until the game has loaded it
  RequestModel(hash);
  while (!HasModelLoaded(hash))
  {
    await Delay(500);
  }

  const ped = PlayerPedId();

  // Get the coordinates of the player's Ped (their character)
  const coords = GetEntityCoords(ped);

  // Create a vehicle at the player's position
  const vehicle = CreateVehicle(hash, coords[0], coords[1], coords[2], GetEntityHeading(ped), true, false);

  // Set the player into the drivers seat of the vehicle
  SetPedIntoVehicle(ped, vehicle, -1);

  // Allow the game engine to clean up the vehicle and model if needed
  SetEntityAsNoLongerNeeded(vehicle);
  SetModelAsNoLongerNeeded(model);

  // Tell the player the car spawned
  emit('chat:addMessage', {
    args: [`Woohoo! Enjoy your new ^*${model}!`]
  });
}, false);