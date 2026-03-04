import type { ProfileData } from '@/types';

export const profileData: ProfileData = {
  personalInfo: {
    name_en: "Khattab Ali Hassan",
    name_ar: "خطاب علي حسن",
    title_en: "Operations Specialist",
    title_ar: "أخصائي عمليات",
    remoteOpportunities_en: "Open to strategic operational optimization (Remote/Hybrid/on-site)",
    remoteOpportunities_ar: "متاح لمشاريع تطوير وتحسين بيئات العمل التشغيلية (عن بُعد / هجين / داخل الموقع).",
    gender_en: "Male",
    gender_ar: "ذكر",
    birthDate: "1996-05-04",
    maritalStatus_en: "single",
    maritalStatus_ar: "أعزب",
    nationality_en: "Iraqi",
    nationality_ar: "عراقي",
    residence_en: "",
    residence_ar: "",
    passport_en: "Iraqi",
    passport_ar: "عراقي",
    summary_en: "Operations Specialist dedicated to architecting integrated systems that bridge the gap between financial intelligence, logistics, and technical infrastructure. I engineer operational flows that eliminate friction and drive sustainable profitability.",
    summary_ar: "أخصائي عمليات بخبرة ست سنوات، أتخصص في ربط (المالية، اللوجستية، والمحاسبة) بالنظم التقنية لإنهاء التخبط الإداري وضبط مسار الربحية من الداخل.",
    about_me_en: "I believe that true growth isn't about effort alone, but about the synergy between strategy and technical intelligence. As your partner, my focus is on engineering an environment where data drives decisions and technology serves the core mission.",
    about_me_ar: "أحوّل الاحتكاك التشغيلي إلى نتائج مالية واضحة عبر تنفيذ حلول رقمية عملية تُنهي الاختناقات وتعيد ضبط مسار العمل.\n\nأبدأ من فهم الواقع الميداني، ثم أبني نظاماً مترابطاً بمؤشرات أداء دقيقة تضع كل قرار في سياقه الصحيح.\n\nهدفي تقليل الهدر، تسريع القرار، وتحويل المخاطر إلى قيمة مستدامة يمكن قياس أثرها بثقة.",
    photoUrl: "profile-pic",
    cvUrl: "/cv/khattab ali- cv.pdf"
  },
  visionAndMission: {
    vision_en: "To lead the transformation of traditional business operations into lean, data-driven engines of growth and stability.",
    vision_ar: "قيادة التحول في العمليات التقليدية لتصبح محركات نمو واستقرار رشيقة تعتمد على البيانات.",
    mission_en: "Integrating finance, logistics, and technology into a single source of truth to maximize operational ROI.",
    mission_ar: "دمج المالية واللوجستية والتقنية في مصدر واحد للحقيقة لتعظيم العائد على الاستثمار التشغيلي."
  },
  contactInfo: {
    phone: "+9647758866988",
    email: "Khtabaldwry927@gmail.com",
    whatsapp: "https://wa.me/9647758866988"
  },
  solutions: {
    title_en: "Organizing businesses and building integrated solutions",
    title_ar: "تنظيم الأعمال وبناء حلول متكاملة",
    subtitle_en: "From Chaos to Integrated Control",
    subtitle_ar: "من الفوضى إلى السيطرة المتكاملة",
    intro_en: "I transform scattered processes into a practical system that gives you greater control and measurable results..",
    intro_ar: "أحوّل العمليات المبعثرة إلى نظام عملي يمنحك سيطرة أكبر ونتائج قابلة للقياس..",
    items: [
      {
        id: "organization-foundation",
        title_en: "Foundation Architecture",
        title_ar: "تنظيم الأساس",
        problem_en: "When operations rely on personal effort and scattered sheets, the system becomes the bottleneck.",
        problem_ar: "إذا كانت أعمالك تعتمد على الاجتهاد الشخصي، الجداول المتفرقة، وكثرة الأسئلة… فالمشكلة ليست في الفريق، بل في النظام الذي يقيدهم.",

        points_en: [
          "Workflow standardization",
          "Accountability mapping",
          "Error reduction systems"
        ],
        points_ar: [
          "توحيد مسارات العمل",
          "رسم خرائط المسؤوليات",
          "أنظمة تقليل الأخطاء"
        ],
        outcome_en: "Operations that run like clockwork with total clarity.",
        outcome_ar: "عملٌ يسير \"مثل الساعة\"، أخطاء أقل، ووضوح تام في المسؤوليات.",
        icon: "Workflow",
        context_en: '',
        context_ar: ''
      },
      {
        id: "unified-core",
        title_en: "Unified Operational Core",
        title_ar: "توحيد الصورة",
        problem_en: "Disconnected departments lead to lost data and hunting for truth across files.",
        problem_ar: "عندما لا تتحدث الأقسام مع بعضها، تضيع الأرقام ويُهدر الوقت في البحث عن الحقيقة بين الملفات.",
        points_en: [
          "Department synchronization",
          "Real-time financial visibility",
          "Data-driven decision core"
        ],
        points_ar: [
          "مزامنة الإدارات",
          "رؤية مالية لحظية",
          "مركز قرارات مبني على البيانات"
        ],
        outcome_en: "Instant visibility for accurate, data-driven decisions.",
        outcome_ar: "رؤية واضحة لحظياً لواقعك المالي واللوجستي، وقرارات مبنية على بيانات لا تخطئ.",
        icon: "ServerCog",
        context_en: '',
        context_ar: ''
      },
      {
        id: "action-engines",
        title_en: "Systems as \"Action Engines\"",
        title_ar: "تحويل الأدوات إلى \"محرك فعل\"",
        problem_en: "Owning digital tools is common; knowing how to link them into an execution system is rare.",
        problem_ar: "الكل يملك أدوات رقمية، لكن القليل من يعرف كيف يربطها لتصبح نظاماً ينفذ العمل عنك.",
        points_en: [
          "Cross-tool integration",
          "Automated reporting",
          "Elimination of daily chaos"
        ],
        points_ar: [
          "ربط الأدوات الرقمية",
          "أتمتة التقارير",
          "إنهاء الفوضى اليومية"
        ],
        outcome_en: "A synchronized team and end to manual daily chaos.",
        outcome_ar: "تعاون أسرع بين فريقك، تقارير جاهزة دائماً، وانتهاء الفوضى اليومية للأبد.",
        icon: "MonitorCog",
        context_en: '',
        context_ar: ''
      },
      {
        id: "ai-efficiency",
        title_en: "AI-Powered Scaling",
        title_ar: "رفع الكفاءة بالذكاء",
        problem_en: "Valuable talent shouldn't be wasted on repetitive, low-impact manual data entry.",
        problem_ar: "لا ينبغي أن يضيع وقت فريقك الثمين في مهام روتينية ومملة يمكن للآلة القيام بها بدقة أعلى.",

        points_en: [
          "Routine task automation",
          "AI-driven precision",
          "Productivity multipliers"
        ],
        points_ar: [
          "أتمتة المهام الروتينية",
          "دقة معززة بالذكاء",
          "مضاعفات الإنتاجية"
        ],
        outcome_en: "Doubled productivity and a team focused on growth.",
        outcome_ar: "إنتاجية تتضاعف، وفريقٌ متفرغ تماماً للتطوير والنمو بدلاً من \"تعبئة البيانات\".",
        icon: "BrainCircuit",
        context_en: '',
        context_ar: ''
      }
    ],
    outro_en: "Practical solutions that make a real difference and stay with you for the long term.",
    outro_ar: "حلول عملية تُحدث فرقًا حقيقيًا وتبقى معك على المدى الطويل."
  },
  successStories: [
    {
      title_en: "Restoring Financial and Administrative Control",
      title_ar: "استعادة السيطرة المالية والادارية",
      problem_en: "A commercial firm losing financial visibility due to scattered paper ledgers and unlinked debt tracking.",
      problem_ar: "شركة تجارية فقدت الرؤية المالية بسبب تشتت السجلات الورقية وتتبع الديون غير المتربط.",
      implementation_en: "Transferred a commercial company from paper record chaos to a unified system providing real-time financial visibility.",
      implementation_ar: "نقلت شركة تجارية من فوضى السجلات الورقية إلى نظام موحّد يمنح رؤية مالية لحظية.",
      result_en: "Accomplished zeroing out debt discrepancies and restoring full control over cash flows.",
      result_ar: "النتيجة كانت تصفير فروقات الديون واستعادة التحكم الكامل في التدفقات."
    },
    {
      title_en: "Transforming Data into Decision Power",
      title_ar: "تحويل البيانات إلى قوة قرار",
      problem_en: "A business drowning in unlinked Excel files, making performance reporting impossible.",
      problem_ar: "عمل تجاري غارق في ملفات إكسل غير مترابطة، مما جعل استخراج تقارير الأداء مستحيلاً.",
      implementation_en: "Reorganized a fragmented data environment into a unified dashboard providing live performance indicators.",
      implementation_ar: "أعدت تنظيم بيئة بيانات مشتتة إلى لوحة تحكم موحدة توفر مؤشرات أداء مباشرة.",
      result_en: "Decisions are now made in minutes instead of days of manual searching and analysis.",
      result_ar: "أصبح القرار يُتخذ خلال دقائق بدل أيام من البحث والتحليل اليدوي."
    },
    {
      title_en: "Significantly Increasing Productivity",
      title_ar: "رفع الإنتاجية بنسبة ملموسة",
      problem_en: "Massive operational backlog threatening growth, requiring months of manual cleanup.",
      problem_ar: "تراكم تشغيلي ضخم هدد النمو، وكان يتطلب شهوراً من التنظيف اليدوي.",
      implementation_en: "Addressed an administrative backlog that consumed months of manual work through smart automation.",
      implementation_ar: "عالجت تراكمًا إداريًا كان يستهلك شهورًا من العمل اليدوي عبر أتمتة ذكية.",
      result_en: "Execution time was reduced to approximately a quarter of the duration with minimized error rates.",
      result_ar: "تم تقليص زمن التنفيذ إلى ربع المدة تقريبًا مع تقليل الأخطاء إلى الحد الأدنى."
    },
    {
      title_en: "Turning Field Chaos into a Performance System",
      title_ar: "تحويل الفوضى الميدانية إلى نظام أداء",
      problem_en: "Operational leaks and resource waste in livelihood programs due to lack of tracking.",
      problem_ar: "تسرب تشغيلي وهدر للموارد في برامج سبل العيش بسبب غياب التتبع.",
      implementation_en: "Organized wasteful operational programs into a clear, result-oriented monitoring system.",
      implementation_ar: "نُظمت برامج تشغيلية تعاني من الهدر إلى منظومة متابعة واضحة قائمة على النتائج.",
      result_en: "The transformation was both technical and cultural, fostering discipline and sustainable growth.",
      result_ar: "التحول لم يكن تقنيًا فقط، بل ثقافيًا نحو الانضباط والنمو المستدام."
    }
  ],


  experience_public: [
    {
      company_en: "Foundation Sorouh for Sustainable Development",
      company_ar: "مؤسسة صروح للتنمية المستدامة",
      title_en: "Finance Assistant",
      title_ar: "مساعد مالي",
      period_en: "2023/5 - 2023/10",
      period_ar: "2023/5 - 2023/10",
      description_en: "",
      description_ar: "",
      details_en: [
        "Recorded daily financial transactions ensuring accuracy in compliance with approved financial policies and organizational accounting procedures.",
        "Prepared and reviewed financial documents including invoices, payment orders, and expense logs, ensuring alignment with budgets and administrative approvals.",
        "Supported the preparation of monthly and periodic financial reports for projects and programs, providing accurate data to the accountant or financial manager on time.",
        "Coordinated with project and procurement teams to ensure proper financial documentation for all field activities and expenditures, per donor requirements and internal policies."
      ],
      details_ar: [
        "تسجيل المعاملات المالية اليومية وضمان دقتها وفق السياسات المالية المعتمدة وإجراءات المحاسبة الخاصة بالمنظمة.",
        "إعداد ومراجعة المستندات المالية مثل الفواتير، أوامر الدفع، وسجلات المصروفات، والتأكد من مطابقتها للميزانيات والموافقات الإدارية.",
        "دعم إعداد التقارير المالية الشهرية والدورية للمشاريع والبرامج، وتقديم البيانات الدقيقة إلى المحاسب أو المدير المالي في الوقت المحدد.",
        "التنسيق مع فرق المشاريع والمشتريات لضمان التوثيق المالي السليم لجميع الأنشطة الميدانية والمصروفات، وفقًا لمتطلبات الجهات المانحة والسياسات الداخلية."
      ],
      logoUrl: "/working/sorouh.jpg",
    },
    {
      company_en: "Janat Al-Fardos (UNDP Partner)",
      company_ar: "مؤسسة جنات الفردوس (شريك UNDP)",
      title_en: "Data Entry & info Assistant",
      title_ar: "مساعد إدخال بيانات ومعلومات",
      period_en: "2024/July - 2024/Sep",
      period_ar: "2024/تموز - 2024/أيلول",
      description_en: "",
      description_ar: "",
      details_en: [
        "Maintain and enhance data collection systems (Activity Info, Kobo, Power BI), adapt tools to evolving operational needs.",
        "Entered data and information with high precision into project systems and databases following organizational procedures.",
        "Ensure accurate, timely collection, analysis, and reporting of program data, producing dashboards, charts, and maps to inform program management and decision‑making."
      ],
      details_ar: [
        "صيانة وتحسين أنظمة جمع البيانات (Activity Info, Kobo, Power BI)، وتكييف الأدوات لتلبية الاحتياجات التشغيلية المتطورة.",
        "إدخال البيانات والمعلومات بدقة عالية في أنظمة المشاريع وقواعد البيانات باتباع الإجراءات التنظيمية.",
        "ضمان جمع وتحليل وإعداد تقارير بيانات البرنامج بشكل دقيق وفي الوقت المناسب، وإنتاج لوحات المعلومات والمخططات والخرائط لإعلام إدارة البرنامج واتخاذ القرار."
      ],
      logoUrl: "/working/undp.jpg",
    },
    {
      company_en: "Foundation Janat Al-Fardos for Relief and Development (JF)",
      company_ar: "مؤسسة جنات الفردوس للاغاثة والتنمية (JF)",
      title_en: "Administrative Officer",
      title_ar: "مسؤول اداري",
      period_en: "2019 - 2022",
      period_ar: "2019 - 2022",
      description_en: "",
      description_ar: "",
      details_en: [
        "Organized and executed administrative and logistical operations in the office and field, supporting humanitarian activities related to migration, IDPs, and livelihoods according to organizational policies and international humanitarian standards.",
        "Supervised inventory, procurement, and warehouse management, ensuring transparency in the movement of relief materials and field equipment with precise tracking and documentation.",
        "Contributed to financial and administrative follow-up for humanitarian projects by reviewing expenditures, verifying supporting documents, and ensuring compliance with budgets and financial systems.",
        "Prepared periodic administrative and logistical reports reflecting activity progress, inventory status, and operational expenses for management and donors within deadlines.",
        "Ensured compliance with legal and regulatory policies concerning organizational operations, data protection, and safety procedures during emergency and disaster response projects."
      ],
      details_ar: [
        "تنظيم وتنفيذ العمليات الإدارية واللوجستية في المكتب والميدان، لضمان دعم الأنشطة الإنسانية المتعلقة بالهجرة والنازحين وسبل العيش وفق سياسات المنظمة والمعايير الإنسانية الدولية.",
        "الإشراف على إدارة المخزون والمشتريات والمخازن، وضمان الشفافية في حركة المواد الإغاثية والمعدات الميدانية مع تطبيق إجراءات التتبع والتوثيق الدقيقة.",
        "المساهمة في المتابعة المالية والإدارية للمشاريع الإنسانية من خلال مراجعة المصروفات، التحقق من الوثائق الداعمة، وضمان الامثال للميزانيات والأنظمة المالية.",
        "إعداد التقارير الإدارية واللوجستية الدورية التي تعكس تقدم الأنشطة، حالة المخزون، والمصروفات التشغيلية، ورفعها إلى الإدارة أو الجهات المانحة في المواعيد المحددة.",
        "ضمان الامتثال للسياسات القانونية والتنظيمية المتعلقة بعمل المنظمة، وحماية البيانات، وإجراءات السلامة أثناء تنفيذ المشاريع في حالات الطوارئ والكوارث."
      ],
      logoUrl: "/working/jf.jpg",
    },
  ],
  experience_private: [
    {
      company_en: "Aswar Gulf Pharmaceutical Industries",
      company_ar: "شركة أسوار الخليج للصناعات الدوائية",
      title_en: "Accountant Officer",
      title_ar: "مسؤول حسابات",
      period_en: "2022/Feb – 2025 October",
      period_ar: "2022/شباط – 2025 تشرين الأول",
      description_en: "",
      description_ar: "",
      details_en: [
        "Managing daily accounting operations, including recording entries, reviewing invoices, and settling bank accounts in accordance with approved financial policies.",
        "Preparing periodic financial reports (monthly, quarterly and annual) and analyzing the results to support decision makers in financial and administrative management.",
        "Monitoring supplier and customer accounts and ensuring the accuracy of debit and credit balances, while monitoring the collection of receivables on time.",
        "Review production costs and pharmaceutical inventory and coordinate with warehouse management to ensure accounting records match actual balances.",
      ],
      details_ar: [
        "إدارة العمليات المحاسبية اليومية، بما في ذلك تسجيل الإدخالات، مراجعة الفواتير، وتسوية الحسابات البنكية حسب السياسات المالية المفروضة.",
        "إعداد التقارير المالية الدورية (شهري، سنوي، سنوي) وتحليل النتائج لدعم اتخاذ القرار التنفيذي في إدارة المالية والإدارية.",
        "مراقبة حسابات الموردين والعملاء وضمان دقة التوازنات النقدية، مع مراقبة جمع الإيرادات في الوقت المناسب.",
        "مراجعة تكاليف الإنتاج والمخزون وتنسيق مع إدارة المخزون لضمان تطابق سجلات الحسابات مع التوازنات الحقيقية."
      ],
      logoUrl: "/working/aswar_gulf.jpg"
    }
  ],
  skills: {
    technical: [
      { name_en: "Excel VBA", name_ar: "Excel VBA", icon: "FileCode" },
      { name_en: "Power BI", name_ar: "Power BI", icon: "BarChart3" },
      { name_en: "SQL", name_ar: "SQL", icon: "Database" },
      { name_en: "MS Project", name_ar: "MS Project", icon: "GanttChartSquare" },
      { name_en: "SharePoint", name_ar: "SharePoint", icon: "Share2" },
      { name_en: "Microsoft Office 365", name_ar: "مايكروسوفت أوفيس 365", icon: "Cloud" },
      { name_en: "Microsoft Dynamics", name_ar: "مايكروسوفت دينامكس", icon: "Activity" },
      { name_en: "Odoo ERP", name_ar: "Odoo ERP", icon: "Building2" },
      { name_en: "Zoho ERP", name_ar: "Zoho ERP", icon: "LayoutDashboard" },
      { name_en: "Agile Methodology (AGI)", name_ar: "منهجية أجايل (AGI)", icon: "IterationCcw" },
      { name_en: "AI Tools", name_ar: "أدوات الذكاء الاصطناعي", icon: "BrainCircuit" },
      { name_en: "Tableau", name_ar: "Tableau", icon: "PieChart" },
      { name_en: "QuickBooks", name_ar: "QuickBooks", icon: "Calculator" },
      { name_en: "Google Suite & AI", name_ar: "مجموعة جوجل والذكاء الاصطناعي", icon: "Globe" },
      { name_en: "FreshBooks", name_ar: "FreshBooks", icon: "Banknote" },
      { name_en: "Data Visualization", name_ar: "تصور البيانات", icon: "AreaChart" }
    ],
    managerial: [
      { name_en: "Project Management", name_ar: "إدارة المشاريع", icon: "Briefcase" },
      { name_en: "Leadership", name_ar: "القيادة", icon: "Crown" },
      { name_en: "Data Analysis", name_ar: "تحليل البيانات", icon: "Search" },
      { name_en: "Strategic Planning", name_ar: "التخطيط الاستراتيجي", icon: "Target" },
      { name_en: "Risk Management", name_ar: "إدارة المخاطر", icon: "ShieldAlert" },
      { name_en: "Budgeting", name_ar: "إعداد الميزانية", icon: "Wallet" },
    ],
    soft: [
      { name_en: "Communication", name_ar: "التواصل", icon: "MessageCircle" },
      { name_en: "Teamwork", name_ar: "العمل الجماعي", icon: "Users" },
      { name_en: "Problem Solving", name_ar: "حل المشكلات", icon: "Puzzle" },
      { name_en: "Adaptability", name_ar: "القدرة على التكيف", icon: "RefreshCw" },
      { name_en: "Time Management", name_ar: "إدارة الوقت", icon: "Clock" },
      { name_en: "Creativity", name_ar: "الإبداع", icon: "Lightbulb" }
    ]
  },
  languages: [
    {
      name_en: "Arabic",
      name_ar: "العربية",
      level_en: "Native",
      level_ar: "اللغة الأم"
    },
    {
      name_en: "English",
      name_ar: "الإنجليزية",
      level_en: "Fluent Reading/Writing, Good Speaking",
      level_ar: "قراءة وكتابة بطلاقة، تحدث جيد"
    }
  ],
  additionalInfo: [
    {
      info_en: "Holder of a valid Iraqi passport.",
      info_ar: "حاملاً لجواز سفر عراقي ساري المفعول."
    },
    {
      info_en: "Available for international relocation.",
      info_ar: "متاح للانتقال والعمل دولياً."
    },
    {
      info_en: "Can start immediately.",
      info_ar: "يمكن البدء فوراً."
    }
  ],
  education: [
    {
      degree_en: "Bachelor of Business Administration",
      degree_ar: "بكالوريوس إدارة واقتصاد",
      institution_en: "University of Tikrit",
      institution_ar: "جامعة تكريت",
      year: "2020"
    },
    {
      degree_en: "Diploma in Financial Accounting",
      degree_ar: "دبلومة محاسبة مالية",
      institution_en: "Technical Institute - Baghdad",
      institution_ar: "المعهد التقني - بغداد",
      year: "2022"
    }
  ],
  courses: [
    {
      name_en: "Project Management Professional (PMP)",
      name_ar: "إدارة المشاريع الاحترافية PMP",
      provider_en: "Humanitarian Leadership Academy",
      provider_ar: "أكاديمية القيادات الإنسانية",
      year: "2024",
      logoId: "pmp-logo",
      certificateUrl: "/courses/pmd_pro.jpg"
    },
    {
      name_en: "Financial Management for Development Professional (FMD Pro)",
      name_ar: "الإدارة المالية للتنمية المهنية FMD pro",
      provider_en: "Humanitarian Leadership Academy",
      provider_ar: "أكاديمية القيادات الإنسانية",
      year: "2024",
      logoId: "fmd-logo",
      certificateUrl: "/courses/fmd_pro.jpg"
    },
    {
      name_en: "English for Business",
      name_ar: "اللغة الانكليزية للاعمال",
      provider_en: "Mindluster Platform",
      provider_ar: "منصة المينيستير",
      year: "2023",
      logoId: "business-english-logo",
      certificateUrl: "/courses/english_business.jpg"
    },
    {
      name_en: "Data Studio for Visualization",
      name_ar: "منصة جوجل لتصور البيانات",
      provider_en: "Google Platform",
      provider_ar: "منصة جوجل",
      year: "2023",
      logoId: "google-logo",
      certificateUrl: "/courses/google_analytics.jpg"
    },
    {
      name_en: "Professional Development Course",
      name_ar: "دورة التطوير المهني",
      provider_en: "House of Wisdom for Administrative Consultations",
      provider_ar: "شركة بيت الحكمة للاستشارات والتدريب الادارية",
      year: "2022",
      logoId: "bhtc-logo",
      certificateUrl: "/courses/career_dev.jpg"
    },
    {
      name_en: "International Computer Driving Licence (ICDL)",
      name_ar: "الرخصة الدولية لقيادة الحاسوب",
      provider_en: "M3aarf Platform",
      provider_ar: "منصة معارف للتعليم اونلاين",
      year: "2022",
      logoId: "icdl-logo",
      certificateUrl: "/courses/icdl.jpg"
    }
  ],
  projects: [
    {
      name_en: "AI-Easy platform",
      name_ar: "موقع AI-Easy",
      link: "https://ai-easy.vercel.app/",
      imageIds: [
        "/project/ai_website/1.jpg",
        "/project/ai_website/2.jpg",
        "/project/ai_website/3.jpg",
        "/project/ai_website/4.jpg"
      ],
      description_en: "A versatile platform integrating AI tools for file and image processing, PDF conversion, and more.",
      description_ar: "منصة متعددة الاستخدامات لتحويل الصور والملفات إلى PDF والعكس، مزودة بمجموعة من أدوات الذكاء الاصطناعي المميزة والعديد من الميزات الأخرى."
    },
    {
      name_en: "Local NGO Identity",
      name_ar: "بطاقة تعريفية لمنظمة محلية",
      link: "https://jf-org.vercel.app/",
      imageIds: [
        "/project/jf_card/jf1.jpg",
        "/project/jf_card/jf2.jpg",
        "/project/jf_card/jf3.jpg"
      ],
      description_en: "A comprehensive identity and informative profile for a local relief and development organization.",
      description_ar: "بطاقة تعريفية لمنظمة محلية هدفها الإغاثة والتنمية، تعكس رؤيتها وأهدافها الإنسانية."
    },
    {
      name_en: "Janat Al-Fardos Foundation Website",
      name_ar: "موقع مؤسسة جنات الفردوس",
      link: "https://jf-iq.org/",
      imageIds: [
        "/project/website/aa1.jpg",
        "/project/website/aa2.jpg",
        "/project/website/aa3.jpg"
      ],
      description_en: "A comprehensive website for Janat Al-Fardos Foundation, showcasing activities, photo galleries, and past projects.",
      description_ar: "موقع إلكتروني شامل لمؤسسة جنات الفردوس، يعرض أنشطتها ومعرض الصور والمشاريع السابقة. مصمم لتعزيز المشاركة المجتمعية والشفافية."
    },
    {
      name_en: "Excel VBA HR Management System",
      name_ar: "نظام موارد بشرية عبر اكسل المبرمج",
      link: "#",
      imageIds: ["/project/vba_hr/vba_hr.jpg"],
      description_en: "An integrated HR management system developed using Excel VBA, automating employee data, payroll, and attendance tracking.",
      description_ar: "نظام متكامل لإدارة الموارد البشرية تم تطويره باستخدام VBA في Excel. يقوم بأتمتة إدارة بيانات الموظفين والرواتب وتتبع الحضور."
    },
    {
      name_en: "Visitor Management System for Local NGOs",
      name_ar: "إدارة المراجعين للمنظمات المحلية",
      link: "#",
      imageIds: [
        "/project/org_vba/org1.jpg",
        "/project/org_vba/org2.jpg",
        "/project/org_vba/org3.jpg",
        "/project/org_vba/org4.jpg",
        "/project/org_vba/org5.jpg"
      ],
      description_en: "An Excel VBA system for managing visitors/beneficiaries, grant management, and automated Word report generation.",
      description_ar: "نظام لإدارة المراجعين تم برمجته باستخدام Excel VBA. يشمل تسجيل المراجعين، إدارة المنح للمستفيدين، ودمج مع Word لطباعة التقارير الصادرة تلقائياً."
    },
    {
      name_en: "Mini Sales Management App",
      name_ar: "برنامج المبيعات المصغر",
      link: "#",
      imageIds: [
        "/project/sales/1.jpg",
        "/project/sales/2.jpg",
        "/project/sales/3.jpg",
        "/project/sales/4.jpg",
        "/project/sales/5.jpg",
        "/project/sales/6.jpg",
        "/project/sales/7.jpg"
      ],
      description_en: "A micro sales management app built with Excel VBA for small businesses to track sales, inventory, and customers.",
      description_ar: "برنامج مصغر لإدارة المبيعات تم تطويره باستخدام Excel VBA، مصمم للمحلات والمشاريع الصغيرة لتتبع المبيعات والمخزون والعملاء."
    },
    {
      name_en: "Accounts Receivable & Payable System",
      name_ar: "مشروع الحسابات الوارد والصادر",
      link: "#",
      imageIds: [
        "/project/account/a.jpg",
        "/project/account/b.jpg",
        "/project/account/c.jpg",
        "/project/account/d.jpg",
        "/project/account/e.jpg"
      ],
      description_en: "An Excel VBA accounting system for tracking incoming and outgoing financial transactions with clear financial reports.",
      description_ar: "نظام محاسبي تم تطويره بواسطة Excel VBA لإدارة وتتبع المعاملات المالية الواردة والصادرة، وتوفير تقارير مالية واضحة."
    }
  ],
  faq: [
    {
      question_en: "What is your approach to Operations Excellence?",
      question_ar: "ما هو نهجك في تميز العمليات؟",
      answer_en: "I don't just provide a tool; I engineer a result. As an Operations Specialist, I focus on the 'How' and the 'Why' — linking your technical stack directly to your financial and logistical KPIs to ensure every process drives clear ROI.",
      answer_ar: "لا أقدم مجرد أداة؛ بل أصنع نتيجة. كأخصائي عمليات، أركز على 'كيف' و'لماذا' — بربط أدواتك التقنية مباشرة بمؤشرات أدائك المالية واللوجستية لضمان أن كل عملية تحقق عائداً واضحاً."
    },
    {
      question_en: "Are you open to relocation?",
      question_ar: "هل أنت متاح للانتقال؟",
      answer_en: "Yes, I am fully ready for international opportunities in professional environments where operational discipline and technical intelligence are valued.",
      answer_ar: "نعم، جاهز تماماً للفرص الدولية في بيئات عمل احترافية تقدر الانضباط التشغيلي والذكاء التقني."
    },
    {
      question_en: "Which sectors can benefit from your expertise?",
      question_ar: "ما هي القطاعات التي يمكن أن تستفيد من خبرتك؟",
      answer_en: "Any organization where Finance, Logistics, and Tech are currently disconnected. My operational logic is universal, whether in commercial, developmental, or administrative sectors.",
      answer_ar: "أي مؤسسة تعاني من فجوة بين المالية واللوجستية والتقنية. منطقي التشغيلي عالمي، سواء في القطاعات التجارية أو التنموية أو الإدارية."
    },
    {
      question_en: "How do you stay updated with operational trends?",
      question_ar: "كيف تبقى على اطلاع بأحدث التوجهات التشغيلية؟",
      answer_en: "Continuous learning in AI, ERP systems, and Lean methodologies is part of my professional DNA. I bring the latest operational shortcuts to your business.",
      answer_ar: "التعلم المستمر في الذكاء الاصطناعي، أنظمة ERP، ومنهجيات Lean جزء من حمضي النووي المهني. أجلب أحدث الاختصارات التشغيلية لأعمالك."
    },
    {
      question_en: "Can you manage operations remotely?",
      question_ar: "هل يمكن إدارة العمليات عن بُعد؟",
      answer_en: "Yes. Using unified data environments and real-time dashboards, I can engineer and monitor operations from anywhere. Structure is more important than location.",
      answer_ar: "نعم. باستخدام بيئات البيانات الموحدة ولوحات التحكم اللحظية، يمكنني هندسة ومراقبة العمليات من أي مكان. الهيكل التنظيمي أهم من الموقع الجغرافي."
    }
  ],

  howItWorks: {
    title_en: "The Partnership Journey",
    title_ar: "رحلة الشراكة",
    steps: [
      {
        title_en: "Diagnosis Session",
        title_ar: "جلسة التشخيص",
        description_en: "",
        description_ar: ""
      },
      {
        title_en: "Solution Roadmap",
        title_ar: "خارطة الحل",
        description_en: "",
        description_ar: ""
      },
      {
        title_en: "Execution",
        title_ar: "التنفيذ المشترك",
        description_en: "",
        description_ar: ""
      },
      {
        title_en: "Monitoring & Continuity",
        title_ar: "المتابعة والاستمرارية",
        description_en: "",
        description_ar: ""
      },
      {
        title_en: "Delivery & Empowerment",
        title_ar: "التسليم والتمكين",
        description_en: "",
        description_ar: ""
      }
    ]
  }
};


