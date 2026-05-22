import { Locale } from "@/lib/i18n";

type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    abbreviation: string;
    name: string;
  };
  languageSwitch: {
    title: string;
    locales: Record<Locale, string>;
  };
  nav: {
    label: string;
    items: Array<{ label: string; href: string }>;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    tertiaryCta: { label: string; href: string };
    supportPoints: string[];
  };
  quickActions: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      href: string;
    }>;
  };
  trustPanel: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  programs: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  pathways: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
    cards: Array<{
      kicker: string;
      title: string;
      description: string;
    }>;
  };
  impact: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    items: Array<{
      value: string;
      label: string;
      description: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  legal: {
    eyebrow: string;
    title: string;
    description: string;
    privacyTitle: string;
    privacyPoints: string[];
    termsTitle: string;
    termsPoints: string[];
    note: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    details: Array<{
      label: string;
      value: string;
      helper: string;
      href: string;
    }>;
    cards: Array<{
      title: string;
      description: string;
    }>;
    reviewBanner: {
      title: string;
      description: string;
    };
  };
  footer: {
    note: string;
    security: string;
  };
  mobileBar: Array<{
    label: string;
    href: string;
  }>;
};

const commonNav = [
  { href: "#about" },
  { href: "#services" },
  { href: "#faq" },
  { href: "#contact" },
  { href: "#legal" },
];

const siteContent: Record<Locale, SiteContent> = {
  en: {
    meta: {
      title: "Community Health, Dignity, and Support",
      description:
        "HLCHS supports people and families through outreach, referrals, counselling, and dignity-led public health guidance in Hyderabad.",
    },
    brand: {
      abbreviation: "HLCHS",
      name: "Hyderabad Leprosy Control & Health Society",
    },
    languageSwitch: {
      title: "Select language",
      locales: {
        en: "English",
        hi: "हिंदी",
      },
    },
    nav: {
      label: "Primary navigation",
      items: commonNav.map((item, index) => ({
        ...item,
        label: ["About", "Services", "FAQ", "Contact", "Privacy"][index],
      })),
    },
    hero: {
      eyebrow: "Community health support in English and Hindi",
      title: "Care should feel reachable, respectful, and close to home.",
      description:
        "Hyderabad Leprosy Control & Health Society works with communities facing leprosy, HIV/AIDS, TB, stigma, and health vulnerability. We aim to connect people with guidance, referrals, supportive conversations, and practical next steps without making the process confusing or intimidating.",
      primaryCta: {
        label: "Talk to HLCHS",
        href: "#contact",
      },
      secondaryCta: {
        label: "See support services",
        href: "#services",
      },
      tertiaryCta: {
        label: "Read common questions",
        href: "#faq",
      },
      supportPoints: [
        "Reach out in simple language, in English or Hindi.",
        "Find guidance for individuals, families, and vulnerable communities.",
        "Get clear next steps by phone, email, or office contact.",
      ],
    },
    quickActions: {
      title: "Quick actions",
      items: [
        {
          title: "Call for support",
          description:
            "For anyone who wants to speak first and understand where to begin.",
          href: "tel:+914023203991",
        },
        {
          title: "Find the office",
          description:
            "See where HLCHS is located and how to plan an in-person visit.",
          href: "#contact",
        },
        {
          title: "Read the FAQ",
          description:
            "Get answers to the questions most visitors usually have.",
          href: "#faq",
        },
      ],
    },
    trustPanel: {
      title: "Why people reach out",
      items: [
        {
          title: "Respectful guidance",
          description:
            "Health concerns, stigma, and family stress need calm conversations, not judgment.",
        },
        {
          title: "Practical support",
          description:
            "HLCHS focuses on real next steps such as outreach, referrals, and community-linked care.",
        },
        {
          title: "Privacy-aware contact",
          description:
            "Personal details should be treated carefully and shared only where needed to respond.",
        },
      ],
    },
    programs: {
      eyebrow: "About HLCHS",
      title: "A health society shaped by outreach, dignity, and public trust.",
      description:
        "HLCHS is best presented not as a distant institution, but as a community-facing organisation that helps people find their way through difficult health situations with clarity and care.",
      items: [
        {
          title: "Community health outreach",
          description:
            "Working close to communities so support does not feel far away or out of reach.",
        },
        {
          title: "Leprosy and disability-sensitive support",
          description:
            "Encouraging early help-seeking, treatment linkage, and care that respects dignity.",
        },
        {
          title: "HIV/AIDS, TB, and allied guidance",
          description:
            "Connecting people to information, awareness, referral pathways, and safer support conversations.",
        },
        {
          title: "Women, children, and family support",
          description:
            "Recognising that health challenges often affect the whole household, not just one person.",
        },
      ],
    },
    pathways: {
      eyebrow: "Services and support",
      title: "People can reach out for more than one kind of help.",
      description:
        "The website should make it easy to understand not just who HLCHS is, but what someone can actually approach the organisation for.",
      steps: [
        {
          title: "Share the situation",
          description:
            "A person, family member, volunteer, or partner can start by describing the need in simple words.",
        },
        {
          title: "Get directed to the right support",
          description:
            "HLCHS can help identify the right conversation, service pathway, referral, or next contact point.",
        },
        {
          title: "Stay connected for follow-up",
          description:
            "When appropriate, guidance should not stop at first contact and may continue through outreach or referral follow-through.",
        },
      ],
      cards: [
        {
          kicker: "Health access",
          title: "Referral, guidance, and treatment linkage",
          description:
            "People may reach out when they are unsure where to go, whom to meet, or how to begin seeking care or support.",
        },
        {
          kicker: "Emotional and social support",
          title: "Counselling and stigma-sensitive conversations",
          description:
            "Support is not only about treatment. Many people also need reassurance, privacy, and someone who will listen without shame.",
        },
        {
          kicker: "Family and community care",
          title: "Support for women, children, and vulnerable households",
          description:
            "Families may need help navigating difficult circumstances, especially where health challenges create social or financial strain.",
        },
      ],
    },
    impact: {
      eyebrow: "What people want to know",
      title: "Most visitors come looking for answers to these practical questions.",
      description:
        "Instead of overwhelming people with institutional language, the site should answer the basic things they are likely wondering the moment they arrive.",
      note:
        "Service availability, visiting hours, and referral processes should be confirmed directly with HLCHS before public launch.",
      items: [
        {
          value: "Who",
          label: "Can reach out?",
          description:
            "Individuals, families, community members, volunteers, donors, CSR teams, and partner organisations can all contact HLCHS for the right next step.",
        },
        {
          value: "What",
          label: "Can they ask for?",
          description:
            "Guidance, outreach information, counselling support, referral help, contact details, partnership discussions, and trusted direction.",
        },
        {
          value: "How",
          label: "Can they connect?",
          description:
            "By phone, email, or office visit, with a clear preference for easy contact over complicated forms.",
        },
        {
          value: "Why",
          label: "Does this matter?",
          description:
            "Because timely, respectful guidance can reduce fear, confusion, and delay when people are already under stress.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "A few clear answers can remove a lot of hesitation.",
      description:
        "This section should help first-time visitors feel oriented before they decide whether to call, visit, or write.",
      items: [
        {
          question: "What kind of help can HLCHS support people with?",
          answer:
            "HLCHS may support people through outreach, guidance, referral pathways, counselling, community-health information, and help linked to leprosy, HIV/AIDS, TB, stigma, and vulnerable family situations.",
        },
        {
          question: "Can I contact HLCHS for someone in my family?",
          answer:
            "Yes. A family member, caregiver, or trusted supporter may reach out to understand what kind of help might be available and what the next step should be.",
        },
        {
          question: "Do I need to fill a form before speaking to someone?",
          answer:
            "No. The website should make direct contact easy. Calling or emailing should feel like a normal first step, especially for people who are not comfortable with forms.",
        },
        {
          question: "Will the information I share be kept private?",
          answer:
            "HLCHS should collect only the information needed to respond and should handle personal details carefully, especially when sensitive health or family situations are involved.",
        },
        {
          question: "Can donors, CSR teams, or institutions also contact HLCHS?",
          answer:
            "Yes. The same website should also support partnership and funding conversations, provided the path is clearly separated from community-help enquiries.",
        },
        {
          question: "Does this website provide medical diagnosis or emergency care?",
          answer:
            "No. The website is for information and contact. It should not be treated as an emergency service or a substitute for direct medical diagnosis.",
        },
      ],
    },
    legal: {
      eyebrow: "Privacy and terms",
      title: "People should know how their information is treated and how this website should be used.",
      description:
        "A public-interest health website should be plainspoken about privacy, limited data collection, and safe expectations for visitors.",
      privacyTitle: "Privacy Policy",
      privacyPoints: [
        "HLCHS should collect only the minimum information needed to respond to contact, volunteer, partner, or support enquiries.",
        "Personal details such as name, phone number, email address, and message content should be used only to communicate back, coordinate help, or manage legitimate organisational follow-up.",
        "Sensitive health or family information should never be requested unless it is necessary for a specific response, and even then it should be handled with extra care.",
        "HLCHS should not sell, rent, or misuse visitor information. Access to submitted information should be limited to authorised team members.",
        "Reasonable technical safeguards should be used to protect website data in transit and during storage, though no internet system can promise absolute security.",
        "Visitors should avoid sharing unnecessary private information through public forms, and they may contact HLCHS directly if they are unsure what to disclose online.",
      ],
      termsTitle: "Terms & Conditions",
      termsPoints: [
        "This website is intended to provide information about HLCHS, its work, its contact details, and ways to seek support or partnership.",
        "The website is not a medical emergency service and does not provide online diagnosis, emergency intervention, or guaranteed service outcomes through web content alone.",
        "Visitors should use the site lawfully, respectfully, and without attempting to disrupt, misuse, or interfere with website operations or contact channels.",
        "Information on the site should be treated as general guidance. Final programme availability, office timings, and referral support should be confirmed directly with HLCHS.",
        "Any downloadable resources, written materials, and brand identifiers remain the property of HLCHS unless explicitly shared for broader public use.",
        "HLCHS may update website content, privacy practices, or terms as its programmes, contact methods, or legal requirements evolve.",
      ],
      note:
        "These policies are written as a practical launch-ready draft and should still be reviewed by HLCHS before public release.",
    },
    contact: {
      eyebrow: "Reach HLCHS",
      title: "If you are unsure where to begin, start with a call.",
      description:
        "The phone number and email below come from public listings associated with HLCHS. The organisation should verify the final published address, timings, and referral instructions before launch.",
      details: [
        {
          label: "Phone",
          value: "+91 40 2320 3991",
          helper: "A good first step for people who want immediate spoken guidance.",
          href: "tel:+914023203991",
        },
        {
          label: "Email",
          value: "hlchsap@gmail.com",
          helper: "Useful for follow-up, partnership, volunteer, and institutional enquiries.",
          href: "mailto:hlchsap@gmail.com",
        },
        {
          label: "Location",
          value: "Abids, Hyderabad, Telangana",
          helper: "The full office address and timings should be confirmed before final publication.",
          href: "https://maps.google.com/?q=Abids,+Hyderabad,+Telangana",
        },
      ],
      cards: [
        {
          title: "Need health guidance?",
          description:
            "Reach out when you need clarity, a referral direction, or help understanding where to go next.",
        },
        {
          title: "Planning a visit?",
          description:
            "Confirm office timings before travelling, especially if someone is visiting from outside the immediate area.",
        },
        {
          title: "Looking to support HLCHS?",
          description:
            "Donors, CSR teams, researchers, and institutions should have a clear and respectful path to connect.",
        },
        {
          title: "Concerned about privacy?",
          description:
            "Share only what is needed at first contact. Sensitive details should be discussed carefully and only when necessary.",
        },
      ],
      reviewBanner: {
        title: "Important before launch",
        description:
          "HLCHS should review all public contact details, legal identifiers, service claims, office timings, and language choices before the live website is published.",
      },
    },
    footer: {
      note:
        "HLCHS stands for health access, dignity, and practical support for people who need a clear next step.",
      security:
        "This website should collect only necessary information and protect it through secure, privacy-aware web practices.",
    },
    mobileBar: [
      { label: "Call", href: "tel:+914023203991" },
      { label: "Services", href: "#services" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hi: {
    meta: {
      title: "साथ, सहारा और सेहत तक पहुंच",
      description:
        "एचएलसीएचएस हैदराबाद में लोगों, परिवारों और समुदायों को मार्गदर्शन, रेफ़रल और सम्मानजनक स्वास्थ्य सहयोग से जोड़ने का काम करता है।",
    },
    brand: {
      abbreviation: "HLCHS",
      name: "हैदराबाद लेप्रोसी कंट्रोल एंड हेल्थ सोसाइटी",
    },
    languageSwitch: {
      title: "भाषा चुनें",
      locales: {
        en: "English",
        hi: "हिंदी",
      },
    },
    nav: {
      label: "मुख्य नेविगेशन",
      items: commonNav.map((item, index) => ({
        ...item,
        label: ["हम कौन हैं", "मिलने वाली मदद", "आम सवाल", "संपर्क", "गोपनीयता"][index],
      })),
    },
    hero: {
      eyebrow: "हिंदी और अंग्रेज़ी में मदद की आसान राह",
      title: "इलाज हो, सलाह हो या सहारा, बात यहीं से शुरू हो सकती है।",
      description:
        "हैदराबाद लेप्रोसी कंट्रोल एंड हेल्थ सोसाइटी उन लोगों और परिवारों के साथ खड़ी है जो कुष्ठ रोग, एचआईवी/एड्स, टीबी, सामाजिक कलंक या स्वास्थ्य असुरक्षा जैसी चुनौतियों से जूझ रहे हैं। हमारा काम है लोगों को सही जानकारी, सही संपर्क और सम्मान के साथ आगे बढ़ने का रास्ता देना।",
      primaryCta: {
        label: "एचएलसीएचएस से बात करें",
        href: "#contact",
      },
      secondaryCta: {
        label: "मिलने वाली मदद देखें",
        href: "#services",
      },
      tertiaryCta: {
        label: "आम सवाल पढ़ें",
        href: "#faq",
      },
      supportPoints: [
        "अपनी बात हिंदी या अंग्रेज़ी में आसानी से रखी जा सकती है।",
        "व्यक्ति, परिवार और ज़रूरतमंद समुदाय सभी यहां से राह पूछ सकते हैं।",
        "फोन, ईमेल या कार्यालय संपर्क से अगला कदम साफ़ किया जा सकता है।",
      ],
    },
    quickActions: {
      title: "सीधे काम की बातें",
      items: [
        {
          title: "सहायता के लिए कॉल करें",
          description:
            "अगर शुरुआत कहां से करनी है समझ नहीं आ रहा, तो पहले बात करना सबसे आसान है।",
          href: "tel:+914023203991",
        },
        {
          title: "कार्यालय की जानकारी देखें",
          description:
            "पता, पहुंचने का तरीका और मिलने से पहले किन बातों की पुष्टि करनी है, यह यहां मिलेगा।",
          href: "#contact",
        },
        {
          title: "आम सवाल पढ़ें",
          description:
            "जो बातें अक्सर मन में आती हैं, उनके साफ़ जवाब एक जगह मिलें।",
          href: "#faq",
        },
      ],
    },
    trustPanel: {
      title: "लोग हमसे क्यों जुड़ते हैं",
      items: [
        {
          title: "बात समझने वाला रवैया",
          description:
            "हर परेशानी सिर्फ इलाज की नहीं होती। कई बार डर, झिझक और समाज का दबाव भी साथ होता है।",
        },
        {
          title: "काम की, ज़मीन से जुड़ी मदद",
          description:
            "रास्ता बताना, सही जगह जोड़ना, और आगे क्या करना है यह समझाना भी उतना ही ज़रूरी है।",
        },
        {
          title: "गोपनीयता का ध्यान",
          description:
            "जो जानकारी कोई भरोसे से साझा करे, उसका इस्तेमाल संभलकर और ज़रूरत भर ही होना चाहिए।",
        },
      ],
    },
    programs: {
      eyebrow: "हम कौन हैं",
      title: "एचएलसीएचएस का काम केवल जानकारी देना नहीं, साथ देना भी है।",
      description:
        "यह संस्था ऐसी दिखनी चाहिए जो लोगों से दूर नहीं, लोगों के बीच काम करती हो। जहां बीमारी, सामाजिक दबाव और असमंजस हो, वहां भरोसे के साथ पहुंच बनाना सबसे बड़ी बात है।",
      items: [
        {
          title: "समुदाय के बीच स्वास्थ्य पहुंच",
          description:
            "मकसद यह कि मदद लोगों तक पहुंचे, लोग मदद तक पहुंचने में न भटकें।",
        },
        {
          title: "कुष्ठ रोग और गरिमा-आधारित सहयोग",
          description:
            "शुरुआती पहचान, सही दिशा और सम्मानजनक व्यवहार के साथ आगे बढ़ने में सहायता।",
        },
        {
          title: "एचआईवी/एड्स, टीबी और जुड़ी हुई चुनौतियां",
          description:
            "जागरूकता, रेफ़रल, मार्गदर्शन और भरोसेमंद बातचीत के रास्ते बनाना।",
        },
        {
          title: "महिलाओं, बच्चों और परिवारों के लिए सहारा",
          description:
            "कई बार मुश्किल एक व्यक्ति की नहीं, पूरे घर की होती है। इसलिए सहयोग भी परिवार को ध्यान में रखकर होना चाहिए।",
        },
      ],
    },
    pathways: {
      eyebrow: "मिलने वाली मदद",
      title: "यहां सिर्फ एक तरह की सहायता नहीं, कई तरह की राह खुलती है।",
      description:
        "लोग अक्सर यह जानना चाहते हैं कि वे किस बात के लिए संपर्क कर सकते हैं। वेबसाइट को यह बात बिल्कुल साफ़ करके बतानी चाहिए।",
      steps: [
        {
          title: "अपनी स्थिति बताइए",
          description:
            "चाहे बात अपने बारे में हो, किसी परिवारजन के बारे में या किसी समुदाय की ज़रूरत के बारे में, शुरुआत सरल शब्दों में हो सकती है।",
        },
        {
          title: "सही मदद की दिशा पाइए",
          description:
            "एचएलसीएचएस सही व्यक्ति, सेवा, रेफ़रल या अगले कदम तक पहुंचने में मदद कर सकता है।",
        },
        {
          title: "ज़रूरत पड़े तो आगे भी जुड़े रहिए",
          description:
            "कुछ मामलों में पहली बातचीत ही काफी नहीं होती। आगे की राह, फॉलो-अप या जोड़ने वाली मदद भी ज़रूरी हो सकती है।",
        },
      ],
      cards: [
        {
          kicker: "स्वास्थ्य तक पहुंच",
          title: "रेफ़रल, मार्गदर्शन और सही जगह तक जोड़ना",
          description:
            "जब समझ न आए कि कहां जाना है, किससे मिलना है, या मदद की शुरुआत कैसे करनी है, तब यहां से राह मिल सकती है।",
        },
        {
          kicker: "मन का सहारा",
          title: "काउंसलिंग और बिना डर वाली बातचीत",
          description:
            "हर समस्या दवा से हल नहीं होती। कई बार किसी को यह भरोसा भी चाहिए होता है कि उसकी बात सुनी जाएगी, परखी नहीं जाएगी।",
        },
        {
          kicker: "परिवार और समुदाय",
          title: "महिलाओं, बच्चों और संवेदनशील परिवारों के लिए सहयोग",
          description:
            "बीमारी या सामाजिक कलंक का असर अक्सर पूरे घर पर पड़ता है। ऐसे समय में सहारा भी परिवार के हिसाब से होना चाहिए।",
        },
      ],
    },
    impact: {
      eyebrow: "लोग क्या जानना चाहते हैं",
      title: "अक्सर यहां आने वाले लोगों के मन में यही सीधे सवाल होते हैं।",
      description:
        "भारी-भरकम भाषा से पहले, वेबसाइट को वही बात साफ़ करनी चाहिए जो किसी आगंतुक को सबसे पहले समझनी ज़रूरी है।",
      note:
        "सेवाओं की उपलब्धता, कार्यालय समय और रेफ़रल प्रक्रिया की अंतिम पुष्टि सीधे एचएलसीएचएस से होनी चाहिए।",
      items: [
        {
          value: "कौन",
          label: "संपर्क कर सकता है?",
          description:
            "व्यक्ति, परिवार, समुदाय के सदस्य, स्वयंसेवक, दाता, सीएसआर टीम और साझेदार संस्थाएं सभी अपनी ज़रूरत के अनुसार संपर्क कर सकते हैं।",
        },
        {
          value: "क्या",
          label: "मदद पूछी जा सकती है?",
          description:
            "मार्गदर्शन, आउटरीच की जानकारी, काउंसलिंग, रेफ़रल, संपर्क, साझेदारी की बात और सही दिशा की मदद मांगी जा सकती है।",
        },
        {
          value: "कैसे",
          label: "जुड़ा जा सकता है?",
          description:
            "फोन, ईमेल या कार्यालय संपर्क से। कोशिश यह होनी चाहिए कि बात करना आसान लगे, बोझ नहीं।",
        },
        {
          value: "क्यों",
          label: "यह महत्वपूर्ण है?",
          description:
            "क्योंकि सही समय पर सही दिशा मिल जाए, तो डर, उलझन और देरी तीनों कम हो सकते हैं।",
        },
      ],
    },
    faq: {
      eyebrow: "आम सवाल",
      title: "थोड़ी सी साफ़ जानकारी, बहुत सी झिझक कम कर देती है।",
      description:
        "पहली बार आने वाले लोग अक्सर फोन करने या मिलने से पहले कुछ बातों का भरोसा चाहते हैं। यह खंड उसी काम के लिए है।",
      items: [
        {
          question: "एचएलसीएचएस किस तरह की मदद में साथ दे सकता है?",
          answer:
            "संस्था आउटरीच, मार्गदर्शन, रेफ़रल, काउंसलिंग, सामुदायिक स्वास्थ्य जानकारी और कुष्ठ रोग, एचआईवी/एड्स, टीबी या संवेदनशील पारिवारिक परिस्थितियों से जुड़ी सहायता के रास्ते बता सकती है।",
        },
        {
          question: "क्या मैं अपने परिवार के किसी सदस्य के लिए भी संपर्क कर सकता हूँ?",
          answer:
            "हाँ। परिवार का सदस्य, देखभाल करने वाला व्यक्ति या कोई भरोसेमंद सहयोगी भी संपर्क करके यह समझ सकता है कि आगे क्या कदम उठाया जाए।",
        },
        {
          question: "क्या बात करने से पहले फ़ॉर्म भरना ज़रूरी है?",
          answer:
            "नहीं। पहली बातचीत आसान होनी चाहिए। कॉल या ईमेल से शुरुआत करना भी बिल्कुल ठीक है, खासकर जब कोई ऑनलाइन फ़ॉर्म में सहज न हो।",
        },
        {
          question: "क्या मेरी जानकारी गोपनीय रखी जाएगी?",
          answer:
            "ज़रूरत भर की जानकारी ही ली जानी चाहिए और उसे संभलकर रखा जाना चाहिए, खासकर जब मामला स्वास्थ्य, परिवार या सामाजिक कलंक से जुड़ा हो।",
        },
        {
          question: "क्या दाता, सीएसआर टीम या संस्थाएं भी संपर्क कर सकती हैं?",
          answer:
            "बिल्कुल। वेबसाइट को ऐसा होना चाहिए कि समुदाय की सहायता और साझेदारी की बातचीत, दोनों के लिए साफ़ रास्ता मिले।",
        },
        {
          question: "क्या यह वेबसाइट इलाज बताती है या आपातकालीन सेवा देती है?",
          answer:
            "नहीं। यह वेबसाइट जानकारी और संपर्क के लिए है। इसे आपातकालीन सेवा या सीधे चिकित्सकीय निदान का विकल्प नहीं माना जाना चाहिए।",
        },
      ],
    },
    legal: {
      eyebrow: "गोपनीयता और नियम",
      title: "लोगों को यह साफ़ पता होना चाहिए कि उनकी जानकारी का क्या होगा और वेबसाइट का सही उपयोग क्या है।",
      description:
        "सार्वजनिक हित से जुड़ी स्वास्थ्य वेबसाइट में भरोसा तभी बनता है जब भाषा भी साफ़ हो और नीयत भी।",
      privacyTitle: "गोपनीयता नीति",
      privacyPoints: [
        "एचएलसीएचएस को केवल उतनी ही जानकारी लेनी चाहिए जितनी संपर्क, सहायता, स्वयंसेवा या साझेदारी से जुड़ी पूछताछ का जवाब देने के लिए ज़रूरी हो।",
        "नाम, फोन नंबर, ईमेल और संदेश जैसी जानकारी का उपयोग केवल जवाब देने, मदद समन्वय करने या वैध संगठनात्मक फॉलो-अप के लिए होना चाहिए।",
        "स्वास्थ्य या परिवार से जुड़ी संवेदनशील जानकारी तभी मांगी जानी चाहिए जब उसकी सच में ज़रूरत हो, और तब भी उसे अतिरिक्त सावधानी से संभाला जाना चाहिए।",
        "आगंतुकों की जानकारी को बेचना, किराये पर देना या गलत उद्देश्य से इस्तेमाल करना स्वीकार्य नहीं होना चाहिए। पहुंच केवल अधिकृत टीम तक सीमित रहे।",
        "डेटा को सुरक्षित रखने के लिए उचित तकनीकी उपाय अपनाए जाने चाहिए, लेकिन किसी भी इंटरनेट प्रणाली में पूर्ण सुरक्षा की गारंटी नहीं दी जा सकती।",
        "आगंतुकों को सार्वजनिक फ़ॉर्म में अनावश्यक निजी जानकारी साझा करने से बचना चाहिए। संदेह होने पर वे सीधे एचएलसीएचएस से संपर्क कर सकते हैं।",
      ],
      termsTitle: "नियम और शर्तें",
      termsPoints: [
        "यह वेबसाइट एचएलसीएचएस, उसके काम, संपर्क विवरण और सहायता या साझेदारी के रास्तों की जानकारी देने के लिए है।",
        "यह वेबसाइट आपातकालीन चिकित्सा सेवा, ऑनलाइन निदान या केवल वेब सामग्री के आधार पर सेवा की गारंटी देने वाला मंच नहीं है।",
        "आगंतुकों को वेबसाइट का उपयोग कानूनसम्मत, सम्मानजनक और बिना किसी दुरुपयोग या व्यवधान पैदा किए करना चाहिए।",
        "वेबसाइट पर दी गई जानकारी को सामान्य मार्गदर्शन के रूप में देखा जाना चाहिए। अंतिम सेवा उपलब्धता, कार्यालय समय और रेफ़रल की पुष्टि सीधे एचएलसीएचएस से करें।",
        "डाउनलोड की जा सकने वाली सामग्री, लिखित संसाधन और पहचान से जुड़े चिन्ह एचएलसीएचएस की संपत्ति माने जाएंगे, जब तक अलग से सार्वजनिक उपयोग की अनुमति न दी जाए।",
        "कार्यक्रम, संपर्क के तरीके, कानूनी ज़रूरतें या संगठन की प्राथमिकताएं बदलने पर एचएलसीएचएस सामग्री, नीति और शर्तों को अपडेट कर सकता है।",
      ],
      note:
        "यह एक व्यवहारिक ड्राफ्ट है जिसे लाइव होने से पहले एचएलसीएचएस द्वारा अंतिम रूप से देखना और मंज़ूर करना चाहिए।",
    },
    contact: {
      eyebrow: "संपर्क करें",
      title: "अगर समझ नहीं आ रहा कि शुरुआत कहाँ से करें, तो पहले बात कीजिए।",
      description:
        "नीचे दिया गया फोन नंबर और ईमेल एचएलसीएचएस से जुड़ी सार्वजनिक सूचनाओं पर आधारित है। अंतिम प्रकाशन से पहले संस्था को पता, समय और रेफ़रल प्रक्रिया की पुष्टि करनी चाहिए।",
      details: [
        {
          label: "फोन",
          value: "+91 40 2320 3991",
          helper: "उन लोगों के लिए अच्छा पहला कदम जो सीधे बात करके समझना चाहते हैं।",
          href: "tel:+914023203991",
        },
        {
          label: "ईमेल",
          value: "hlchsap@gmail.com",
          helper: "फॉलो-अप, साझेदारी, स्वयंसेवा और संस्थागत बातचीत के लिए उपयोगी।",
          href: "mailto:hlchsap@gmail.com",
        },
        {
          label: "स्थान",
          value: "आबिड्स, हैदराबाद, तेलंगाना",
          helper: "अंतिम प्रकाशन से पहले पूरा पता और मिलने का समय दोबारा जांच लेना चाहिए।",
          href: "https://maps.google.com/?q=Abids,+Hyderabad,+Telangana",
        },
      ],
      cards: [
        {
          title: "स्वास्थ्य से जुड़ी मदद चाहिए?",
          description:
            "जब यह समझना हो कि आगे कहाँ जाना है, किससे बात करनी है या मदद किस तरह मिल सकती है, तब संपर्क कीजिए।",
        },
        {
          title: "मिलने की योजना बना रहे हैं?",
          description:
            "खासकर दूर से आ रहे हों तो निकलने से पहले समय और उपलब्धता की पुष्टि कर लेना बेहतर है।",
        },
        {
          title: "सहयोग या समर्थन देना चाहते हैं?",
          description:
            "दाता, सीएसआर टीम, शोधकर्ता और साझेदार संस्थाओं के लिए भी बातचीत का एक साफ़ रास्ता होना चाहिए।",
        },
        {
          title: "गोपनीयता को लेकर चिंता है?",
          description:
            "पहली बार में उतनी ही जानकारी साझा करें जितनी ज़रूरी हो। संवेदनशील बातें संभलकर और सही संदर्भ में ही साझा की जानी चाहिए।",
        },
      ],
      reviewBanner: {
        title: "लाइव होने से पहले ज़रूरी जाँच",
        description:
          "सभी संपर्क विवरण, कानूनी पहचान, सेवाओं से जुड़े दावे, कार्यालय समय और भाषा की अंतिम स्वीकृति एचएलसीएचएस से लेनी चाहिए।",
      },
    },
    footer: {
      note:
        "एचएलसीएचएस का अर्थ है ऐसी राह जो सेहत, सम्मान और सहारे को लोगों के करीब लेकर आए।",
      security:
        "यह वेबसाइट केवल आवश्यक जानकारी लेने और उसे सुरक्षित रखने की ज़िम्मेदार, गोपनीयता-सचेत कोशिश पर आधारित होनी चाहिए।",
    },
    mobileBar: [
      { label: "कॉल", href: "tel:+914023203991" },
      { label: "मदद", href: "#services" },
      { label: "सवाल", href: "#faq" },
    ],
  },
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}
