type ParentLink = {
    [key: string]: LinkItem[];
};

export const footerLinks: ParentLink = {
    about: [
        { labelKey: "gooseFlight", to: "#" },
        { labelKey: "howItWorks", to: "#" },
        { labelKey: "blog", to: "#" },
        { labelKey: "forum", to: "#" },
    ],
    support: [
        { labelKey: "helpCenter", to: "#" },
        { labelKey: "contactUs", to: "#" },
        { labelKey: "privacyPolicy", to: "#" },
        { labelKey: "termsOfService", to: "#" },
        { labelKey: "trustAndSafety", to: "#" },
        { labelKey: "accessibility", to: "#" },
    ],
    getApp: [
        { labelKey: "trimpaAndroid", to: "#" },
        { labelKey: "trimpaIos", to: "#" },
        { labelKey: "mobileSite", to: "#" },
    ]
}
