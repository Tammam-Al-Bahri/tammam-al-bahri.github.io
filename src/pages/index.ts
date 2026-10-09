import { lazy } from "react";
import { useLocation } from "react-router-dom";

const Me = lazy(() => import("./Me"));
const Overview = lazy(() => import("./Overview"));
const Portfolio = lazy(() => import("./software/Portfolio"));
const ProjectManager = lazy(() => import("./software/ProjectManager"));
const ExtraProjects = lazy(() => import("./software/ExtraProjects"));
const NFTScanner = lazy(() => import("./software/NFTScanner"));
const AutodeskAutocoderz = lazy(() => import("./software/AutodeskAutocoderz"));

const pages = [
    {
        path: "/",
        title: "Me",
        component: Me,
    },
    {
        path: "/overview",
        title: "Overview",
        component: Overview,
    },
    {
        path: "/software/autocoderz",
        title: "Autocoderz",
        component: AutodeskAutocoderz,
    },
    {
        path: "/software/portfolio",
        title: "Portfolio",
        component: Portfolio,
    },
    {
        path: "/software/project-manager",
        title: "Project Manager",
        component: ProjectManager,
    },
    {
        path: "/software/nft-scanner",
        title: "NFT Scanner",
        component: NFTScanner,
    },
    {
        path: "/software/extra",
        title: "Extra",
        component: ExtraProjects,
    },
] as const;

export default pages;

export type Pages = (typeof pages)[number];

export function getPageIndex() {
    const location = useLocation();
    return pages.findIndex((page) => page.path == location.pathname);
}
