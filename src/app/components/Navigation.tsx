"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  'Home',
  'About',
  'Experience',
  'Project',
  'Skills',
  'Education',
  'Contact',
];

export default function Navigation() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const handleToggle = () => {
    const html = document.documentElement;
    if (dark) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
    setDark(!dark);
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 sm:px-16" style={{ fontFamily: 'var(--font-header)' }}>
      <div className="font-bold text-xl" style={{ letterSpacing: '0.01em' }}>
        Leanna Jeon
      </div>
      <ul className="hidden md:flex gap-8 text-base font-medium">
        {NAV_ITEMS.map((item) => (
          <li key={item} className="hover:text-[color:var(--color-blue)] transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-header)' }}>
            {item}
          </li>
        ))}
      </ul>
      <button
        aria-label="Toggle dark mode"
        onClick={handleToggle}
        className="ml-4 p-2 rounded-full border border-transparent bg-transparent transition-colors"
      >
        <Image
          src={dark ? "/assets/icon/bulb_on.png" : "/assets/icon/bulb_off.png"}
          alt={dark ? "Light bulb on" : "Light bulb off"}
          width={28}
          height={28}
          className={
            "rounded-full transition-all duration-200" +
            (dark ? " scale-110 drop-shadow-[0_0_6px_#FFE66D]" : "")
          }
        />
      </button>
    </nav>
  );
} 