import React, { useState, useEffect } from "react";

// Enhanced Typewriter Component with Bold Name Support & Faster Speed
const TypewriterText = ({ paragraphs, speed = 18 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [fullText, setFullText] = useState("");

  useEffect(() => {
    setFullText(paragraphs.join("\n\n"));
  }, [paragraphs]);

  useEffect(() => {
    if (!fullText) return;

    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, fullText, speed]);

  // Helper to render formatted bold name dynamically during typing
  const renderFormattedText = (text) => {
    const targetName = "John Mark Prina";
    const nameIndex = text.indexOf(targetName);

    if (nameIndex === -1) {
      // Check if typing is currently inside the name "John Mark Prina"
      const partialMatch = targetName.substring(0, text.length - text.indexOf("Hello! I'm "));
      if (text.startsWith("Hello! I'm ")) {
        const prefix = "Hello! I'm ";
        const typedNamePart = text.substring(prefix.length);
        const restOfText = text.substring(prefix.length + typedNamePart.length);
        
        return (
          <>
            {prefix}
            <strong className="font-bold underline decoration-[#c5a880]/50">{typedNamePart}</strong>
            {restOfText}
          </>
        );
      }
      return text;
    }

    const before = text.substring(0, nameIndex);
    const name = text.substring(nameIndex, nameIndex + targetName.length);
    const after = text.substring(nameIndex + targetName.length);

    return (
      <>
        {before}
        <strong className="font-bold underline decoration-[#c5a880]/50">{name}</strong>
        {after}
      </>
    );
  };

  return (
    <div className="whitespace-pre-line relative inline">
      {renderFormattedText(displayedText)}
      <span className="inline-block w-2.5 h-5 ml-1 bg-[#c5a880] animate-pulse align-middle" />
    </div>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const rentWiseLink =
    "https://rentwise-guest.vercel.app/?fbclid=IwY2xjawVeW-dleHRuA2FlbQIxMQBwZG9mA3NydGMGYXBwX2lkATAAAR8Jeyon18b3b-RcFEKweTrGx40MzrMNWA2ataK5Pm7ep1T_vWUD1PoS5CrF9Q_aem_TOT6T0IQmHDConsleCQnEA";

  const bioParagraphs = [
    "Hello! I'm John Mark Prina, a passionate BSIT student and aspiring software developer. I enjoy creating clean, functional, and user-centric digital experiences. With a solid foundation in modern technologies, I continuously seek to refine my programming skills and adapt to new frameworks.",
    "My goal is to bridge the gap between complex logic and minimalist design. Whether I am writing backend scripts, designing system architectures, or structuring responsive frontends, I always aim for efficiency and fine-crafted user interfaces."
  ];

  return (
    <div
      className={`relative w-full min-h-screen transition-colors duration-500 font-sans overflow-x-clip ${
        darkMode
          ? "bg-[#0a0a0a] text-white selection:bg-amber-500/20 selection:text-amber-400"
          : "bg-slate-50 text-slate-900 selection:bg-amber-500/30 selection:text-amber-800"
      }`}
    >
      {/* Background Radial Glow */}
      <div
        className={`hero-glow-backdrop transition-opacity duration-500 ${
          darkMode ? "opacity-100" : "opacity-20"
        }`}
      />

      {/* Header / Navbar */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-500 ${
          darkMode
            ? "bg-[#0a0a0a]/80 border-zinc-800/40"
            : "bg-white/80 border-slate-200/80 shadow-sm"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5 max-w-6xl mx-auto w-full">
          <a href="#hero" className="flex items-center space-x-1 select-none group">
            <span
              className={`text-xl tracking-tighter font-light transition-colors duration-300 ${
                darkMode ? "text-zinc-400 group-hover:text-white" : "text-slate-600 group-hover:text-slate-900"
              }`}
            >
              JM
            </span>
            <span className="text-xl tracking-tighter font-black bg-gradient-to-r from-[#d4af37] via-[#c5a880] to-[#8a7355] bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
              P
            </span>
            <span className="text-[#c5a880] font-bold text-lg leading-none group-hover:translate-x-0.5 transition-transform duration-300">
              .
            </span>
          </a>

          <div className="flex items-center gap-6">
            <nav
              className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                darkMode ? "text-zinc-400" : "text-slate-600"
              }`}
            >
              <a href="#hero" className="hover:text-[#c5a880] transition-colors duration-300">PORTFOLIO</a>
              <a href="#about-me" className="hover:text-[#c5a880] transition-colors duration-300">ABOUT ME</a>
              <a href="#my-works" className="hover:text-[#c5a880] transition-colors duration-300">MY WORKS</a>
              <a href="#contact-me" className="hover:text-[#c5a880] transition-colors duration-300">CONTACT ME</a>
            </nav>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-full border transition-all duration-300 ${
                darkMode
                  ? "bg-zinc-900 border-zinc-700 text-amber-400 hover:bg-zinc-800"
                  : "bg-slate-200 border-slate-300 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full py-12">
          <h1 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
            JOHN MARK PRINA
            <span className="text-[#c5a880] inline-block font-black ml-1">.</span>
          </h1>

          <p className={`text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase mt-3 mb-8 ${darkMode ? "text-zinc-400" : "text-slate-600"}`}>
            BSIT STUDENT
            <span className="text-[#c5a880] font-bold ml-0.5">.</span>
          </p>

          <a
            href="#my-works"
            className={`inline-flex items-center justify-center px-7 py-3 text-xs font-semibold uppercase tracking-widest border rounded-full transition-all duration-300 shadow-lg ${
              darkMode
                ? "text-zinc-200 border-zinc-700/80 hover:border-[#c5a880] hover:text-white hover:bg-zinc-900/60"
                : "text-slate-700 border-slate-300 hover:border-[#c5a880] hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            VIEW MY WORK
          </a>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about-me" className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 border-t ${darkMode ? "border-zinc-900/80" : "border-slate-200"}`}>
          <div className="mb-12 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a880] block mb-1">BIOGRAPHY</span>
            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight uppercase ${darkMode ? "text-white" : "text-slate-900"}`}>
              ABOUT ME<span className="text-[#c5a880]">.</span>
            </h2>
          </div>

          {/* Top Half: Picture + Description WITH BOLD NAME & FASTER TYPEWRITER */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-16">
            {/* Left Column: Profile Picture */}
            <div className="md:col-span-5 flex justify-center">
              <div className={`relative group w-full max-w-xs sm:max-w-md rounded-2xl p-2.5 border shadow-2xl transition-colors ${
                darkMode 
                  ? "bg-gradient-to-b from-zinc-800/50 to-zinc-900/80 border-zinc-800" 
                  : "bg-white border-slate-200"
              }`}>
                <div className="overflow-hidden rounded-xl aspect-[3/4] bg-zinc-950">
                  <img
                    src="/MyImg.jpg"
                    alt="John Mark Prina"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Full Typewriter Bio */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <div className={`text-base sm:text-lg md:text-xl leading-relaxed font-normal min-h-[180px] ${darkMode ? "text-zinc-300" : "text-slate-700"}`}>
                <TypewriterText 
                  paragraphs={bioParagraphs}
                  speed={18}
                />
              </div>
            </div>
          </div>

          {/* Education & Role Focus */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t ${darkMode ? "border-zinc-800/80" : "border-slate-200"}`}>
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              darkMode ? "bg-zinc-900/40 border-zinc-800/80" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a880] block mb-2">EDUCATION</span>
              <p className={`text-lg sm:text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                BS in Information Technology
              </p>
              <p className={`text-xs sm:text-sm mt-1 ${darkMode ? "text-zinc-400" : "text-slate-500"}`}>
                STI College San Jose del Monte
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              darkMode ? "bg-zinc-900/40 border-zinc-800/80" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a880] block mb-2">ROLE FOCUS</span>
              <p className={`text-lg sm:text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                System Analyst & Full-Stack Dev
              </p>
              <p className={`text-xs sm:text-sm mt-1 ${darkMode ? "text-zinc-400" : "text-slate-500"}`}>
                System Architecture, Web & 2D Game Development
              </p>
            </div>
          </div>

          {/* Larger Coding Languages & Tech Stack */}
          <div className={`mt-12 pt-10 border-t ${darkMode ? "border-zinc-800/80" : "border-slate-200"}`}>
            <span className="text-sm font-bold uppercase tracking-widest text-[#c5a880] block mb-6 text-center sm:text-left">
              CODING LANGUAGES & TECH STACK
            </span>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3.5">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "React Native",
                "Node.js",
                "Python",
                "Java",
                "C#",
                "SQL",
                "Tailwind CSS",
                "Vite",
                "OpenGL"
              ].map((tech) => (
                <span
                  key={tech}
                  className={`px-5 py-3 text-sm sm:text-base font-mono font-bold rounded-xl border transition-all duration-300 hover:-translate-y-1 shadow-sm ${
                    darkMode
                      ? "bg-zinc-900/90 border-zinc-700/80 text-zinc-100 hover:border-[#c5a880] hover:text-white hover:bg-zinc-800 hover:shadow-[#c5a880]/10"
                      : "bg-white border-slate-300 text-slate-800 hover:border-[#c5a880] hover:text-slate-900 shadow-md"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* MY WORKS SECTION */}
        <section id="my-works" className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 border-t ${darkMode ? "border-zinc-900/80" : "border-slate-200"}`}>
          <div className="mb-16 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a880] block mb-1">SHOWCASE</span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase ${darkMode ? "text-white" : "text-slate-900"}`}>
              MY WORKS<span className="text-[#c5a880]">.</span>
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-24">
            
            {/* Project 1: RentWise */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center group">
              <a 
                href={rentWiseLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`md:col-span-6 overflow-hidden rounded-2xl border p-2 shadow-xl block cursor-pointer transition-all duration-300 ${
                  darkMode ? "border-zinc-800/80 bg-zinc-900/50 hover:border-[#c5a880]/60" : "border-slate-200 bg-white hover:border-[#c5a880]"
                }`}
              >
                <div className="overflow-hidden rounded-xl aspect-video bg-zinc-950 relative">
                  <img 
                    src="/RentWise.png" 
                    alt="RentWise System" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-black/70 rounded-full backdrop-blur-sm border border-white/20">
                      Visit Site ↗
                    </span>
                  </div>
                </div>
              </a>

              <div className="md:col-span-6 space-y-3 sm:space-y-4 text-center md:text-left">
                <a 
                  href={rentWiseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group/title"
                >
                  <h3 className={`text-xl sm:text-2xl font-extrabold tracking-wide uppercase transition-colors group-hover/title:text-[#c5a880] ${darkMode ? "text-white" : "text-slate-900"}`}>
                    RENTWISE<span className="text-[#c5a880]">.</span>
                  </h3>
                </a>

                <p className={`text-sm leading-relaxed ${darkMode ? "text-zinc-400" : "text-slate-600"}`}>
                  A comprehensive multi-platform management system specifically created to digitize and streamline market operations for Ka Domeng Talipapa Market. It integrates robust rent tracking with an innovative 2D space viewing feature and AR stall visualization.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                  {["Cross-Platform", "Rent Management", "Space Viewing", "AR / Mapping"].map((tag) => (
                    <span key={tag} className={`px-3 py-1 text-[11px] font-mono rounded border ${
                      darkMode ? "bg-zinc-900/80 border-zinc-800 text-zinc-400" : "bg-slate-100 border-slate-200 text-slate-600"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={rentWiseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-lg border transition-all ${
                      darkMode
                        ? "bg-zinc-900 border-zinc-800 text-zinc-200 hover:border-[#c5a880] hover:text-white"
                        : "bg-white border-slate-300 text-slate-800 hover:border-[#c5a880] hover:text-slate-900 shadow-sm"
                    }`}
                  >
                    VISIT LIVE SITE ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: GoSafe */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center group">
              <div className="md:col-span-6 space-y-3 sm:space-y-4 text-center md:text-left order-2 md:order-1">
                <h3 className={`text-xl sm:text-2xl font-extrabold tracking-wide uppercase ${darkMode ? "text-white" : "text-slate-900"}`}>
                  GOSAFE<span className="text-[#c5a880]">.</span>
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-zinc-400" : "text-slate-600"}`}>
                  A proactive travel safety application designed to safeguard users on the go. The app features a dynamic packing checklist system to ensure essentials are never left behind, combined with emergency quickguides and curated security tips.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                  {["Mobile Application", "SQLite", "Travel Safety", "Smart Checklist"].map((tag) => (
                    <span key={tag} className={`px-3 py-1 text-[11px] font-mono rounded border ${
                      darkMode ? "bg-zinc-900/80 border-zinc-800 text-zinc-400" : "bg-slate-100 border-slate-200 text-slate-600"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`md:col-span-6 overflow-hidden rounded-2xl border p-2 shadow-xl order-1 md:order-2 ${
                darkMode ? "border-zinc-800/80 bg-zinc-900/50" : "border-slate-200 bg-white"
              }`}>
                <div className="overflow-hidden rounded-xl aspect-video bg-zinc-950">
                  <img src="/GoSafe.jpg" alt="GoSafe App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Project 3: Will It Run? */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center group">
              <div className={`md:col-span-6 overflow-hidden rounded-2xl border p-2 shadow-xl ${
                darkMode ? "border-zinc-800/80 bg-zinc-900/50" : "border-slate-200 bg-white"
              }`}>
                <div className="overflow-hidden rounded-xl aspect-video bg-zinc-950 flex items-center justify-center">
                  <img 
                    src="/WillItRun.png" 
                    alt="Will It Run?" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="hidden flex-col items-center justify-center text-center p-6">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tighter">W/&lt;&lt;</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-wider mt-1">;it run?</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 space-y-3 sm:space-y-4 text-center md:text-left">
                <h3 className={`text-xl sm:text-2xl font-extrabold tracking-wide uppercase ${darkMode ? "text-white" : "text-slate-900"}`}>
                  WILLITRUN<span className="text-[#c5a880]">.</span>
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-zinc-400" : "text-slate-600"}`}>
                  An interactive programming game designed to test developers' coding precision and logic. Players evaluate code blocks to predict if a program will successfully compile or crash due to syntax bugs, missing elements, or logic flaws.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                  {["Game Logic", "JavaScript", "UI/UX Design"].map((tag) => (
                    <span key={tag} className={`px-3 py-1 text-[11px] font-mono rounded border ${
                      darkMode ? "bg-zinc-900/80 border-zinc-800 text-zinc-400" : "bg-slate-100 border-slate-200 text-slate-600"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT ME SECTION */}
        <section id="contact-me" className={`w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 border-t flex flex-col items-center text-center ${
          darkMode ? "border-zinc-900/80" : "border-slate-200"
        }`}>
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5a880] block mb-2">GET IN TOUCH</span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
            CONTACT ME<span className="text-[#c5a880]">.</span>
          </h2>
          <p className={`text-sm max-w-md mb-10 ${darkMode ? "text-zinc-400" : "text-slate-600"}`}>
            I'm open to freelance opportunities, project collaborations, or just a quick tech chat. Drop me a line!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mb-8">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=johnmarkprina@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-5 rounded-xl border transition-all text-center block group ${
                darkMode
                  ? "bg-zinc-900/40 border-zinc-800/80 hover:border-[#c5a880]/50 hover:bg-zinc-900/80"
                  : "bg-white border-slate-200 hover:border-[#c5a880] hover:bg-slate-50 shadow-sm"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a880] block mb-1">EMAIL ME</span>
              <span className={`text-sm font-semibold transition-colors ${
                darkMode ? "text-zinc-200 group-hover:text-white" : "text-slate-700 group-hover:text-slate-900"
              }`}>johnmarkprina@gmail.com</span>
            </a>
            <a 
              href="tel:09939024200" 
              className={`p-5 rounded-xl border transition-all text-center block group ${
                darkMode
                  ? "bg-zinc-900/40 border-zinc-800/80 hover:border-[#c5a880]/50 hover:bg-zinc-900/80"
                  : "bg-white border-slate-200 hover:border-[#c5a880] hover:bg-slate-50 shadow-sm"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a880] block mb-1">CALL / SMS</span>
              <span className={`text-sm font-semibold transition-colors ${
                darkMode ? "text-zinc-200 group-hover:text-white" : "text-slate-700 group-hover:text-slate-900"
              }`}>+63 973 302 8910</span>
            </a>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=johnmarkprina@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-widest border rounded-full transition-all duration-300 shadow-md ${
              darkMode
                ? "text-zinc-200 border-zinc-700/80 hover:border-[#c5a880] hover:text-white hover:bg-zinc-900/60"
                : "text-slate-700 border-slate-300 hover:border-[#c5a880] hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            SEND EMAIL VIA GMAIL
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className={`w-full border-t py-8 px-6 text-xs transition-colors duration-500 ${
        darkMode ? "border-zinc-900/60 text-zinc-500" : "border-slate-200 text-slate-500"
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className={`font-semibold tracking-wider ${darkMode ? "text-zinc-400" : "text-slate-700"}`}>JMP. DEV</span>
          <span>© 2026 John Mark Prina. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;