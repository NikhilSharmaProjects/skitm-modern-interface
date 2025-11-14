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
    title: "SKITM Indore | Top Engineering, MBA, Pharmacy College in Indore, Madhya Pradesh",
    description:
        "SKITM is a leading NAAC A accredited college in Indore offering B.Tech, MBA, B.Pharm, Law programs. Apply now for admission 2025. 85%+ placement record.",
    keywords:
        "best private engineering college in india, best college in indore, private college in indore",
    ogImage: "/Gallery/GalleryImage (1).png",
};

export const programSEO = {
    // Engineering Programs
    cse: {
        title: "Best College for CS in Indore | Top Engineering College in Indore for CS",
        description:
            "SKITM is among the Best College for CS in Indore and one of the Top Engineering College in Indore for CS, offering cutting-edge computer science programs, expert faculty, and excellent placement opportunities for aspiring tech leaders.",
        keywords:
            "top engineering college in Indore for CS, best college for computer science engineering in Indore, best college for CS in Indore, best private engineering college in MP for computer science",
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
        title: "MBA College in Indore | Best Management College in Indore",
        description:
            "SKITM is counted among the top MBA College in Indore and stands out as one of the Best Management College in Indore, offering industry-focused learning, expert faculty, and strong placements.",
        keywords:
            "top MBA college in Madhya Pradesh, best placement mba college in indore, management college in madhya pradesh, top private MBA college in madhya pradesh, private mba college in indore, MBA college mp, best management college in indore, best MBA college in mp, best mba college in indore, top MBA college in mp, MBA college in Indore",
    },
    bba: {
        title: "BBA College in Indore | Top BBA College in Indore - SKITM",
        description:
            "SKITM is recognized among the best BBA College in Indore and is listed among the Top BBA College in Indore, offering practical business education, expert faculty, and excellent placements.",
        keywords:
            "best bba college in indore, top bba college in indore, bba private college in indore, BBA college in Indore",
    },

    // Pharmacy Programs
    bpharm: {
        title: "B.Pharma College in Indore | B Pharmacy in Indore",
        description:
            "Looking for the best B.Pharma College in Indore? Explore top-quality education, labs & placements at our leading institute for B Pharmacy in Indore - SKITM.",
        keywords:
            "b pharmacy in indore, B.Pharm colleges in Indore, best private B.Pharm colleges in Madhya Pradesh",
    },
    dpharm: {
        title: "D.Pharma College in Indore | SKITM",
        description:
            "Enroll at the leading D.Pharma College in Indore offering quality education, modern labs, and excellent career opportunities in the field of pharmacy.",
        keywords:
            "D.Pharm colleges in Indore",
    },

    // Law Programs
    law: {
        title: "Law College in Indore | Top Law College in Indore - SKITM",
        description:
            "SKITM ranks high among Law College in Indore and is known as one of the Top Law College in Indore, providing practical legal training, modern learning resources, and assured career guidance.",
        keywords:
            "LLB college in Indore, top law college in indore, law college in indore, law college with top placements Indore",
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
