import type { SupportedLanguage } from "@/constants/i18n";

export type LegalDocumentType = "terms" | "privacy";

export type LegalDocumentSection = {
  title: string;
  body: string;
};

export type LegalDocumentContent = {
  type: LegalDocumentType;
  title: string;
  intro: string;
  sections: LegalDocumentSection[];
  contactEmail: string;
  footerNote: string;
};

export const legalDocumentsByLanguage: Record<
  SupportedLanguage,
  Record<LegalDocumentType, LegalDocumentContent>
> = {
  en: {
    terms: {
      type: "terms",
      title: "Terms & Conditions",
      intro:
        "We use safeguards designed to protect information, including encryption in transit and access controls. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      sections: [
        {
          title: "11) Age Requirements",
          body: "The Services are intended for users aged 16 and older. If you believe someone under 16 has provided personal information, contact support@tnyx.app and we will take appropriate action.",
        },
        {
          title: "12) Privacy Rights",
          body: "Depending on where you live, you may have rights to access, correct, delete, or restrict processing of your personal information, or to object to certain processing.",
        },
        {
          title: "13) Changes to Terms",
          body: "We may update these Terms from time to time. We will update the Last Updated date and, where required, provide additional notice.",
        },
        {
          title: "14) Contact Us",
          body: "Email: support@tnyx.app",
        },
      ],
      contactEmail: "support@tnyx.app",
      footerNote:
        "If you have a Pro subscription and do not wish to accept this policy, you can cancel it from the App Store / Google Play Store.",
    },
    privacy: {
      type: "privacy",
      title: "Privacy Policy",
      intro:
        "We use safeguards designed to protect information, including encryption in transit and access controls. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      sections: [
        {
          title: "11) Age Requirements",
          body: "The Services are intended for users aged 16 and older. If you believe someone under 16 has provided personal information, contact support@tnyx.app and we will take appropriate action.",
        },
        {
          title: "12) Privacy Rights",
          body: "Depending on where you live, you may have rights to access, correct, delete, or restrict processing of your personal information, or to object to certain processing.",
        },
        {
          title: "13) Changes to this Policy",
          body: "We may update this Privacy Policy from time to time. We will update the Last Updated date and, where required, provide additional notice.",
        },
        {
          title: "14) Contact Us",
          body: "Email: support@tnyx.app",
        },
      ],
      contactEmail: "support@tnyx.app",
      footerNote:
        "If you have a Pro subscription and do not wish to accept this policy, you can cancel it from the App Store / Google Play Store.",
    },
  },
  hi: {
    terms: {
      type: "terms",
      title: "नियम व शर्तें",
      intro:
        "हम आपकी जानकारी की सुरक्षा के लिए सुरक्षित उपायों का उपयोग करते हैं, जैसे ट्रांज़िट एन्क्रिप्शन और एक्सेस कंट्रोल। फिर भी कोई भी सिस्टम पूरी तरह सुरक्षित नहीं होता।",
      sections: [
        {
          title: "11) आयु आवश्यकताएँ",
          body: "यह सेवा 16 वर्ष या उससे अधिक उम्र के उपयोगकर्ताओं के लिए है। यदि आपको लगता है कि 16 वर्ष से कम आयु के किसी व्यक्ति ने डेटा दिया है, तो support@tnyx.app पर संपर्क करें।",
        },
        {
          title: "12) प्राइवेसी अधिकार",
          body: "आपके क्षेत्र के अनुसार आपको डेटा देखने, सुधारने, हटाने या प्रोसेसिंग सीमित करने का अधिकार हो सकता है।",
        },
        {
          title: "13) नियमों में बदलाव",
          body: "हम समय-समय पर इन नियमों को अपडेट कर सकते हैं। अपडेट के समय अतिरिक्त सूचना दी जा सकती है।",
        },
        {
          title: "14) संपर्क करें",
          body: "ईमेल: support@tnyx.app",
        },
      ],
      contactEmail: "support@tnyx.app",
      footerNote:
        "यदि आपके पास Pro सदस्यता है और आप यह नीति स्वीकार नहीं करना चाहते, तो आप App Store / Google Play Store से सदस्यता रद्द कर सकते हैं।",
    },
    privacy: {
      type: "privacy",
      title: "प्राइवेसी पॉलिसी",
      intro:
        "हम आपकी जानकारी की सुरक्षा के लिए सुरक्षित उपायों का उपयोग करते हैं, जैसे ट्रांज़िट एन्क्रिप्शन और एक्सेस कंट्रोल। फिर भी कोई भी सिस्टम पूरी तरह सुरक्षित नहीं होता।",
      sections: [
        {
          title: "11) आयु आवश्यकताएँ",
          body: "यह सेवा 16 वर्ष या उससे अधिक उम्र के उपयोगकर्ताओं के लिए है। यदि आपको लगता है कि 16 वर्ष से कम आयु के किसी व्यक्ति ने डेटा दिया है, तो support@tnyx.app पर संपर्क करें।",
        },
        {
          title: "12) प्राइवेसी अधिकार",
          body: "आपके क्षेत्र के अनुसार आपको डेटा देखने, सुधारने, हटाने या प्रोसेसिंग सीमित करने का अधिकार हो सकता है।",
        },
        {
          title: "13) पॉलिसी में बदलाव",
          body: "हम समय-समय पर इस पॉलिसी को अपडेट कर सकते हैं। अपडेट के समय अतिरिक्त सूचना दी जा सकती है।",
        },
        {
          title: "14) संपर्क करें",
          body: "ईमेल: support@tnyx.app",
        },
      ],
      contactEmail: "support@tnyx.app",
      footerNote:
        "यदि आपके पास Pro सदस्यता है और आप यह नीति स्वीकार नहीं करना चाहते, तो आप App Store / Google Play Store से सदस्यता रद्द कर सकते हैं।",
    },
  },
};
