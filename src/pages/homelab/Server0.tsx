import ASCIIText from "@/components/ASCIIText";
import Stack from "@/components/Stack";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText } from "lucide-react";
import { useState, useEffect } from "react";
import server01 from "/images/homelab/server0/build-in-progress.jpg";
import server02 from "/images/homelab/server0/dokploy.jpg";
import server03 from "/images/homelab/server0/proxmox-screenshot.jpg";
import server04 from "/images/homelab/server0/top-open.jpg";
import server05 from "/images/homelab/server0/truenas.jpg";
import server06 from "/images/homelab/server0/adguard.jpg";
import NavButtons from "@/components/NavButtons";

export default function Server0() {
    const images = [
        { id: 6, img: server06 },
        { id: 5, img: server05 },
        { id: 2, img: server02 },
        { id: 3, img: server03 },
        { id: 1, img: server01 },
        { id: 4, img: server04 },
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
                        text="Server0"
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
                                    Self-hosting a bunch of useful and cool stuff, including{" "}
                                    <a
                                        href="https://deploy.tammam.uk/"
                                        target="_blank"
                                        className="italic hover:underline"
                                    >
                                        deploy.tammam.uk
                                        {/* <ExternalLink size={40} /> */}
                                    </a>
                                    , where I can easily deploy public-facing apps with CI/CD.
                                </p>
                                <p className="pt-4">I built a custom case for fun.</p>
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
