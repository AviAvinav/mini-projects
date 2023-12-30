"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const text1 = useRef<HTMLHeadingElement>(null);
  const text2 = useRef<HTMLHeadingElement>(null);
  const text3 = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.onscroll = function () {
      text1.current!.style.transform = `skewX(${-Math.abs(
        Math.sin(window.scrollY / 50) * 30
      )}deg)`;
    };
  }, []);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 ref={text1} className="text-2xl font-semibold">
          I will italicize on scrolling
        </h1>
      </div>
      <div className="flex items-center justify-center h-screen">
        <h1 ref={text2} className="text-2xl font-semibold">
          I will italicize on scrolling
        </h1>
      </div>
      <div className="flex items-center justify-center h-screen">
        <h1 ref={text3} className="text-2xl font-semibold">
          I will italicize on scrolling
        </h1>
      </div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold">
          I will italicize on scrolling
        </h1>
      </div>
    </>
  );
}
