"use client";

import React from 'react';

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Email",
    href: "mailto:jeon139@purdue.edu",
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M22 6 12 13 2 6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leannajeon",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="4"
          className="fill-[#0A66C2] group-hover:fill-white transition-colors dark:fill-[#0A1931] dark:group-hover:fill-[var(--color-lemon)]" />
        <text x="7" y="17" fontSize="12" fontWeight="bold"
          className="fill-white group-hover:fill-[#0A66C2] transition-colors dark:fill-[var(--color-lemon)] dark:group-hover:fill-[#0A1931]"
        >in</text>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/LeannaJ",
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leanna_create/",
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17" cy="7" r="1.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-transparent pt-16 pb-8 text-gray-700 dark:text-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* 좌측: 이름/설명 */}
        <div>
          <div className="text-2xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-header)' }}>
            <span className="text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]">Leanna</span> Jeon
          </div>
          <div className="text-base text-gray-500 dark:text-gray-300 max-w-xs">
            Product-minded data scientist passionate about analytics, product, and user experience.
          </div>
        </div>
        {/* 가운데: 퀵링크 */}
        <div className="flex flex-col items-start md:items-center">
          <div className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-header)' }}>
            QUICK LINKS
          </div>
          <ul className="flex flex-col gap-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[color:var(--color-blue)] dark:hover:text-[color:var(--color-lemon)] transition font-medium">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* 우측: 소셜 */}
        <div className="flex flex-col items-start md:items-end">
          <div className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-header)' }}>
            CONNECT WITH ME
          </div>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-gray-200 dark:border-gray-700 p-2 hover:bg-[color:var(--color-blue)] hover:text-white dark:hover:bg-[color:var(--color-lemon)] dark:hover:text-[#0A1931] transition">
                {React.cloneElement(s.icon, { className: `${s.icon.props.className} group-hover:text-white dark:group-hover:text-[#0A1931]` })}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* 하단: 위로가기, 저작권 */}
      <div className="flex flex-col items-center mt-12 gap-2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full bg-gray-100 dark:bg-gray-800 p-3 hover:bg-[color:var(--color-blue)] hover:text-white dark:hover:bg-[color:var(--color-lemon)] dark:hover:text-[#0A1931] transition"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
        </button>
        <div className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} Leanna Jeon. All rights reserved.</div>
      </div>
    </footer>
  );
} 