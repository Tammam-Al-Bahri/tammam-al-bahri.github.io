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
import router1 from "/images/homelab/router/diy-case-progress.jpg";
import router2 from "/images/homelab/router/m.2-a-e-key-2.5g-adapter.jpg";
import router3 from "/images/homelab/router/opnsense-screenshot.jpg";
import router4 from "/images/homelab/router/proxmox-setup.jpg";
import router5 from "/images/homelab/router/router-and-switch.jpg";
import router6 from "/images/homelab/router/setup.jpg";
import router7 from "/images/homelab/router/setup-cool.jpg";
import router8 from "/images/homelab/router/soldered-power-button.jpg";
import router9 from "/images/homelab/router/wan-lan.jpg";
import router10 from "/images/homelab/router/wifi-ap.jpg";
import router11 from "/images/homelab/router/proxmox-screenshot.jpg";
import NavButtons from "@/components/NavButtons";

export default function Router() {
    const images = [
        { id: 10, img: router10 },
        { id: 6, img: router6 },
        { id: 9, img: router9 },
        { id: 2, img: router2 },
        { id: 1, img: router1 },
        { id: 8, img: router8 },
        { id: 3, img: router3 },
        { id: 11, img: router11 },
        { id: 4, img: router4 },
        { id: 7, img: router7 },
        { id: 5, img: router5 },
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
                        text="Router"
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
                                    Through my homelabbing journey, I became frustrated by the
                                    limited control offered by my home's router, so I decided to
                                    build my own router / firewall.
                                </p>
                                <p className="pt-4">
                                    I turned an old laptop motherboard into a low power router,
                                    running OPNsense as a virtual machine on Proxmox.
                                </p>
                                <p className="pt-4">
                                    I used the onboard Ethernet port for the WAN interface, and for
                                    LAN I replaced the Wi-Fi card with an M.2 A+E key 2.5Gb Ethernet
                                    adapter.
                                </p>
                                <p className="pt-4">
                                    I then built a case and soldered on a DIY power button.
                                </p>
                                <p className="pt-4">The setup is fairly simple:</p>
                                <ul className="list-disc pl-8">
                                    <li className="pt-2">
                                        The internet connection from the ONT goes into the WAN port,
                                        with OPNsense configured to handle the PPPoE connection
                                        directly to the ISP.
                                    </li>
                                    <li className="pt-2">The LAN port connects to a switch.</li>
                                    <li className="pt-2">
                                        Everything else connects to the switch.
                                    </li>
                                </ul>
                                <p className="pt-4">
                                    For Wi-Fi, I set up the BT Smart Hub and another one I had lying
                                    around as temporary wireless access points by disabling their
                                    firewall and DHCP. I spent quite some time debugging them as
                                    they kept misbehaving.
                                </p>
                                <p className="pt-4">
                                    Blocking their internet access reduced some of the random bugs,
                                    which will do for now whilst I replace them with proper access
                                    points.
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
