import {
    Bot,
    // Brain,
    BriefcaseBusiness,
    ChevronsLeftRight,
    Folders,
    Paperclip,
    PersonStanding,
    SearchCode,
    type LucideProps,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { type Pages } from "@/pages";
import { ThemeToggle } from "./theme-toggle";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import GradientText from "./GradientText";

type MenuItem = {
    [P in Pages as P["title"]]: {
        title: P["title"];
        path: P["path"];
        icon: React.ForwardRefExoticComponent<
            Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
        >;
    };
}[Pages["title"]];

const aboutMeItems: MenuItem[] = [
    {
        title: "Me",
        path: "/",
        icon: PersonStanding,
    },
    // {
    //     title: "About Me",
    //     path: "/about-me",
    //     icon: Brain,
    // },
];

const projectItems: MenuItem[] = [
    {
        title: "Overview",
        path: "/projects",
        icon: Folders,
    },
    {
        title: "Portfolio",
        path: "/projects/portfolio",
        icon: Paperclip,
    },
    {
        title: "Project Manager",
        path: "/projects/project-manager",
        icon: BriefcaseBusiness,
    },
    {
        path: "/projects/nft-scanner",
        title: "NFT Scanner",
        icon: SearchCode,
    },
    {
        path: "/projects/extra",
        title: "Extra",
        icon: ChevronsLeftRight,
    },
    {
        path: "/projects/repurposed-laptop",
        title: "Repurposed Laptop",
        icon: Bot,
    },
];

export function AppSidebar() {
    const navigate = useNavigate();
    const sidebar = useSidebar();
    return (
        <Sidebar variant="floating" className="z-50">
            <SidebarHeader>
                <GradientText
                    colors={["#078000", "#259463", "#269693", "#078000"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="px-2"
                >
                    <a
                        onClick={() => (
                            navigate(aboutMeItems[0].path),
                            sidebar.setOpenMobile(false)
                        )}
                    >
                        Tammam Al Bahri
                    </a>
                </GradientText>
            </SidebarHeader>
            <SidebarContent className="shadow-2xl">
                <SidebarGroup>
                    <SidebarGroupLabel>About Me</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {aboutMeItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={() => (
                                            navigate(item.path),
                                            sidebar.setOpenMobile(false)
                                        )}
                                    >
                                        <button className="select-none">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </button>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projectItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={() => (
                                            navigate(item.path),
                                            sidebar.setOpenMobile(false)
                                        )}
                                    >
                                        <button className="select-none">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </button>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarFooter className="fixed bottom-2">
                    <ThemeToggle />
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    );
}
