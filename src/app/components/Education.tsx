"use client";
import { useState } from "react";

const education = [
  {
    logo: "/assets/logo/analyticsplus_logo.jpg",
    title: "Student Poster Presenter",
    org: "INFORMS Analytics+ Conference",
    orgUrl: "https://www.purdue.edu/",
    detail: "Presented 'Balancing Pool Network' project",
    year: "2025"
  },
  {
    logo: "/assets/logo/Purdue_sq.png",
    title: "5th Ranked on Competition",
    org: "Purdue & NCAA with Kaggle",
    orgUrl: "https://www.purdue.edu/",
    detail: "Cross Classic Analytics Challenge",
    year: "2025"
  },
  {
    logo: "/assets/logo/Purdue_sq.png",
    title: "Treasurer in BAIM club",
    org: "Purdue University",
    orgUrl: "https://www.purdue.edu/",
    detail: "Led managing club's budget and finances",
    year: "2025"
  },
  {
    logo: "/assets/logo/Purdue_sq.png",
    title: "Purdue University",
    org: "Purdue University",
    orgUrl: "https://www.purdue.edu/",
    detail: "MS in Business Analytics & Information Management(BAIM)",
    year: "2025"
  },
  {
    logo: "/assets/logo/Sogang.png",
    title: "Sogang University",
    org: "Sogang University",
    orgUrl: "https://www.sogang.ac.kr/",
    detail: "BS in Business Administration",
    year: "2022"
  },
  {
    logo: "/assets/logo/gghs.svg",
    title: "Goyang Global High School",
    org: "Goyang Global High School",
    orgUrl: "https://www.gghs.kr/",
    detail: "Chinese & Spanish",
    year: "2014"
  }
];

const certifications = [
  {
    logo: "/assets/logo/Tableau_sq.png",
    title: "Tableau Desktop Specialist",
    org: "Tableau Desktop",
    orgUrl: "https://www.tableau.com/",
    detail: "Certified Specialist",
    year: "Exam Scheduled"
  },
  {
    logo: "/assets/logo/AWS.png",
    title: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    orgUrl: "https://www.credly.com/badges/31207a1b-b9f9-4ac7-ac8d-7b2e995e42dd/public_url",
    detail: "Certified Foundational",
    year: "2025"
  },
  {
    logo: "/assets/logo/MS_Azure.png",
    title: "Azure Fundamentals",
    org: "Microsoft",
    orgUrl: "https://www.credly.com/badges/f6d4cdd3-79e8-4fe9-8366-8b0c2121a081/public_url",
    detail: "AZ-900",
    year: "2025"
  },
  {
    logo: "/assets/logo/python_sq.png",
    title: "Data Scientist in Python",
    org: "DataCamp",
    orgUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/767071d2c30617574ed5ebae9dbd8fc299ce8bae",
    detail: "Track Completion",
    year: "2025"
  },
  {
    logo: "/assets/logo/MS_Azure.png",
    title: "Azure AI Fundamentals",
    org: "Microsoft",
    orgUrl: "https://www.credly.com/badges/c6f73b59-8022-4842-b89e-dfe2d1445d22/public_url",
    detail: "AI-900",
    year: "2024"
  },
  {
    logo: "/assets/logo/Udemy_sq.png",
    title: "Data Science Bootcamp",
    org: "Udemy",
    orgUrl: "files/UDEMY_certification.pdf",
    detail: "Course Completion",
    year: "2024"
  }
];

export default function Education() {
  const [tab, setTab] = useState<'education' | 'certification'>('education');
  const data = tab === 'education' ? education : certifications;

  return (
    <section className="w-full py-20 bg-transparent" id="education">
      <div className="flex flex-col items-center mb-10">
        <span className="mb-3 flex items-center justify-center">
          <span
            className="px-4 py-1.5 rounded-full border border-[color:var(--color-blue)] bg-white text-[color:var(--color-blue)] dark:border-[color:var(--color-lemon)] dark:bg-[color:var(--background)] dark:text-[color:var(--color-lemon)] text-xs font-semibold shadow"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            Education
          </span>
        </span>
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]"
          style={{ fontFamily: 'var(--font-header)' }}
        >
          Education & Certification
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-center max-w-xl text-base font-normal mb-6">
          Academic background and professional qualifications
        </p>
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors focus:outline-none ${tab === 'education' ? 'bg-[color:var(--color-blue)] text-white dark:bg-[color:var(--color-lemon)] dark:text-[#0A1931]' : 'bg-white dark:bg-black/20 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setTab('education')}
          >
            Education
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors focus:outline-none ${tab === 'certification' ? 'bg-[color:var(--color-blue)] text-white dark:bg-[color:var(--color-lemon)] dark:text-[#0A1931]' : 'bg-white dark:bg-black/20 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setTab('certification')}
          >
            Certification
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item, idx) => {
          const isTableauScheduled = tab === 'certification' && item.title === "Tableau Desktop Specialist" && item.year === "Exam Scheduled";
          if (tab === 'certification' && !isTableauScheduled) {
            return (
              <a
                key={idx}
                href={item.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-black/20 rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100 dark:border-gray-800 h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center bg-white dark:bg-gray-100 rounded-xl w-12 h-12 mr-2 shadow">
                    <img src={item.logo} alt={item.org} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <div className="text-lg font-bold" style={{ fontFamily: 'var(--font-header)' }}>{item.title}</div>
                    <span className="text-sm font-semibold text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]">
                      {item.org}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div className="text-xs text-gray-500 dark:text-gray-300 font-medium">{item.detail}</div>
                  <div className="text-sm font-bold text-gray-400 dark:text-gray-300 ml-2">{item.year}</div>
                </div>
              </a>
            );
          }
          return (
            <div key={idx} className="bg-white dark:bg-black/20 rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100 dark:border-gray-800 h-full">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center justify-center bg-white dark:bg-gray-100 rounded-xl w-12 h-12 mr-2 shadow">
                  <img src={item.logo} alt={item.org} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ fontFamily: 'var(--font-header)' }}>{item.title}</div>
                  <span className="text-sm font-semibold text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]">
                    {item.org}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-end mt-auto">
                <div className="text-xs text-gray-500 dark:text-gray-300 font-medium">{item.detail}</div>
                <div className="text-sm font-bold text-gray-400 dark:text-gray-300 ml-2">{item.year}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 