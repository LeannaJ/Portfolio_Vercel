"use client";

const skills = [
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Languages",
    tags: ["Python", "SQL", "R", "JavaScript", "Java", "CSS", "HTML"]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI & ML",
    tags: ["TensorFlow", "Keras", "PyTorch", "LangChain", "LangGraph", "Anthropic API", "OpenAI API", "Gemini API", "Hugging Face"]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics & Visualization",
    tags: ["Tableau", "Power BI", "Streamlit", "Folium", "A/B Testing", "Funnel Analysis", "Cohort Analysis", "Customer Journey"]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Databases",
    tags: ["MySQL", "PostgreSQL", "BigQuery", "MongoDB", "ETL", "Airflow", "Prefect"]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud & MLOps",
    tags: ["AWS", "Azure", "GCP", "Docker", "Git", "GitHub", "VS Code", "Apache"]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Product & UX",
    tags: ["Wireframing", "Figma", "Framer", "User Research", "User Testing", "Requirement Gathering", "Notion", "Jira"]
  }
];

export default function Skills() {
  return (
    <section className="w-full py-20 bg-transparent" id="skills">
      <div className="flex flex-col items-center mb-10">
        <span className="mb-3 flex items-center justify-center">
          <span
            className="px-4 py-1.5 rounded-full border border-[color:var(--color-blue)] bg-white text-[color:var(--color-blue)] dark:border-[color:var(--color-lemon)] dark:bg-[color:var(--background)] dark:text-[color:var(--color-lemon)] text-xs font-semibold shadow"
            style={{ fontFamily: 'var(--font-header)' }}
          >
            Skills
          </span>
        </span>
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]"
          style={{ fontFamily: 'var(--font-header)' }}
        >
          Technical Expertise
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-center max-w-xl text-base font-normal mb-8">
          Key technologies and tools I work with to build modern data-driven solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((cat, idx) => (
          <div key={idx} className="bg-white dark:bg-black/20 rounded-2xl shadow-md p-8 flex flex-col gap-4 items-start border border-gray-100 dark:border-gray-800">
            {cat.icon}
            <div className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-header)' }}>{cat.title}</div>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 