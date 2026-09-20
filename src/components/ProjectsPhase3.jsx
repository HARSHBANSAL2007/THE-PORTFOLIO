import React, { useCallback, useState } from "react";
import useDialog from "../hooks/useDialog";
import { portfolioData } from "../data/portfolioData";
import { ArrowUpRight, Terminal as TerminalIcon, GraduationCap, Lock } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectsPhase3({ onOpenContact, onOpenResume }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const closeProject = useCallback(() => setActiveModalProject(null), []);
  const dialogRef = useDialog(Boolean(activeModalProject), closeProject);
  const [cliInput, setCliInput] = useState("");
  const [cliOutput, setCliOutput] = useState([
    { type: "system", text: "HARSH BANSAL // INTERACTIVE CLI" },
    { type: "system", text: "Type 'help' or click quick commands below to interact." },
  ]);

  const { projects, education, contacts } = portfolioData;

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newOutput = [...cliOutput, { type: "user", text: `$ ${cmd}` }];

    switch (cleanCmd) {
      case "help":
        newOutput.push({
          type: "response",
          text: "Available commands: 'whoami', 'education', 'skills', 'projects', 'contact', 'resume', 'clear'",
        });
        break;
      case "whoami":
        newOutput.push({
          type: "response",
          text: "Harsh Bansal — Python & Agentic AI Developer | BCA Student @ IPU Delhi",
        });
        break;
      case "education":
        newOutput.push({
          type: "response",
          text: education
            .map(
              (edu) =>
                `• ${edu.degree.toUpperCase()}\n  ${edu.institution} [${edu.period}] — Status: ${edu.status}\n  ${edu.details}`
            )
            .join("\n\n"),
        });
        break;
      case "skills":
        newOutput.push({
          type: "response",
          text: "Core Pillars:\n1. Python & AI Development\n2. JavaScript, HTML, CSS\n3. C & C++ Programming\n4. LangChain & Gen AI Agents\n5. SQL & Database Management\n6. n8n Workflow Automation\n7. Data Structures & Algorithms (DSA)\n8. PHP & Web Scripting",
        });
        break;
      case "projects":
        newOutput.push({
          type: "response",
          text: "1. Multi-Purpose AI Model Workflow Framework (n8n + AI APIs)\n2. Autonomous AI Agents Suite (LangChain + OCR + EDA)\n3. BMW Showroom Management System (Python + SQL)\n4. Interactive Cyber Gateway & Portfolio",
        });
        break;
      case "contact":
        newOutput.push({
          type: "response",
          text: `Email: ${contacts.email} | Phone: ${contacts.phone} | Discord: ${contacts.discordHandle}`,
        });
        break;
      case "resume":
        newOutput.push({
          type: "response",
          text: "Opening resume...",
        });
        if (typeof onOpenResume === "function") {
          onOpenResume();
        }
        break;
      case "clear":
        setCliOutput([{ type: "system", text: "Terminal cleared." }]);
        setCliInput("");
        return;
      default:
        newOutput.push({
          type: "error",
          text: `Command not recognized: '${cleanCmd}'. Type 'help' for valid commands.`,
        });
    }

    setCliOutput(newOutput);
    setCliInput("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    handleCommand(cliInput);
  };

  return (
    <section id="projects" className="relative z-10 border-t border-line/80 bg-void text-bone overflow-hidden select-none">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 hairgrid-fine" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 inset-x-0 h-96 blue-horizon opacity-60" />

      {/* 1. Projects Section Header */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-line/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-sky-400">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping"></span>
              <span>[ 03 // PROJECTS ]</span>
            </div>
            <h2 className="display-tight mt-3 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-bone">
              FEATURED<br />
              <span className="bg-gradient-to-r from-rb-yellow via-rb-red-bright to-rb-red bg-clip-text font-serif font-light italic text-transparent">
                INNOVATIONS.
              </span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-[11px] leading-relaxed uppercase tracking-[0.16em] text-steel">
            A FULL-STACK QUEUE PLATFORM FOR GOVERNMENT PROCUREMENT CENTRES, AI AGENTS THAT RESEARCH AND BUILD DECKS, AND THE BACKENDS UNDERNEATH THEM.
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((proj) => {
            const isHighlight = proj.highlight;
            const inProgress = proj.status === "IN PROGRESS";
            return (
              <div
                key={proj.id}
                className={`relative flex flex-col justify-between rounded-3xl border bg-void-card/90 p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 group ${
                  isHighlight
                    ? "border-rb-red/50 shadow-[0_0_35px_rgba(225,6,0,0.2)] hover:border-rb-red"
                    : "border-line/70 hover:border-sky-400/40 hover:shadow-void-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-steel/80 pb-6 border-b border-line/40">
                    <span className="text-sky-400 font-bold">[ {proj.order} // {proj.genre} ]</span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[9px] tracking-widest ${
                        inProgress
                          ? "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                          : "bg-void text-steel border border-line"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${inProgress ? "bg-amber-400 animate-pulse" : "bg-steel/60"}`} />
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="display-tight mt-6 text-2xl sm:text-3xl font-black uppercase tracking-tight text-bone group-hover:text-sky-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs text-sky-400">
                    {proj.tagline}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-steel">
                    {proj.blurb}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-line/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-lg border border-line/70 bg-void px-2.5 py-1 font-mono text-[9px] text-steel"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {proj.repo ? (
                      <a
                        href={proj.repo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-xl border border-line bg-void-card px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-bone transition-all hover:border-sky-400 hover:text-white"
                        title={`View ${proj.title} on GitHub`}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 rounded-xl border border-line/60 bg-void/60 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-steel/70"
                        title="This repository is private"
                      >
                        <Lock className="h-3 w-3" />
                        <span>Private</span>
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(proj)}
                      className="inline-flex items-center gap-2 rounded-xl border border-line bg-void-card px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-sky-400 transition-all hover:border-sky-400 hover:text-white"
                    >
                      <span>Inspect</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Education & Academic Credentials (Placed Above Terminal) */}
      <div id="education" className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 md:px-12 border-t border-line/80">
        <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-steel mb-8">
          <GraduationCap className="h-4 w-4 text-sky-400" />
          <span>[ 04 // EDUCATION & ACADEMIC CREDENTIALS ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-line bg-void-card/60 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40"
            >
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.24em] text-steel pb-4 border-b border-line/30">
                <span>{edu.period}</span>
                <span className="rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-0.5">
                  {edu.status}
                </span>
              </div>
              <h4 className="mt-5 text-xl font-bold uppercase tracking-tight text-white">
                {edu.degree}
              </h4>
              <p className="mt-1 font-mono text-[11px] text-sky-400">
                {edu.institution}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-steel">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive In-Browser Developer CLI Terminal */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12 md:px-12 border-t border-line/80">
        <div className="rounded-3xl border border-line/80 bg-void-card/95 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line/50 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-600/20 text-sky-400 border border-blue-500/30">
                <TerminalIcon className="h-4 w-4" />
              </span>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-400 font-bold">
                  INTERACTIVE SYSTEM TERMINAL // DISPATCH SHELL
                </div>
                <div className="text-xs text-bone font-semibold">
                  Execute direct queries against Harsh Bansal's developer repository
                </div>
              </div>
            </div>

            {/* Quick-Click Command Pills */}
            <div className="flex flex-wrap gap-1.5">
              {["help", "whoami", "education", "skills", "projects", "contact", "resume", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => {
                    handleCommand(cmd);
                    if (cmd === "resume" && typeof onOpenResume === "function") {
                      onOpenResume();
                    }
                  }}
                  className={
                    cmd === "resume"
                      ? "rounded-lg border border-sky-400/60 bg-blue-600/25 px-2.5 py-1 font-mono text-[9px] uppercase text-sky-300 hover:border-sky-400 hover:bg-blue-600/50 hover:text-white transition-all shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                      : "rounded-lg border border-line bg-void px-2.5 py-1 font-mono text-[9px] uppercase text-steel hover:border-sky-400 hover:text-white transition-all"
                  }
                >
                  ${cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="min-h-[160px] max-h-[260px] overflow-y-auto font-mono text-xs space-y-1.5 p-3 rounded-2xl bg-void/90 border border-line/50 text-slate-300">
            {cliOutput.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.type === "user"
                    ? "text-sky-300 font-semibold"
                    : line.type === "error"
                    ? "text-rose-400"
                    : line.type === "response"
                    ? "text-slate-200 whitespace-pre-wrap pl-3 border-l border-sky-400/40"
                    : "text-slate-400 text-[11px]"
                }
              >
                {line.text}
              </div>
            ))}
          </div>

          {/* Terminal Input Line */}
          <form onSubmit={onFormSubmit} className="mt-4 flex items-center gap-2">
            <span className="font-mono text-xs text-sky-400 font-bold">$</span>
            <input
              type="text"
              value={cliInput}
              onChange={(e) => setCliInput(e.target.value)}
              placeholder="Type a command (e.g. 'education', 'skills', 'resume')..."
              className="flex-1 rounded-xl border border-line bg-void px-4 py-2 font-mono text-xs text-white placeholder:text-steel/40 focus:border-sky-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-4 py-2 font-mono text-xs text-white hover:bg-sky-500 transition-colors"
            >
              Run
            </button>
          </form>
        </div>
      </div>

      {/* 4. Giant HARSH Watermark & Footer (Directly Below Terminal) */}
      <footer className="relative border-t border-line/80 bg-void text-bone overflow-hidden select-none">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 hairgrid" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 inset-x-0 h-96 blue-horizon opacity-80" />

        <div className="relative z-10 px-6 pt-16 pb-10 sm:pt-24 md:px-12 text-center">
          {/* Giant Bold "HARSH" Watermark (Strictly HARSH on a Single Line) */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none text-center font-black uppercase text-[25vw] leading-[0.72] tracking-[-0.06em] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.16] via-white/[0.04] to-transparent drop-shadow-[0_0_80px_rgba(56,189,248,0.18)] whitespace-nowrap overflow-hidden transition-all duration-700"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.12)",
            }}
          >
            HARSH
          </div>

          <div className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.35em] text-steel/60 -mt-3 sm:-mt-6 mb-8">
            [ AUTONOMOUS SYSTEMS ARCHITECT · DELHI, INDIA ]
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line/40 pt-8 font-mono text-[9px] uppercase tracking-[0.25em] text-steel sm:flex-row">
            <div className="flex items-center gap-2">
              <span>© 2026 HARSH BANSAL ARCHITECTURE</span>
              <span className="text-line">•</span>
              <span>ALL RIGHTS RESERVED</span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-steel/50">
              <span>LAT 28.6139° N // LON 77.2090° E // SECTOR: DELHI EDGE</span>
            </div>

            <div className="flex items-center gap-2 text-steel/70">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse"></span>
              <span>AUTONOMOUS SYSTEMS CORE</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 4. Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void/85 backdrop-blur-2xl animate-in fade-in duration-200">
          <div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-2xl rounded-3xl border border-line bg-void p-7 shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close"
              className="absolute right-6 top-6 grid h-8 w-8 place-items-center rounded-full border border-line font-mono text-xs text-steel hover:text-white"
            >
              <span aria-hidden="true">✕</span>
            </button>

            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400 mb-2">
              PROJECT ARTIFACT // {activeModalProject.order}
            </div>
            <h3 id="project-modal-title" className="text-2xl font-black uppercase text-white">
              {activeModalProject.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-steel">
              {activeModalProject.genre}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-bone/90">
              {activeModalProject.blurb}
            </p>

            {activeModalProject.shots?.length > 0 && (
              <div className="mt-6 border-t border-line pt-4">
                <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.25em] text-steel">
                  SCREENSHOTS:
                </div>
                <div className="-mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-2">
                  {activeModalProject.shots.map((shot) => (
                    <a
                      key={shot.src}
                      href={shot.src}
                      target="_blank"
                      rel="noreferrer"
                      className="group/shot w-64 shrink-0 snap-start"
                      title="Open full size"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="h-36 w-full rounded-xl border border-line object-cover object-top transition-colors group-hover/shot:border-sky-400/60"
                      />
                      <span className="mt-1.5 block font-mono text-[9px] leading-snug text-steel/80">
                        {shot.alt}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 border-t border-line pt-4">
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-steel mb-3">
                ARCHITECTURAL CAPABILITIES:
              </div>
              <ul className="space-y-2 font-mono text-xs text-bone">
                {activeModalProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-line pt-4 flex flex-wrap gap-2">
              {activeModalProject.stack.map((t, idx) => (
                <span key={idx} className="rounded-full border border-line bg-void px-3 py-1 font-mono text-[9px] text-steel">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
              {activeModalProject.repo && (
                <a
                  href={activeModalProject.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-auto inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone transition-colors hover:border-sky-400 hover:text-white"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>View code</span>
                </a>
              )}
              <button
                onClick={() => setActiveModalProject(null)}
                className="rounded-full border border-line px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-steel hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenContact();
                }}
                className="rounded-full bg-blue-600 px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-sky-500 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
              >
                Inquire Architecture
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
