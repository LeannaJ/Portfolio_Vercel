"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Leanna";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center select-none relative" style={{ fontFamily: 'var(--font-header)' }}>
      <div className="flex flex-col items-center gap-2">
        <span className="text-5xl sm:text-7xl font-extrabold">
          <span className="text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]">
            {displayed}
            {displayed.length !== fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </span>
        </span>
        <span className="text-5xl sm:text-7xl font-extrabold text-[color:var(--foreground)]">Seung-mi Jeon</span>
      </div>
      <div className="mt-4 text-lg sm:text-xl font-light text-gray-500 dark:text-white" style={{ fontFamily: 'var(--font-header)' }}>
        Product-minded Data Scientist<br/>
        Solving complex problems through data, ML, and UX insights
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <a
          href="#projects"
          className="px-6 py-2 rounded-lg bg-[color:var(--color-blue)] text-white font-semibold shadow hover:bg-blue-700 transition dark:bg-[color:var(--color-lemon)] dark:text-[color:var(--background)]"
        >
          View Project
        </a>
        <a
          href="/files/Resume_DADS_Tech.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-lg border border-[0.5px] border-[color:var(--color-blue)] text-[color:var(--color-blue)] font-semibold bg-white hover:bg-[color:var(--color-blue)] hover:text-white transition dark:bg-[color:var(--background)] dark:border-[color:var(--color-lemon)] dark:text-[color:var(--color-lemon)] dark:hover:bg-[color:var(--color-lemon)] dark:hover:text-[#0A1931]"
        >
          View Resume
        </a>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10">
        <button
          onClick={handleScrollToAbout}
          aria-label="Scroll to About"
          className="rounded-full bg-gray-200 dark:bg-gray-700 p-3 hover:bg-[color:var(--color-blue)] hover:text-white dark:hover:bg-[color:var(--color-lemon)] dark:hover:text-[color:var(--background)] transition animate-bounce"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>
    </section>
  );
}

// CSS 애니메이션 추가 필요 (글로벌 또는 모듈)
// .animate-fadein { animation: fadein 0.7s cubic-bezier(0.4,0,0.2,1) both; }
// @keyframes fadein { from { opacity: 0; transform: translateY(16px);} to { opacity: 1; transform: none; } } 