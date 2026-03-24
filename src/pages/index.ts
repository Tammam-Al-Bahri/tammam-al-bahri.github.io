import { lazy } from "react";
import { useLocation } from "react-router-dom";

const Me = lazy(() => import("./Me"));
const Projects = lazy(() => import("./Projects"));
const Portfolio = lazy(() => import("./projects/Portfolio"));
// const Skills = lazy(() => import("./AboutMe"));
const ProjectManager = lazy(() => import("./projects/ProjectManager"));
const ExtraProjects = lazy(() => import("./projects/ExtraProjects"));
const RepurposedLaptop = lazy(() => import("./projects/RepurposedLaptop"));
const NFTScanner = lazy(() => import("./projects/NFTScanner"));
const AutodeskAutocoderz = lazy(() => import("./projects/AutodeskAutocoderz"));

const pages = [
    {
        path: "/",
        title: "Me",
        component: Me,
    },
    // {
    //     path: "/about-me",
    //     title: "About Me",
    //     component: Skills,
    // },
    {
        path: "/projects/autocoderz",
        title: "Autodesk Autocoderz",
        component: AutodeskAutocoderz,
    },
    {
        path: "/projects",
        title: "Overview",
        component: Projects,
    },
    {
        path: "/projects/portfolio",
        title: "Portfolio",
        component: Portfolio,
    },
    {
        path: "/projects/project-manager",
        title: "Project Manager",
        component: ProjectManager,
    },
    {
        path: "/projects/nft-scanner",
        title: "NFT Scanner",
        component: NFTScanner,
    },
    {
        path: "/projects/extra",
        title: "Extra",
        component: ExtraProjects,
    },
    {
        path: "/projects/repurposed-laptop",
        title: "Repurposed Laptop",
        component: RepurposedLaptop,
    },
] as const;

export default pages;

export type Pages = (typeof pages)[number];

export function getPageIndex() {
    const location = useLocation();
    return pages.findIndex((page) => page.path == location.pathname);
}
