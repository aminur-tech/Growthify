import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        services: "Services",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        cta: "Start Project",
        appearance: "Appearance"
      },
      hero: {
        badge: "Next-Gen Growth Solutions",
        title_line1: "Scale Your Business",
        title_gradient: "With Data-Driven Logic",
        description:
          "Growthify empowers brands to dominate their niche through expert web development, SEO, and ads.",
        btn_consultation: "Get a Free Consultation",
        btn_services: "View Our Services",
      },
      benefits: {
        title: "Why partner with",
        company: "Growthify",
        description:
          "We don't just build websites; we build growth engines. Every line of code is optimized for performance.",
        features: [
          "Performance-first architecture",
          "Conversion-optimized UI/UX",
          "Real-time analytics integration",
        ],
        stats: {
          conversion: "Conversion Lift",
          speed: "Site Speed",
          uptime: "Uptime Rate",
        },
        visual: {
          traffic: "Active Traffic",
          growth: "+12.5% this week",
        },
      },
      services_sec: {
        heading: "Our Core Expertise",
        subheading:
          "We merge design with logic to solve complex digital problems.",
        list: [
          {
            title: "Web Development",
            desc: "Custom, high-performance web applications built for speed and conversion.",
          },
          {
            title: "SEO Mastery",
            desc: "Dominate search results and drive organic traffic.",
          },
          {
            title: "Paid Advertising",
            desc: "ROI-focused ad campaigns tailored for your brand.",
          },
          {
            title: "Booking Systems",
            desc: "Seamless automation for appointments and client management.",
          },
        ],
      },
      testimonials_sec: {
        heading: "Trusted by",
        accent: "Visionaries",
        list: [
          { quote: "Growthify didn't just rebuild our site; they fundamentally redesigned our growth trajectory. Our conversion rate increased by 45%.", name: "Sarah Chen", company: "SvelteDynamics" },
          { quote: "Their data-driven logic approach is a game-changer. Finally, a team that uses analytics, not guesswork.", name: "Marcus Dubois", company: "LinearSolutions" },
          { quote: "From initial audit to final launch, the process was seamless. Scheduling overhead cut by half.", name: "Aisha Patel", company: "ApexWellness" },
          { quote: "SEO results that actually move the needle. Within three months, we ranked number one.", name: "Ben Carter", company: "CipherCrypt" },
          { quote: "We've worked with several agencies, but Growthify is the first to actually deliver on their promises.", name: "Jessica Lee", company: "Zenith Apparel" }
        ]
      },
      cta: {
        badge: "Ready to scale?",
        title_main: "Transform your digital",
        title_sub: "presence today.",
        description:
          "Join 200+ companies growing their revenue with our data-driven MERN solutions.",
        btn_consultation: "Get a Free Consultation",
        btn_pricing: "View Pricing",
        footer_note: "No credit card required • 15-minute discovery call",
      },
      contact: {
        title_line1: "Let's Build",
        title_highlight: "Something Big.",
        description: "Have a project in mind? We're ready to help you scale your digital presence with high-performance engineering.",
        label_email: "Email us",
        label_call: "Call us",
        label_office: "Office",
        office_value: "Satkhira, Bangladesh",
        form_name: "Your Name",
        form_email: "Email Address",
        form_service: "Service Required",
        form_message: "Message",
        placeholder_name: "John Doe",
        placeholder_email: "john@example.com",
        placeholder_message: "Tell us about your project goals...",
        service_web: "Web Development",
        service_seo: "SEO Optimization",
        service_ui: "UI/UX Design",
        service_marketing: "Full Scale Marketing",
        btn_send: "Send Proposal",
        toast_success: "Message sent successfully! We'll get back to you soon."
      },
      about: {
        vision_badge: "Our Vision",
        hero_title: "Engineering the",
        hero_highlight: "Digital Future.",
        hero_desc: "We don't just build software; we craft digital experiences that scale. Our expertise lies at the intersection of high-performance engineering and human-centric design.",
        stat_projects: "Projects Delivered",
        stat_satisfaction: "Client Satisfaction",
        stat_users: "Active Users",
        stat_awards: "Global Awards",
        strategy_title: "Driven by Strategy,",
        strategy_subtitle: "Proven by Results",
        feat_innov_title: "Innovation First",
        feat_innov_desc: "We utilize cutting-edge stacks like Next.js and AI integration.",
        feat_arch_title: "Scalable Architecture",
        feat_arch_desc: "Systems built to handle millions of requests without breaking.",
        feat_user_title: "User-Centric Design",
        feat_user_desc: "If the user can't use it, it doesn't matter how fast it is.",
        testimonial_title: "What Our Partners Say",
        testimonial_text: "Growthify transformed our workflow entirely. Their engineering team is top-tier and they delivered ahead of schedule."
      },
      services_page: {
        hero_badge: "Our Expertise",
        hero_title: "Solutions Built for",
        hero_highlight: "Hyper-Growth.",
        hero_desc: "We combine cutting-edge engineering with psychological triggers to build platforms that don't just look good—they convert.",
        pricing_title: "Simple, Scalable Pricing",
        toggle_monthly: "Monthly",
        toggle_yearly: "Yearly",
        save_badge: "Save 20%",
        popular_badge: "Most Popular",
        per_month: "/mo",
        btn_choose: "Choose",
        cta_title: "Ready to build something <br /> extraordinary?",
        cta_desc: "Schedule a free 15-minute consultation with our lead engineers and growth strategists.",
        cta_btn: "Get a Free Consultation",
      },
      services_list: [
        { title: "Web Development", description: "High-performance MERN stack applications built for scale and speed.", features: ["Next.js 15+", "TypeScript", "Real-time DB"] },
        { title: "SEO Optimization", description: "Dominating search rankings with technical audits and content strategy.", features: ["Core Web Vitals", "Keyword Research", "Backlink Strategy"] },
        { title: "Digital Advertising", description: "Data-driven ad campaigns that turn clicks into loyal customers.", features: ["Meta Ads", "Google PPC", "Retargeting"] },
        { title: "Booking Systems", description: "Automated scheduling workflows integrated directly into your site.", features: ["Calendar Sync", "Payment Gates", "Auto-Reminders"] }
      ],
      pricing_list: [
        { name: "Starter", price_monthly: "$499", price_yearly: "$399", description: "Perfect for startups and local businesses.", features: ["Single Page Site", "Basic SEO", "Mobile Responsive", "Email Support"], highlight: false },
        { name: "Growth", price_monthly: "$999", price_yearly: "$799", description: "Our most popular plan for scaling teams.", features: ["Full MERN Web App", "Advanced SEO", "Ad Management", "Priority Support", "Custom Analytics"], highlight: true },
        { name: "Premium", price: "Custom", description: "Enterprise-grade solutions for large scale.", features: ["Multi-platform Ecosystem", "Dedicated Dev Team", "24/7 Support", "White-label Options"], highlight: false }
      ],
      footer: {
        description: "Empowering businesses with high-performance web solutions and data-driven growth strategies. Built for the modern digital era.",
        col_company: "Company",
        col_services: "Services",
        col_resources: "Resources",
        newsletter_title: "Subscribe to Growth",
        newsletter_desc: "Get the latest insights on web tech and SEO delivered to your inbox.",
        placeholder: "Email address",
        copyright: "Built with passion by",
        status: "Systems Operational",
        links: {
          about: "About Us",
          services: "Services",
          partners: "Partners",
          contact: "Contact",
          web_dev: "Web Development",
          design: "UI/UX Design",
          seo: "SEO Optimization",
          mern: "MERN Stack",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          refund: "Refund Policy"
        }
      },
      blog_page: {
        title: "Latest",
        title_highlight: "Insights.",
        subtitle: "Technical breakdowns from the forefront of digital growth.",
        read_article: "Read Article",
        btn_more: "Show More Stories",
        btn_less: "Show Less",
        categories: ["All", "Development", "Design", "Marketing", "Security"],
        posts: [
          { id: 1, title: "Mastering Next.js 15: The Future of Full-Stack Performance", excerpt: "Explore how the latest React features and server components are revolutionizing build speeds.", category: "Development", readTime: "8 min read" },
          { id: 2, title: "SEO Strategies for 2026", excerpt: "Deep dive into semantic search and AI-driven content clusters.", category: "Marketing", readTime: "5 min read" },
          { id: 3, title: "The Rise of Bento Grids", excerpt: "Why the world's leading brands are switching to modular layouts.", category: "Design", readTime: "6 min read" },
          { id: 4, title: "Node.js Security Best Practices", excerpt: "Protecting your MERN stack application from injection and XSS.", category: "Security", readTime: "12 min read" },
          { id: 5, title: "AI in Content Creation", excerpt: "How generative AI is changing digital marketing copy.", category: "Marketing", readTime: "4 min read" },
          { id: 6, title: "Advanced Tailwind Techniques", excerpt: "Optimizing your CSS workflow with custom design systems.", category: "Development", readTime: "7 min read" }
        ]
      },
    },
  },
  bn: {
    translation: {
      navbar: {
        home: "হোম",
        services: "সার্ভিস",
        about: "আমাদের সম্পর্কে",
        blog: "ব্লগ",
        contact: "যোগাযোগ",
        cta: "প্রজেক্ট শুরু করুন",
        appearance: "অ্যাপিয়ারেন্স"
      },
      hero: {
        badge: "নেক্সট-জেন গ্রোথ সলিউশন",
        title_line1: "আপনার ব্যবসা স্কেল করুন",
        title_gradient: "ডেটা-ড্রিভেন লজিকের সাথে",
        description:
          "Growthify ব্র্যান্ডগুলোকে তাদের নিশ-এ আধিপত্য বিস্তার করতে সাহায্য করে ওয়েব ডেভেলপমেন্ট এবং এসইও কৌশলের মাধ্যমে।",
        btn_consultation: "ফ্রি কনসালটেশন নিন",
        btn_services: "আমাদের সার্ভিস দেখুন",
      },
      benefits: {
        title: "কেন পার্টনার হবেন",
        company: "Growthify",
        description:
          "আমরা শুধু ওয়েবসাইট তৈরি করি না; আমরা গ্রোথ ইঞ্জিন তৈরি করি। কোডের প্রতিটি লাইন পারফরম্যান্সের জন্য অপ্টিমাইজ করা হয়েছে।",
        features: [
          "পারফরম্যান্স-ফার্স্ট আর্কিটেকচার",
          "কনভার্সন-অপ্টিমাইজড UI/UX",
          "রিয়েল-টাইম অ্যানালিটিক্স ইন্টিগ্রেশন",
        ],
        stats: {
          conversion: "কনভার্সন বৃদ্ধি",
          speed: "সাইট স্পিড",
          uptime: "আপটাইম রেট",
        },
        visual: {
          traffic: "অ্যাক্টিভ ট্রাফিক",
          growth: "এই সপ্তাহে +১২.৫%",
        },
      },
      services_sec: {
        heading: "আমাদের মূল দক্ষতা",
        subheading:
          "আমরা ডিজিটাল সমস্যার সমাধান করতে ডিজাইনের সাথে লজিকের সমন্বয় করি।",
        list: [
          {
            title: "ওয়েব ডেভেলপমেন্ট",
            desc: "গতি এবং কনভার্সনের জন্য তৈরি কাস্টম এবং হাই-পারফরম্যান্স ওয়েব অ্যাপ্লিকেশন।",
          },
          {
            title: "এসইও মাস্টারি",
            desc: "সার্চ রেজাল্টে আধিপত্য বিস্তার করুন এবং অর্গানিক ট্রাফিক বৃদ্ধি করুন।",
          },
          {
            title: "পেইড অ্যাডভার্টাইজিং",
            desc: "আপনার ব্র্যান্ডের জন্য উপযুক্ত ROI-ভিত্তিক বিজ্ঞাপন ক্যাম্পেইন।",
          },
          {
            title: "বুকিং সিস্টেম",
            desc: "অ্যাপয়েন্টমেন্ট এবং ক্লায়েন্ট ম্যানেজমেন্টের জন্য নিরবচ্ছিন্ন অটোমেশন।",
          },
        ],
      },
      testimonials_sec: {
        heading: "স্বপ্নদ্রষ্টাদের",
        accent: "আস্থা",
        list: [
          { quote: "গ্রোথাইফাই শুধু আমাদের সাইট পুনর্নির্মাণ করেনি; তারা আমাদের বৃদ্ধির গতিপথ পরিবর্তন করে দিয়েছে। আমাদের কনভার্সন রেট ৪৫% বৃদ্ধি পেয়েছে।", name: "সারাহ চেন", company: "SvelteDynamics" },
          { quote: "তাদের ডেটা-চালিত লজিক পদ্ধতি গেম-চেঞ্জার। অবশেষে এমন একটি টিম পেলাম যারা অনুমানের বদলে অ্যানালিটিক্স ব্যবহার করে।", name: "মার্কাস দুবোইস", company: "LinearSolutions" },
          { quote: "অডিট থেকে লঞ্চ পর্যন্ত পুরো প্রক্রিয়াটি ছিল নিরবচ্ছিন্ন। আমাদের শিডিউলিং খরচ অর্ধেক হয়ে গেছে।", name: "আইশা প্যাটেল", company: "ApexWellness" },
          { quote: "এসইও রেজাল্ট যা সত্যিই কার্যকর। তিন মাসের মধ্যে আমরা ১ নম্বর র‍্যাঙ্কিং পেয়েছি।", name: "বেন কার্টার", company: "CipherCrypt" },
          { quote: "আমরা অনেক এজেন্সির সাথে কাজ করেছি, কিন্তু গ্রোথাইফাই প্রথম যারা তাদের প্রতিশ্রুতি রক্ষা করেছে।", name: "জেসিকা লি", company: "Zenith Apparel" }
        ]
      },
      cta: {
        badge: "স্কেল করতে প্রস্তুত?",
        title_main: "আপনার ডিজিটাল উপস্থিতি",
        title_sub: "আজই রূপান্তর করুন।",
        description:
          "আমাদের ডেটা-ড্রিভেন MERN সলিউশন দিয়ে ২০০+ কোম্পানির সাথে আপনার রেভিনিউ বাড়ান।",
        btn_consultation: "ফ্রি কনসালটেশন নিন",
        btn_pricing: "প্রাইসিং দেখুন",
        footer_note: "ক্রেডিট কার্ড প্রয়োজন নেই • ১৫ মিনিটের ডিসকভারি কল",
      },
      contact: {
        title_line1: "আসুন তৈরি করি",
        title_highlight: "বিশাল কিছু।",
        description: "আপনার মাথায় কি কোনো প্রজেক্ট আছে? হাই-পারফরম্যান্স ইঞ্জিনিয়ারিং দিয়ে আপনার ডিজিটাল উপস্থিতি বাড়াতে আমরা প্রস্তুত।",
        label_email: "ইমেইল করুন",
        label_call: "কল করুন",
        label_office: "অফিস",
        office_value: "সাতক্ষীরা, বাংলাদেশ",
        form_name: "আপনার নাম",
        form_email: "ইমেইল ঠিকানা",
        form_service: "প্রয়োজনীয় সেবা",
        form_message: "বার্তা",
        placeholder_name: "জন ডো",
        placeholder_email: "john@example.com",
        placeholder_message: "আপনার প্রজেক্টের লক্ষ্য সম্পর্কে আমাদের জানান...",
        service_web: "ওয়েব ডেভেলপমেন্ট",
        service_seo: "এসইও অপ্টিমাইজেশন",
        service_ui: "ইউআই/ইউএক্স ডিজাইন",
        service_marketing: "ফুল স্কেল মার্কেটিং",
        btn_send: "প্রস্তাব পাঠান",
        toast_success: "বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"
      },
      about: {
        vision_badge: "আমাদের লক্ষ্য",
        hero_title: "ডিজিটাল ভবিষ্যৎ",
        hero_highlight: "নির্মাণ করছি।",
        hero_desc: "আমরা শুধু সফটওয়্যার তৈরি করি না; আমরা এমন ডিজিটাল অভিজ্ঞতা তৈরি করি যা স্কেল করা যায়। আমাদের দক্ষতা উচ্চ-ক্ষমতাসম্পন্ন ইঞ্জিনিয়ারিং এবং ব্যবহারকারী-বান্ধব ডিজাইনের সমন্বয়ে গঠিত।",
        stat_projects: "সফল প্রজেক্ট",
        stat_satisfaction: "ক্লায়েন্ট সন্তুষ্টি",
        stat_users: "সক্রিয় ব্যবহারকারী",
        stat_awards: "বৈশ্বিক পুরস্কার",
        strategy_title: "কৌশল দ্বারা পরিচালিত,",
        strategy_subtitle: "ফলাফল দ্বারা প্রমাণিত",
        feat_innov_title: "উদ্ভাবন প্রথম",
        feat_innov_desc: "আমরা Next.js এবং AI ইন্টিগ্রেশনের মতো আধুনিক প্রযুক্তি ব্যবহার করি।",
        feat_arch_title: "স্কেলেবল আর্কিটেকচার",
        feat_arch_desc: "কোটি কোটি রিকোয়েস্ট সামলানোর উপযোগী সিস্টেম তৈরি করা হয়।",
        feat_user_title: "ব্যবহারকারী-কেন্দ্রিক ডিজাইন",
        feat_user_desc: "ব্যবহারকারী যদি এটি ব্যবহার করতে না পারে, তবে এটি কতটা দ্রুত তা কোন গুরুত্ব রাখে না।",
        testimonial_title: "পার্টনাররা যা বলেন",
        testimonial_text: "Growthify আমাদের কাজের ধারা পুরোপুরি বদলে দিয়েছে। তাদের ইঞ্জিনিয়ারিং টিম অত্যন্ত দক্ষ এবং তারা সময়ের আগেই কাজ শেষ করেছে।"
      },
      services_page: {
        hero_badge: "আমাদের দক্ষতা",
        hero_title: "হাইপার-গ্রোথ এর জন্য",
        hero_highlight: "তৈরি সমাধান।",
        hero_desc: "আমরা অত্যাধুনিক ইঞ্জিনিয়ারিং এবং সাইকোলজিক্যাল ট্রিগার ব্যবহার করে এমন প্ল্যাটফর্ম তৈরি করি যা কেবল দেখতেই ভালো নয়—বরং কাজও করে।",
        pricing_title: "সহজ ও স্কেলেবল মূল্য তালিকা",
        toggle_monthly: "মাসিক",
        toggle_yearly: "বার্ষিক",
        save_badge: "২০% সাশ্রয়",
        popular_badge: "সবচেয়ে জনপ্রিয়",
        per_month: "/মাস",
        btn_choose: "বেছে নিন",
        cta_title: "অসাধারণ কিছু তৈরি করতে <br /> প্রস্তুত?",
        cta_desc: "আমাদের প্রধান ইঞ্জিনিয়ার এবং গ্রোথ স্ট্র্যাটেজিস্টদের সাথে ১৫ মিনিটের ফ্রি পরামর্শের জন্য সময় নির্ধারণ করুন।",
        cta_btn: "ফ্রি পরামর্শ নিন",
      },
      services_list: [
        { title: "ওয়েব ডেভেলপমেন্ট", description: "স্কেল এবং স্পিডের জন্য তৈরি হাই-পারফরম্যান্স MERN স্ট্যাক অ্যাপ্লিকেশন।", features: ["Next.js ১৫+", "TypeScript", "রিয়েল-টাইম DB"] },
        { title: "এসইও অপ্টিমাইজেশন", description: "টেকনিক্যাল অডিট এবং কন্টেন্ট কৌশলের মাধ্যমে সার্চ র‍্যাঙ্কিংয়ে আধিপত্য।", features: ["Core Web Vitals", "কিওয়ার্ড রিসার্চ", "ব্যাকলিংক স্ট্র্যাটেজি"] },
        { title: "ডিজিটাল বিজ্ঞাপন", description: "ডেটা-চালিত অ্যাড ক্যাম্পেইন যা ক্লিককে অনুগত গ্রাহকে রূপান্তর করে।", features: ["মেটা অ্যাডস", "গুগল PPC", "রিটার্গেটিং"] },
        { title: "বুকিং সিস্টেম", description: "আপনার সাইটে সরাসরি ইন্টিগ্রেটেড স্বয়ংক্রিয় সময়সূচী ওয়ার্কফ্লো।", features: ["ক্যালেন্ডার সিঙ্ক", "পেমেন্ট গেটওয়ে", "অটো-রিমাইন্ডার"] }
      ],
      pricing_list: [
        { name: "স্টার্টার", price_monthly: "$৪৯৯", price_yearly: "$৩৯৯", description: "স্টার্টআপ এবং স্থানীয় ব্যবসার জন্য উপযুক্ত।", features: ["সিঙ্গেল পেজ সাইট", "বেসিক এসইও", "মোবাইল রেসপনসিভ", "ইমেইল সাপোর্ট"], highlight: false },
        { name: "গ্রোথ", price_monthly: "$৯৯৯", price_yearly: "$৭৯৯", description: "টিম স্কেল করার জন্য আমাদের সবচেয়ে জনপ্রিয় প্ল্যান।", features: ["ফুল MERN ওয়েব অ্যাপ", "অ্যাডভانسড এসইও", "অ্যাড ম্যানেজমেন্ট", "প্রায়োরিটি সাপোর্ট", "কাস্টম অ্যানালিটিক্স"], highlight: true },
        { name: "প্রিমিয়াম", price: "কাস্টম", description: "বড় পরিসরের জন্য এন্টারপ্রাইজ-গ্রেড সমাধান।", features: ["মাল্টি-প্ল্যাটফর্ম ইকোসিস্টেম", "ডেডিকেটেড দেব টিম", "২৪/৭ সাপোর্ট", "হোয়াইট-লেবেল অপশন"], highlight: false }
      ],
      footer: {
        description: "উচ্চ-ক্ষমতাসম্পন্ন ওয়েব সমাধান এবং ডেটা-চালিত গ্রোথ কৌশলের মাধ্যমে ব্যবসার ক্ষমতায়ন। আধুনিক ডিজিটাল যুগের জন্য তৈরি।",
        col_company: "কোম্পানি",
        col_services: "সার্ভিস",
        col_resources: "রিসোর্স",
        newsletter_title: "সাবস্ক্রাইব করুন",
        newsletter_desc: "ওয়েব টেক এবং এসইও সম্পর্কে লেটেস্ট আপডেট সরাসরি আপনার ইনবক্সে পান।",
        placeholder: "ইমেইল অ্যাড্রেস",
        copyright: "ভালোবাসার সাথে তৈরি করেছেন",
        status: "সিস্টেম সচল আছে",
        links: {
          about: "আমাদের সম্পর্কে",
          services: "সার্ভিসসমূহ",
          partners: "পার্টনার",
          contact: "যোগাযোগ",
          web_dev: "ওয়েব ডেভেলপমেন্ট",
          design: "UI/UX ডিজাইন",
          seo: "এসইও অপ্টিমাইজেশন",
          mern: "MERN স্ট্যাক",
          privacy: "প্রাইভেসি পলিসি",
          terms: "টার্মস অফ সার্ভিস",
          refund: "রিফান্ড পলিসি"
        }
      },
      blog_page: {
        title: "সাম্প্রতিক",
        title_highlight: "ইনসাইটস।",
        subtitle: "ডিজিটাল গ্রোথের অগ্রভাগ থেকে প্রযুক্তিগত বিশ্লেষণ।",
        read_article: "আর্টিকেল পড়ুন",
        btn_more: "আরও গল্প দেখুন",
        btn_less: "কম দেখান",
        categories: ["সব", "ডেভেলপমেন্ট", "ডিজাইন", "মার্কেটিং", "সিকিউরিটি"],
        posts: [
          { id: 1, title: "Next.js 15 আয়ত্ত করা: ফুল-স্ট্যাক পারফরম্যান্সের ভবিষ্যৎ", excerpt: "সর্বশেষ রিঅ্যাক্ট ফিচার এবং সার্ভার কম্পোনেন্ট কীভাবে বিল্ড স্পিডে বিপ্লব ঘটাচ্ছে তা জানুন।", category: "ডেভেলপমেন্ট", readTime: "৮ মিনিট পড়ুন" },
          { id: 2, title: "২০২৬ সালের জন্য এসইও কৌশল", excerpt: "সিম্যান্টিক সার্চ এবং এআই-চালিত কন্টেন্ট ক্লাস্টার নিয়ে বিস্তারিত আলোচনা।", category: "মার্কেটিং", readTime: "৫ মিনিট পড়ুন" },
          { id: 3, title: "বেন্টো গ্রিডের উত্থান", excerpt: "কেন বিশ্বের শীর্ষস্থানীয় ব্র্যান্ডগুলি মডুলার লেআউটে চলে যাচ্ছে।", category: "ডিজাইন", readTime: "৬ মিনিট পড়ুন" },
          { id: 4, title: "Node.js সিকিউরিটি বেস্ট প্র্যাকটিস", excerpt: "ইনজেকশন এবং XSS থেকে আপনার MERN স্ট্যাক অ্যাপ্লিকেশন রক্ষা করা।", category: "সিকিউরিটি", readTime: "১২ মিনিট পড়ুন" },
          { id: 5, title: "কন্টেন্ট তৈরিতে এআই", excerpt: "জেনারেটিভ এআই কীভাবে ডিজিটাল মার্কেটিং কপি পরিবর্তন করছে।", category: "মার্কেটিং", readTime: "৪ মিনিট পড়ুন" },
          { id: 6, title: "অ্যাডভান্সড টেলউইন্ড টেকনিক", excerpt: "কাস্টম ডিজাইন সিস্টেমের সাথে আপনার CSS ওয়ার্কফ্লো অপ্টিমাইজ করা।", category: "ডেভেলপমেন্ট", readTime: "৭ মিনিট পড়ুন" }
        ]
      },
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        services: "Servicios",
        about: "Nosotros",
        blog: "Blog",
        contact: "Contacto",
        cta: "Iniciar Proyecto",
        appearance: "Apariencia"
      },
      hero: {
        badge: "Soluciones de Crecimiento",
        title_line1: "Escala tu Negocio",
        title_gradient: "Con Lógica de Datos",
        description:
          "Growthify ayuda a las marcas a dominar su nicho mediante desarrollo web y estrategias de SEO.",
        btn_consultation: "Consulta Gratuita",
        btn_services: "Ver Servicios",
      },
      benefits: {
        title: "Por qué asociarse con",
        company: "Growthify",
        description:
          "No solo creamos sitios web; creamos motores de crecimiento. Cada línea de código está optimizada para el rendimiento.",
        features: [
          "Arquitectura orientada al rendimiento",
          "UI/UX optimizado para conversión",
          "Integración de analítica en tiempo real",
        ],
        stats: {
          conversion: "Aumento de Conversión",
          speed: "Velocidad del Sitio",
          uptime: "Tasa de Disponibilidad",
        },
        visual: {
          traffic: "Tráfico Activo",
          growth: "+12.5% esta semana",
        },
      },
      services_sec: {
        heading: "Nuestra Experiencia Core",
        subheading:
          "Fusionamos el diseño con la lógica para resolver problemas digitales complejos.",
        list: [
          {
            title: "Desarrollo Web",
            desc: "Aplicaciones web personalizadas de alto rendimiento para velocidad y conversión.",
          },
          {
            title: "Maestría en SEO",
            desc: "Domina los resultados de búsqueda y atrae tráfico orgánico.",
          },
          {
            title: "Publicidad Pagada",
            desc: "Campañas publicitarias enfocadas en el ROI para tu marca.",
          },
          {
            title: "Sistemas de Reserva",
            desc: "Automatización fluida para citas y gestión de clientes.",
          },
        ],
      },
      testimonials_sec: {
        heading: "Con la confianza de",
        accent: "Visionarios",
        list: [
          { quote: "Growthify no solo reconstruyó nuestro sitio; rediseñó nuestra trayectoria de crecimiento. La tasa de conversión subió un 45%.", name: "Sarah Chen", company: "SvelteDynamics" },
          { quote: "Su enfoque de lógica basada en datos es revolucionario. Finalmente, un equipo que usa analítica, no suposiciones.", name: "Marcus Dubois", company: "LinearSolutions" },
          { quote: "Desde la auditoría inicial hasta el lanzamiento, el proceso fue fluido. Los costos operativos bajaron a la mitad.", name: "Aisha Patel", company: "ApexWellness" },
          { quote: "Resultados de SEO que realmente importan. En tres meses, alcanzamos el número uno.", name: "Ben Carter", company: "CipherCrypt" },
          { quote: "Hemos trabajado con varias agencias, pero Growthify es la primera que realmente cumple sus promesas.", name: "Jessica Lee", company: "Zenith Apparel" }
        ]
      },
      cta: {
        badge: "¿Listo para escalar?",
        title_main: "Transforma tu presencia",
        title_sub: "digital hoy.",
        description:
          "Únete a más de 200 empresas que crecen con nuestras soluciones MERN.",
        btn_consultation: "Consulta Gratis",
        btn_pricing: "Ver Precios",
        footer_note: "Sin tarjeta de crédito • Llamada de 15 min",
      },
      contact: {
        title_line1: "Construyamos",
        title_highlight: "Algo Grande.",
        description: "¿Tienes un proyecto en mente? Estamos listos para ayudarte a escalar tu presencia digital con ingeniería de alto rendimiento.",
        label_email: "Envíanos un correo",
        label_call: "Llámanos",
        label_office: "Oficina",
        office_value: "Satkhira, Bangladesh",
        form_name: "Tu Nombre",
        form_email: "Correo Electrónico",
        form_service: "Servicio Requerido",
        form_message: "Mensaje",
        placeholder_name: "Juan Pérez",
        placeholder_email: "juan@ejemplo.com",
        placeholder_message: "Cuéntanos sobre los objetivos de tu proyecto...",
        service_web: "Desarrollo Web",
        service_seo: "Optimización SEO",
        service_ui: "Diseño UI/UX",
        service_marketing: "Marketing Integral",
        btn_send: "Enviar Propuesta",
        toast_success: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."
      },
      about: {
        vision_badge: "Nuestra Visión",
        hero_title: "Ingeniería del",
        hero_highlight: "Futuro Digital.",
        hero_desc: "No solo construimos software; creamos experiencias digitales que escalan. Nuestra experiencia radica en la ingeniería de alto rendimiento.",
        stat_projects: "Proyectos Entregados",
        stat_satisfaction: "Satisfacción del Cliente",
        stat_users: "Usuarios Activos",
        stat_awards: "Premios Globales",
        strategy_title: "Impulsado por Estrategia,",
        strategy_subtitle: "Probado por Resultados",
        feat_innov_title: "Innovación Primero",
        feat_innov_desc: "Utilizamos pilas de vanguardia como Next.js e integración de IA.",
        feat_arch_title: "Arquitectura Escalable",
        feat_arch_desc: "Sistemas construidos para manejar millones de solicitudes sin romperse.",
        feat_user_title: "Diseño Centrado en el Usuario",
        feat_user_desc: "Si el usuario no puede usarlo, no importa cuán rápido sea.",
        testimonial_title: "Lo que Dicen Nuestros Socios",
        testimonial_text: "Growthify transformó completamente nuestro flujo de trabajo. Su equipo de ingeniería es de primer nivel."
      },
      services_page: {
        hero_badge: "Nuestra Experiencia",
        hero_title: "Soluciones Creadas para el",
        hero_highlight: "Hiper-Crecimiento.",
        hero_desc: "Combinamos ingeniería de vanguardia con disparadores psicológicos para crear plataformas que no solo se ven bien, sino que convierten.",
        pricing_title: "Precios Simples y Escalables",
        toggle_monthly: "Mensual",
        toggle_yearly: "Anual",
        save_badge: "Ahorra 20%",
        popular_badge: "Más Popular",
        per_month: "/mes",
        btn_choose: "Elegir",
        cta_title: "¿Listo para construir algo <br /> extraordinario?",
        cta_desc: "Programa una consulta gratuita de 15 minutos con nuestros ingenieros y estrategas.",
        cta_btn: "Obtén una Consulta Gratis",
      },
      services_list: [
        { title: "Desarrollo Web", description: "Aplicaciones MERN stack de alto rendimiento creadas para escalar.", features: ["Next.js 15+", "TypeScript", "DB en tiempo real"] },
        { title: "Optimización SEO", description: "Domina los rankings de búsqueda con auditorías técnicas.", features: ["Core Web Vitals", "Investigación de Keywords", "Estrategia de Backlinks"] },
        { title: "Publicidad Digital", description: "Campañas de anuncios basadas en datos que convierten clics en clientes.", features: ["Meta Ads", "Google PPC", "Retargeting"] },
        { title: "Sistemas de Reservas", description: "Flujos de trabajo automatizados integrados en tu sitio.", features: ["Sincronización de Calendario", "Pasarelas de Pago", "Recordatorios"] }
      ],
      pricing_list: [
        { name: "Starter", price_monthly: "$499", price_yearly: "$399", description: "Perfecto para startups y negocios locales.", features: ["Sitio de una sola página", "SEO Básico", "Responsivo", "Soporte por email"], highlight: false },
        { name: "Growth", price_monthly: "$999", price_yearly: "$799", description: "Nuestro plan más popular para escalar.", features: ["App Web MERN Completa", "SEO Avanzado", "Gestión de Ads", "Soporte Prioritario"], highlight: true },
        { name: "Premium", price: "Personalizado", description: "Soluciones de grado empresarial.", features: ["Ecosistema Multiplataforma", "Equipo Dedicado", "Soporte 24/7"], highlight: false }
      ],
      footer: {
        description: "Potenciando empresas con soluciones web de alto rendimiento y estrategias de crecimiento basadas en datos. Creado para la era digital moderna.",
        col_company: "Empresa",
        col_services: "Servicios",
        col_resources: "Recursos",
        newsletter_title: "Suscríbete al Crecimiento",
        newsletter_desc: "Recibe las últimas novedades sobre tecnología web y SEO en tu bandeja de entrada.",
        placeholder: "Correo electrónico",
        copyright: "Creado con pasión por",
        status: "Sistemas Operativos",
        links: {
          about: "Sobre Nosotros",
          services: "Servicios",
          partners: "Socios",
          contact: "Contacto",
          web_dev: "Desarrollo Web",
          design: "Diseño UI/UX",
          seo: "Optimización SEO",
          mern: "MERN Stack",
          privacy: "Política de Privacidad",
          terms: "Términos de Servicio",
          refund: "Política de Reembolso"
        }
      },
      blog_page: {
        title: "Últimas",
        title_highlight: "Ideas.",
        subtitle: "Análisis técnicos desde la vanguardia del crecimiento digital.",
        read_article: "Leer Artículo",
        btn_more: "Ver más historias",
        btn_less: "Ver menos",
        categories: ["Todo", "Desarrollo", "Diseño", "Marketing", "Seguridad"],
        posts: [
          { id: 1, title: "Dominando Next.js 15: El futuro del rendimiento Full-Stack", excerpt: "Explore cómo las últimas funciones de React y los componentes del servidor están revolucionando las velocidades de compilación.", category: "Desarrollo", readTime: "8 min de lectura" },
          { id: 2, title: "Estrategias de SEO para 2026", excerpt: "Inmersión profunda en la búsqueda semántica y los clústeres de contenido impulsados por IA.", category: "Marketing", readTime: "5 min de lectura" },
          { id: 3, title: "El auge de los Bento Grids", excerpt: "Por qué las marcas líderes del mundo se están pasando a los diseños modulares.", category: "Diseño", readTime: "6 min de lectura" },
          { id: 4, title: "Mejores prácticas de seguridad en Node.js", excerpt: "Protegiendo su aplicación de pila MERN de inyección y XSS.", category: "Seguridad", readTime: "12 min de lectura" },
          { id: 5, title: "IA en la creación de contenido", excerpt: "Cómo la IA generativa está cambiando el texto de marketing digital.", category: "Marketing", readTime: "4 min de lectura" },
          { id: 6, title: "Técnicas avanzadas de Tailwind", excerpt: "Optimizando su flujo de trabajo CSS con sistemas de diseño personalizados.", category: "Desarrollo", readTime: "7 min de lectura" }
        ]
      },
    },
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        services: "Services",
        about: "À Propos",
        blog: "Blog",
        contact: "Contact",
        cta: "Lancer Projet",
        appearance: "Apparence"
      },
      hero: {
        badge: "Solutions de Croissance",
        title_line1: "Développez votre Entreprise",
        title_gradient: "Logique de Données",
        description:
          "Growthify permet aux marques de dominer leur créneau grâce au développement web expert.",
        btn_consultation: "Consultation Gratuite",
        btn_services: "Nos Services",
      },
      benefits: {
        title: "Pourquoi s'associer à",
        company: "Growthify",
        description:
          "Nous ne nous contentons pas de créer des sites web ; nous créons des moteurs de croissance. Chaque ligne de code est optimisée.",
        features: [
          "Architecture axée sur la performance",
          "UI/UX optimisée pour la conversion",
          "Intégration d'analyses en temps réel",
        ],
        stats: {
          conversion: "Hausse des Conversions",
          speed: "Vitesse du Site",
          uptime: "Taux de Disponibilité",
        },
        visual: {
          traffic: "Trafic Actif",
          growth: "+12,5% cette semaine",
        },
      },
      services_sec: {
        heading: "Notre Expertise Clé",
        subheading:
          "Nous fusionnons le design et la logique pour résoudre des problèmes complexes.",
        list: [
          {
            title: "Développement Web",
            desc: "Applications web performantes conçues pour la vitesse et la conversion.",
          },
          {
            title: "Maîtrise du SEO",
            desc: "Dominez les recherches et générez du trafic organique.",
          },
          {
            title: "Publicité Payante",
            desc: "Campagnes publicitaires axées sur le ROI pour votre marque.",
          },
          {
            title: "Systèmes de Réservation",
            desc: "Automatisation fluide pour les rendez-vous et la gestion client.",
          },
        ],
      },
      testimonials_sec: {
        heading: "Approuvé par des",
        accent: "Visionnaires",
        list: [
          { quote: "Growthify n'a pas seulement reconstruit notre site ; ils ont redéfini notre croissance. Notre conversion a bondi de 45%.", name: "Sarah Chen", company: "SvelteDynamics" },
          { quote: "Leur approche basée sur les données change la donne. Enfin une équipe qui utilise l'analytique, pas des suppositions.", name: "Marcus Dubois", company: "LinearSolutions" },
          { quote: "De l'audit au lancement, le processus a été parfait. Nos frais de gestion ont été réduits de moitié.", name: "Aisha Patel", company: "ApexWellness" },
          { quote: "Des résultats SEO qui font bouger les choses. En trois mois, nous étions numéro un.", name: "Ben Carter", company: "CipherCrypt" },
          { quote: "Nous avons travaillé avec plusieurs agences, mais Growthify est la première à tenir ses promesses.", name: "Jessica Lee", company: "Zenith Apparel" }
        ]
      },
      cta: {
        badge: "Prêt à décoller ?",
        title_main: "Transformez votre présence",
        title_sub: "numérique dès aujourd'hui.",
        description:
          "Rejoignez 200+ entreprises qui croissent avec nos solutions MERN.",
        btn_consultation: "Consultation Gratuite",
        btn_pricing: "Tarifs",
        footer_note: "Pas de carte requise • Appel de 15 min",
      },
      contact: {
        title_line1: "Construisons",
        title_highlight: "Quelque Chose de Grand.",
        description: "Vous avez un projet en tête ? Nous sommes prêts à vous aider à développer votre présence numérique.",
        label_email: "Écrivez-nous",
        label_call: "Appelez-nous",
        label_office: "Bureau",
        office_value: "Satkhira, Bangladesh",
        form_name: "Votre Nom",
        form_email: "Adresse E-mail",
        form_service: "Service Requis",
        form_message: "Message",
        placeholder_name: "Jean Dupont",
        placeholder_email: "jean@exemple.com",
        placeholder_message: "Parlez-nous de vos objectifs...",
        service_web: "Développement Web",
        service_seo: "Optimisation SEO",
        service_ui: "Design UI/UX",
        service_marketing: "Marketing Complet",
        btn_send: "Envoyer la Proposition",
        toast_success: "Message envoyé avec succès ! Nous vous répondrons bientôt."
      },
      about: {
        vision_badge: "Notre Vision",
        hero_title: "Façonner l'Avenir",
        hero_highlight: "Numérique.",
        hero_desc: "Nous ne nous contentons pas de créer des logiciels ; nous concevons des expériences numériques évolutives.",
        stat_projects: "Projets Livrés",
        stat_satisfaction: "Satisfaction Client",
        stat_users: "Utilisateurs Actifs",
        stat_awards: "Prix Mondiaux",
        strategy_title: "Axé sur la Stratégie,",
        strategy_subtitle: "Prouvé par les Résultats",
        feat_innov_title: "L'Innovation d'Abord",
        feat_innov_desc: "Nous utilisons des technologies de pointe comme Next.js et l'IA.",
        feat_arch_title: "Architecture Évolutive",
        feat_arch_desc: "Systèmes conçus pour gérer des millions de requêtes sans faille.",
        feat_user_title: "Design Centré Utilisateur",
        feat_user_desc: "Si l'utilisateur ne peut pas l'utiliser, la vitesse n'a pas d'importance.",
        testimonial_title: "Ce que Disent nos Partenaires",
        testimonial_text: "Growthify a transformé notre flux de travail. Leur équipe d'ingénierie est exceptionnelle."
      },
      services_page: {
        hero_badge: "Notre Expertise",
        hero_title: "Solutions pour une",
        hero_highlight: "Hyper-Croissance.",
        hero_desc: "Nous combinons ingénierie de pointe et leviers psychologiques pour bâtir des plateformes qui convertissent.",
        pricing_title: "Tarification Simple et Évolutive",
        toggle_monthly: "Mensuel",
        toggle_yearly: "Annuel",
        save_badge: "Économisez 20%",
        popular_badge: "Plus Populaire",
        per_month: "/mois",
        btn_choose: "Choisir",
        cta_title: "Prêt à construire quelque chose <br /> d'extraordinaire ?",
        cta_desc: "Prenez rendez-vous pour une consultation gratuite de 15 minutes.",
        cta_btn: "Consultation Gratuite",
      },
      services_list: [
        { title: "Développement Web", description: "Applications MERN stack haute performance conçues pour l'échelle.", features: ["Next.js 15+", "TypeScript", "BDD Temps Réel"] },
        { title: "Optimisation SEO", description: "Dominez les résultats de recherche avec nos audits techniques.", features: ["Core Web Vitals", "Mots-clés", "Backlinks"] },
        { title: "Publicité Digitale", description: "Campagnes basées sur les données pour convertir vos clics.", features: ["Meta Ads", "Google PPC", "Retargeting"] },
        { title: "Systèmes de Réservation", description: "Flux de travail automatisés intégrés à votre site.", features: ["Synchro Calendrier", "Paiements", "Rappels Auto"] }
      ],
      pricing_list: [
        { name: "Starter", price_monthly: "499€", price_yearly: "399€", description: "Idéal pour les startups.", features: ["Site Page Unique", "SEO de base", "Mobile Responsive"], highlight: false },
        { name: "Growth", price_monthly: "999€", price_yearly: "799€", description: "Notre plan le plus populaire.", features: ["Web App MERN Complète", "SEO Avancé", "Gestion de Pubs"], highlight: true },
        { name: "Premium", price: "Sur mesure", description: "Solutions d'entreprise.", features: ["Écosystème multi-plateforme", "Équipe Dédiée", "Support 24/7"], highlight: false }
      ],
      footer: {
        description: "Propulser les entreprises avec des solutions web haute performance et des stratégies de croissance basées sur les données. Conçu pour l'ère numérique moderne.",
        col_company: "Entreprise",
        col_services: "Services",
        col_resources: "Ressources",
        newsletter_title: "Abonnez-vous à la Croissance",
        newsletter_desc: "Recevez les dernières analyses sur le web et le SEO dans votre boîte mail.",
        placeholder: "Adresse e-mail",
        copyright: "Créé avec passion par",
        status: "Systèmes Opérationnels",
        links: {
          about: "À Propos",
          services: "Services",
          partners: "Partenaires",
          contact: "Contact",
          web_dev: "Développement Web",
          design: "Design UI/UX",
          seo: "Optimisation SEO",
          mern: "MERN Stack",
          privacy: "Confidentialité",
          terms: "Conditions d'Utilisation",
          refund: "Politique de Remboursement"
        }
      },
      blog_page: {
        title: "Dernières",
        title_highlight: "Analyses.",
        subtitle: "Analyses techniques à la pointe de la croissance numérique.",
        read_article: "Lire l'article",
        btn_more: "Plus d'histoires",
        btn_less: "Moins d'histoires",
        categories: ["Tout", "Développement", "Design", "Marketing", "Sécurité"],
        posts: [
          { id: 1, title: "Maîtriser Next.js 15 : L'avenir de la performance Full-Stack", excerpt: "Découvrez comment les dernières fonctionnalités de React et les composants serveur révolutionnent les vitesses de build.", category: "Développement", readTime: "8 min de lecture" },
          { id: 2, title: "Stratégies SEO pour 2026", excerpt: "Plongée au cœur de la recherche sémantique et des clusters de contenu pilotés par l'IA.", category: "Marketing", readTime: "5 min de lecture" },
          { id: 3, title: "L'essor des Bento Grids", excerpt: "Pourquoi les plus grandes marques mondiales passent aux mises en page modulaires.", category: "Design", readTime: "6 min de lecture" },
          { id: 4, title: "Meilleures pratiques de sécurité Node.js", excerpt: "Protéger votre application MERN stack contre l'injection et le XSS.", category: "Sécurité", readTime: "12 min de lecture" },
          { id: 5, title: "L'IA dans la création de contenu", excerpt: "Comment l'IA generatif modifie les textes du marketing numérique.", category: "Marketing", readTime: "4 min de lecture" },
          { id: 6, title: "Techniques Tailwind avancées", excerpt: "Optimiser votre flux de travail CSS avec des systèmes de conception personnalisés.", category: "Développement", readTime: "7 min de lecture" }
        ]
      },
    },
  },
  ar: {
    translation: {
      navbar: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "من نحن",
        blog: "المدونة",
        contact: "اتصل بنا",
        cta: "ابدأ مشروعك",
        appearance: "المظهر"
      },
      hero: {
        badge: "حلول النمو المتطورة",
        title_line1: "نطاق عملك وازن",
        title_gradient: "بالمنطق القائم على البيانات",
        description:
          "تمكن Growthify العلامات التجارية من السيطرة من خلال تطوير الويب واستراتيجيات سيو.",
        btn_consultation: "استشارة مجانية",
        btn_services: "خدماتنا",
      },
      benefits: {
        title: "لماذا تتعاون مع",
        company: "Growthify",
        description:
          "نحن لا نبني مواقع ويب فحسب؛ بل نبني محركات نمو. كل سطر من البرمجيات تم تحسينه للأداء العالي.",
        features: [
          "هيكلية تركز على الأداء",
          "تصميم تجربة مستخدم محسّن للتحويل",
          "تكامل التحليلات في الوقت الفعلي",
        ],
        stats: {
          conversion: "رفع معدل التحويل",
          speed: "سرعة الموقع",
          uptime: "معدل التشغيل",
        },
        visual: {
          traffic: "حركة المرور النشطة",
          growth: "+12.5% هذا الأسبوع",
        },
      },
      services_sec: {
        heading: "خبراتنا الأساسية",
        subheading: "نحن ندمج التصميم مع المنطق لحل المشكلات الرقمية المعقدة.",
        list: [
          {
            title: "تطوير الويب",
            desc: "تطبيقات ويب مخصصة عالية الأداء مصممة للسرعة والتحويل.",
          },
          {
            title: "احتراف السيو",
            desc: "سيطر على نتائج البحث واجذب الزوار بشكل طبيعي.",
          },
          {
            title: "الإعلانات المدفوعة",
            desc: "حملات إعلانية تركز على العائد الاستثماري لعلامتك التجارية.",
          },
          { title: "أنظمة الحجز", desc: "أتمتة سلسة للمواعيد وإدارة العملاء." },
        ],
      },
      testimonials_sec: {
        heading: "موثوق من قبل",
        accent: "المبتكرين",
        list: [
          { quote: "لم تقم Growthify بإعادة بناء موقعنا فحسب؛ بل أعادوا تصميم مسار نمونا بالكامل. زاد معدل التحويل بنسبة 45%.", name: "سارة تشن", company: "SvelteDynamics" },
          { quote: "نهجهم المنطقي القائم على البيانات أحدث فرقاً كبيراً. أخيراً، فريق يستخدم التحليلات وليس التخمين.", name: "ماركوس دوبوا", company: "LinearSolutions" },
          { quote: "من التدقيق الأولي إلى الإطلاق النهائي، كانت العملية سلسة للغاية. انخفضت تكاليف الإدارة إلى النصف.", name: "عائشة باتل", company: "ApexWellness" },
          { quote: "نتائج سيو ملموسة حقاً. في غضون ثلاثة أشهر، تصدرنا نتائج البحث.", name: "بن كارتر", company: "CipherCrypt" },
          { quote: "لقد تعاملنا مع عدة وكالات، لكن Growthify هي الأولى التي تفي بوعودها حقاً.", name: "جيسيكا لي", company: "Zenith Apparel" }
        ]
      },
      cta: {
        badge: "جاهز للتوسع؟",
        title_main: "أحدث ثورة في حضورك",
        title_sub: "الرقمي اليوم.",
        description:
          "انضم إلى أكثر من 200 شركة تنمو مع حلولنا المعتمدة على البيانات.",
        btn_consultation: "استشارة مجانية",
        btn_pricing: "الأسعار",
        footer_note: "لا يلزم بطاقة ائتمان • مكالمة لمدة 15 دقيقة",
      },
      contact: {
        title_line1: "لنصنع",
        title_highlight: "شيئاً عظيماً.",
        description: "هل لديك مشروع في ذهنك؟ نحن مستعدون لمساعدتك في توسيع تواجدك الرقمي بهندسة عالية الأداء.",
        label_email: "راسلنا عبر البريد",
        label_call: "اتصل بنا",
        label_office: "المكتب",
        office_value: "ساتخيرا، بنغلاديش",
        form_name: "اسمك",
        form_email: "البريد الإلكتروني",
        form_service: "الخدمة المطلوبة",
        form_message: "الرسالة",
        placeholder_name: "أحمد علي",
        placeholder_email: "ahmed@example.com",
        placeholder_message: "أخبرنا عن أهداف مشروعك...",
        service_web: "تطوير الويب",
        service_seo: "تحسين محركات البحث",
        service_ui: "تصميم واجهة المستخدم",
        service_marketing: "تسويق شامل",
        btn_send: "إرسال الاقتراح",
        toast_success: "تم إرسال الرسالة بنجاح! سنقوم بالرد عليك قريباً."
      },
      about: {
        vision_badge: "رؤيتنا",
        hero_title: "هندسة المستقبل",
        hero_highlight: "الرقمي.",
        hero_desc: "نحن لا نبني البرمجيات فحسب؛ بل نصنع تجارب رقمية قابلة للتوسع. تكمن خبرتنا في الهندسة عالية الأداء.",
        stat_projects: "مشاريع تم تسليمها",
        stat_satisfaction: "رضا العملاء",
        stat_users: "مستخدم نشط",
        stat_awards: "جوائز عالمية",
        strategy_title: "مدفوع بالاستراتيجية،",
        strategy_subtitle: "مثبت بالنتائج",
        feat_innov_title: "الابتكار أولاً",
        feat_innov_desc: "نحن نستخدم أحدث التقنيات مثل Next.js وتكامل الذكاء الاصطناعي.",
        feat_arch_title: "بنية تحتية قابلة للتوسع",
        feat_arch_desc: "أنظمة بنيت للتعامل مع ملايين الطلبات دون تعطل.",
        feat_user_title: "تصميم يركز على المستخدم",
        feat_user_desc: "إذا لم يتمكن المستخدم من استخدامه، فلا يهم مدى سرعته.",
        testimonial_title: "ماذا يقول شركاؤنا",
        testimonial_text: "لقد حولت Growthify سير عملنا بالكامل. فريق الهندسة لديهم من الطراز الأول."
      },
      services_page: {
        hero_badge: "خبرتنا",
        hero_title: "حلول مصممة من أجل",
        hero_highlight: "النمو الفائق.",
        hero_desc: "نحن نجمع بين الهندسة المتطورة والمحفزات النفسية لبناء منصات لا تكتفي بالمظهر الجيد بل تحقق مبيعات.",
        pricing_title: "تسعير بسيط وقابل للتوسع",
        toggle_monthly: "شهرياً",
        toggle_yearly: "سنوياً",
        save_badge: "وفر 20%",
        popular_badge: "الأكثر شعبية",
        per_month: "/شهر",
        btn_choose: "اختر",
        cta_title: "هل أنت مستعد لبناء شيء <br /> استثنائي؟",
        cta_desc: "حدد موعداً لاستشارة مجانية لمدة 15 دقيقة مع مهندسينا.",
        cta_btn: "احصل على استشارة مجانية",
      },
      services_list: [
        { title: "تطوير الويب", description: "تطبيقات MERN عالية الأداء مصممة للتوسع والسرعة.", features: ["Next.js 15+", "TypeScript", "قاعدة بيانات فورية"] },
        { title: "تحسين محركات البحث", description: "السيطرة على تصنيفات البحث من خلال التدقيق التقني.", features: ["Core Web Vitals", "بحث الكلمات المفتاحية", "استراتيجية الروابط"] },
        { title: "الإعلان الرقمي", description: "حملات إعلانية قائمة على البيانات تحول النقرات إلى عملاء.", features: ["إعلانات ميتا", "جوجل PPC", "إعادة الاستهداف"] },
        { title: "أنظمة الحجز", description: "سير عمل جدولة آلي مدمج مباشرة في موقعك.", features: ["مزامنة التقويم", "بوابات الدفع", "تنبيهات تلقائية"] }
      ],
      pricing_list: [
        { name: "الباقة الأساسية", price_monthly: "$499", price_yearly: "$399", description: "مثالية للشركات الناشئة.", features: ["موقع صفحة واحدة", "تحسين محركات البحث الأساسي"], highlight: false },
        { name: "باقة النمو", price_monthly: "$999", price_yearly: "$799", description: "باقتنا الأكثر شعبية.", features: ["تطبيق ويب MERN كامل", "تحسين محركات البحث المتقدم"], highlight: true },
        { name: "الباقة المميزة", price: "مخصص", description: "حلول على مستوى المؤسسات.", features: ["بيئة عمل متعددة المنصات", "فريق تطوير مخصص"], highlight: false }
      ],
      footer: {
        description: "تمكين الشركات بحلول ويب عالية الأداء واستراتيجيات نمو قائمة على البيانات. مصمم للعصر الرقمي الحديث.",
        col_company: "الشركة",
        col_services: "الخدمات",
        col_resources: "الموارد",
        newsletter_title: "اشترك للنمو",
        newsletter_desc: "احصل على أحدث الرؤى حول تكنولوجيا الويب وسيو في بريدك الوارد.",
        placeholder: "البريد الإلكتروني",
        copyright: "صنع بكل شغف بواسطة",
        status: "الأنظمة تعمل كالمعتاد",
        links: {
          about: "من نحن",
          services: "الخدمات",
          partners: "الشركاء",
          contact: "اتصل بنا",
          web_dev: "تطوير الويب",
          design: "تصميم واجهة المستخدم",
          seo: "تحسين محركات البحث",
          mern: "تقنية MERN Stack",
          privacy: "سياسة الخصوصية",
          terms: "شروط الخدمة",
          refund: "سياسة الاسترجاع"
        }
      },
      blog_page: {
        title: "أحدث",
        title_highlight: "الأفكار.",
        subtitle: "تحليلات تقنية من طليعة النمو الرقمي.",
        read_article: "اقرأ المقال",
        btn_more: "أظهر المزيد",
        btn_less: "أظهر أقل",
        categories: ["الكل", "تطوير", "تصميم", "تسويق", "أمن"],
        posts: [
          { id: 1, title: "احتراف Next.js 15: مستقبل أداء Full-Stack", excerpt: "استكشف كيف تُحدث ميزات React الأخيرة ومكونات الخادم ثورة في سرعات البناء.", category: "تطوير", readTime: "8 دقائق للقراءة" },
          { id: 2, title: "استراتيجيات سيو لعام 2026", excerpt: "تعمق في البحث الدلالي وعناقيد المحتوى المدفوعة بالذكاء الاصطناعي.", category: "تسويق", readTime: "5 دقائق للقراءة" },
          { id: 3, title: "صعود شبكات Bento", excerpt: "لماذا تنتقل العلامات التجارية الرائدة عالميًا إلى المخططات المعيارية.", category: "تصميم", readTime: "6 دقائق للقراءة" },
          { id: 4, title: "أفضل ممارسات الأمان في Node.js", excerpt: "حماية تطبيق MERN الخاص بك من الحقن و XSS.", category: "أمن", readTime: "12 دقيقة للقراءة" },
          { id: 5, title: "الذكاء الاصطناعي في إنشاء المحتوى", excerpt: "كيف يغير الذكاء الاصطناعي التوليدي نصوص التسويق الرقمي.", category: "تسويق", readTime: "4 دقائق للقراءة" },
          { id: 6, title: "تقنيات Tailwind المتقدمة", excerpt: "تحسين سير عمل CSS الخاص بك مع أنظمة التصميم المخصصة.", category: "تطوير", readTime: "7 دقائق للقراءة" }
        ]
      },
    },
  },
  sv: {
    translation: {
      navbar: {
        home: "Hem",
        services: "Tjänster",
        about: "Om oss",
        blog: "Blogg",
        contact: "Kontakt",
        cta: "Starta Projekt",
        appearance: "Utseende"
      },
      hero: {
        badge: "Nästa Generations Tillväxt",
        title_line1: "Skala din Verksamhet",
        title_gradient: "Med Datadriven Logik",
        description:
          "Growthify hjälper varumärken att dominera sin nisch genom expertutveckling.",
        btn_consultation: "Gratis Konsultation",
        btn_services: "Våra Tjänster",
      },
      benefits: {
        title: "Varför samarbeta med",
        company: "Growthify",
        description:
          "Vi bygger inte bara webbplatser; vi bygger tillväxtmotorer. Varje rad kod är optimerad för prestanda.",
        features: [
          "Prestandafokuserad arkitektur",
          "Konverteringsoptimerad UI/UX",
          "Integrering av realtidsanalys",
        ],
        stats: {
          conversion: "Konverteringslyft",
          speed: "Sidhastighet",
          uptime: "Tillgänglighet",
        },
        visual: {
          traffic: "Aktiv Trafik",
          growth: "+12,5% denna vecka",
        },
      },
      services_sec: {
        heading: "Vår Kärnkompetens",
        subheading:
          "Vi förenar design med logik för att lösa komplexa digitala problem.",
        list: [
          {
            title: "Webbutveckling",
            desc: "Specialanpassade webbapplikationer byggda för snabbhet och konvertering.",
          },
          {
            title: "SEO-Mästerskap",
            desc: "Dominera sökresultaten och driv organisk trafik.",
          },
          {
            title: "Betald Annonsering",
            desc: "ROI-fokuserade kampanjer skräddarsydda för ditt varumärke.",
          },
          {
            title: "Bokningssystem",
            desc: "Sömlös automatisering för tidsbokning och kundhantering.",
          },
        ],
      },
      testimonials_sec: {
        heading: "Betrodd av",
        accent: "Visionärer",
        list: [
          { quote: "Growthify byggde inte bara om vår sajt; de designade om vår tillväxtresa. Vår konverteringsgrad ökade med 45%.", name: "Sarah Chen", company: "SvelteDynamics" },
          { quote: "Deras datadrivna logik är en game-changer. Äntligen ett team som använder analys, inte gissningar.", name: "Marcus Dubois", company: "LinearSolutions" },
          { quote: "Från första granskning till lansering var processen sömlös. Planeringsarbetet halverades.", name: "Aisha Patel", company: "ApexWellness" },
          { quote: "SEO-resultat som faktiskt gör skillnad. Inom tre månader rankade vi som nummer ett.", name: "Ben Carter", company: "CipherCrypt" },
          { quote: "Vi har jobbat med flera byråer, men Growthify är den första som faktiskt levererar vad de lovar.", name: "Jessica Lee", company: "Zenith Apparel" }
        ]
      },
      cta: {
        badge: "Redo att skala?",
        title_main: "Förändra din digitala",
        title_sub: "närvaro idag.",
        description: "Gå med i 200+ företag som växer med våra MERN-lösningar.",
        btn_consultation: "Gratis Konsultation",
        btn_pricing: "Se Priser",
        footer_note: "Inget kreditkort krävs • 15 min samtal",
      },
      contact: {
        title_line1: "Låt oss bygga",
        title_highlight: "något stort.",
        description: "Har du ett projekt i åtanke? Vi är redo att hjälpa dig skala din digitala närvaro med högpresterande ingenjörskonst.",
        label_email: "Mejla oss",
        label_call: "Ring oss",
        label_office: "Kontor",
        office_value: "Satkhira, Bangladesh",
        form_name: "Ditt namn",
        form_email: "E-postadress",
        form_service: "Tjänst som önskas",
        form_message: "Meddelande",
        placeholder_name: "Erik Johansson",
        placeholder_email: "erik@exempel.se",
        placeholder_message: "Berätta om dina projektmål...",
        service_web: "Webbutveckling",
        service_seo: "SEO-optimering",
        service_ui: "UI/UX-design",
        service_marketing: "Fullskalig marknadsföring",
        btn_send: "Skicka förslag",
        toast_success: "Meddelandet har skickats! Vi återkommer snart."
      },
      about: {
        vision_badge: "Vår Vision",
        hero_title: "Ingenjörskonst för",
        hero_highlight: "Digital Framtid.",
        hero_desc: "Vi bygger inte bara mjukvara; vi skapar digitala upplevelser som skalar. Vår expertis ligger i högpresterande teknik.",
        stat_projects: "Levererade Projekt",
        stat_satisfaction: "Kundnöjdhet",
        stat_users: "Aktiva Användare",
        stat_awards: "Globala Utmärkelser",
        strategy_title: "Driven av Strategi,",
        strategy_subtitle: "Bevisad av Resultat",
        feat_innov_title: "Innovation Först",
        feat_innov_desc: "Vi använder banbrytande tekniker som Next.js och AI-integration.",
        feat_arch_title: "Scalable Architecture",
        feat_arch_desc: "Systems built to handle millions of requests without breaking.",
        feat_user_title: "User-Centric Design",
        feat_user_desc: "If the user can't use it, it doesn't matter how fast it is.",
        testimonial_title: "What Our Partners Say",
        testimonial_text: "Growthify transformerade vårt arbetsflöde helt. Deras ingenjörsteam är i världsklass."
      },
      services_page: {
        hero_badge: "Vår Expertis",
        hero_title: "Lösningar för",
        hero_highlight: "Hyper-Tillväxt.",
        hero_desc: "Vi kombinerar avancerad teknik med psykologiska triggers för plattformar som konverterar.",
        pricing_title: "Enkel och skalbar prissättning",
        toggle_monthly: "Månadsvis",
        toggle_yearly: "Årsvis",
        save_badge: "Spara 20%",
        popular_badge: "Mest Populär",
        per_month: "/mån",
        btn_choose: "Välj",
        cta_title: "Redo att bygga något <br /> extraordinärt?",
        cta_desc: "Boka en gratis 15-minuters konsultation med våra ingenjörer.",
        cta_btn: "Få en gratis konsultation",
      },
      services_list: [
        { title: "Webbutveckling", description: "Högpresterande MERN-applikationer byggda för tillväxt.", features: ["Next.js 15+", "TypeScript", "Realtids-DB"] },
        { title: "SEO-optimering", description: "Dominera sökresultaten med tekniska revisioner.", features: ["Core Web Vitals", "Sökordsanalys", "Backlinks"] },
        { title: "Digital annonsering", description: "Datadrivna kampanjer som gör klick till kunder.", features: ["Meta Ads", "Google PPC", "Retargeting"] },
        { title: "Bokningssystem", description: "Automatisera schemaläggning direkt på din webbplats.", features: ["Kalendersynk", "Betallösningar", "Påminnelser"] }
      ],
      pricing_list: [
        { name: "Starter", price_monthly: "4990 kr", price_yearly: "3990 kr", description: "Perfekt för nystartade företag.", features: ["Ensidig webbplats", "Bas SEO"], highlight: false },
        { name: "Growth", price_monthly: "9990 kr", price_yearly: "7990 kr", description: "Vår populäraste plan för växande team.", features: ["Komplett MERN-app", "Avancerad SEO"], highlight: true },
        { name: "Premium", price: "Anpassad", description: "Lösningar för stora företag.", features: ["Multi-plattform", "Dedikerat team"], highlight: false }
      ],
      footer: {
        description: "Stärker företag med högpresterande webblösningar och datadrivna tillväxtstrategier. Byggd för den moderna digitala eran.",
        col_company: "Företag",
        col_services: "Tjänster",
        col_resources: "Resurser",
        newsletter_title: "Prenumerera på Tillväxt",
        newsletter_desc: "Få de senaste insikterna om webbteknik och SEO direkt i din inkorg.",
        placeholder: "E-postadress",
        copyright: "Byggd med passion av",
        status: "Systemen Operativa",
        links: {
          about: "Om Oss",
          services: "Tjänster",
          partners: "Partners",
          contact: "Kontakt",
          web_dev: "Webbutveckling",
          design: "UI/UX Design",
          seo: "SEO-optimering",
          mern: "MERN Stack",
          privacy: "Integritetspolicy",
          terms: "Användarvillkor",
          refund: "Återbetalningspolicy"
        }
      },
      blog_page: {
        title: "Senaste",
        title_highlight: "Insikter.",
        subtitle: "Tekniska genombrott från framkanten av digital tillväxt.",
        read_article: "Läs artikeln",
        btn_more: "Visa fler historier",
        btn_less: "Visa färre",
        categories: ["Alla", "Utveckling", "Design", "Marknadsföring", "Säkerhet"],
        posts: [
          { id: 1, title: "Bemästra Next.js 15: Framtiden för Full-Stack-prestanda", excerpt: "Utforska hur de senaste React-funktionerna och serverkomponenterna revolutionerar bygghastigheter.", category: "Utveckling", readTime: "8 min läsning" },
          { id: 2, title: "SEO-strategier för 2026", excerpt: "Djupdykning i semantisk sökning och AI-drivna innehållskluster.", category: "Marknadsföring", readTime: "5 min läsning" },
          { id: 3, title: "Bento Grids framfart", excerpt: "Varför världens ledande varumärken går över till modulära layouter.", category: "Design", readTime: "6 min läsning" },
          { id: 4, title: "Node.js-säkerhet - Best practices", excerpt: "Skydda din MERN-stack-applikation från injektion och XSS.", category: "Säkerhet", readTime: "12 min läsning" },
          { id: 5, title: "AI i innehållsskapande", excerpt: "Hur generativ AI förändrar texter inom digital marknadsföring.", category: "Marknadsföring", readTime: "4 min läsning" },
          { id: 6, title: "Avancerade Tailwind-tekniker", excerpt: "Optimera ditt CSS-arbetsflöde med anpassade designsystem.", category: "Utveckling", readTime: "7 min läsning" }
        ]
      },
    },
  },
  de: {
    translation: {
      navbar: {
        home: "Startseite",
        services: "Dienste",
        about: "Über uns",
        blog: "Blog",
        contact: "Kontakt",
        cta: "Projekt starten",
        appearance: "Erscheinungsbild"
      },
      hero: {
        badge: "Wachstumslösungen",
        title_line1: "Skalieren Sie Ihr Geschäft",
        title_gradient: "Mit datengesteuerter Logik",
        description:
          "Growthify unterstützt Marken dabei, ihre Nische durch Experten-Webentwicklung zu dominieren.",
        btn_consultation: "Kostenlose Beratung",
        btn_services: "Unsere Dienste",
      },
      benefits: {
        title: "Warum eine Partnerschaft mit",
        company: "Growthify",
        description:
          "Wir bauen nicht nur Websites, wir bauen Wachstumsmotoren. Jede Zeile Code ist auf Leistung optimiert.",
        features: [
          "Performance-First-Architektur",
          "Konversionsoptimiertes UI/UX",
          "Echtzeit-Analyse-Integration",
        ],
        stats: {
          conversion: "Conversion-Anstieg",
          speed: "Website-Geschwindigkeit",
          uptime: "Uptime-Rate",
        },
        visual: {
          traffic: "Aktiver Traffic",
          growth: "+12,5% diese Woche",
        },
      },
      services_sec: {
        heading: "Unsere Kernkompetenz",
        subheading:
          "Wir verbinden Design mit Logik, um komplexe digitale Probleme zu lösen.",
        list: [
          {
            title: "Webentwicklung",
            desc: "Maßgeschneiderte Webanwendungen, optimiert für Speed und Conversion.",
          },
          {
            title: "SEO-Meisterschaft",
            desc: "Dominieren Sie die Suche und steigern Sie den organischen Traffic.",
          },
          {
            title: "Bezahlte Werbung",
            desc: "ROI-fokussierte Werbekampagnen für Ihre Marke.",
          },
          {
            title: "Buchungssysteme",
            desc: "Nahtlose Automatisierung für Termine und Kundenmanagement.",
          },
        ],
      },
      testimonials_sec: {
        heading: "Vertraut von",
        accent: "Visionären",
        list: [
          { quote: "Growthify hat nicht nur unsere Website neu aufgebaut, sondern unseren Wachstumskurs neu definiert. Die Conversion-Rate stieg um 45%.", name: "Sarah Chen", company: "SvelteDynamics" },
          { quote: "Ihr datengesteuerter Logik-Ansatz ist ein Game-Changer. Endlich ein Team, das Analysen statt Vermutungen nutzt.", name: "Marcus Dubois", company: "LinearSolutions" },
          { quote: "Vom ersten Audit bis zum Launch war der Prozess nahtlos. Der Planungsaufwand wurde halbiert.", name: "Aisha Patel", company: "ApexWellness" },
          { quote: "SEO-Ergebnisse, die wirklich etwas bewirken. Innerhalb von drei Monaten waren wir auf Platz eins.", name: "Ben Carter", company: "CipherCrypt" },
          { quote: "Wir haben mit vielen Agenturen gearbeitet, aber Growthify ist die erste, die ihre Versprechen hält.", name: "Jessica Lee", company: "Zenith Apparel" }
        ]
      },
      cta: {
        badge: "Bereit zu skalieren?",
        title_main: "Transformieren Sie Ihre",
        title_sub: "digitale Präsenz.",
        description:
          "Über 200 Unternehmen wachsen bereits mit unseren MERN-Lösungen.",
        btn_consultation: "Kostenlose Beratung",
        btn_pricing: "Preise ansehen",
        footer_note: "Keine Kreditkarte nötig • 15-Minuten-Gespräch",
      },
      contact: {
        title_line1: "Lassen Sie uns",
        title_highlight: "Großes Bauen.",
        description: "Haben Sie ein Projekt im Kopf? Wir sind bereit, Ihre digitale Präsenz mit High-Performance-Engineering zu skalieren.",
        label_email: "E-Mail schreiben",
        label_call: "Rufen Sie uns an",
        label_office: "Büro",
        office_value: "Satkhira, Bangladesch",
        form_name: "Ihr Name",
        form_email: "E-Mail-Adresse",
        form_service: "Gewünschter Dienst",
        form_message: "Nachricht",
        placeholder_name: "Max Mustermann",
        placeholder_email: "max@beispiel.de",
        placeholder_message: "Erzählen Sie uns von Ihren Projektzielen...",
        service_web: "Webentwicklung",
        service_seo: "SEO-Optimierung",
        service_ui: "UI/UX Design",
        service_marketing: "Full-Scale Marketing",
        btn_send: "Vorschlag senden",
        toast_success: "Nachricht erfolgreich gesendet! Wir melden uns in Kürze."
      },
      about: {
        vision_badge: "Unsere Vision",
        hero_title: "Engineering der",
        hero_highlight: "Digitalen Zukunft.",
        hero_desc: "Wir bauen nicht nur Software; wir gestalten digitale Erlebnisse, die skalieren. Unsere Expertise liegt im High-Performance Engineering.",
        stat_projects: "Abgeschlossene Projekte",
        stat_satisfaction: "Kundenzufriedenheit",
        stat_users: "Aktive Nutzer",
        stat_awards: "Globale Auszeichnungen",
        strategy_title: "Strategiegetrieben,",
        strategy_subtitle: "Erfolgsgeprüft",
        feat_innov_title: "Innovation Zuerst",
        feat_innov_desc: "Wir nutzen modernste Stacks wie Next.js und KI-Integration.",
        feat_arch_title: "Skalierbare Architektur",
        feat_arch_desc: "Systeme, die Millionen von Anfragen ohne Ausfälle bewältigen.",
        feat_user_title: "Benutzerzentriertes Design",
        feat_user_desc: "Wenn der Nutzer es nicht bedienen kann, spielt die Geschwindigkeit keine Rolle.",
        testimonial_title: "Was unsere Partner sagen",
        testimonial_text: "Growthify hat unseren Workflow komplett transformiert. Das Engineering-Team ist erstklassig."
      },
      services_page: {
        hero_badge: "Unsere Expertise",
        hero_title: "Lösungen für",
        hero_highlight: "Hyper-Wachstum.",
        hero_desc: "Wir kombinieren modernstes Engineering mit psychologischen Triggern für Plattformen, die konvertieren.",
        pricing_title: "Einfache, skalierbare Preise",
        toggle_monthly: "Monatlich",
        toggle_yearly: "Jährlich",
        save_badge: "20% Sparen",
        popular_badge: "Am Beliebtesten",
        per_month: "/Mon",
        btn_choose: "Wählen",
        cta_title: "Bereit, etwas <br /> Außergewöhnliches zu bauen?",
        cta_desc: "Vereinbaren Sie eine kostenlose 15-minütige Beratung.",
        cta_btn: "Kostenlose Beratung",
      },
      services_list: [
        { title: "Webentwicklung", description: "Hochleistungs-MERN-Anwendungen, skalierbar und schnell.", features: ["Next.js 15+", "TypeScript", "Echtzeit-DB"] },
        { title: "SEO-Optimierung", description: "Dominieren Sie Suchrankings mit technischen Audits.", features: ["Core Web Vitals", "Keyword-Recherche", "Backlinks"] },
        { title: "Digital Ads", description: "Datengesteuerte Kampagnen für loyale Kunden.", features: ["Meta Ads", "Google PPC", "Retargeting"] },
        { title: "Booking Systems", description: "Automatisierte Workflows direkt in Ihrer Website.", features: ["Kalender-Sync", "Zahlungsgateways", "Erinnerungen"] }
      ],
      pricing_list: [
        { name: "Starter", price_monthly: "499€", price_yearly: "399€", description: "Perfekt für Startups.", features: ["Single Page Website", "Basis SEO"], highlight: false },
        { name: "Growth", price_monthly: "999€", price_yearly: "799€", description: "Unser beliebtester Plan.", features: ["Vollständige MERN App", "Erweitertes SEO"], highlight: true },
        { name: "Premium", price: "Individuell", description: "Enterprise-Lösungen.", features: ["Multi-Plattform", "Dediziertes Team"], highlight: false }
      ],
      footer: {
        description: "Unternehmen stärken durch Hochleistungs-Weblösungen und datengesteuerte Wachstumsstrategien. Gebaut für das moderne digitale Zeitalter.",
        col_company: "Unternehmen",
        col_services: "Dienstleistungen",
        col_resources: "Ressourcen",
        newsletter_title: "Wachstum Abonnieren",
        newsletter_desc: "Holen Sie sich die neuesten Einblicke in Webtech und SEO direkt in Ihr Postfach.",
        placeholder: "E-Mail-Adresse",
        copyright: "Mit Leidenschaft gebaut von",
        status: "Systeme Betriebsbereit",
        links: {
          about: "Über Uns",
          services: "Dienstleistungen",
          partners: "Partner",
          contact: "Kontakt",
          web_dev: "Webentwicklung",
          design: "UI/UX Design",
          seo: "SEO Optimierung",
          mern: "MERN Stack",
          privacy: "Datenschutz",
          terms: "AGB",
          refund: "Rückerstattung"
        }
      },
      blog_page: {
        title: "Neueste",
        title_highlight: "Einblicke.",
        subtitle: "Technische Analysen von der Spitze des digitalen Wachstums.",
        read_article: "Artikel lesen",
        btn_more: "Mehr Geschichten",
        btn_less: "Weniger zeigen",
        categories: ["Alle", "Entwicklung", "Design", "Marketing", "Sicherheit"],
        posts: [
          { id: 1, title: "Mastering Next.js 15: Die Zukunft der Full-Stack-Performance", excerpt: "Erfahren Sie, wie die neuesten React-Features und Serverkomponenten die Build-Geschwindigkeiten revolutionieren.", category: "Entwicklung", readTime: "8 Min. Lesezeit" },
          { id: 2, title: "SEO-Strategien für 2026", excerpt: "Tiefes Eintauchen in die semantische Suche und KI-gesteuerte Content-Cluster.", category: "Marketing", readTime: "5 Min. Lesezeit" },
          { id: 3, title: "Der Aufstieg der Bento Grids", excerpt: "Warum die weltweit führenden Marken auf modulare Layouts umsteigen.", category: "Design", readTime: "6 Min. Lesezeit" },
          { id: 4, title: "Node.js Sicherheits-Best-Practices", excerpt: "Schützen Sie Ihre MERN-Stack-Anwendung vor Injektionen und XSS.", category: "Sicherheit", readTime: "12 Min. Lesezeit" },
          { id: 5, title: "KI bei der Erstellung von Inhalten", excerpt: "Wie generative KI Texte im digitalen Marketing verändert.", category: "Marketing", readTime: "4 Min. Lesezeit" },
          { id: 6, title: "Fortgeschrittene Tailwind-Techniken", excerpt: "Optimieren Sie Ihren CSS-Workflow mit benutzerdefinierten Designsystemen.", category: "Entwicklung", readTime: "7 Min. Lesezeit" }
        ]
      },
    },
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

export default i18n;
