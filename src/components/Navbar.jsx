import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { ArrowUpRight, FileText, Menu, X, Terminal, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, DiscordIcon } from "./SocialIcons";

export default function Navbar({ onOpenResume, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[80] px-4 pt-4 transition-transform duration-500 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3">
        {/* Left Monogram / Branding */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-2xl bg-void-card/85 px-4 sm:px-5 py-2.5 border border-line/70 backdrop-blur-2xl transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_24px_rgba(56,189,248,0.3)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-80"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]"></span>
          </span>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-black uppercase tracking-tight text-white group-hover:text-sky-300 transition-colors">
              HB // HARSH BANSAL
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-sky-400/80">
              SYS: AUTONOMOUS AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Key Indicators */}
        <nav className="hidden lg:flex items-center gap-1 rounded-2xl bg-void-card/80 px-3 py-1.5 border border-line/70 backdrop-blur-2xl shadow-lg">
          <a
            href="#projects"
            className="rounded-xl px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-steel transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="text-sky-400 mr-1.5">[1]</span>ARSENAL
          </a>
          <a
            href="#architecture"
            className="rounded-xl px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-steel transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="text-sky-400 mr-1.5">[2]</span>SKILLS MATRIX
          </a>
          <a
            href="#certifications"
            className="rounded-xl px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-steel transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="text-sky-400 mr-1.5">[3]</span>CLEARANCES
          </a>
          <a
            href="#education"
            className="rounded-xl px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-steel transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="text-sky-400 mr-1.5">[4]</span>TIMELINE
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-void-card/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone border border-line/70 backdrop-blur-xl transition-all hover:border-sky-400/50 hover:text-white hover:bg-white/5"
          >
            <FileText className="h-3.5 w-3.5 text-sky-400" />
            <span>Dossier [PDF]</span>
          </button>

          {/* Social Quick-Icons */}
          <div className="hidden xl:flex items-center gap-1.5 pl-1">
            <a
              href={portfolioData.contacts.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub: HARSHBANSAL2007"
              className="grid h-9 w-9 place-items-center rounded-xl bg-void-card/80 text-steel border border-line/70 backdrop-blur-xl transition-all hover:text-white hover:border-sky-400/50"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={portfolioData.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn: Harsh Bansal"
              className="grid h-9 w-9 place-items-center rounded-xl bg-void-card/80 text-steel border border-line/70 backdrop-blur-xl transition-all hover:text-white hover:border-sky-400/50"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Discord Server Link in Royal Blue */}
          <a
            href={portfolioData.contacts.discord}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2 pl-4 pr-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_24px_rgba(37,99,235,0.45)] border border-white/20 transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-[0_0_36px_rgba(56,189,248,0.7)]"
            title={`Discord Server / @${portfolioData.contacts.discordHandle}`}
          >
            <span>Community</span>
            <span
              aria-hidden="true"
              className="grid h-6 w-6 place-items-center rounded-lg bg-white/15 text-[11px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-void-card/80 border border-line/70 backdrop-blur-xl text-bone lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-[1600px] rounded-2xl border border-line bg-void-card/95 p-6 backdrop-blur-2xl lg:hidden shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
          <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.2em]">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-line/40 py-2.5 text-steel hover:text-white"
            >
              [1] ARSENAL (PROJECTS)
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-line/40 py-2.5 text-steel hover:text-white"
            >
              [2] SKILLS MATRIX
            </a>
            <a
              href="#certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-line/40 py-2.5 text-steel hover:text-white"
            >
              [3] VERIFIED CLEARANCES
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-line/40 py-2.5 text-steel hover:text-white"
            >
              [4] TIMELINE & EDUCATION
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-line bg-white/5 py-3 text-bone"
            >
              <FileText className="h-4 w-4 text-sky-400" />
              <span>Open ATS Resume Dossier</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-bold text-white shadow-lg shadow-blue-600/40"
            >
              <Terminal className="h-4 w-4" />
              <span>Dispatch Transmission Gateway</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
