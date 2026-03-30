import CircularText from "@/components/CircularText";
import FaultyTerminal from "@/components/FaultyTerminal";
import GlassSurface from "@/components/GlassSurface";
import GradientText from "@/components/GradientText";
import LightRays from "@/components/LightRays";
import TextType from "@/components/TextType";
import { useTheme } from "@/components/theme-provider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import ClickSpark from "@/components/ClickSpark";
import NavButtons from "@/components/NavButtons";
import { GitHubCalendar } from "react-github-calendar";
import ShinyText from "@/components/ShinyText";

export default function Me() {
    const text = [
        "loves clean code",
        "believes in open source",
        "resolves merge conflicts",
        "runs linux on old hardware",
        "appreciates pnpm",
        "thrives in vscode",
        "writes scalable code",
        "prefers dark mode",
        "does typing tests for fun",
        "manages dependencies",
        "lives in a docker container",
    ];
    const { theme } = useTheme();
    const [scaleClass, setScaleClass] = useState("scale-0");

    useEffect(() => {
        setTimeout(() => {
            setScaleClass("scale-100");
        }, 100);
    }, []);
    return (
        <ClickSpark
            sparkColor="#00ff00"
            sparkSize={100}
            sparkRadius={150}
            sparkCount={1}
            duration={500}
            easing="ease-out"
            extraScale={10}
        >
            <div className="relative overflow-hidden w-screen h-screen">
                <div className="relative overflow-hidden w-screen h-screen dark:hidden">
                    <div className="fixed inset-0 invert blur-sm">
                        <FaultyTerminal
                            scale={1.5}
                            gridMul={[1, 1]}
                            digitSize={1.2}
                            timeScale={0.05}
                            pause={false}
                            scanlineIntensity={0.5}
                            glitchAmount={2}
                            flickerAmount={1}
                            noiseAmp={1}
                            chromaticAberration={0}
                            dither={1}
                            curvature={7}
                            tint="#e982e0"
                            mouseReact={true}
                            mouseStrength={0.5}
                            pageLoadAnimation={false}
                            brightness={1}
                        />
                    </div>
                    <div
                        className="absolute w-[35rem] h-[30rem] lg:w-[50rem] lg:h-[50rem] bg-green-950
                rounded-full blur-[100px] opacity-40 top-3/5 left-1/2 
                -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none dark:block"
                    />
                </div>

                <div className="relative overflow-hidden w-screen h-screen">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#f4e99b"
                        raysSpeed={0.4}
                        lightSpread={0.2}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.025}
                        noiseAmount={0.1}
                        distortion={0.05}
                    />
                </div>

                <div
                    className={`absolute inset-0 flex flex-col items-center justify-center z-20 gap-6 pointer-events-none select-none ${scaleClass} transition-transform duration-500 ease-in-out`}
                >
                    <GlassSurface
                        width={300}
                        height={300}
                        borderRadius={360}
                        displace={0.8}
                        saturation={0.8}
                        borderWidth={0.3}
                        mixBlendMode="difference"
                        className="hidden sm:block"
                    >
                        <div className="relative flex items-center justify-center text-muted-foreground">
                            <CircularText
                                text={"<> </> <> </> <> </> <> </> "}
                                onHover="slowDown"
                                spinDuration={300}
                                className="font-mono scale-150 text-zinc-500 opacity-50"
                            />
                            <img
                                src={"/images/me.jpg"}
                                className="absolute w-50 h-50 rounded-full"
                            />
                        </div>
                    </GlassSurface>
                    <div className="max-w-full">
                        <Card className="shadow-2xl m-2">
                            <CardHeader className="text-center">
                                <GradientText
                                    colors={
                                        theme == "light"
                                            ? [
                                                  "#06a600",
                                                  "#03999c",
                                                  "#00782c",
                                                  "#03999c",
                                                  "#06a600",
                                              ]
                                            : ["#0dff00", "#40ffaa", "#40ffb6", "#0dff00"]
                                    }
                                    animationSpeed={10}
                                    showBorder={false}
                                    className="text-5xl"
                                >
                                    Tammam <span className="whitespace-nowrap">Al Bahri</span>
                                </GradientText>
                                <ShinyText
                                    text="Software Engineering Student at Sheffield Hallam University"
                                    className="invert dark:invert-0"
                                />
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 justify-center">
                                <div className="font-mono">
                                    <div className="bg-muted rounded-sm">
                                        <span className="pl-2 text-sidebar-accent font-semibold">
                                            {"> "}
                                        </span>
                                        <TextType
                                            text={text}
                                            pauseDuration={1500}
                                            showCursor={true}
                                            cursorCharacter="|"
                                            className="dark:text-accent-foreground"
                                            variableSpeed={{ min: 7, max: 120 }}
                                            cursorBlinkDuration={0.7}
                                            cursorClassName="text-muted-foreground"
                                        />
                                    </div>
                                </div>
                                <GitHubCalendar
                                    username="Tammam-Al-Bahri"
                                    colorScheme={
                                        theme == "system"
                                            ? window.matchMedia("(prefers-color-scheme: dark)")
                                                  .matches
                                                ? "dark"
                                                : "light"
                                            : theme
                                    }
                                    fontSize={16}
                                    className="border border-dashed rounded p-2"
                                />
                            </CardContent>
                        </Card>
                        <div className="flex justify-between mt-4 pb-8 pointer-events-auto">
                            <ThemeToggle />
                            <NavButtons />
                        </div>
                    </div>
                </div>
            </div>
        </ClickSpark>
    );
}
