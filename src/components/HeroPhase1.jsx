import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { ArrowUpRight, ArrowRight, Copy, Check, Terminal, Mail, Phone, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, DiscordIcon } from "./SocialIcons";

export default function HeroPhase1({ onOpenContact }) {
  const [copiedText, setCopiedText] = useState("");
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2200);
  };

  const { identity, contacts, inProgressProject, primaryTechStack } = portfolioData;

  return (
    <section className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20 sm:pt-36 sm:pb-24 text-center select-none">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        
        {/* Top Operational Pill Badge in Electric Navy Blue */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-3 rounded-full border border-line/80 bg-void-card/90 px-5 py-2 ring-1 ring-inset ring-white/10 backdrop-blur-2xl shadow-[0_4px_28px_rgba(37,99,235,0.35)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-80"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]"></span>
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-steel">
            {identity.statusBadge}
          </span>
        </div>

        {/* Hero Title Typography (Pure White lines 1 & 2, glowing blue gradient line 3) */}
        <div className="relative mb-6 sm:mb-8 text-center max-w-4xl">
          <h1 className="display-tight text-[11vw] font-black uppercase leading-[0.88] sm:text-[8vw] md:text-[6.8vw] lg:text-[5.4vw] tracking-[-0.04em]">
            <span className="block text-white/85 drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              {identity.heroHeading.line1}
            </span>
            <span className="block text-white/85 drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              {identity.heroHeading.line2}
            </span>
            <span className="mt-2 sm:mt-3 block font-serif font-light italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-200/90 via-sky-400/90 to-blue-500/90 drop-shadow-[0_0_40px_rgba(56,189,248,0.6)]">
              {identity.heroHeading.italicAccent}
            </span>
          </h1>

          {/* Bracket Subtitle */}
          <div className="mt-6 sm:mt-7 flex items-center justify-center gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-steel">
            <span className="h-px w-6 sm:w-10 bg-line"></span>
            <span className="text-body font-medium text-bone/90">
              [ HARSH BANSAL // PYTHON & AGENTIC AI DEVELOPER · BCA IPU DELHI ]
            </span>
            <span className="h-px w-6 sm:w-10 bg-line"></span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col items-center gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center w-full max-w-2xl">
          {/* Primary Action Button */}
          <a
            href="#projects"
            className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center gap-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_28px_rgba(37,99,235,0.5)] border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500 hover:shadow-[0_0_45px_rgba(56,189,248,0.7)]"
          >
            <span>See the work</span>
            <span
              aria-hidden="true"
              className="grid h-5 w-5 place-items-center rounded-lg bg-white/20 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>

          {/* Quick Trigger for in-progress project */}
          <a
            href="#in-progress"
            className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-line bg-void-card/85 px-6 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-bone backdrop-blur-xl ring-1 ring-inset ring-white/10 transition-all duration-300 hover:border-sky-400/60 hover:bg-blue-600/15 hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_10px_#38bdf8]"></span>
            <span>Building: Multi-AI Workflow</span>
          </a>

          {/* Access Terminal CTA */}
          <button
            onClick={onOpenContact}
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-line/70 bg-void-card/60 px-6 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-steel backdrop-blur-md transition-colors duration-200 hover:border-sky-400/50 hover:text-white hover:bg-void-card"
          >
            <Terminal className="h-3.5 w-3.5 text-sky-400" />
            <span>CLI Terminal</span>
            <ArrowRight className="h-3.5 w-3.5 text-steel/70" />
          </button>
        </div>

        {/* Tri-Status Pill in Navy Theme */}
        <div className="mt-8 sm:mt-10 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 rounded-2xl border border-line/60 bg-void-card/80 px-6 py-2.5 font-mono text-[9px] uppercase tracking-[0.24em] text-steel/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
            <span>BCA @ IPU Delhi</span>
          </div>
          <span className="hidden sm:inline text-line/60">|</span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
            <span>Delhi (UTC+5:30)</span>
          </div>
          <span className="hidden sm:inline text-line/60">|</span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
            <span>Open to internships</span>
          </div>
        </div>

        {/* Core stack. Languages glow gold on hover; everything else stays navy. */}
        <div className="mt-8 sm:mt-10 w-full max-w-4xl rounded-2xl border border-line/70 bg-void-card/90 p-5 sm:p-6 backdrop-blur-xl ring-1 ring-inset ring-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.7)] text-left">
          <div className="flex items-center justify-between border-b border-line/40 pb-3 mb-4">
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.28em] text-sky-400 font-bold">
              <Code2 className="h-3.5 w-3.5" />
              <span>[ CORE STACK ]</span>
            </div>
            <span className="hidden font-mono text-[9px] uppercase tracking-widest text-steel sm:inline">
              {primaryTechStack.length} skills · tap for detail
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {primaryTechStack.map((tech, idx) => {
              // Core skills specified: Python, JavaScript, HTML, CSS, C/C++, SQL, PHP
              const isGoldCore = [
                "python",
                "javascript",
                "html",
                "css",
                "c & c++",
                "c programming",
                "sql",
                "php"
              ].some((k) => tech.name.toLowerCase().includes(k));

              return (
                <a
                  key={idx}
                  href="#architecture"
                  className={
                    isGoldCore
                      ? "group relative flex flex-col justify-between rounded-xl border border-line bg-void/80 p-3 transition-all duration-300 hover:border-amber-400/80 hover:bg-amber-950/25 hover:shadow-[0_0_24px_rgba(251,191,36,0.4),0_0_48px_rgba(245,158,11,0.18)] hover:-translate-y-0.5"
                      : "group relative flex flex-col justify-between rounded-xl border border-line bg-void/80 p-3 transition-all duration-300 hover:border-sky-400/60 hover:bg-blue-950/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:-translate-y-0.5"
                  }
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={
                        isGoldCore
                          ? "font-mono text-[9px] font-bold text-amber-400 group-hover:text-yellow-300 transition-colors"
                          : "font-mono text-[9px] font-bold text-sky-400 group-hover:text-white transition-colors"
                      }
                    >
                      {tech.icon}
                    </span>
                    <span
                      className={
                        isGoldCore
                          ? "font-mono text-[8px] uppercase tracking-wider text-amber-400/80 group-hover:text-amber-200 transition-colors"
                          : "font-mono text-[8px] uppercase tracking-wider text-steel"
                      }
                    >
                      {tech.category}
                    </span>
                  </div>

                  <div
                    className={
                      isGoldCore
                        ? "text-xs font-black uppercase text-amber-300 group-hover:text-yellow-200 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-all"
                        : "text-xs font-black uppercase text-bone group-hover:text-sky-300 transition-colors"
                    }
                  >
                    {tech.name}
                  </div>

                  <div
                    className={
                      isGoldCore
                        ? "font-mono text-[8px] text-amber-200/70 group-hover:text-amber-200 mt-1 truncate transition-colors"
                        : "font-mono text-[8px] text-steel mt-1 truncate"
                    }
                  >
                    {tech.tag}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Direct Contact & Social Links Dispatch Bar */}
        <div className="mt-6 w-full max-w-4xl rounded-2xl border border-line/60 bg-void-card/85 p-4 sm:p-5 backdrop-blur-xl ring-1 ring-inset ring-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-600/20 text-sky-400 border border-blue-500/30 shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                <Terminal className="h-4 w-4" />
              </span>
              <div className="text-left">
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-steel">
                  GET IN TOUCH
                </div>
                <div className="text-xs font-semibold text-bone">
                  Harsh Bansal · <span className="text-sky-400 font-mono text-[10px]">Discord: {contacts.discordHandle}</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Interactive Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => copyToClipboard(contacts.email, "email")}
                className="group inline-flex items-center gap-1.5 rounded-xl border border-line bg-void px-3 py-1.5 font-mono text-[10px] text-steel transition-all hover:border-sky-400/50 hover:text-bone"
                title="Click to copy Gmail"
              >
                <Mail className="h-3 w-3 text-sky-400" />
                <span>{contacts.email}</span>
                {copiedText === "email" ? (
                  <Check className="h-3 w-3 text-emerald-400" />
                ) : (
                  <Copy className="h-3 w-3 opacity-40 group-hover:opacity-100" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(contacts.phone, "phone")}
                className="group inline-flex items-center gap-1.5 rounded-xl border border-line bg-void px-3 py-1.5 font-mono text-[10px] text-steel transition-all hover:border-sky-400/50 hover:text-bone"
                title="Click to copy Phone"
              >
                <Phone className="h-3 w-3 text-emerald-400" />
                <span>{contacts.phone}</span>
                {copiedText === "phone" ? (
                  <Check className="h-3 w-3 text-emerald-400" />
                ) : (
                  <Copy className="h-3 w-3 opacity-40 group-hover:opacity-100" />
                )}
              </button>

              <a
                href={contacts.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-void px-2.5 py-1.5 font-mono text-[10px] text-steel transition-all hover:border-sky-400/50 hover:text-white"
                title="HARSHBANSAL2007 on GitHub"
              >
                <GithubIcon className="h-3 w-3 text-white" />
                <span>GitHub</span>
              </a>

              <a
                href={contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-void px-2.5 py-1.5 font-mono text-[10px] text-steel transition-all hover:border-sky-400/50 hover:text-white"
                title="Harsh Bansal on LinkedIn"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={contacts.discord}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-void px-2.5 py-1.5 font-mono text-[10px] text-steel transition-all hover:border-sky-400/50 hover:text-white"
                title="Join Discord Server / @duniya_ka_papa."
              >
                <DiscordIcon className="h-3.5 w-3.5 text-indigo-400" />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* FEATURED IN-PROGRESS PROJECT RADAR HUD in Navy Blue */}
        <div
          id="in-progress"
          className="mt-6 w-full max-w-4xl text-left rounded-3xl border border-line/80 bg-void-card/90 p-6 sm:p-8 backdrop-blur-2xl ring-1 ring-inset ring-white/10 shadow-[0_12px_45px_rgba(0,0,0,0.85)] relative overflow-hidden group hover:border-sky-400/50 transition-all duration-500"
        >
          {/* Ambient corner blue glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl group-hover:bg-sky-400/30 transition-colors" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-line/40 pb-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-80"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]"></span>
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
                {inProgressProject.tag}
              </span>
            </div>

            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-steel/70">
              BUILDING NOW // N8N + PYTHON
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              {/* h2, not h3: this is the first heading after the page h1, and
                  skipping a level breaks the document outline for screen readers. */}
              <h2 className="text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-sky-400 sm:text-2xl">
                {inProgressProject.title}
              </h2>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/80">
                {inProgressProject.headline}
              </p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-steel">
                {inProgressProject.blurb}
              </p>

              {/* Stack Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {inProgressProject.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-xl border border-line bg-void px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-bone/90 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Telemetry Radar Card */}
            <div className="lg:col-span-4 rounded-2xl border border-line/60 bg-void/90 p-4 font-mono text-[10px] text-steel flex flex-col justify-between gap-3 shadow-inner">
              <div className="flex items-center justify-between border-b border-line/30 pb-2 text-[9px] uppercase tracking-[0.2em] text-steel">
                <span>WHAT IT DOES</span>
                <span className="font-bold text-sky-400">IN PROGRESS</span>
              </div>
              
              <div className="space-y-2">
                {inProgressProject.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-line/20">
                    <span className="text-bone/80">{metric}</span>
                    <span className="font-bold text-sky-400/70">WIP</span>
                  </div>
                ))}
              </div>

              <a
                href="#projects"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/50 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]"
              >
                <span>Inspect Full Architecture</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
