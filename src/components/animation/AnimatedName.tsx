"use client";

import { useEffect, useMemo, useState } from "react";

function TextAnimation() {
  const [lines, setLines] = useState<string[]>([]);
  const text = useMemo(
    () => [
      " I am a Next Js developer",
      " I am a Node Js developer",
      " I am a Express Js developer",
      " I am a MongoDB developer",
      " I am a Firebase developer",
      " I am a Tailwind Css developer",
      " I am a Material Ui developer",
      " I am a Bootstrap developer",
    ],
    []
  );

  useEffect(() => {
    const animateText = async () => {
      let index = 0;
      while (true) {
        const line = text[index];
        let animatedLine = "";

        for (let i = 0; i < line.length; i++) {
          animatedLine = line.slice(0, i + 1);
          setLines([animatedLine]);
          await new Promise((resolve) => setTimeout(resolve, 150));
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        for (let i = line.length; i > 0; i--) {
          animatedLine = line.slice(0, i - 1);
          setLines([animatedLine]);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        index = (index + 1) % text.length;
      }
    };

    animateText();
  }, [text]);

  return (
    <div className="text-center">
      {lines.map((line, index) => (
        <p
          key={index}
          className=" font-bold inline-block my-2 text-xl md:text-2xl lg:text-3xl"
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default TextAnimation;
