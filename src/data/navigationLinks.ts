// Hierarchical navigation structure based on SKITM sitemap

import { sub } from "date-fns";

// About Us sub-routes
export const aboutSKITMLinks = [{ name: "About SKITM", href: "/about-skitm" }];

export const leadershipLinks = [
    { name: "About our Chairman", href: "/chairman" },
    { name: "Board of Governors", href: "/board-governors" },
    { name: "Board of Advisors", href: "/board-advisors" },
    { name: "Leadership Team", href: "/leadership-team" },
    { name: "Academic Council", href: "/academic-council" },
];

export const aboutUsLinks = [
    { name: "About SKITM", href: "/about-skitm" },
    {
        name: "Leadership of SKITM",
        href: "/leadership",
        subItems: leadershipLinks,
    },
    { name: "Our Partners", href: "/partners" },
    { name: "Society", href: "/society" },
    { name: "Director's Message", href: "/directors-message" },
    { name: "Vision and Mission", href: "/vision-mission" },
];

// Academics sub-routes
export const engineeringLinks = [
    { name: "Computer Science & Engineering", href: "/cse" },
    {name: "AIML", href: "/aiml"},
    {name: "CSIT", href: "/csit"},
    {name: "Information Technology", href: "/it"},
    {name: "Data Science", href: "/data-science"},
    { name: "Electronics & Communication Engineering", href: "/ece" },
    { name: "Civil Engineering", href: "/civil-engineering" },
    { name: "Mechanical Engineering", href: "/mechanical-engineering" },
];

export const managementLinks = [
    { name: "MBA", href: "/mba" },
    { name: "Integrated MBA", href: "/integrated-mba" },
    { name: "MBA Plus", href: "/mba-plus" },
];

export const pharmacyLinks = [
    { name: "B.Pharm", href: "/bpharm" },
    { name: "M.Pharm", href: "/mpharm" },
    { name: "D.Pharm", href: "/dpharm" },
];

export const professionalStudiesLinks = [
    { name: "BBA", href: "/bba" },
    { name: "B.Com Computer Applications", href: "/bcom-ca" },
    { name: "B.Com General", href: "/bcom-general" },
    { name: "B.Com Honours", href: "/bcom-honours" },
    { name: "B.Com Taxation", href: "/bcom-taxation" },
];

export const academicsLinks = [
    { name: "Engineering", href: "/engineering", subItems: engineeringLinks },
    { name: "Management", href: "/management", subItems: managementLinks },
    { name: "Pharmacy", href: "/pharmacy", subItems: pharmacyLinks },
    {
        name: "Professional Studies",
        href: "/professional-studies",
        subItems: professionalStudiesLinks,
    },
    { name: "Transnational School of Law", href: "/law" },
];

// Admissions sub-routes
export const admissionsLinks = [
    { name: "Apply To SKITM", href: "/apply-to-skitm" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Download Brochure", href: "/download-brochure" },
    { name: "FAQs", href: "/faqs" },
];

// Student Life sub-routes
export const studentLifeLinks = [
    { name: "Hostel", href: "/hostel" },
    { name: "Projects & Workshops", href: "/projects-workshops" },
    { name: "Student Testimonials", href: "/student-testimonials" },
    { name: "Campus", href: "/campus" },
    { name: "Facilities", href: "/facilities" },
    { name: "Library", href: "/library" },
    { name: "Sports", href: "/sports" },
    { name: "Gallery", href: "/gallery" },
    { name: "News & Events", href: "/news-events" },
];

export const approvalsLinks = [
    { name: "AICTE", href: "/aicte" },
    { name: "UGC", href: "/ugc" },
    { name: "RGPV", href: "/rgpv" },
    { name: "DAVV", href: "/davv" },
    { name: "DTE", href: "/dte" },
];

// Main navigation structure
export const mainNavigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-skitm", subItems: aboutUsLinks },
    { name: "Academics", href: "/academics", subItems: academicsLinks },
    { name: "Admissions", href: "/admissions", subItems: admissionsLinks },
    { name: "Placement", href: "/placement" },
    { name: "Student Life", href: "/student-life", subItems: studentLifeLinks },
    { name : "Approvals", href: "/approvals", subItems: approvalsLinks },
    { name : "NAAC", href: "/top-naac-a-grade-college-in-indore" },
    { name: "Mandatory Disclosure", href: "/mandatory-disclosure" },
    // { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
];
