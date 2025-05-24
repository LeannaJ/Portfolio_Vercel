"use client";
import { useState } from "react";

const experiences = [
  {
    company: "US Top 5 Technology Company",
    position: "Data Analyst (Industry Practicum)",
    period: "May 2025 – Present",
    location: "West Lafayette, IN",
    logo: "/assets/logo/Meta_sq.png",
    details: [
      "( Ongoing project )",
    ],
    keywords: ["Python", "LLM", "API", "LangChain", "HuggingFace"]
  },
  {
    company: "Wabash Marketplace",
    position: "Data Analyst (Industry Practicum)",
    period: "Jan 2025 – Apr 2025",
    location: "West Lafayette, IN",
    logo: "/assets/logo/Wabash_sq.png",
    details: [
      "•	Developed a trailer allocation and relocation model using MILP and OR-Tools, optimizing logistics under capacity, proximity, and demand constraints",
      "•	Built a forecasting pipeline leveraging normalized freight indices to estimate regional trailer demand",
      "•	Integrated Google Maps API to extract geolocation data, enriching allocation logic and geospatial analysis",
      "•	Created interactive dashboards to visualize trailer strategies and support faster, data-driven decisions"
    ],
    keywords: ["Python", "Geospatial", "Streamlit", "Folium", "Optimization"]
  },
  {
    company: "Korean Startup: WHITEBREW",
    position: "User Experience Strategist",
    period: "Nov 2022 – Jun 2023",
    location: "Seoul, Korea",
    logo: "/assets/logo/whitebrew_sq.png",
    details: [
      "•	Led mobile gaming product strategy across the full lifecycle, launching differentiated MVPs with feature analysis to boost user engagement",
      "•	Acquired early users for an e-book translation service through A/B testing of landing pages, reducing product development cycle by 30%"
    ],
    keywords: ["UX Strategy", "A/B Testing", "MVP", "User Research"]
  },
  {
    company: "Naver Cloud (Worksmobile)",
    position: "Product Management Intern",
    period: "Dec 2022 – Feb 2023",
    location: "Seongnam, Korea",
    logo: "/assets/logo/Naver_Works.png",
    details: [
      "•	Conducted qualitative interviews to explore chat service behavior, uncovering key pain points in the 'Home' feature and validating a new card-style dashboard",
      "•	Led user journey analysis to design the information structure for 'My Own Chat Room,' delivering personalized data storage to Asian users and improving retention"
    ],
    keywords: ["User Research", "UX Design", "Product Management", "Journey Analysis", "A/B Testing", "Collaboration Tool"]
  },
  {
    company: "LG Uplus",
    position: "Product Management Intern",
    period: "May 2022 – Dec 2022",
    location: "Seoul, Korea",
    logo: "/assets/logo/LG_sq.png",
    details: [
      "•	Analyzed funnels and user behavior with SQL and Python to identify friction points, driving a 1.5% revenue increase via data content strategy",
      "•	Redesigned mobile and web navigation flows with usability architecture, improving retention by 20%",
      "•	Applied NLP-based clustering, enabling behavior-based segmentation and reducing churn in collaboration with product and marketing teams",
      "•	Built personalization logic from usage patterns and segmentation, and created wireframes to align product implementation with user experience"
    ],
    keywords: ["Python", "SQL", "Time Series", "Funnel Analysis", "UX Strategy", "Marketing Analytics", "Digital Product"]
  }
];

type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  logo: string;
  details: string[] | string;
  keywords: string[];
};

type CardProps = {
  exp: Experience;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

function Card({ exp, isOpen, onClick, className = "" }: CardProps) {
  return (
    <div
      className={`relative w-full max-w-md bg-black/10 dark:bg-white/20 rounded-2xl shadow-lg p-6 pl-4 transition-all duration-300 cursor-pointer hover:scale-[1.02] ${className}`}
      onClick={onClick}
    >
      {/* 상단: 로고 + 직무명/직장명 */}
      <div className="flex items-center gap-3 mb-2">
        {exp.logo && (
          <div className="flex items-center justify-center bg-white dark:bg-gray-100 rounded-xl w-12 h-12 mr-2 shadow">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-8 h-8 object-contain"
            />
          </div>
        )}
        <div>
          <div className="font-bold text-base mb-1" style={{ fontFamily: "var(--font-header)" }}>
            {exp.position}
          </div>
          <div className="font-semibold text-sm text-gray-500 dark:text-gray-300">{exp.company}</div>
        </div>
      </div>
      {/* 토글 아이콘 - 우측 하단 */}
      <div className="absolute right-4 bottom-4 text-lg text-black dark:text-white select-none">
        {isOpen ? (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
      {/* 상세 내용 */}
      {isOpen && (
        <div className="mt-4 text-sm text-black dark:text-white">
          <ul className="list-disc pl-6 marker:text-base marker:text-gray-700 dark:marker:text-gray-200 space-y-3 leading-tight">
            {Array.isArray(exp.details)
              ? exp.details.map((line, i) => (
                  <li key={i} className="leading-relaxed">{line.replace(/^•\s*/, "")}</li>
                ))
              : <li className="leading-relaxed">{exp.details}</li>
            }
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            {exp.keywords.map((kw, i) => (
              <span key={i} className="px-2 py-1 bg-blue-600/80 text-white text-xs rounded-full dark:bg-[color:var(--color-lemon)] dark:text-[#0A1931]">
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Logo() { return null; }

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 bg-transparent" id="experience">
      <span className="mb-3 flex items-center justify-center">
        <span
          className="px-4 py-1.5 rounded-full border border-[color:var(--color-blue)] bg-white text-[color:var(--color-blue)] dark:border-[color:var(--color-lemon)] dark:bg-[color:var(--background)] dark:text-[color:var(--color-lemon)] text-xs font-semibold shadow"
          style={{ fontFamily: 'var(--font-header)' }}
        >
          Experience
        </span>
      </span>
      <h2
        className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]"
        style={{ fontFamily: "var(--font-header)" }}
      >
        My Work Journey
      </h2>
      <div className="flex w-full justify-center">
        <p className="text-gray-500 dark:text-gray-300 text-center max-w-xl text-base font-normal mb-12">
          My professional work experience and roles.
        </p>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-400 dark:bg-gray-200 -translate-x-1/2 z-0 rounded"></div>
        <div className="w-full max-w-4xl flex flex-col gap-2 z-10">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="relative flex w-full items-center">
                {/* 왼쪽 1/2 */}
                {isLeft ? (
                  <div className="w-1/2 flex flex-col items-end justify-center pr-8">
                    {/* 카드 바깥 위쪽에만 기간/장소 */}
                    <div className="mb-2 text-xs text-gray-600 dark:text-gray-100 text-right">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                    <Card exp={exp} isOpen={isOpen} onClick={() => setOpenIdx(isOpen ? null : idx)} className="pr-16" />
                  </div>
                ) : (
                  <div className="w-1/2"></div>
                )}
                {/* 타임라인 원 */}
                <div className="relative z-20">
                  <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-white dark:bg-black border-4 border-gray-400 dark:border-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-600 dark:bg-gray-200 rounded-full"></div>
                  </div>
                </div>
                {/* 오른쪽 1/2 */}
                {!isLeft ? (
                  <div className="w-1/2 flex flex-col items-start justify-center pl-8">
                    {/* 카드 바깥 위쪽에만 기간/장소 */}
                    <div className="mb-2 text-xs text-gray-600 dark:text-gray-100 text-left">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                    <Card exp={exp} isOpen={isOpen} onClick={() => setOpenIdx(isOpen ? null : idx)} className="pl-16" />
                  </div>
                ) : (
                  <div className="w-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 