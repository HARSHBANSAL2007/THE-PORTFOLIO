import React, { useRef } from "react";
import useDialog from "../hooks/useDialog";
import { Printer, Download, ExternalLink, X } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  const iframeRef = useRef(null);

  const dialogRef = useDialog(isOpen, onClose);

  if (!isOpen) return null;

  const handlePrint = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.focus();
      iframeRef.current.contentWindow.print();
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-void/90 backdrop-blur-2xl">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Harsh Bansal resume"
        className="relative flex h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-[#f8fafc] text-[#1f2937] shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
      >
        
        {/* Top Control Bar */}
        <div className="bg-[#060913] text-white px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0 border-b border-line/80">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold">
              Harsh Bansal · Resume
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Open in New Tab */}
            <a
              href="/Harsh_Bansal_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800/90 border border-line px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-sm"
              title="Open full resume in new browser tab"
            >
              <ExternalLink className="h-3.5 w-3.5 text-sky-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Direct Download HTML File */}
            <a
              href="/Harsh_Bansal_Resume.html"
              download="Harsh_Bansal_Resume.html"
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800/90 border border-line px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-sm"
              title="Download exact original HTML resume file"
            >
              <Download className="h-3.5 w-3.5 text-emerald-400" />
              <span>Download HTML</span>
            </a>

            {/* Print or Save as PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-3.5 py-1.5 text-xs font-bold text-white hover:from-blue-500 hover:to-sky-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              title="Print or Save as PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / PDF</span>
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="rounded-xl bg-slate-800/80 p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              title="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 100% Full, Untruncated Original Resume Document */}
        <div className="flex-1 w-full bg-[#e5e7eb] relative overflow-hidden">
          <iframe
            ref={iframeRef}
            src="/Harsh_Bansal_Resume.html"
            title="Harsh Bansal Full Resume"
            className="w-full h-full border-0 block"
          />
        </div>

      </div>
    </div>
  );
}
