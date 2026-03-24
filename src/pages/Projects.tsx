import { Button } from "@/components/ui/button";
import { Bot, BriefcaseBusiness, Paperclip, SearchCode, University } from "lucide-react";
import pages from ".";
import { useNavigate } from "react-router-dom";
import ASCIIText from "@/components/ASCIIText";
import { useState, useEffect } from "react";
import PixelCard from "@/components/PixelCard";
import Stack from "@/components/Stack";
import nftScanner1 from "/images/projects/nft-scanner/lootboxes-with-weapon-data-json-screenshot.jpg";
import nftScanner2 from "/images/projects/nft-scanner/console-get-all-mint-addresses-js.jpg";
import nftScanner3 from "/images/projects/nft-scanner/console-scanner-js.jpg";
import nftScanner4 from "/images/projects/nft-scanner/wallet-confirm-lootbox-open.jpg";
import portfolio1 from "/images/projects/portfolio/projects.jpg";
import portfolio2 from "/images/projects/portfolio/portfolio-recursion.jpg";
import granada1 from "/images/projects/granada/app-and-docker.jpg";
import granada2 from "/images/projects/granada/app-login.jpg";
import granada3 from "/images/projects/granada/app-api-url.jpg";
import laptop1 from "/images/projects/repurposed-laptop/pcb.jpg";
import laptop2 from "/images/projects/repurposed-laptop/login-screen.jpg";
import uniTsk1 from "/images/projects/university-projects/tsk-collaborator-editing-subtask.jpg";
import uniTsk2 from "/images/projects/university-projects/tsk-home.jpg";
import uniTsk3 from "/images/projects/university-projects/tsk-managing-invites.jpg";
import uniCc1 from "/images/projects/university-projects/cc-home.jpg";
import uniCc2 from "/images/projects/university-projects/cc-find-contact.jpg";
import uniCc3 from "/images/projects/university-projects/cc-courses.jpg";
import uniCrm1 from "/images/projects/university-projects/crm-dashboard-search.jpg";
import uniCrm2 from "/images/projects/university-projects/crm-dashboard-admin.jpg";
import uniCrm3 from "/images/projects/university-projects/crm-login.jpg";
import uniRecipeManager1 from "/images/projects/university-projects/recipe-manager-1.jpg";
import uniRecipeManager2 from "/images/projects/university-projects/recipe-manager-2.jpg";
import uniCrud1 from "/images/projects/university-projects/shuber-1.jpg";
import uniCrud2 from "/images/projects/university-projects/shuber-2.jpg";
import uniConsole1 from "/images/projects/university-projects/console-app-main.jpg";
import uniConsole2 from "/images/projects/university-projects/console-app-tasks.jpg";
import {
    SiDotnet,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiReactrouter,
    SiNextdotjs,
    SiVite,
    SiElectron,
    SiPrisma,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiExpress,
    SiDocker,
    SiTailwindcss,
    SiShadcnui,
    SiClerk,
    SiCss3,
    SiGithubpages,
    SiLinux,
} from "react-icons/si";
import FallingIcons from "@/components/FallingIcons";
import NavButtons from "@/components/NavButtons";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Projects() {
    const variants = ["default", "blue", "yellow", "pink"] as const;
    const projects = [
        {
            page: pages[3],
            variant: 1,
            icon: Paperclip,
            images: [
                { id: 1, img: portfolio1 },
                { id: 2, img: portfolio2 },
            ],
            logos: [
                SiTypescript,
                SiVite,
                SiReact,
                SiReactrouter,
                SiShadcnui,
                SiTailwindcss,
                SiGithubpages,
            ],
        },
        {
            page: pages[4],
            variant: 0,
            icon: BriefcaseBusiness,
            images: [
                { id: 3, img: granada3 },
                { id: 2, img: granada2 },
                { id: 1, img: granada1 },
            ],
            logos: [
                SiTypescript,
                SiElectron,
                SiVite,
                SiReact,
                SiReactrouter,
                SiTailwindcss,
                SiShadcnui,
                SiDocker,
                SiExpress,
                SiPrisma,
                SiPostgresql,
            ],
        },
        {
            page: pages[5],
            variant: 3,
            icon: SearchCode,
            images: [
                { id: 4, img: nftScanner4 },
                { id: 3, img: nftScanner3 },
                { id: 2, img: nftScanner2 },
                { id: 1, img: nftScanner1 },
            ],
            logos: [SiJavascript],
        },
        {
            page: pages[6],
            variant: 2,
            icon: University,
            images: [
                { id: 15, img: uniConsole2 },
                { id: 14, img: uniConsole1 },
                { id: 12, img: uniCrud2 },
                { id: 13, img: uniCrud1 },
                { id: 10, img: uniRecipeManager2 },
                { id: 11, img: uniRecipeManager1 },
                { id: 7, img: uniCrm3 },
                { id: 8, img: uniCrm2 },
                { id: 9, img: uniCrm1 },
                { id: 4, img: uniCc3 },
                { id: 5, img: uniCc2 },
                { id: 6, img: uniCc1 },
                { id: 3, img: uniTsk3 },
                { id: 1, img: uniTsk1 },
                { id: 2, img: uniTsk2 },
            ],
            logos: [
                SiDotnet,
                SiJavascript,
                SiTypescript,
                SiNextdotjs,
                SiReact,
                SiCss3,
                SiTailwindcss,
                SiSqlite,
                SiMysql,
                SiClerk,
            ],
        },
        {
            page: pages[7],
            variant: 0,
            icon: Bot,
            images: [
                { id: 2, img: laptop2 },
                { id: 1, img: laptop1 },
            ],
            logos: [SiLinux, SiDocker],
        },
    ];

    const navigate = useNavigate();
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const [scaleClass, setScaleClass] = useState("scale-0");

    useEffect(() => {
        setTimeout(() => {
            setScaleClass("scale-100");
        }, 100);
    }, []);

    const isMobile = useIsMobile();

    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="max-w-5xl mx-auto mb-12 lg:border-x-2 border-dashed bg-accent/10">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Projects"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-6 px-6">
                    {projects.map((project) => {
                        const [iconsVisible, setIconsVisible] = useState(false);
                        return (
                            <PixelCard
                                key={project.page.path}
                                variant={variants[project.variant]}
                                className="bg-card border-border shadow-xl hover:scale-101"
                            >
                                <div
                                    className={`absolute w-full h-full ${scaleClass} transition-transform duration-500 ease-in-out group`}
                                >
                                    <project.icon className="scale-150 m-4 z-10" />
                                    <div className="text-2xl text-center font-bold">
                                        {project.page.title}
                                    </div>
                                    <div
                                        className={`absolute inset-0 md:opacity-0 ${
                                            iconsVisible ? "md:opacity-100" : "opacity-0"
                                        } group-hover:opacity-100 transition-opacity duration-200`}
                                        onClick={() => {
                                            if (isMobile) setIconsVisible(true);
                                        }}
                                    >
                                        <FallingIcons
                                            icons={project.logos}
                                            trigger="hover"
                                            gravity={0.8}
                                            iconSize={32}
                                            wireframes={false}
                                            mouseConstraintStiffness={0.9}
                                        />
                                    </div>
                                    <div className="flex justify-center my-4 z-10 hover:scale-105">
                                        <Stack
                                            randomRotation={true}
                                            sensitivity={180}
                                            sendToBackOnClick={true}
                                            cardDimensions={{ width: 200, height: 200 }}
                                            cardsData={project.images}
                                        />
                                    </div>
                                    <div className="flex justify-end mx-[50px]">
                                        <Button
                                            className="w-full z-10"
                                            onClick={() => {
                                                navigate(project.page.path);
                                            }}
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </PixelCard>
                        );
                    })}
                    <div className="flex-grow basis-[300px] max-w-[300px]" />
                </div>
                <div className="flex justify-between w-full max-w-5xl mx-auto mt-4 px-6 pt-4 pb-8">
                    <NavButtons />
                </div>
            </div>
        </div>
    );
}
