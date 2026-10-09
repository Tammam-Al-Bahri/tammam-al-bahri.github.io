import ASCIIText from "@/components/ASCIIText";
import ElectricBorder from "@/components/ElectricBorder";
import GradientText from "@/components/GradientText";
import Stack from "@/components/Stack";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Flag } from "lucide-react";
import { useState, useEffect } from "react";
import granada1 from "/images/projects/granada/app-and-docker.jpg";
import granada2 from "/images/projects/granada/app-login.jpg";
import granada3 from "/images/projects/granada/app-api-url.jpg";
import NavButtons from "@/components/NavButtons";

export default function ProjectManager() {
    const images = [
        { id: 3, img: granada3 },
        { id: 2, img: granada2 },
        { id: 1, img: granada1 },
    ];
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="max-w-5xl mx-auto mb-12 lg:border-x-2 border-dashed bg-accent/10">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Project Manager"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <div className="scale-60 lg:scale-100">
                            <Stack
                                randomRotation={false}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 500, height: 500 }}
                                cardsData={images}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 px-6 pt-4">
                        <ElectricBorder
                            color="#27e676"
                            speed={2}
                            chaos={0.5}
                            thickness={2}
                            className="rounded-xl p-1"
                        >
                            <Button variant={"outline"}>
                                <a
                                    href="https://github.com/Tammam-Al-Bahri/granada-monorepo"
                                    target="_blank"
                                    className="text-xl flex items-center"
                                >
                                    <GradientText
                                        colors={["#078000", "#259463", "#269693", "#078000"]}
                                        animationSpeed={10}
                                        showBorder={false}
                                        className="px-2"
                                    >
                                        code
                                    </GradientText>
                                    <ExternalLink />
                                </a>
                            </Button>
                        </ElectricBorder>
                    </div>
                    <Accordion type="multiple">
                        <AccordionItem value="item-1" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <FileText size={16} />
                                    Overview
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-lg text-card-foreground">
                                <p>
                                    This is a project manager I'm building for a family owned
                                    architecture and construction business in the UAE.
                                </p>
                                <p className="pt-4">
                                    The goal is to replace unorganised spreadsheets and manual work
                                    flows with a unified system for project tracking, documentation,
                                    and task management across the company.
                                </p>
                                <p className="pt-4">
                                    It's a desktop app and a locally hosted backend for use within
                                    the company's office network.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Flag size={16} />
                                    Challenges and Takeaways
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-lg text-card-foreground">
                                <p className="pb-4">
                                    As the solo developer with minimal guidance, I had to decide
                                    what to build and how to build it. I focused on trying to create
                                    a scalable codebase since I plan to continue developing this
                                    long term.
                                </p>
                                <p className="pb-4">
                                    Getting everything to work together was challenging at first as
                                    most of the stack was new to me. Over time, it became familiar,
                                    and progress was made.
                                </p>
                                <p className="pb-4">
                                    As the foundation came together, I realised that building the
                                    system is only part of the challenge - the real work is
                                    understanding what users actually need. Thankfully, UX designer
                                    friend is ready to help once I'm more prepared.
                                </p>
                                <p className="py-4">
                                    Deciding what to add next requires talking to employees and
                                    learning more about their workflows. I've had some meetings with
                                    the employees, but I want to be better prepared for the next
                                    ones.
                                </p>
                                <p className="py-4">
                                    The app is currently a solid prototype. I plan to refactor parts
                                    of it as it grows.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="flex justify-between w-full max-w-5xl mx-auto mt-4 px-6 pt-4 pb-24">
                    <NavButtons />
                </div>
            </div>
        </div>
    );
}
