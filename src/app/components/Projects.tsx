"use client";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Balancing Trailer Pool Network",
    description: "Collaborative analytics project optimizing trailer distribution strategy for logistics efficiency",
    image: "/assets/projects/logistics_van.jpg",
    tags: ["Python", "API", "MILP", "Folium", "Ortools", "Logistics Strategy", "Optimization", "Visualization"],
    ppts: "/files/Final Poster.pdf",
    demo: "/files/Anon_Allocation_Map.html"
  },
  {
    id: 2,
    title: "ML Model for Image Processing",
    description: "Image processing and object detection using hybrid model of CNN, transfer learning and XGBoost",
    image: "/assets/projects/image_processing_g_fix.jpg",
    tags: ["Python", "CNN", "XGBoost", "Keras", "PyTorch", "TensorFlow", "Classification", "Image Processing"],
    github: "https://github.com/LeannaJ/image_processing",
    ppts: "/files/Pawpularity.pdf"
  },
  {
    id: 3,
    title: "Prediction with Sports Data",
    description: "Predictive modeling for bracket prediction of national championship in NCAA March Madness",
    image: "/assets/projects/sports_bracket.jpg",
    tags: ["Python", "XGBoost", "TabNet", "Ensemble", "Sports Analytics", "Prediction", "Tableau Visualization"],
    ppts: "/files/CCAC_slides_synthetic.pdf"
  },
  {
    id: 4,
    title: "AI Agent of Predictive Data Analysis",
    description: "AI-Driven predictive modeling agent using LangChain and prompt engineering",
    image: "/assets/projects/AI_fix.jpg",
    tags: ["Python", "LangChain", "LangSmith", "Hugging Face", "LLM", "RAG", "Prompt Engineering", "Agentic AI"],
    github: "https://github.com/LeannaJ/AI_Agent_DA",
    ppts: "/files/ETB_PT_Slide_Total.pdf"
  },
  {
    id: 5,
    title: "Data Dashboard for Business Analytics(Ongoing)",
    description: "Interactive dashboard for business analytics using Python and React",
    image: "/assets/projects/Dashboard1_fix.jpg",
    tags: ["Python", "SQL", "React", "Dashboard", "Streamlit", "Tableau", "Business Analytics", "Visualization"],
  },
  {
    id: 6,
    title: "Product Management Framework(Ongoing)",
    description: "Product design and user experience strategy for mobile applications in tech and telecom industries",
    image: "/assets/projects/App_UX_1_fix.jpg",
    tags: ["Figma", "Framer", "UX", "UI", "Wireframing", "Prototyping", "User Research", "Product Strategy"],
  }
];

export default function Projects() {
  return (
    <section className="relative w-full py-20 bg-transparent" id="projects">
      <span className="mb-3 flex items-center justify-center">
        <span
          className="px-4 py-1.5 rounded-full border border-[color:var(--color-blue)] bg-white text-[color:var(--color-blue)] dark:border-[color:var(--color-lemon)] dark:bg-[color:var(--background)] dark:text-[color:var(--color-lemon)] text-xs font-semibold shadow"
          style={{ fontFamily: 'var(--font-header)' }}
        >
          Project
        </span>
      </span>
      <h2
        className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]"
        style={{ fontFamily: "var(--font-header)" }}
      >
        Selected Projects
      </h2>
      <div className="flex w-full justify-center">
        <p className="text-gray-500 dark:text-gray-300 text-center max-w-xl text-base font-normal mb-12">
          Showcase my problem-solving abilities through projects.
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-black/20 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* 프로젝트 이미지 */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* 프로젝트 내용 */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-header)" }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full border border-[0.5px] border-[color:var(--color-blue)] text-[color:var(--color-blue)] dark:bg-gray-800 dark:border-transparent dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub & Live Demo 버튼 */}
                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-gray-700 dark:text-[color:var(--color-lemon)] hover:text-[color:var(--color-blue)] dark:hover:text-[color:var(--color-lemon)] font-medium"
                    >
                      {/* GitHub 아이콘 */}
                      <svg className="w-5 h-5 mr-1 text-gray-700 dark:text-[color:var(--color-lemon)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.ppts && (
                    <a
                      href={project.ppts}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-gray-700 dark:text-[color:var(--color-lemon)] hover:text-[color:var(--color-blue)] dark:hover:text-[color:var(--color-lemon)] font-medium"
                    >
                      {/* External Link 아이콘 */}
                      <svg className="w-5 h-5 mr-1 text-gray-700 dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Deliverables
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-gray-700 dark:text-[color:var(--color-lemon)] hover:text-[color:var(--color-blue)] dark:hover:text-[color:var(--color-lemon)] font-medium"
                    >
                      {/* External Link 아이콘 */}
                      <svg className="w-5 h-5 mr-1 text-gray-700 dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://leannaj.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-6 py-2 hover:bg-[color:var(--color-blue)] hover:text-white dark:hover:bg-[color:var(--color-lemon)] dark:hover:text-[#0A1931] transition"
          aria-label="View more projects"
        >
          <span className="font-semibold text-sm">View More</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
} 