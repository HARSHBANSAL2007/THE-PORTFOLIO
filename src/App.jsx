import React, { useState } from "react";
import BackgroundCanvas from "./components/BackgroundCanvas";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroPhase1 from "./components/HeroPhase1";
import ArchitecturePhase2 from "./components/ArchitecturePhase2";
import ProjectsPhase3 from "./components/ProjectsPhase3";
import ResumeModal from "./components/ResumeModal";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-void text-bone selection:bg-blood selection:text-white custom-cursor-active">
      {/* 3D Wireframe / Particle Background Canvas */}
      <BackgroundCanvas />

      {/* Monar-Style Reactive Red-Dot Follower Cursor */}
      <CustomCursor />

      {/* Floating Island Header Bar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* PHASE 1: Hero & Gateway (Details, In-Progress Project, Direct Comms) */}
      <main className="relative z-10">
        <HeroPhase1
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
        />

        {/* PHASE 2: Architecture, Skills & Verified Clearances ("Chances Make Champions") */}
        <ArchitecturePhase2 />

        {/* PHASE 3: The Arsenal (Projects), Education Changelog & Giant Watermark Footer */}
        <ProjectsPhase3
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
        />
      </main>

      {/* ATS Resume Printable Dossier Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Dispatch Transmission Gateway Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
