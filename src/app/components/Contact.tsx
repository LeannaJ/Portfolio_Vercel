"use client";
import { useState, ChangeEvent, FormEvent } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M22 6 12 13 2 6" />
      </svg>
    ),
    label: "Email",
    value: "jeon139@purdue.edu"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <text x="7" y="17" fontSize="12" fontWeight="bold" fill="white">in</text>
      </svg>
    ),
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/leannajeon"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    label: "Github",
    value: "https://github.com/LeannaJ"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17" cy="7" r="1.5" />
      </svg>
    ),
    label: "Instagram",
    value: "https://www.instagram.com/leanna_create/"
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    // 실제 이메일 전송 로직은 별도 구현 필요
  };

  return (
    <section className="w-full py-20 bg-transparent" id="contact">
      <div className="flex flex-col items-center mb-10">
        <span className="mb-4 flex items-center justify-center">
          <span className="px-4 py-1.5 rounded-full border border-[color:var(--color-blue)] bg-white text-[color:var(--color-blue)] dark:border-[color:var(--color-lemon)] dark:bg-black dark:text-[color:var(--color-lemon)] text-xs font-semibold shadow" style={{ fontFamily: 'var(--font-header)' }}>
            Contact
          </span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-[color:var(--color-blue)] dark:text-[color:var(--color-lemon)]" style={{ fontFamily: 'var(--font-header)' }}>
          Get In Touch
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-center max-w-xl text-base font-normal mb-8">
          Feel free to reach out for collaborations, opportunities, or just a chat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-header)' }}>
            Contact Information
          </div>
          {contactInfo.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white dark:bg-black/20 rounded-xl shadow p-4 border border-gray-100 dark:border-gray-800">
              {item.icon}
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-300 font-semibold mb-1">{item.label}</div>
                {(item.value.startsWith('http') || item.value.startsWith('mailto:')) ? (
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-800 hover:text-[color:var(--color-blue)] dark:text-gray-100 dark:hover:text-[color:var(--color-lemon)] transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Contact Form */}
        <form className="bg-white dark:bg-black/20 rounded-xl shadow p-6 flex flex-col gap-4 border border-gray-100 dark:border-gray-800" onSubmit={handleSubmit}>
          <div className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-header)' }}>
            Send a Message
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/10 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--color-blue)] dark:focus:ring-[color:var(--color-lemon)]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/10 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--color-blue)] dark:focus:ring-[color:var(--color-lemon)]"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/10 px-4 py-2 text-base min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-blue)] dark:focus:ring-[color:var(--color-lemon)]"
            required
          />
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-[color:var(--color-blue)] text-white font-semibold py-2 text-base shadow hover:bg-blue-700 transition dark:bg-[color:var(--color-lemon)] dark:text-[#0A1931]"
            disabled={sent}
          >
            {sent ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
} 