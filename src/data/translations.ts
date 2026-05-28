export type Language = 'en' | 'ar';

export interface TranslationSchema {
  // Navigation & Brand
  brandName: string;
  brandMorphic: string;
  connectWallet: string;
  disconnectWallet: string;
  walletConnected: string;
  cartBasket: string;
  cartKeys: string;
  browseCatalog: string;

  // Navigation Items
  navHome: string;
  navProducts: string;
  navServices: string;
  navContact: string;

  // Hero Section
  heroPre: string;
  heroLightTitle: string;
  heroBoldTitle: string;
  heroDesc: string;
  heroExploreBtn: string;
  heroWriteWithUs: string;
  heroFeaturedTag: string;
  heroActiveBid: string;
  heroNextDrop: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;

  // Hero Capsules
  capsuleAuthentic: string;
  capsuleCreators: string;
  capsuleStored: string;

  // Catalog / Product Grid
  catalogPre: string;
  catalogTitleBold: string;
  catalogTitleLight: string;
  catalogDesc: string;
  searchPlaceholder: string;
  sortLabel: string;
  sortPopular: string;
  sortLowHigh: string;
  sortHighLow: string;
  allManuals: string;
  buyManual: string;
  inCart: string;
  noManualsFound: string;
  noManualsSub: string;
  resetFilters: string;

  // Service Grid
  servicesPre: string;
  servicesTitleBold: string;
  servicesTitleLight: string;
  servicesDesc: string;
  serviceCoverage: string;
  agencyRetrainingTitle: string;
  agencyRetrainingDesc: string;
  agencyRetrainingBadge: string;

  // Contact Section
  contactPre: string;
  contactTitleBold: string;
  contactTitleLight: string;
  contactDesc: string;
  contactTerminal: string;
  contactEmailLabel: string;
  contactAddressLabel: string;
  contactAddressValue: string;
  contactHoursLabel: string;
  contactHoursValue: string;
  authorApplicationTitle: string;
  authorApplicationDesc: string;
  fieldIdLabel: string;
  fieldNamePlaceholder: string;
  fieldCoordsLabel: string;
  fieldCoordsPlaceholder: string;
  fieldSubjectLabel: string;
  fieldMessageLabel: string;
  fieldMessagePlaceholder: string;
  btnTransmit: string;
  btnSyncing: string;

  // Success Overlay
  successTitle: string;
  successDesc: string;
  successBtnClose: string;

  // Book Modal Detail
  activeEdition: string;
  standardCost: string;
  technicalSynopsisKey: string;
  keySyllabusKey: string;
  reviewRatingsKey: string;
  manualSizeKey: string;
  routingNodeKey: string;
  checksumCertificateKey: string;

  // Basket Drawer
  gasSurcharge: string;
  freeOption: string;
  subtotalBalance: string;
  authorizeCheckout: string;
  walletDisconnectedWarning: string;
  walletConnectBtn: string;
  checkoutProcessing: string;
  systemReadyStatus: string;
  miningSystemMsg: string;
  orderAuthorizedTitle: string;
  orderAuthorizedDesc: string;
  invoiceTicket: string;
  paymentMethod: string;
  transactionId: string;
  closeTerminal: string;
  cartEmpty: string;
  cartEmptySub: string;

  // Wallet Modal
  walletTitle: string;
  walletDesc: string;
  walletFooter: string;
  walletHandshake: string;
  walletPopupMsg: string;
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    brandName: 'FAO',
    brandMorphic: 'Books',
    connectWallet: 'Connect Wallet',
    disconnectWallet: 'Disconnect Node',
    walletConnected: 'Wallet Connected',
    cartBasket: 'Shopping Basket',
    cartKeys: 'keys',
    browseCatalog: 'Browse Catalog',

    navHome: 'Home',
    navProducts: 'Products',
    navServices: 'Services',
    navContact: 'Contact Us',

    heroPre: 'M A R K E T P L A C E   F O R',
    heroLightTitle: 'CREA',
    heroBoldTitle: 'TORS',
    heroDesc: 'An open marketplace where authors, engineers, and curious readers meet around the books that actually get us through our work.',
    heroExploreBtn: 'Explore Books',
    heroWriteWithUs: 'Write With Us',
    heroFeaturedTag: "Today's Featured Book",
    heroActiveBid: 'Active Release Bid',
    heroNextDrop: 'Next Digital Edition Drops In',
    countdownDays: 'Days',
    countdownHours: 'Hours',
    countdownMinutes: 'Minutes',
    countdownSeconds: 'Seconds',

    capsuleAuthentic: '100% Authenticity Verified',
    capsuleCreators: '50,000+ Active Creators',
    capsuleStored: '5k+ Tech Titles Authored',

    catalogPre: 'CURATED CODING CATALOG',
    catalogTitleBold: 'EXPLORE TECHNOLOGY',
    catalogTitleLight: 'INDEX',
    catalogDesc: 'Books written by engineers who shipped the systems they teach. Each title comes with a live code sandbox and a copy you can keep offline.',
    searchPlaceholder: 'Search concepts, tools, tags, authors...',
    sortLabel: 'Sort Index:',
    sortPopular: 'Highly Rated',
    sortLowHigh: 'Price: Low to High',
    sortHighLow: 'Price: High to Low',
    allManuals: 'All Manuals',
    buyManual: 'Buy Manual',
    inCart: 'in Cart',
    noManualsFound: 'No Manuals Found',
    noManualsSub: 'Try a different keyword or clear the filters.',
    resetFilters: 'Reset Filters',

    servicesPre: 'EXTENDED SERVICE DECK',
    servicesTitleBold: 'DEVELOPER LEARNING',
    servicesTitleLight: 'SERVICES',
    servicesDesc: 'Beyond the PDFs: live code sandboxes, direct author Q&A, and team licensing for engineering orgs that need everyone on the same page.',
    serviceCoverage: 'Service Coverage',
    agencyRetrainingTitle: 'DOES YOUR AGENCY REQUIRE CORPORATE RETRAINING?',
    agencyRetrainingDesc: 'Bring the whole engineering team onto the same references. Bulk licenses, a private support channel, and weekly office hours with our authors.',
    agencyRetrainingBadge: 'Inquire via our Contact Form for 20% Team Discount',

    contactPre: 'SECURE TRANSMISSION NODE',
    contactTitleBold: 'CONTACT',
    contactTitleLight: 'US',
    contactDesc: 'Team licensing question, an author pitch, or a missing print shipment? Drop us a line.',
    contactTerminal: 'Primary Comm Terminal',
    contactEmailLabel: 'Email Channel',
    contactAddressLabel: 'Physical HQ Coordinates',
    contactAddressValue: 'Silicon District, Node Suite 3000\nSouth Tech Boulevard, UK Office',
    contactHoursLabel: 'Author Support Response',
    contactHoursValue: 'Mon - Fri | 09:00 - 18:00 UTC\nAverage response time under 4h.',
    authorApplicationTitle: 'Author Applications Active',
    authorApplicationDesc: 'Pitching a systems book or programming title? Tell us a bit about what you have shipped. We pay 85% on digital sales, and every draft goes through peer review with working engineers before it goes live.',
    fieldIdLabel: 'Developer Identifier (Name)',
    fieldNamePlaceholder: 'e.g. Satoshi Nakamoty',
    fieldCoordsLabel: 'Reply Coordinates (Email)',
    fieldCoordsPlaceholder: 'e.g. dev@domain.io',
    fieldSubjectLabel: 'Routing Subject Topic',
    fieldMessageLabel: 'Transmitted Information (Message)',
    fieldMessagePlaceholder: 'Details about your inquiry...',
    btnTransmit: 'Transmit Message',
    btnSyncing: 'Syncing nodes...',

    successTitle: 'TRANSMISSION SUCCESSFUL',
    successDesc: 'Message sent. Support usually replies within a few hours.',
    successBtnClose: 'Open Console',

    activeEdition: 'Active Edition V1.0.4',
    standardCost: 'Standard Digital Cost',
    technicalSynopsisKey: 'Technical Synopsis',
    keySyllabusKey: 'Key Syllabus Blueprints Included',
    reviewRatingsKey: 'Review Rating',
    manualSizeKey: 'Manual Size',
    routingNodeKey: 'Routing Node',
    checksumCertificateKey: 'Encryption Certificate File',

    gasSurcharge: 'Gas Surcharge Estimator:',
    freeOption: '0.02 ETH / FREE',
    subtotalBalance: 'Subtotal Balance:',
    authorizeCheckout: 'Authorize Digital Checkout',
    walletDisconnectedWarning: 'No wallet connected yet. Hook one up to finish checkout.',
    walletConnectBtn: 'Connect Wallet Node',
    checkoutProcessing: 'CHECKOUT PROCESSING',
    systemReadyStatus: 'SYSTEM: OK',
    miningSystemMsg: 'Writing the transaction to the chain. Keep this tab open until it confirms.',
    orderAuthorizedTitle: 'ORDER AUTHORIZED',
    orderAuthorizedDesc: 'Your books are ready. EPUBs, sandbox access, and the support channel are all tied to your wallet address.',
    invoiceTicket: 'Ledger Invoice Ticket',
    paymentMethod: 'Method:',
    transactionId: 'Transaction ID:',
    closeTerminal: 'Close Terminal',
    cartEmpty: 'Your cart is empty.',
    cartEmptySub: 'Pick a book from the catalog to get started.',

    walletTitle: 'CONNECT TO MARKETPLACE',
    walletDesc: 'Connect a wallet to pay, claim a signed proof of purchase, and open the team training portal.',
    walletFooter: 'Signed with SHA-256.\nWe never see your keys or seed phrase.',
    walletHandshake: 'CONNECTION HANDSHAKE',
    walletPopupMsg: 'Approve the signature request in your wallet app to continue.',
  },
  ar: {
    brandName: 'FAO',
    brandMorphic: 'كتب',
    connectWallet: 'ربط المحفظة',
    disconnectWallet: 'قطع الاتصال',
    walletConnected: 'المحفظة متصلة',
    cartBasket: 'سلة التسوق',
    cartKeys: 'تراخيص',
    browseCatalog: 'تصفح الكتالوج',

    navHome: 'الرئيسية',
    navProducts: 'الكتب والبرمجيات',
    navServices: 'خدماتنا',
    navContact: 'اتصل بنا',

    heroPre: 'سوق مخصص للمبدعين',
    heroLightTitle: 'المبد',
    heroBoldTitle: 'عين',
    heroDesc: 'سوق مفتوح يجمع المؤلفين والمهندسين والقرّاء الفضوليين حول الكتب التي ساعدتنا فعلاً في عملنا اليومي.',
    heroExploreBtn: 'استكشاف الكتب',
    heroWriteWithUs: 'انضم إلينا ككاتب',
    heroFeaturedTag: 'الكتاب المميز اليوم',
    heroActiveBid: 'المزايدة النشطة للإصدار',
    heroNextDrop: 'الإصدار الرقمي القادم ينطلق خلال',
    countdownDays: 'أيام',
    countdownHours: 'ساعات',
    countdownMinutes: 'دقائق',
    countdownSeconds: 'ثواني',

    capsuleAuthentic: 'توثيق أصالة وموثوقية بنسبة ١٠٠٪',
    capsuleCreators: 'أكثر من ٥٠,٠٠٠ مبدع نشط',
    capsuleStored: 'تأليف أكثر من ٥ آلاف كتاب تقني',

    catalogPre: 'كتالوج أكواد منسق ومهيكل',
    catalogTitleBold: 'استكشاف فهرس',
    catalogTitleLight: 'التكنولوجيا',
    catalogDesc: 'كتب يكتبها مهندسون أطلقوا الأنظمة التي يشرحونها. كل كتاب يأتي بمحرّر أكواد حيّ ونسخة تحتفظ بها بلا إنترنت.',
    searchPlaceholder: 'ابحث عن مفاهيم، أدوات، وسوم، مؤلفين...',
    sortLabel: 'ترتيب حسب:',
    sortPopular: 'الأعلى تقييماً',
    sortLowHigh: 'السعر: من الأقل للأعلى',
    sortHighLow: 'السعر: من الأعلى للأقل',
    allManuals: 'كل الكتيبات',
    buyManual: 'شراء الدليل التقني',
    inCart: 'في السلة',
    noManualsFound: 'لم يتم العثور على كتيبات برمجية',
    noManualsSub: 'جرّب كلمة مختلفة أو امسح الفلاتر.',
    resetFilters: 'إعادة تعيين الفلاتر',

    servicesPre: 'لوحة الخدمات الموسعة',
    servicesTitleBold: 'خدمات تدريب وتأهيل',
    servicesTitleLight: 'المطورين',
    servicesDesc: 'أبعد من ملفات PDF: محرّرات أكواد حيّة، جلسات أسئلة مباشرة مع المؤلفين، وتراخيص جماعية للفرق الهندسية.',
    serviceCoverage: 'تغطية الخدمة',
    agencyRetrainingTitle: 'هل تحتاج شركتك إلى إعادة تأهيل وتدريب فريقها الهندسي؟',
    agencyRetrainingDesc: 'ضمّ فريقك الهندسي كاملاً إلى نفس المراجع. تراخيص جماعية، قناة دعم خاصة، وساعات أسبوعية مفتوحة مع المؤلفين.',
    agencyRetrainingBadge: 'استفسر عبر نموذج الاتصال للحصول على خصم ٢٠٪ للفريق',

    contactPre: 'عقدة الإرسال والاتصال الآمنة',
    contactTitleBold: 'اتصل',
    contactTitleLight: 'بنا',
    contactDesc: 'سؤال عن تراخيص الفرق، فكرة كتاب تودّ نشرها، أو شحنة مطبوعة تأخّرت؟ راسلنا.',
    contactTerminal: 'قناة الاتصال الرئيسية',
    contactEmailLabel: 'مراسلة البريد الإلكتروني',
    contactAddressLabel: 'إحداثيات المقر الرئيسي',
    contactAddressValue: 'حي السيليكون، جناح العقدة ٣٠٠٠\nبوابة التكنولوجيا الجنوبية، إدارة المملكة المتحدة',
    contactHoursLabel: 'سرعة استجابة دعم المؤلفين',
    contactHoursValue: 'الإثنين - الجمعة | ٠٩:٠٠ - ١٨:٠٠ بالتوقيت العالمي\nمعدل الاستجابة لا يتعدى ٤ ساعات.',
    authorApplicationTitle: 'باب طلبات تقديم مسودات التأليف مفتوح',
    authorApplicationDesc: 'تفكّر في نشر كتاب عن الأنظمة أو لغة برمجة؟ احكِ لنا بإيجاز ماذا بنيت من قبل. المؤلف يحصل على ٨٥٪ من المبيعات الرقمية، وكل مسوّدة تمرّ على مهندسين زملاء للمراجعة قبل النشر.',
    fieldIdLabel: 'معرّف المطور (الاسم)',
    fieldNamePlaceholder: 'مثال: ساتوشي ناكاموتو',
    fieldCoordsLabel: 'إحداثيات الرد (البريد الإلكتروني)',
    fieldCoordsPlaceholder: 'مثال: dev@domain.io',
    fieldSubjectLabel: 'موضوع الرسالة والتوجيه',
    fieldMessageLabel: 'المحتوى المرسل (الرسالة)',
    fieldMessagePlaceholder: 'تفاصيل استفسارك وحاجتك...',
    btnTransmit: 'إرسال الرسالة الآمنة',
    btnSyncing: 'مزامنة العقد الحالية...',

    successTitle: 'تم إرسال الرسالة بنجاح',
    successDesc: 'وصلتنا رسالتك. عادةً نردّ خلال ساعات قليلة.',
    successBtnClose: 'فتح لوحة التحكم اللاسلكية',

    activeEdition: 'الإصدار النشط V1.0.4',
    standardCost: 'التكلفة القياسية للمرجع الرقمي',
    technicalSynopsisKey: 'ملخص المضمون التقني',
    keySyllabusKey: 'مخططات ومحتويات المنهج المشمولة',
    reviewRatingsKey: 'تقييم المراجعين',
    manualSizeKey: 'حجم الكتاب',
    routingNodeKey: 'عنوان عقدة التوجيه',
    checksumCertificateKey: 'شهادة التشفير والأمان للملف',

    gasSurcharge: 'تكلفة معالجة المعاملة (الغاز):',
    freeOption: '0.02 ETH / مجاني بالكامل',
    subtotalBalance: 'رصيد الفاتورة الإجمالي:',
    authorizeCheckout: 'تفويض السداد الرقمي والترخيص',
    walletDisconnectedWarning: 'لا توجد محفظة متصلة بعد. اربط واحدة لإكمال الدفع.',
    walletConnectBtn: 'تأمين اتصال المحفظة الرقمية',
    checkoutProcessing: 'معالجة وتفويض عملية الشراء',
    systemReadyStatus: 'حالة النظام: فعال وآمن',
    miningSystemMsg: 'نسجّل المعاملة على السلسلة الآن. أبقِ هذه الصفحة مفتوحة حتى يكتمل التأكيد.',
    orderAuthorizedTitle: 'تم تفويض وتسجيل أمر الشراء',
    orderAuthorizedDesc: 'كتبك جاهزة. ملفات EPUB، صلاحيات بيئات الكود، وقناة الدعم كلها مربوطة بعنوان محفظتك.',
    invoiceTicket: 'تذكرة فاتورة السجل اللامركزي',
    paymentMethod: 'طريقة الدفع:',
    transactionId: 'معرف المعاملة (TxID):',
    closeTerminal: 'إغلاق لوحة التحكم',
    cartEmpty: 'سلتك فارغة.',
    cartEmptySub: 'اختر كتاباً من الفهرس للبدء.',

    walletTitle: 'الاتصال بالمنصة الرقمية',
    walletDesc: 'اربط محفظتك لإتمام الدفع، واستلام إثبات شراء موقّع، وفتح بوابة التدريب الجماعي.',
    walletFooter: 'موقّع بـ SHA-256.\nلا نرى مفاتيحك ولا عبارة الاسترداد.',
    walletHandshake: 'المصافحة وتأمين الاتصال الجاري',
    walletPopupMsg: 'وافق على طلب التوقيع داخل تطبيق محفظتك للمتابعة.',
  }
};

// Translate items directly inside translation module
export const getLocalizedBook = (book: any, lang: Language) => {
  if (lang === 'en') return book;
  
  // Custom AR versions for all 6 books to represent robust translation values
  const bookTranslations: Record<string, { title: string; subtitle: string; synopsis: string; features: string[] }> = {
    'system-design': {
      title: 'مقابلات تصميم الأنظمة ومخططاتها العملية',
      subtitle: 'قواعد بيانات موزّعة، توسيع جغرافي، وخدمات مصغّرة',
      synopsis: 'كتاب لمهندسين يُطلب منهم باستمرار تصميم أنظمة لم يبنوها من قبل. تمشي الفصول داخل معماريات تطبيقات تستخدمها يومياً: ما الذي جُرّب وفشل، وما الذي نجا، ولماذا.',
      features: [
        'أنماط توسيع تصمد بعد عبور ١٠ ملايين مستخدم يومي.',
        'متى يفوز SQL على NoSQL، وفي أي حالات نادرة يستحق NewSQL.',
        'موازنات الكاش، حدود الطلبات، وقرارات CDN كما تواجهها في الإنتاج.',
        'إجابات نموذجية محلولة لجولات تصميم الأنظمة في مقابلات الشركات الكبرى.'
      ]
    },
    'rust-systems': {
      title: 'دليل هندسة الأنظمة بلغة Rust',
      subtitle: 'أداء حقيقي، تعدّد مهام آمن، وهندسة منخفضة المستوى',
      synopsis: 'Rust بدون دراما الـ borrow checker. إدارة ذاكرة بلا GC، مسارات تعدّد لا تتعثّر، ونفس الكود يعمل في المتصفح عبر WebAssembly.',
      features: [
        'شرح الـ borrow checker كما يشرحه صديق لصديقه.',
        'أنماط تعدّد مهام لا تنتهي بمكالمة طوارئ في الثالثة فجراً.',
        'مُخصِّصات ذاكرة مكتوبة يدوياً، مع كود الـ assembly الناتج للإثبات.',
        'نفس كود Rust يعمل داخل المتصفح عبر WebAssembly.'
      ]
    },
    'typescript-react': {
      title: 'TypeScript و React 19 في الممارسة',
      subtitle: 'مكوّنات خادم، أنماط صارمة، ومعمارية واضحة',
      synopsis: 'React 19 كما تُطلقه الفرق فعلاً في 2026. مكوّنات خادم، أنماط TypeScript صارمة، وإعدادات Vite كأنك تقرأها من مشروع حقيقي.',
      features: [
        'Generics تُقرأ كجملة طبيعية، لا كأحجية.',
        'Concurrent rendering و transitions، والمواضع التي ينكسر فيها Suspense.',
        'إدارة الحالة دون الاعتماد على مكتبة ثالثة.',
        'أخطاء الـ hydration وذاكرة Vite، مفكوكة لك مسبقاً.'
      ]
    },
    'generative-ai': {
      title: 'أساسيات الذكاء التوليدي والنماذج اللغوية الكبيرة',
      subtitle: 'من خلايا الانتباه حتى وكلاء يعملون باستقلال',
      synopsis: 'من وحدة انتباه متعدد الرؤوس بـ PyTorch خام، إلى حلقة وكيل تعمل فعلياً. المعادلات حاضرة حين تحتاجها، والكود حاضر حين لا تحتاجها.',
      features: [
        'رياضيات الانتباه والـ Transformer، بكل المصفوفات مكتوبة.',
        'اكتب tokenizer خاصاً بك في PyTorch، سطراً بعد سطر.',
        'وكلاء يتحدثون مع واجهات API، آلات حاسبة، وأدواتك أنت.',
        'RAG والـ embeddings، من الفهرسة إلى الأماكن التي تتعطّل فيها في الإنتاج.'
      ]
    },
    'go-microservices': {
      title: 'خدمات مصغّرة بلغة Go للسحابة',
      subtitle: 'بوابات API بحاويات، gRPC، وأنابيب Kubernetes',
      synopsis: 'Go هي اللغة التي كُتب بها معظم البنية السحابية حولك. الكتاب يغطّي API سريعة، اتصال gRPC بين الخدمات، حاويات لا تتضخّم، وأنابيب Kubernetes تنجو من نشر يوم الجمعة.',
      features: [
        'خوادم على goroutines و channels، بدون الفخاخ المعتادة.',
        'gRPC و HTTP/2 فوق protobuf، مع أرقام كمون واقعية.',
        'ملفات Docker، فحوصات صحة، وإدارة أسرار تنجح في تدقيق حقيقي.',
        'نشر على Kubernetes يتوسّع ذاتياً ويعيد إصلاح نفسه.'
      ]
    },
    'advanced-fullstack': {
      title: 'وصفات التطبيقات الكاملة المتقدّمة',
      subtitle: 'مكدّسات حديثة، بيانات علائقية، WebSockets، و DevOps',
      synopsis: 'وصفات للأجزاء الفوضوية: ترحيل قاعدة بيانات حيّة بلا توقّف، مزامنة حالة لعبة على WebSockets، وضبط المصادقة عندما يكبر الفريق.',
      features: [
        'علاقات SQL، triggers، وفهارس عبر Prisma.',
        'مزامنة ثنائية الاتجاه على WebSockets، مع إعادة اتصال تعمل فعلاً.',
        'جلسات JWT، تجزئة كلمات المرور، وتدوير مفاتيح لا يطرد المستخدمين.',
        'أنابيب CI/CD على GitHub Actions يمكن نسخها كما هي.'
      ]
    }
  };

  const localized = bookTranslations[book.id];
  if (!localized) return book;

  return {
    ...book,
    title: localized.title,
    subtitle: localized.subtitle,
    synopsis: localized.synopsis,
    features: localized.features
  };
};

export const getLocalizedService = (service: any, lang: Language) => {
  if (lang === 'en') return service;

  const serviceTranslations: Record<string, { title: string; description: string; badge: string; metrics: string }> = {
    'cyber-sandbox': {
      title: 'بيئات أكواد حيّة داخل المتصفح',
      description: 'كل فصل يأتي بمحرّر أكواد حيّ. شغّل التمارين من المتصفح، بدون إعداد محلي ولا مقبرة لـ node_modules.',
      badge: 'مختبر الأكواد',
      metrics: 'أكثر من ٥٠ تجربة قابلة للتشغيل في كل كتاب'
    },
    'universal-access': {
      title: 'نزّل الكتاب بأي صيغة تريدها',
      description: 'نزّل الكتاب بصيغة EPUB أو PDF أو دفاتر Jupyter أو صوت. اقرأ بدون إنترنت، بلا DRM. ما تشتريه يبقى ملكك.',
      badge: 'بدون DRM',
      metrics: '٤ صيغ + تحديثات مدى الحياة'
    },
    'author-connect': {
      title: 'تواصل مباشر مع المؤلف',
      description: 'علقت في فصل؟ كل عملية شراء تفتح لك جلسات أسئلة شهرية، وأحياناً مراجعة Pull Request مباشرة من المؤلف.',
      badge: 'دعم فردي',
      metrics: 'جلسات شهرية حيّة مع المؤلفين'
    },
    'team-portals': {
      title: 'بوابة الفرق والشركات',
      description: 'ضمّ فريق الهندسة بأكمله دفعة واحدة. تراخيص جماعية، صلاحيات حسب الدور، ومسار قراءة منسّق لكل فريق.',
      badge: 'للفرق',
      metrics: 'يبدأ من ٥ ويتسع لـ ٥٠٠٠+ عضو'
    },
    'community-hubs': {
      title: 'مجتمعات مغلقة لكل كتاب',
      description: 'قناة خاصة لكل كتاب. شارك كودك، اطلب مراجعة، تابع إعلانات التوظيف، وتحدّث مع المؤلف عندما لا يتّضح شيء.',
      badge: 'قنوات خاصة',
      metrics: '١٢ ألف مطوّر نشط'
    },
    'premium-transit': {
      title: 'طبعات ورقية تصل إلى باب بيتك',
      description: 'تفضّل الورق؟ ورق ثقيل، تجليد متين، وملصق هولوجرام على الغلاف الخلفي. الشحن في علبة لا تتعرّض للسحق في الطريق.',
      badge: 'شحن عالمي',
      metrics: 'متوسط الوصول ٣ أيام دولياً'
    }
  };

  const localized = serviceTranslations[service.id];
  if (!localized) return service;

  return {
    ...service,
    title: localized.title,
    description: localized.description,
    badge: localized.badge,
    metrics: localized.metrics
  };
};
