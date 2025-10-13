// SEO utility functions and configurations

export interface SEOConfig {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    noindex?: boolean;
}

export const defaultSEO: SEOConfig = {
    title: "SKITM Indore | Top Engineering, MBA, Pharmacy College in Madhya Pradesh",
    description:
        "SKITM is a leading NAAC A accredited college in Indore offering B.Tech, MBA, B.Pharm, Law programs. Apply now for admission 2025. 85%+ placement record.",
    keywords:
        "SKITM Indore, engineering college Indore, MBA college Indore, pharmacy college Indore, B.Tech admission 2025, law college MP, NAAC A college",
    ogImage: "/Gallery/GalleryImage (1).png",
};

export const programSEO = {
    // Engineering Programs
    cse: {
        title: "B.Tech CSE Admission 2025 | Computer Science Engineering | SKITM Indore",
        description:
            "Join B.Tech Computer Science Engineering at SKITM Indore. AI/ML, Data Science curriculum. 90%+ placement. Apply now for CSE admission 2025.",
        keywords:
            "B.Tech CSE Indore, computer science engineering, AI ML course, software engineering college, CSE admission 2025",
    },
    ece: {
        title: "B.Tech ECE Admission 2025 | Electronics Communication | SKITM Indore",
        description:
            "B.Tech Electronics & Communication Engineering at SKITM. VLSI, embedded systems, IoT specialization. Apply for ECE admission 2025.",
        keywords:
            "B.Tech ECE Indore, electronics communication engineering, VLSI course, embedded systems, ECE admission 2025",
    },
    mechanical: {
        title: "B.Tech Mechanical Engineering Admission 2025 | SKITM Indore",
        description:
            "B.Tech Mechanical Engineering at SKITM Indore. Industry-focused curriculum, modern labs. Apply for mechanical engineering admission 2025.",
        keywords:
            "B.Tech mechanical engineering Indore, mechanical engineering college MP, automobile engineering",
    },
    civil: {
        title: "B.Tech Civil Engineering Admission 2025 | SKITM Indore",
        description:
            "B.Tech Civil Engineering at SKITM Indore. Construction technology, structural engineering. Apply for civil engineering admission 2025.",
        keywords:
            "B.Tech civil engineering Indore, construction engineering college, structural engineering course",
    },

    // Management Programs
    mba: {
        title: "MBA Admission 2025 | Top Business School | SKITM Indore",
        description:
            "MBA program at SKITM Indore with industry internships, global exposure. Finance, Marketing, HR specializations. Apply for MBA admission 2025.",
        keywords:
            "MBA Indore, MBA admission 2025, business school Indore, MBA finance marketing, management college MP",
    },
    bba: {
        title: "BBA Admission 2025 | Bachelor Business Administration | SKITM Indore",
        description:
            "BBA program at SKITM Indore. Entrepreneurship focus, industry training. Apply for BBA admission 2025.",
        keywords:
            "BBA Indore, BBA admission 2025, business administration course, entrepreneurship program",
    },

    // Pharmacy Programs
    bpharm: {
        title: "B.Pharm Admission 2025 | Pharmacy College | SKITM Indore",
        description:
            "B.Pharm at SKITM Indore. Modern pharmacy labs, clinical training. 100% placement assistance. Apply for pharmacy admission 2025.",
        keywords:
            "B.Pharm Indore, pharmacy college MP, pharmaceutical sciences, B.Pharm admission 2025",
    },
    dpharm: {
        title: "D.Pharm Admission 2025 | Diploma Pharmacy | SKITM Indore",
        description:
            "D.Pharm program at SKITM Indore. Quick entry into pharmacy field. Apply for D.Pharm admission 2025.",
        keywords:
            "D.Pharm Indore, diploma pharmacy course, pharmacy technician program",
    },

    // Law Programs
    law: {
        title: "Law Admission 2025 | B.A/B.B.A LL.B | SKITM Law College Indore",
        description:
            "5-year integrated law programs at SKITM Law College Indore. Moot court, internships. Apply for law admission 2025.",
        keywords:
            "law college Indore, BA LLB admission, BBA LLB course, legal education MP, law admission 2025",
    },
};

export const structuredData = {
    organization: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Shivajirao Kadam Institute of Technology and Management",
        alternateName: "SKITM",
        url: "https://skitm.edu.in",
        logo: "https://skitm.edu.in/logo.png",
        image: "https://skitm.edu.in/Gallery/GalleryImage (1).png",
        description:
            "NAAC A accredited engineering, management, pharmacy and law college in Indore, Madhya Pradesh",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Survey No. 41, Kamal & 42/1A to 5B Patel",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            postalCode: "452020",
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-731-4243600",
            contactType: "admissions",
            email: "admissions@skitm.edu.in",
        },
        sameAs: [
            "https://www.facebook.com/skitm.indore",
            "https://www.linkedin.com/school/skitm-indore",
            "https://twitter.com/skitm_indore",
        ],
        founder: "Shivajirao Kadam",
        foundingDate: "2014",
    },

    course: (
        program: string,
        courseName: string,
        duration: string,
        fee?: string
    ) => ({
        "@context": "https://schema.org",
        "@type": "Course",
        name: courseName,
        description:
            programSEO[program as keyof typeof programSEO]?.description || "",
        provider: {
            "@type": "EducationalOrganization",
            name: "SKITM Indore",
            url: "https://skitm.edu.in",
        },
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "on-site",
            duration: duration,
            startDate: "2025-07-01",
            endDate: duration.includes("4")
                ? "2029-07-01"
                : duration.includes("2")
                ? "2027-07-01"
                : "2028-07-01",
        },
        educationalCredentialAwarded: courseName,
        occupationalCategory: program.includes("engineering")
            ? "Engineering"
            : program.includes("mba")
            ? "Management"
            : program.includes("pharm")
            ? "Pharmacy"
            : "Legal",
        ...(fee && {
            offers: {
                "@type": "Offer",
                price: fee,
                priceCurrency: "INR",
            },
        }),
    }),

    breadcrumbList: (items: Array<{ name: string; url: string }>) => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `https://skitm.edu.in${item.url}`,
        })),
    }),
};

export function generateKeywords(
    primary: string[],
    secondary: string[] = []
): string {
    return [...primary, ...secondary].join(", ");
}

export function truncateDescription(
    text: string,
    maxLength: number = 155
): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3).trim() + "...";
}

export function generateTitle(
    base: string,
    suffix: string = "SKITM Indore"
): string {
    const combined = `${base} | ${suffix}`;
    return combined.length <= 60
        ? combined
        : base.substring(0, 60 - suffix.length - 3).trim() + "...";
}
