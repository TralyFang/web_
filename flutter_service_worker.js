'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_69.part.js": "b47318f84c6a6082791a260bcf6ef8e2",
"main.dart.js_101.part.js": "c1617840f94cbbba4a3b20f97e80ccb0",
"main.dart.js_24.part.js": "9ef156c7f116d5d61a18293c2b862715",
"main.dart.js_34.part.js": "b42e8d6c16b6bdf83f0ea888066a6739",
"main.dart.js_56.part.js": "23355dc9125b13afe89c19644ae497c9",
"version.json": "7a436fcd04e9f35fa71a922471349538",
"main.dart.js_7.part.js": "d178e6de8351d97bfd163bd68cc799ea",
"main.dart.js_60.part.js": "067282d33035e4901742a0c2737a5298",
"main.dart.js_70.part.js": "afec7847850a2cdc572cf9c081584476",
"main.dart.js_12.part.js": "0346ca42e1a1ea9b0e64831ab1d3ef9e",
"main.dart.js_94.part.js": "efe0b5fc5442bf7d900952797fa64f9a",
"main.dart.js_61.part.js": "7bdad3364ebd6fcd0fe473e266da898b",
"main.dart.js_6.part.js": "f7552323bf3bf8f4a0ef1aaefd259303",
"index.html": "60c6e1b28c83e0da039afdba62140b1c",
"/": "60c6e1b28c83e0da039afdba62140b1c",
"main.dart.js_13.part.js": "d290603282e12ec22a6bfd2bbb01c0e2",
"main.dart.js_95.part.js": "3c2ce49bb07e9d6f3a7833698144feb7",
"main.dart.js_85.part.js": "c7f7466761db83db4f575642a26a9179",
"main.dart.js_68.part.js": "d100c97431d592aba6a9c56ed089d4e4",
"main.dart.js_100.part.js": "623072134c6d0359e49842a5fb0f41ea",
"main.dart.js_35.part.js": "5fe2cc7ef7aa9eb5e082188bbb78acc9",
"main.dart.js_25.part.js": "025d8d92c6d405c3d44f2ed9d91938bc",
"main.dart.js_57.part.js": "c9a64696014472609a0af08213e41176",
"main.dart.js_47.part.js": "ccabe87d602ce48b42d02f027e0b7e26",
"main.dart.js_11.part.js": "a4bc35e83159ffc3edb376c0e77c3715",
"main.dart.js_63.part.js": "f6fc4dc0d78c983c4473d0dc357066ed",
"main.dart.js_4.part.js": "bef6fb5e089a6687c2d5358df2b84195",
"main.dart.js": "cbeb72041eff9bed65471c32a6c49ad3",
"main.dart.js_87.part.js": "513c3365c13e02ba5fe626787c66cb29",
"main.dart.js_97.part.js": "da7547834dc09d44223816ebd1037e88",
"main.dart.js_18.part.js": "43673cb29d1816b635c10f6e4df54697",
"main.dart.js_45.part.js": "78d13471286e7bf8acf4ae964aac289f",
"main.dart.js_55.part.js": "433f199be93523ccc2d9e95a34c70788",
"main.dart.js_27.part.js": "ebe92888bfa5a2a6189540d988e66bdb",
"main.dart.js_37.part.js": "e0cd893557697649efa945c4279a86d2",
"main.dart.js_19.part.js": "3064b7c0a206f20fd5ad8b45e3c96338",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_54.part.js": "3afb9db381739ed13d813b47480abbea",
"main.dart.js_44.part.js": "0123ca2a374c33b420fc737c834be9cb",
"cors.json": "bee071e39edafe3b491f72ad8427064b",
"main.dart.js_36.part.js": "7bcaa1be29f69169976635488ccf29dc",
"main.dart.js_26.part.js": "f178cb24dc676d7212ab9a907232c074",
"main.dart.js_10.part.js": "51442b35ec0ff5bbc98d26a2377de525",
"main.dart.js_72.part.js": "e5b1b49eb248d0375931cc07b2301b49",
"main.dart.js_5.part.js": "1f5fb4c7998f662e3221027aa3e0c852",
"main.dart.js_62.part.js": "51eedc11703f68266aadd653ee1e2a3f",
"main.dart.js_96.part.js": "57282c3f8f918d9d190a3f1eff3c0e5e",
"main.dart.js_86.part.js": "83b91cfd02b2777effb12e5df194327f",
"main.dart.js_83.part.js": "d61bc0111c6c6a97d1701a11c1aa642f",
"main.dart.js_93.part.js": "9d6ee835244f483607a8c8f73d7a83f4",
"main.dart.js_58.part.js": "341f08224f9ee5315c53e1a3c96e085f",
"main.dart.js_48.part.js": "ab78bca4b51c356eacc61737fc45233f",
"main.dart.js_15.part.js": "60e1df506dd06a4e55394df395ed4567",
"main.dart.js_67.part.js": "49d3ae2706739f1ce67bb5c0b54d4a6a",
"main.dart.js_77.part.js": "a524c39f1eb3ca61a3f62a07eab55977",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "1128d0a9a0dedad11bd6f446e58532b7",
"main.dart.js_51.part.js": "01145796ad9d5699b330f3b591d076ef",
"main.dart.js_23.part.js": "b8bc442d0eb9668013bf022746963950",
"main.dart.js_33.part.js": "c1ef1a3aca7d876f212457635de3cbf7",
"main.dart.js_50.part.js": "368d87b75cbc46687733cfe180629663",
"main.dart.js_40.part.js": "066e9e5d8d66d37d5ad4f5fcc78f38e0",
"main.dart.js_32.part.js": "5b641951336a8f5618f86a31e8dc3f4c",
"main.dart.js_22.part.js": "9ca057275da6f3e199aeff19cd828db6",
"main.dart.js_8.part.js": "23553f047e7df213c3c75bf5dbe32d4c",
"icons/Icon-192.png": "be6ad9284260a5c6d8aecd0870a8031d",
"manifest.json": "f9cec21e6cc29402a50a8106d54e79bc",
"main.dart.js_92.part.js": "701983468b50aafe8ee3a353965ab7ec",
"main.dart.js_49.part.js": "e8a6a85836cb6791a0ae041e8049a30e",
"main.dart.js_59.part.js": "93426744dcca6ef5d0931b2b982cdf82",
"main.dart.js_14.part.js": "7ed65408d8beba55f18bd6485cf697cc",
"main.dart.js_66.part.js": "953165304e7f168c82a54d583fd3d630",
"main.dart.js_1.part.js": "92731afbadff8e6824dc6a94656313bc",
"main.dart.js_20.part.js": "4ab00065034b2b80e1202d883a9ef1f1",
"main.dart.js_30.part.js": "c72eab825c173d659cc73f14a9cac8ef",
"main.dart.js_99.part.js": "fa9f11413677654722610da96d211115",
"main.dart.js_42.part.js": "553412270dba032d72d604a8138f3ea2",
"main.dart.js_52.part.js": "fc034911e4bcca3d000d47c8584630bb",
"main.dart.js_39.part.js": "6fc8220ad9b8139eaceb3dd01572955b",
"main.dart.js_29.part.js": "e71f031d8b809ea05a8865a006d8ff59",
"main.dart.js_80.part.js": "1379ee5ef1ab90d451d82805428f1f91",
"main.dart.js_90.part.js": "c54582f2c9270be139e7bfb218cdbeb2",
"main.dart.js_64.part.js": "b9caa6aa3501a6d3483a04c73962b521",
"main.dart.js_3.part.js": "14f159441b5834f0251916578d6b7c34",
"main.dart.js_74.part.js": "a60ff743e119801976d2e9e471ddbbae",
"main.dart.js_16.part.js": "fcad126d0c21186315f081c8c39f2af8",
"assets/AssetManifest.json": "40672f97a3bfbb36ff0a30437398a243",
"assets/NOTICES": "6075ab51b453a8ae583e018c4cf94d3d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "39918176404d848e3dbe4f0334a6075d",
"assets/fonts/MaterialIcons-Regular.otf": "85f35e3e7ba468283d6dd02e6cd4f14c",
"assets/assets/images/teansfer.webp": "ccb328c131db742e455e1a29ef26b983",
"assets/assets/images/empty/empty_nodata.webp": "9d2c68c95343535d996e81d11ee3fedb",
"assets/assets/images/Icon-192.png": "be6ad9284260a5c6d8aecd0870a8031d",
"assets/assets/images/agent_center/agent_Recruitment.webp": "377cbdece4605f259d6b43f8aee006b6",
"assets/assets/images/agent_center/icon_plus.webp": "5e185a3630eaf3e8cb194864e7b4cb84",
"assets/assets/images/agent_center/agent_Commissions.webp": "779690eae43444ccae81a6292bbc5f14",
"assets/assets/images/agent_center/agent_DailyPayment.webp": "6cd9c2a7496078ed586df0d80e56cf1f",
"assets/assets/images/agent_center/agent_service.webp": "d7f4065275dc02516b165194cd6893f5",
"assets/assets/images/agent_center/icon_talent_level.webp": "af677a98d13a8f2f6cf90bf00f5983ce",
"assets/assets/images/agent_center/agent_Beansales.webp": "c39a45ac17f41529595936575ce4ac01",
"assets/assets/images/agent_center/agent_Trafficsupport.webp": "0fc1245c55810a3a1d4d31e585dae4ae",
"assets/assets/images/agent_center/agent_agent_center.webp": "7fcda00fc6f6ae7a65fb620ab27881f8",
"assets/assets/images/agent_center/agent_Highcommissions.webp": "cb993ccb910baa827dcaa3c961b9e42d",
"assets/assets/images/agent_center/agent_flexible_withdrawals.webp": "566c5256ad688b210fc4d7cdfdbe98f3",
"assets/assets/images/agent_center/agent_Recharge_Bonus.webp": "1941b6ebb871ef4990583b6d415a54f5",
"assets/assets/images/agent_center/agent_gift.webp": "c835f31ab510770c8a8cdb7d22d1659d",
"assets/assets/images/agent_center/icon_time.webp": "7f7c014d234212196556656b019e2bf0",
"assets/assets/images/agent_center/icon_Equal.webp": "045c3fbadf15ef7e06fb9f2e3d22203f",
"assets/assets/images/agent_center/agent_Discounts.webp": "d75b413a9d2c83bc73723bf37f4c45a6",
"assets/assets/images/agent_center/agent_Revenue_sharing.webp": "6ff0d6162ab2b38d3bd9bc4563de19ff",
"assets/assets/images/agent_center/agent_training.webp": "a5fee9973b50d21abbcb7a0b6376c272",
"assets/assets/images/agent_center/agent_Dailypayout.webp": "f3376aac2a432839e23759c8aec36f78",
"assets/assets/images/agent_center/agent_tools.webp": "b4c5eae66fdcb2f5c98947a88f2c0cdb",
"assets/assets/images/agent_center/agent_game.webp": "76e680f25455eff0907b0598f55b3a7f",
"assets/assets/images/topup.webp": "d72accf2de4fdf803741e94055ab78c1",
"assets/assets/images/personal_center/icon_profile.webp": "10eb4705643bc4c858d45cbe839b141e",
"assets/assets/images/personal_center/event%2520task.webp": "087b881962d276dc6f9082627c9ec9cf",
"assets/assets/images/personal_center/talent.webp": "17792aa62e8e7f6e79721453ac862bb0",
"assets/assets/images/personal_center/to_user.webp": "603c9831d3baca10dfb3ee5df967df89",
"assets/assets/images/personal_center/talent_transfer.webp": "84721bc6b706a1eb9e8a1ab3ea378ede",
"assets/assets/images/personal_center/icon_more.png": "68a4e276fd3a2da99bcd5f608162a199",
"assets/assets/images/personal_center/removed.webp": "a07373359540da1e04b4a020ca1906cb",
"assets/assets/images/personal_center/icon_drop_down.png": "82f8dbd3706bb18b4848713c2e5b7a87",
"assets/assets/images/personal_center/message.webp": "81b946c30d623637576ba8535451b880",
"assets/assets/images/personal_center/agent_beans.webp": "e1c4c2f4721aab640776cbe0d21d4b72",
"assets/assets/images/personal_center/default_head.webp": "0022a3634aac43a5d8ec132003f01056",
"assets/assets/images/personal_center/gems.webp": "0d6171c288a747a428eeef14ce21f1f0",
"assets/assets/images/personal_center/icon_search.png": "34c4f4b70e4363b8569793ebb9e634e1",
"assets/assets/images/personal_center/system%2520task.webp": "af1e60d0f76b412533823effad098739",
"assets/assets/images/personal_center/wallet_grey.webp": "bc696374b00521c058569cf08e799712",
"assets/assets/images/personal_center/to_agent.webp": "43df66d3927005fbc33f50a501085529",
"assets/assets/images/personal_center/top_agents.webp": "c7d56063f93049d3ccf7cb7e29c0d90d",
"assets/assets/images/personal_center/teansfer.webp": "ccb328c131db742e455e1a29ef26b983",
"assets/assets/images/personal_center/flag.webp": "1385ac5899e9fbbb8a5f1bff3afaacf1",
"assets/assets/images/personal_center/talent_total.webp": "341ef756d86c5ecb13fc4e1c278054fb",
"assets/assets/images/personal_center/icon_pending.webp": "95d4df5779d8cb38548da52eddacbb26",
"assets/assets/images/personal_center/daily_check_close_btn.png": "fad7006331d040f65aaa170820e46478",
"assets/assets/images/personal_center/talent_live_duration.webp": "6905b452203daa8fb1be079a4afad7d2",
"assets/assets/images/personal_center/talent_active.webp": "fefc88d2cb6477d9246295e6cd55b5aa",
"assets/assets/images/personal_center/agent_lost.webp": "e4fdbf5235e26ec024ccc6c140162bb1",
"assets/assets/images/personal_center/invite.webp": "73cf98f9d64ae7aafc94df47d67a6be5",
"assets/assets/images/personal_center/icon_talent_history.webp": "e938ea4172184ef7c081fbce9ed33bd3",
"assets/assets/images/personal_center/pie_badge.webp": "da01fe0af3d4d45d9197235ca863666e",
"assets/assets/images/personal_center/agent_new.webp": "0e402b7014240c5d877fea245428eccc",
"assets/assets/images/personal_center/add.webp": "456acad82817a5b9c1fd2c0074b44f82",
"assets/assets/images/personal_center/icon_Bank_Card.webp": "9949f2349612b77a6c337b802ac06322",
"assets/assets/images/personal_center/support.webp": "6b4eac7c6ef25b6bc969fb9cc54ac8aa",
"assets/assets/images/personal_center/beans.webp": "e048a1b508382495a7a4c8c63a38afbd",
"assets/assets/images/personal_center/live%2520chat.webp": "e6f1d89970a331b292939b41513115cb",
"assets/assets/images/personal_center/to_up.webp": "aa09f4514099efdd23dd2d421f00608d",
"assets/assets/images/personal_center/topup%25202.webp": "a09f021993b32fedd5539e8aa51b3a87",
"assets/assets/images/personal_center/female.webp": "bf04fcd5dd4949cbecd3a59b70ed6588",
"assets/assets/images/personal_center/topup_history.webp": "ff773cc2ca1d651f66c0b6ee1ca36490",
"assets/assets/images/personal_center/withdraw.webp": "43470fe5ae57ab134f2d524dee16f9e7",
"assets/assets/images/personal_center/earning.webp": "7d452c9a92745462a6b4408c27b7fd4e",
"assets/assets/images/personal_center/topup.webp": "b3106910fee923ea235759c7c8ffc484",
"assets/assets/images/personal_center/icon_change.webp": "978e36142d67eb1914b75988639a2e26",
"assets/assets/images/personal_center/management.webp": "bed22e27ecfc7aa627255550b7310854",
"assets/assets/images/personal_center/agent.webp": "2d0adcedb98748d0c9716393a7eb714d",
"assets/assets/images/personal_center/talent_me.webp": "12f2f7ec291d0d2a7a2df90bca2438e0",
"assets/assets/images/personal_center/growth.webp": "f031e4e19c7e77323c10f9d9d941a452",
"assets/assets/images/personal_center/question.webp": "2d9ce58e5fe391af9bcec35aaee4e60b",
"assets/assets/images/personal_center/icon_time.webp": "b7acc27fb30dd0061593ed8a488b862e",
"assets/assets/images/personal_center/location.webp": "89c6f7518feb2e596db3d711dbe036b6",
"assets/assets/images/personal_center/icon_select.webp": "269be1d72af1d28d899f3e6bd931ec76",
"assets/assets/images/personal_center/transfer.webp": "484ecc0649158740f65bfc3be809b69b",
"assets/assets/images/personal_center/close.webp": "8e83a3cd0a34747b8fd870694608019f",
"assets/assets/images/personal_center/male.webp": "efbfa554235b541789506ef693a8f09c",
"assets/assets/images/personal_center/task.webp": "7da94b01aaec402abf65639c08babf5f",
"assets/assets/images/personal_center/agent_total.webp": "67fdf9197a74bb0102e9e20d45fe8d65",
"assets/assets/images/personal_center/banner%25202.webp": "5991649351f1b1e55ce90dd090895ee6",
"assets/assets/images/personal_center/banner.webp": "4a442e827b78c382c7124c3f85665aaa",
"assets/assets/images/personal_center/talent_grey.webp": "1ac73244885bd47e8378e27ed6aa9130",
"assets/assets/images/personal_center/wallet.webp": "d33d8232ec3b6de3a8bf3a30002ed68f",
"assets/assets/images/personal_center/icon_success.webp": "7103211494db059a597af4de0968e6ca",
"assets/assets/images/personal_center/exchange%25202.webp": "df08119c201f64afb47052e290ebd4bd",
"assets/assets/images/personal_center/icon_arrow.webp": "13f2f3790486d14f35294ebcc348ff35",
"assets/assets/images/personal_center/copy.webp": "b1abd49c142a6c394afc9507cb9ce3a4",
"assets/assets/images/personal_center/progress_bubble.png": "e39614ecce87e94ba4b0e1fcc4038d2e",
"assets/assets/images/personal_center/icon_agreement.webp": "e5f368bba17649109c8ca62c1e28cfe0",
"assets/assets/images/personal_center/setting.webp": "7bb43abe9d632f6bfbea09db3146ff66",
"assets/assets/images/personal_center/icon_fail.webp": "578d08d5313c1c964a7eb453a2987ab0",
"assets/assets/images/personal_center/exchange.webp": "477143833f1c4bfce434a00ed1d5b92f",
"assets/assets/images/personal_center/agent_active.webp": "f342acbd88626743dc28e54e13526f30",
"assets/assets/images/personal_center/talent_new.webp": "037d193ebb8a7f4a44cb070e36a1e5fa",
"assets/assets/images/personal_center/icon_close.webp": "2c7bd462a71dd327b491c8bae960f17c",
"assets/assets/images/personal_center/icon_success_line.webp": "aa32e4d6cd156bfd546dbdff5a0dd350",
"assets/assets/images/report/report_exchange.png": "6e9b4c16be7fb87de067015d289484b5",
"assets/assets/images/report/report_agent_withdraw.png": "31495343cab41999bf8e1749b1a801ab",
"assets/assets/images/report/talent_live_duration.webp": "a71353acc8beeb536d5d51e4ad724f42",
"assets/assets/images/report/report_monthly_top_tips.png": "9509db9d6d8f71b99ff711072972f717",
"assets/assets/images/report/talent_active.webp": "8610bbd2c7dccf9a9128581f9f2583ee",
"assets/assets/images/report/report_transfer.png": "63f407bbf13f891fc055d99d3aa38b77",
"assets/assets/images/report/withdraw.webp": "43470fe5ae57ab134f2d524dee16f9e7",
"assets/assets/images/report/topup.webp": "b7dd92cd0c0da2185dc9fad620b4218b",
"assets/assets/images/report/transfer.webp": "f60665792e503babeb0367a140f15fea",
"assets/assets/images/report/agent_total.webp": "67fdf9197a74bb0102e9e20d45fe8d65",
"assets/assets/images/report/talent_earning.webp": "ec4bf8b3dd4f8678bbb54df004434973",
"assets/assets/images/report/report_month_exchange.png": "6ad696edfd560a310d87c92b529d53f6",
"assets/assets/images/report/report_agent_topup.png": "b95c18297e337ebd4b614f583841063a",
"assets/assets/images/report/history_talent.webp": "da86fc3300bc3ac17c86e1d0bf3cf6df",
"assets/assets/images/report/report_agent_earning.png": "5fc36798a4761ba8ae78dbb10c6ccc5b",
"assets/assets/images/report/agent_history.png": "464b1f7f1a47899fbdd5f41e22c89ecd",
"assets/assets/images/report/transfer_grey.webp": "bc289bcb5290dfe96e823542a831ea30",
"assets/assets/images/report/exchange.webp": "6ac021e069fa217277d5ec0ef18d56bb",
"assets/assets/images/report/live_dutation.webp": "6905b452203daa8fb1be079a4afad7d2",
"assets/assets/images/currency/gems.webp": "0d6171c288a747a428eeef14ce21f1f0",
"assets/assets/images/currency/beans.webp": "e048a1b508382495a7a4c8c63a38afbd",
"assets/assets/images/talent/add_talent.webp": "70acc471b91806d168066f6eb397487b",
"assets/assets/images/talent/history_talent.webp": "da86fc3300bc3ac17c86e1d0bf3cf6df",
"assets/assets/translations/en.json": "88cdfc1fcf81f2ae54d09002ee202afc",
"assets/assets/translations/zh-Hant.json": "8e33dc7aebef4c329103b89cf34b8105",
"main.dart.js_91.part.js": "c9c5853a13fa3964f426c1867d210a22",
"main.dart.js_28.part.js": "61538822d44469f0287f02cd1905bb64",
"main.dart.js_38.part.js": "817a4598d9f6a9dc17b8814a95e8fc67",
"main.dart.js_75.part.js": "408f529e40d8771317f66da485df4c0a",
"main.dart.js_2.part.js": "3c83d510a2d5bb88ab0a86d470bd5bfb",
"main.dart.js_65.part.js": "8062b389dfa157ab70ed6126536d8d18",
"main.dart.js_17.part.js": "5fb3010c3e3aea0379622d3a2d24a808",
"main.dart.js_88.part.js": "721e431906a036bb0e39bfcee8aa62a6",
"main.dart.js_21.part.js": "f1fcd0a9b5a26ef7ced350fe8c16793b",
"main.dart.js_53.part.js": "869259f191b73343acabc6cf250e226c",
"main.dart.js_43.part.js": "ab00791bf2aee9474a5353debf77c3e6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
