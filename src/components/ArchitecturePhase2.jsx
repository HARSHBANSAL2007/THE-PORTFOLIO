import React, { useState, useEffect } from "react";
import { portfolioData, SKILL_LEVELS } from "../data/portfolioData";
import { ArrowUp, Search, Hexagon } from "lucide-react";

// Programming languages get the gold hover treatment. Matched by exact name so
// renaming a skill can't silently drop it out of (or into) this set.
const CORE_LANGUAGES = new Set(["Python 3", "JavaScript (ES6+)", "SQL", "C", "C++", "PHP"]);

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
    grp.items.map((item) => ({
      ...item,
      categoryId: grpIdx,
      categoryTitle: grp.category,
      categoryBadge: grp.badge,
    }))
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
                BCA STUDENT AT IPU DELHI. I BUILD AI AGENTS IN PYTHON, WIRE MODELS TOGETHER IN N8N, AND WRITE THE BACKENDS THAT HOLD IT ALL UP.
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

          {/* Column 3: Certifications */}
          <div id="certifications" className="p-8 sm:p-12 md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-steel/60 mb-6">
                [ 02 // CERTIFICATIONS ]
              </div>
              <div className="flex flex-col gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                {certifications.map((cert) => (
                  <div key={cert.title} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                    <div className="min-w-0">
                      <div className="text-bone/90 normal-case tracking-normal">{cert.title}</div>
                      <div className="mt-0.5 text-[9px] tracking-[0.18em] text-steel/60">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 font-mono text-[9px] uppercase tracking-[0.28em] text-steel/50">
              {certifications.length} CERTIFICATIONS ON RECORD
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

        {/* Skill cards. Core languages get the gold treatment; everything else stays navy. */}
        {filteredSkills.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line py-16 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-steel">
              No skills match &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400 underline underline-offset-4 hover:text-sky-300"
            >
              Reset filters
            </button>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const meta = SKILL_LEVELS[skill.level] ?? SKILL_LEVELS.working;
            const isCore = CORE_LANGUAGES.has(skill.name);

            return (
              <article
                key={`${skill.categoryId}-${skill.name}`}
                title={meta.note}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 motion-safe:hover:-translate-y-0.5 ${
                  isCore
                    ? "border-line/70 bg-void-card/85 hover:border-amber-400/80 hover:bg-amber-950/25 hover:shadow-[0_0_28px_rgba(251,191,36,0.35),0_8px_32px_rgba(245,158,11,0.18)]"
                    : "border-line/70 bg-void-card/85 hover:border-sky-400/50 hover:bg-void-card hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)]"
                }`}
              >
                {/* Hexagon watermark — echoes the icosahedron in the background canvas */}
                <Hexagon
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-5 -top-5 h-24 w-24 opacity-[0.06] transition-all duration-500 group-hover:rotate-[24deg] group-hover:opacity-[0.16] ${
                    isCore ? "text-amber-300" : "text-sky-400"
                  }`}
                  strokeWidth={0.7}
                />

                <div className="relative">
                  <div className="mb-3 flex items-center justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.2em]">
                    <span className={isCore ? "font-bold text-amber-400" : "font-bold text-sky-400"}>
                      {skill.categoryBadge}
                    </span>
                    <span
                      className={`shrink-0 rounded-lg border px-2 py-0.5 text-[9px] font-semibold transition-all ${
                        isCore
                          ? "border-amber-500/40 bg-amber-500/10 text-amber-300 group-hover:border-amber-400 group-hover:bg-amber-500/25 group-hover:text-yellow-200"
                          : "border-line bg-void text-bone group-hover:border-sky-500/40 group-hover:text-sky-200"
                      }`}
                    >
                      {meta.label}
                    </span>
                  </div>

                  <h4
                    className={`text-base font-bold transition-all ${
                      isCore
                        ? "text-amber-300 group-hover:text-yellow-200 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                        : "text-white group-hover:text-sky-300"
                    }`}
                  >
                    {skill.name}
                  </h4>

                  <p className={`mt-2 text-xs leading-relaxed transition-colors ${
                    isCore ? "text-amber-100/75 group-hover:text-amber-100" : "text-steel group-hover:text-slate-200"
                  }`}>
                    {skill.desc}
                  </p>
                </div>

                {/* Strength meter — width comes from the level, not a guess */}
                <div
                  className={`relative mt-4 flex items-center justify-between gap-3 border-t pt-3 font-mono text-[8px] uppercase tracking-[0.18em] transition-colors ${
                    isCore ? "border-amber-500/20 text-amber-400/80 group-hover:border-amber-500/40" : "border-line/40 text-steel/70"
                  }`}
                >
                  <span>{meta.label}</span>
                  <div className="h-1 w-28 shrink-0 overflow-hidden rounded-full bg-line">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCore
                          ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-200 group-hover:shadow-[0_0_12px_#fbbf24]"
                          : "bg-gradient-to-r from-blue-500 to-sky-400"
                      }`}
                      style={{ width: `${meta.bar}%` }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}
