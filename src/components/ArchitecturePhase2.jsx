import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { ArrowUp, Search, Code2, ShieldCheck, Terminal, Cpu, Database, Workflow, Sparkles } from "lucide-react";

export default function ArchitecturePhase2() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [utcTime, setUtcTime] = useState("");
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + " UTC");
      setIstTime(now.toTimeString().split(" ")[0] + " IST");
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { skillsGrouped, certifications } = portfolioData;

  // Flatten all skills
  const allSkills = skillsGrouped.flatMap((grp, grpIdx) =>
    grp.items.map((item) => ({ ...item, categoryId: grpIdx, categoryTitle: grp.category }))
  );

  // Filter skills based on category and search query
  const filteredSkills = allSkills.filter((s) => {
    const matchesCat = activeCategory === "all" || s.categoryId === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="architecture" className="relative z-10 border-t border-line/80 bg-void text-bone overflow-hidden select-none">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 hairgrid" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 inset-x-0 h-96 blue-horizon opacity-60" />

      {/* 1. Header Banner */}
      <div className="relative z-10 border-b border-line/80 px-6 py-20 sm:py-28 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-steel">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 pulse-dot shadow-[0_0_8px_#38bdf8]"></span>
                <span>SYSTEM SPECIFICATION // ARCHITECTURAL DIRECTORY</span>
              </div>
              <h2 className="display-tight mt-6 text-[10vw] font-black uppercase leading-[0.85] sm:text-[8vw] lg:text-[6.5vw] tracking-[-0.04em] text-bone">
                ENGINEERING<br />
                AT SCALE.<br />
                <span className="font-serif font-light italic tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-bone via-sky-300 to-blue-500 drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                  Architecting Intelligence.
                </span>
              </h2>
            </div>

            {/* Return to Summit Button */}
            <div className="lg:text-right">
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-4 rounded-2xl border border-line bg-void-card/80 px-8 py-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-bone backdrop-blur-xl ring-1 ring-inset ring-white/10 transition-all duration-300 hover:border-sky-400/60 hover:bg-blue-600/10 hover:text-white hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
              >
                <span>Return to Summit</span>
                <span
                  aria-hidden="true"
                  className="grid h-6 w-6 place-items-center rounded-lg bg-white/10 text-white transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bento Telemetry & Directory Overview Matrix */}
      <div className="relative z-10 mx-auto max-w-[1600px] border-b border-line/80">
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Column 1: Identity & Telemetry */}
          <div className="p-8 sm:p-12 md:col-span-5 md:border-r md:border-line/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="display-tight text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  HARSH BANSAL
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-sky-400">
                  / ARCHITECTURE
                </span>
              </div>
              <p className="mt-6 max-w-sm font-mono text-[11px] leading-relaxed uppercase tracking-[0.16em] text-steel">
                BCA SCHOLAR AT IPU DELHI & AUTONOMOUS AGENT ARCHITECT. SPECIALIZING IN PYTHON INFERENCE, N8N ORCHESTRATION, AND LOW-LATENCY SYSTEM WORKFLOWS.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-steel/70">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
                <span>SYS_TIME // {istTime || "CALCULATING..."} ({utcTime})</span>
              </div>
              <div className="text-steel/50">
                <span>SECTOR: DELHI EDGE // NODE_01 (GGSIPU)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Category Selector */}
          <div className="p-8 sm:p-12 md:col-span-4 md:border-r md:border-line/80 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-steel/60 mb-6">
                [ 01 // COMPUTATIONAL DOMAINS ]
              </div>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                    activeCategory === "all"
                      ? "bg-blue-600/20 border border-blue-500/40 text-white shadow-sm"
                      : "hover:bg-white/5 text-steel hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-[9px] ${activeCategory === "all" ? "text-sky-400 font-bold" : "text-steel/50"}`}>
                      00
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                      All Capabilities Matrix
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-sky-400 font-bold">
                    {allSkills.length}
                  </span>
                </button>

                {skillsGrouped.map((grp, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(idx)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                      activeCategory === idx
                        ? "bg-blue-600/20 border border-blue-500/40 text-white shadow-sm"
                        : "hover:bg-white/5 text-steel hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[9px] ${activeCategory === idx ? "text-sky-400 font-bold" : "text-steel/50"}`}>
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                        {grp.category.replace(/^[0-9]+\s*\/\/\s*/, "")}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-sky-400 font-bold">
                      {grp.items.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-steel/60">
              ACTIVE FILTER: {activeCategory === "all" ? "COMPLETE REPERTOIRE" : skillsGrouped[activeCategory]?.badge}
            </div>
          </div>

          {/* Column 3: Verified Clearances & Certifications */}
          <div id="certifications" className="p-8 sm:p-12 md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-steel/60 mb-6">
                [ 02 // VERIFIED CLEARANCES ]
              </div>
              <div className="flex flex-col gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      idx % 2 === 0 ? "bg-sky-400 shadow-[0_0_6px_#38bdf8]" : "bg-blue-600 shadow-[0_0_6px_#2563eb]"
                    }`} />
                    <span className="text-bone/90 hover:text-white transition-colors" title={cert.issuer}>
                      {cert.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 font-mono text-[9px] uppercase tracking-[0.28em] text-steel/50">
              BUILD_VER // 2026.5.0-QUANTUM
            </div>
          </div>

        </div>
      </div>

      {/* 3. Deep-Dive Skills Matrix with Live Search and Interactive Cards */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12 sm:py-16 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400">
              DYNAMIC INVENTORY // {filteredSkills.length} SKILLS DISPLAYED
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-1">
              {activeCategory === "all" ? "All Engineering Capabilities" : skillsGrouped[activeCategory]?.category}
            </h3>
          </div>
          
          {/* Live Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-steel/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Python, SQL)..."
              className="w-full rounded-xl border border-line bg-void-card/90 pl-9 pr-4 py-2 font-mono text-xs text-bone placeholder:text-steel/40 focus:border-sky-400 focus:outline-none"
            />
          </div>
        </div>

        {/* The Detailed Grid with Golden Glow Hover for Core Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, sIdx) => {
            const isCore = [
              "python",
              "javascript",
              "html",
              "css",
              "c & c++",
              "c++",
              "c programming",
              "sql",
              "mysql",
              "php"
            ].some((term) => skill.name.toLowerCase().includes(term));

            return (
              <div
                key={sIdx}
                className={
                  isCore
                    ? "rounded-2xl border border-line/70 bg-void-card/85 p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/80 hover:bg-amber-950/25 hover:shadow-[0_0_25px_rgba(251,191,36,0.35),0_8px_32px_rgba(245,158,11,0.2)] hover:-translate-y-0.5 group flex flex-col justify-between"
                    : "rounded-2xl border border-line/70 bg-void-card/85 p-5 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 hover:bg-void-card hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 group flex flex-col justify-between"
                }
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] mb-3">
                    <span className={isCore ? "text-amber-400 font-bold group-hover:text-yellow-300 transition-colors" : "text-sky-400 font-bold group-hover:text-sky-300 transition-colors"}>
                      [ {skill.categoryTitle.slice(5, 17)} ]
                    </span>
                    <span
                      className={
                        isCore
                          ? "rounded-lg border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-amber-300 text-[9px] font-semibold transition-all group-hover:border-amber-400 group-hover:bg-amber-500/25 group-hover:text-yellow-200 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.35)]"
                          : "rounded-lg border border-line bg-void px-2 py-0.5 text-bone text-[9px] transition-all group-hover:border-sky-500/40 group-hover:text-sky-200"
                      }
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div
                    className={
                      isCore
                        ? "text-base font-bold text-amber-300 group-hover:text-yellow-200 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-all"
                        : "text-base font-bold text-white group-hover:text-sky-300 transition-colors"
                    }
                  >
                    <span>{skill.name}</span>
                  </div>

                  <p className={isCore ? "mt-2 text-xs leading-relaxed text-amber-100/80 group-hover:text-amber-100 transition-colors" : "mt-2 text-xs leading-relaxed text-steel group-hover:text-slate-200 transition-colors"}>
                    {skill.desc}
                  </p>
                </div>

                {/* Visual Telemetry Bar */}
                <div
                  className={
                    isCore
                      ? "mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between font-mono text-[8px] text-amber-400/80 group-hover:border-amber-500/40 group-hover:text-amber-300 transition-colors"
                      : "mt-4 pt-3 border-t border-line/40 flex items-center justify-between font-mono text-[8px] text-steel/70 transition-colors"
                  }
                >
                  <span className={isCore ? "group-hover:text-amber-300 transition-colors" : "group-hover:text-sky-300 transition-colors"}>
                    STRENGTH
                  </span>
                  <div className="w-28 h-1 rounded-full bg-line overflow-hidden">
                    <div
                      className={
                        isCore
                          ? "h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-200 group-hover:from-amber-400 group-hover:via-yellow-300 group-hover:to-amber-100 group-hover:shadow-[0_0_12px_#fbbf24] rounded-full transition-all duration-300"
                          : "h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full transition-all duration-300"
                      }
                      style={{
                        width:
                          skill.level === "Expert" || skill.level === "Primary"
                            ? "96%"
                            : skill.level === "Advanced" || skill.level === "Specialist"
                            ? "90%"
                            : "84%",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
