import ASCIIText from "@/components/ASCIIText";
import Stack from "@/components/Stack";
import { useState, useEffect } from "react";
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
import NavButtons from "@/components/NavButtons";

export default function ExtraProjects() {
    const tskImages = [
        { id: 3, img: uniTsk3 },
        { id: 1, img: uniTsk1 },
        { id: 2, img: uniTsk2 },
    ];

    const ccImages = [
        { id: 3, img: uniCc3 },
        { id: 2, img: uniCc2 },
        { id: 1, img: uniCc1 },
    ];

    const crmImages = [
        { id: 3, img: uniCrm3 },
        { id: 2, img: uniCrm2 },
        { id: 1, img: uniCrm1 },
    ];

    const recipeMangerImages = [
        { id: 2, img: uniRecipeManager2 },
        { id: 1, img: uniRecipeManager1 },
    ];

    const crudImages = [
        { id: 2, img: uniCrud2 },
        { id: 1, img: uniCrud1 },
    ];

    const consoleImages = [
        { id: 2, img: uniConsole2 },
        { id: 1, img: uniConsole1 },
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
                        text="University Projects"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>

                <div className="flex flex-col">
                    <div className="text-center text-xl font-bold">Task Management App</div>
                    <div className="flex justify-center">
                        <div className="scale-60 lg:scale-100">
                            <Stack
                                randomRotation={false}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 500, height: 500 }}
                                cardsData={tskImages}
                            />
                        </div>
                    </div>
                    <div className="text-center text-xl font-bold pt-8">Cantor College</div>
                    <div className="flex justify-center">
                        <div className="scale-60 lg:scale-100">
                            <Stack
                                randomRotation={false}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 500, height: 500 }}
                                cardsData={ccImages}
                            />
                        </div>
                    </div>
                    <div className="text-center text-xl font-bold pt-8">CRM</div>
                    <div className="flex justify-center">
                        <div className="scale-60 lg:scale-100">
                            <Stack
                                randomRotation={false}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 500, height: 500 }}
                                cardsData={crmImages}
                            />
                        </div>
                    </div>
                    <div className="text-center text-xl font-bold pt-8">Recipe Manager</div>
                    <div className="flex justify-center">
                        <div className="scale-60 lg:scale-100">
                            <Stack
                                randomRotation={false}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 500, height: 500 }}
                                cardsData={recipeMangerImages}
                            />
                        </div>
                    </div>
                    <div className="text-center text-xl font-bold pt-8">CRUD</div>
                    <div className="flex justify-center">
                        <div className="scale-60 lg:scale-100">
                            <Stack
                                randomRotation={false}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 500, height: 500 }}
                                cardsData={crudImages}
                            />
                        </div>
                    </div>
                    <div className="text-center text-xl font-bold pt-8">Console App</div>
                    <div className="flex justify-center">
                        <div className="scale-60 lg:scale-100">
                            <Stack
                                randomRotation={false}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 500, height: 500 }}
                                cardsData={consoleImages}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full max-w-5xl mx-auto mt-4 px-6 pt-24 pb-24">
                    <NavButtons />
                </div>
            </div>
        </div>
    );
}
