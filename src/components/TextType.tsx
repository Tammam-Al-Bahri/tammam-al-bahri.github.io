"use client";

import {
    type ElementType,
    useEffect,
    useRef,
    useState,
    createElement,
    useMemo,
    useCallback,
} from "react";
import { gsap } from "gsap";

interface TextTypeProps {
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorCharacter?: string | React.ReactNode;
    cursorBlinkDuration?: number;
    cursorClassName?: string;
    text: string | string[];
    as?: ElementType;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    loop?: boolean;
    variableSpeed?: { min: number; max: number };
    onSentenceComplete?: (sentence: string, index: number) => void;
    startOnVisible?: boolean;
}

const TextType = ({
    text,
    as: Component = "div",
    typingSpeed = 50,
    initialDelay = 0,
    pauseDuration = 1500,
    loop = true,
    className = "",
    showCursor = true,
    hideCursorWhileTyping = false,
    cursorCharacter = "|",
    cursorClassName = "",
    cursorBlinkDuration = 0.5,
    variableSpeed,
    onSentenceComplete,
    startOnVisible = false,
    ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(!startOnVisible);

    const [phase, setPhase] = useState<"typing" | "pause" | "falling">("typing");

    const [fallingWords, setFallingWords] = useState<{ text: string; x: number; y: number }[]>([]);

    const cursorRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const wordRefs = useRef<HTMLSpanElement[]>([]);

    const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

    const getRandomSpeed = useCallback(() => {
        if (!variableSpeed) return typingSpeed;
        const { min, max } = variableSpeed;
        return Math.random() * (max - min) + min;
    }, [variableSpeed, typingSpeed]);

    // visibility trigger
    useEffect(() => {
        if (!startOnVisible || !containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 },
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [startOnVisible]);

    // cursor animation
    useEffect(() => {
        if (showCursor && cursorRef.current) {
            gsap.set(cursorRef.current, { opacity: 1 });
            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: cursorBlinkDuration,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
            });
        }
    }, [showCursor, cursorBlinkDuration]);

    // typing logic
    useEffect(() => {
        if (!isVisible || phase !== "typing") return;

        let timeout: NodeJS.Timeout;
        const currentText = textArray[currentTextIndex];

        if (currentCharIndex < currentText.length) {
            timeout = setTimeout(
                () => {
                    setDisplayedText((prev) => prev + currentText[currentCharIndex]);
                    setCurrentCharIndex((prev) => prev + 1);
                },
                variableSpeed ? getRandomSpeed() : typingSpeed,
            );
        } else {
            setPhase("pause");
        }

        return () => clearTimeout(timeout);
    }, [
        currentCharIndex,
        phase,
        isVisible,
        textArray,
        currentTextIndex,
        typingSpeed,
        variableSpeed,
        getRandomSpeed,
    ]);

    // pause → falling
    useEffect(() => {
        if (phase !== "pause") return;

        const timeout = setTimeout(() => {
            setPhase("falling");
        }, pauseDuration);

        return () => clearTimeout(timeout);
    }, [phase, pauseDuration]);

    // trigger falling
    useEffect(() => {
        if (phase !== "falling" || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();

        const words = wordRefs.current
            .filter((el) => el && el.offsetParent !== null)
            .map((el) => {
                const rect = el.getBoundingClientRect();

                return {
                    text: el.innerText,
                    x: rect.left - containerRect.left,
                    y: rect.top - containerRect.top,
                };
            });

        setFallingWords(words);
        setDisplayedText(""); // remove typed text

        const timeout = setTimeout(() => {
            setFallingWords([]);

            if (onSentenceComplete) {
                onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
            }

            setCurrentTextIndex((prev) => (loop ? (prev + 1) % textArray.length : prev));
            setCurrentCharIndex(0);
            setPhase("typing");
        }, 1800);

        return () => clearTimeout(timeout);
    }, [phase]);

    const shouldHideCursor =
        hideCursorWhileTyping &&
        (phase === "typing" || currentCharIndex < textArray[currentTextIndex].length);

    return createElement(
        Component,
        {
            ref: containerRef,
            className: `relative inline-block whitespace-pre-wrap tracking-tight ${className}`,
            ...props,
        },

        // TYPED TEXT (word-wrapped spans)
        <span className="inline">
            {displayedText.split(" ").map((word, i) => (
                <span
                    key={i}
                    ref={(el) => {
                        if (el) wordRefs.current[i] = el;
                    }}
                    className="inline-block mx-[2px]"
                >
                    {word}
                </span>
            ))}
        </span>,

        // FALLING WORDS
        fallingWords.map((word, i) => (
            <span
                key={`fall-${i}`}
                className="absolute pointer-events-none"
                style={{
                    left: word.x,
                    top: word.y,
                }}
                ref={(el) => {
                    if (!el) return;

                    gsap.to(el, {
                        y: window.innerHeight,
                        x: word.x + (Math.random() - 0.5) * 200,
                        rotation: (Math.random() - 0.5) * 180,
                        duration: 1.5 + Math.random(),
                        ease: "power2.in",
                    });
                }}
            >
                {word.text}
            </span>
        )),

        // CURSOR
        showCursor && (
            <span
                ref={cursorRef}
                className={`ml-1 inline-block ${
                    shouldHideCursor ? "hidden" : ""
                } ${cursorClassName}`}
            >
                {cursorCharacter}
            </span>
        ),
    );
};

export default TextType;
