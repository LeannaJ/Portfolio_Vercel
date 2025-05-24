"use client";
import Image from "next/image";
import { useState } from "react";

const aboutData = {
  professional: {
    img: "/assets/profile/professional_sq.png",
    alt: "Professional profile",
    desc: "Over the past two years, I've gained hands-on experience at the intersection of data and product. In the IT and telecommunications industries, I've led data-driven UX strategies and supported product decisions based on user data insights.\n\nMore recently, I've deepened my expertise in machine learning, optimization, and AI product implementation through collaborations with U.S.-based companies in technology and supply chain domains.",
  },
  personal: {
    img: "/assets/profile/personal_sq1.png",
    alt: "Personal profile",
    desc: "I'm a fast learner who thrives on turning complexity into clarity. I enjoy transforming data into strategic insight, and I'm energized by the process of continuous learning.\n\nOutside of work, I stay grounded through running, yoga, and journaling—sharing my analog routine and stationery finds regularly on Instagram. I also enjoy capturing daily moments through photos and editing videos as a creative outlet.",
  },
};

export default function About() {
  const [mode, setMode] = useState<"professional" | "personal">("professional");
  const { img, alt, desc } = aboutData[mode];

  return (
    <section className="w-full flex flex-col items-center py-20" id="about">
      {/* 타이틀 */}
      <h2
        className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]"
        style={{ fontFamily: "var(--font-header)" }}
      >
        About Me
      </h2>
      {/* 토글 버튼 */}
      <div className="flex justify-center mb-10">
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors focus:outline-none ${mode === 'professional' ? 'bg-[color:var(--color-blue)] text-white dark:bg-[color:var(--color-lemon)] dark:text-[#0A1931]' : 'bg-white dark:bg-black/20 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setMode('professional')}
          >
            Professional
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors focus:outline-none ${mode === 'personal' ? 'bg-[color:var(--color-blue)] text-white dark:bg-[color:var(--color-lemon)] dark:text-[#0A1931]' : 'bg-white dark:bg-black/20 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setMode('personal')}
          >
            Personal
          </button>
        </div>
      </div>
      {/* 컨텐츠 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-4xl w-full">
        {/* 프로필 사진 */}
        <div className="flex-shrink-0 md:self-start">
          {/* 여기에 이미지 경로를 aboutData에 입력하세요 */}
          {img && (
            <Image
              src={img}
              alt={alt}
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
            />
          )}
        </div>
        {/* 설명 */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full max-w-xl">
          {/* 부제 */}
          <div className="w-full text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center md:text-left" style={{ fontFamily: 'var(--font-header)' }}>
            {mode === "professional" ? "From Insights to Impact" : "Outside of Work"}
          </div>
          <div
            className="text-sm sm:text-base font-normal text-gray-700 dark:text-gray-200 text-center md:text-left w-full"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {desc.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-3 last:mb-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 