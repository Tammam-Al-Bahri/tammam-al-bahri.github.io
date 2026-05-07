import ASCIIText from "@/components/ASCIIText";
import ElectricBorder from "@/components/ElectricBorder";
import GradientText from "@/components/GradientText";
import ShinyText from "@/components/ShinyText";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Flag } from "lucide-react";
import { useState, useEffect } from "react";
import NavButtons from "@/components/NavButtons";

export default function Portfolio() {
    const [level, setLevel] = useState(0);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lvl = parseInt(params.get("level") || "0");
        setLevel(lvl);
    }, []);

    const nextLevel = level + 1;

    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="max-w-5xl mx-auto lg:border-x-2 border-dashed bg-accent/10">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Portfolio"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>
                <div className="flex flex-col">
                    <ShinyText
                        text="Live View:"
                        disabled={false}
                        speed={4}
                        className="invert dark:invert-0 font-bold text-3xl text-center italic"
                    />
                    <div className="relative flex justify-center group select-none mb-4">
                        <div className="text-center text-sm text-muted-foreground font-mono">
                            Inception Level: {level}
                        </div>
                        <div className="absolute top-full z-10 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                            navigate to this page on the phone
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-[400px] h-[750px] scale-100 rounded-[3rem] border-8 border-neutral-800 bg-black shadow-2xl overflow-hidden">
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-900 rounded-full z-10 opacity-80"></div>

                            <iframe
                                src={`/?level=${nextLevel}`}
                                title="Portfolio Inception"
                                className="w-full h-full rounded-[2.5rem] overflow-hidden"
                            ></iframe>
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
                                    href="https://github.com/Tammam-Al-Bahri/tammam-al-bahri.github.io"
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
                        <AccordionItem value="item-2" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Flag size={16} />
                                    Challenges and Takeaways
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-lg text-card-foreground">
                                <p className="pb-4">
                                    Working on this project was great frontend dev practice.
                                </p>
                                <p>
                                    The design ended up being experimental since I let myself play
                                    with ideas without making a wireframe.
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
