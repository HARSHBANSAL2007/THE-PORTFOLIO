import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { X, Mail, Phone, Copy, Check, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, DiscordIcon } from "./SocialIcons";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState("");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { contacts } = portfolioData;

  const handleCopy = (val, key) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-void/85 backdrop-blur-2xl">
      <div className="relative w-full max-w-xl rounded-3xl border border-line bg-void-card p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.95)] ring-1 ring-inset ring-white/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 h-8 w-8 grid place-items-center rounded-full border border-line bg-void text-steel hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-sky-400 mb-2">
          <Terminal className="h-3.5 w-3.5" />
          <span>[ DISPATCH GATEWAY // DIRECT COMMS ]</span>
        </div>
        <h3 className="text-2xl font-black uppercase text-white">
          Initiate Transmission
        </h3>
        <p className="mt-1 text-xs text-steel font-mono">
          Direct communication pipeline for Harsh Bansal. Discord: <span className="text-sky-300 font-bold">{contacts.discordHandle}</span>
        </p>

        {/* Direct Channel Badges */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Gmail */}
          <button
            onClick={() => handleCopy(contacts.email, "email")}
            className="flex items-center justify-between rounded-xl border border-line bg-void p-3 text-left font-mono text-xs text-steel hover:border-sky-400/50 hover:text-white transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-sky-400" />
              <div>
                <div className="text-[9px] text-steel/60 uppercase">GMAIL ADDRESS</div>
                <div className="text-bone text-[11px] truncate max-w-[150px]">{contacts.email}</div>
              </div>
            </div>
            {copied === "email" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100" />}
          </button>

          {/* Phone */}
          <button
            onClick={() => handleCopy(contacts.phone, "phone")}
            className="flex items-center justify-between rounded-xl border border-line bg-void p-3 text-left font-mono text-xs text-steel hover:border-sky-400/50 hover:text-white transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-emerald-400" />
              <div>
                <div className="text-[9px] text-steel/60 uppercase">PHONE DIRECT</div>
                <div className="text-bone">{contacts.phone}</div>
              </div>
            </div>
            {copied === "phone" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100" />}
          </button>

          {/* GitHub */}
          <a
            href={contacts.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-line bg-void p-3 text-left font-mono text-xs text-steel hover:border-sky-400/50 hover:text-white transition-all"
          >
            <div className="flex items-center gap-2.5">
              <GithubIcon className="h-4 w-4 text-white" />
              <div>
                <div className="text-[9px] text-steel/60 uppercase">GITHUB PROFILE</div>
                <div className="text-bone text-[11px]">HARSHBANSAL2007</div>
              </div>
            </div>
            <span className="text-[10px] text-steel">↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-line bg-void p-3 text-left font-mono text-xs text-steel hover:border-sky-400/50 hover:text-white transition-all"
          >
            <div className="flex items-center gap-2.5">
              <LinkedinIcon className="h-4 w-4 text-sky-400" />
              <div>
                <div className="text-[9px] text-steel/60 uppercase">LINKEDIN NETWORK</div>
                <div className="text-bone text-[11px]">harsh-bansal</div>
              </div>
            </div>
            <span className="text-[10px] text-steel">↗</span>
          </a>

          {/* Discord Server */}
          <a
            href={contacts.discord}
            target="_blank"
            rel="noreferrer"
            className="sm:col-span-2 flex items-center justify-between rounded-xl border border-line bg-void p-3 text-left font-mono text-xs text-steel hover:border-sky-400/50 hover:text-white transition-all"
          >
            <div className="flex items-center gap-2.5">
              <DiscordIcon className="h-4 w-4 text-indigo-400" />
              <div>
                <div className="text-[9px] text-steel/60 uppercase">DISCORD COMMUNITY SERVER & USER</div>
                <div className="text-bone">Join Server · Username: <span className="text-sky-400 font-bold">{contacts.discordHandle}</span></div>
              </div>
            </div>
            <span className="text-[10px] text-steel">↗</span>
          </a>
        </div>

        {/* Message Input Form */}
        <form onSubmit={handleSubmit} className="mt-6 border-t border-line/50 pt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-mono text-[9px] uppercase tracking-wider text-steel/70 mb-1">
                Your Name / Team
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Alex // Recruiter"
                className="w-full rounded-xl border border-line bg-void px-3.5 py-2 font-mono text-xs text-bone placeholder:text-steel/40 focus:border-sky-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-[9px] uppercase tracking-wider text-steel/70 mb-1">
                Your Email Address
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full rounded-xl border border-line bg-void px-3.5 py-2 font-mono text-xs text-bone placeholder:text-steel/40 focus:border-sky-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[9px] uppercase tracking-wider text-steel/70 mb-1">
              Dispatch Payload (Message)
            </label>
            <textarea
              required
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="State project scope, timeline, or engineering inquiry..."
              className="w-full rounded-xl border border-line bg-void px-3.5 py-2 font-mono text-xs text-bone placeholder:text-steel/40 focus:border-sky-400 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:bg-sky-500 transition-all duration-300 disabled:bg-emerald-600"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" />
                <span>Transmission Transmitted Securely!</span>
              </>
            ) : (
              <>
                <Send className="h-3.5 w-3.5" />
                <span>Transmit Secure Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
