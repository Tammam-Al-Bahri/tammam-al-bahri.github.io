import ASCIIText from "@/components/ASCIIText";
// import ElectricBorder from "@/components/ElectricBorder";
// import GradientText from "@/components/GradientText";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
import { ExternalLink, FileText /* Lock */ } from "lucide-react";
import { useState, useEffect } from "react";
import NavButtons from "@/components/NavButtons";
import ShinyText from "@/components/ShinyText";

export default function AutodeskAutocoderz() {
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="max-w-5xl mx-auto mb-8 lg:border-x-2 border-dashed bg-accent/10">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Autodesk Autocoderz"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-center">
                        <a
                            href="https://autocoderz.uk/"
                            target="_blank"
                            className="flex justify-center items-center gap-2 mb-8 p-4 text-5xl border border-dashed rounded hover:underline"
                        >
                            autocoderz.uk
                            <ExternalLink size={40} />
                        </a>
                    </div>

                    <ShinyText
                        text="Live View:"
                        disabled={false}
                        speed={4}
                        className="invert dark:invert-0 font-bold text-3xl text-center italic"
                    />
                    <div className="flex justify-center">
                        <div className="relative w-[400px] h-[750px] scale-100 rounded-[3rem] border-8 border-neutral-800 bg-black shadow-2xl overflow-hidden">
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-900 rounded-full z-10 opacity-80"></div>

                            <iframe
                                src={`https://autocoderz.uk/`}
                                title="Portfolio Inception"
                                className="w-full h-full rounded-[2.5rem] overflow-hidden"
                            ></iframe>
                        </div>
                    </div>
                    {/* <div className="flex justify-center mt-2 px-6 pt-4">
                        <ElectricBorder
                            color="#4e6b5a"
                            speed={2}
                            chaos={0.5}
                            thickness={2}
                            className="rounded-xl p-1 group inline-block"
                        >
                            <Button variant={"outline"}>
                                <a
                                    href="https://github.com/Tammam-Al-Bahri/autodesk-autocoderz"
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
                                </a>
                            </Button>
                        </ElectricBorder>
                    </div> */}
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
                                    Client:{" "}
                                    <a
                                        href="https://www.autodesk.com/"
                                        target="_blank"
                                        className="text-accent-foreground font-semibold hover:underline"
                                    >
                                        Autodesk
                                    </a>
                                </p>
                                <p className="pt-4">
                                    Led a team of 5 through two sprints to develop a full stack
                                    production ready prototype for a building management app.
                                </p>
                                <p className="pt-4">
                                    Cross platform desktop app and website, both using the same API.
                                    The desktop app connects to the API, and the API also serves the
                                    web pages.
                                </p>
                                <p className="pt-4">
                                    Users can create companies and buildings, upload and view 3D
                                    models, invite users to a building as staff with specific roles,
                                    reset their account password with email verification. Plenty of
                                    room to add more features.
                                </p>
                                <p className="pt-4">Used Autodesk APIs including Viewer</p>
                                <p className="pt-4">Scalable and developer friendly codebase.</p>
                                <p className="pt-4">
                                    It was previously hosted with{" "}
                                    <a
                                        href="https://railway.com/"
                                        target="_blank"
                                        className="text-muted-foreground font-semibold hover:underline"
                                    >
                                        Railway
                                    </a>
                                    .
                                </p>
                                <p className="pt-4">
                                    I'm currently hosting this on my repurposed laptop.
                                </p>
                                <p className="pt-8 italic text-center">
                                    Repository will be made public ASAP.
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
