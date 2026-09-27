/**
 * SINGLE SOURCE OF TRUTH — portfolio content.
 *
 * Ground rule for this file: every claim here must be defensible in an
 * interview. No invented counts, no performance numbers that were never
 * measured, no credential codes that don't exist. Skill levels use the four
 * tiers defined in SKILL_LEVELS below and nothing else.
 */

// Four honest tiers, used everywhere. `bar` drives the strength meter so the
// UI never has to guess a width from a label.
export const SKILL_LEVELS = {
  primary: { label: "Primary", bar: 92, note: "Daily driver — I reach for this first" },
  proficient: { label: "Proficient", bar: 76, note: "Shipped working projects with it" },
  working: { label: "Working", bar: 58, note: "Used in coursework and side builds" },
  foundational: { label: "Foundational", bar: 38, note: "Fundamentals solid, still growing" },
};

export const portfolioData = {
  identity: {
    name: "Harsh Bansal",
    moniker: "HARSH // DEV_CORE",
    role: "Python & Agentic AI Developer",
    educationBrief: "BCA Student @ IPU Delhi",
    bio: "BCA student at IPU Delhi building AI agents in Python — document parsing, automated analysis, and multi-model workflows wired together in n8n. I like problems where the hard part is the plumbing.",
    location: "Delhi, India",
    coordinates: "LAT 28.6139° N // LON 77.2090° E",
    statusBadge: "OPEN TO INTERNSHIPS · PYTHON & AGENTIC AI",
    heroHeading: {
      line1: "ARCHITECTING SYSTEMS.",
      line2: "ENGINEERING INTELLIGENCE.",
      italicAccent: "REFUSING THE ORDINARY.",
    },
    heroTag: "[ HARSH BANSAL // PYTHON & AGENTIC AI DEVELOPER ]",
  },

  contacts: {
    phone: "+91 8595783978",
    email: "harshbansal1145@gmail.com",
    github: "https://github.com/HARSHBANSAL2007",
    linkedin: "https://www.linkedin.com/in/harsh-bansal-5952bzxc798/",
    discord: "https://discord.gg/DQRhm2V4h6",
    discordHandle: "duniya_ka_papa.",
  },

  // The 8 core skills exactly as they appear on the resume.
  primaryTechStack: [
    { name: "Python & AI Development", category: "Core", tag: "Agents, parsing, analysis", icon: "PY" },
    { name: "LangChain & Gen AI Agents", category: "Agentic AI", tag: "Tool calling & chains", icon: "AI" },
    { name: "n8n Workflow Automation", category: "Automation", tag: "Multi-model pipelines", icon: "N8N" },
    { name: "JavaScript, HTML, CSS", category: "Frontend", tag: "This site, hand-built", icon: "WEB" },
    { name: "SQL & Database Management", category: "Data", tag: "MySQL schema & queries", icon: "SQL" },
    { name: "C & C++ Programming", category: "Systems", tag: "CodeSmart Bootcamp", icon: "C++" },
    { name: "Data Structures & Algorithms", category: "Fundamentals", tag: "BCA core coursework", icon: "DSA" },
    { name: "PHP & Web Scripting", category: "Backend", tag: "Server-side scripting", icon: "PHP" },
  ],

  // Featured in the hero. Sentinel began as the "multi-purpose AI model
  // workflow" and is still under active development.
  inProgressProject: {
    tag: "ACTIVE DEVELOPMENT",
    title: "Sentinel - Personal AI Assistant",
    stack: ["LangGraph", "Ollama", "Groq", "Gemini", "FastAPI", "n8n"],
    headline: "Local and online models, one assistant",
    blurb:
      "A personal AI assistant built around my own laptop. Three local models run through Ollama with two online models, from Groq and Gemini, alongside them. It reads the files you attach, and it asks before it does anything that sends, books or deletes.",
    metrics: ["Multi-model routing", "File attachments", "Human-in-the-loop"],
    link: "#projects",
    repo: null,
  },

  projects: [
    {
      id: "kpp-sih",
      tier: "gold",
      order: "01",
      title: "KPP — Farmer Procurement Queue Platform",
      status: "BUILT",
      genre: "Full-Stack · Smart India Hackathon",
      tagline: "Replaces the crowd outside a government procurement centre with a fair digital queue.",
      blurb:
        "Built for Smart India Hackathon. Farmers book a slot at a government produce-procurement centre, get a QR token on check-in, and watch their position update live; staff run the queue and read analytics from a separate dashboard. The queue is deliberately not first-come-first-served — it orders by priority flag, then small and marginal farmers (5 acres or under), then booked slot time, then arrival.",
      stack: ["Node.js", "Express", "PostgreSQL", "WebSocket", "React", "JWT"],
      hue: 215,
      // Private repo — no link until it is made public.
      repo: null,
      features: [
        "Race-safe booking: capacity is checked so a slot cannot be oversold under concurrent requests",
        "Queue state broadcast over WebSocket as a full snapshot, never a diff, so a reconnecting client is always consistent",
        "SMS booking fallback for farmers without a smartphone, and a button-based help tree with no chatbot — every answer is fixed and reviewable",
        "Raw SQL over an ORM for control of the concurrency-sensitive paths, with numbered migrations applied in order",
      ],
    },
    {
      id: "sentinel",
      tier: "gold",
      order: "02",
      title: "Sentinel - Personal AI Assistant",
      status: "ACTIVE",
      genre: "Agentic AI · Local + Online LLMs",
      tagline: "Three models on the laptop, two in the cloud, one assistant.",
      blurb:
        "A personal assistant built around my own machine. Three open models run locally through Ollama, with two online models - from Groq and Gemini - alongside them, and LangGraph coordinates the work between them. It reads files you attach, researches with cited sources, writes documents, and acts on my email and calendar, but it always stops to ask before doing anything that can't be undone.",
      stack: ["Python", "LangGraph", "LangChain", "FastAPI", "Ollama", "Groq", "Gemini", "n8n"],
      hue: 205,
      repo: null,
      // No repository by design - the code is kept on one machine.
      repoNote: { label: "Local only", title: "Kept on a local machine - no public repository" },
      features: [
        "Five models behind one interface: Qwen 2.5 3B, Nemotron Nano and Mistral 7B locally through Ollama, plus online models from Groq and Gemini",
        "LangGraph splits the local work: Qwen routes and calls tools, Nemotron takes reasoning and code, Mistral takes conversation and writing",
        "Attach PDFs, PowerPoint decks and other files for the assistant to read and work from",
        "Searches the web with cited sources, remembers context about the user, and produces Word documents and PowerPoint decks to download",
        "Hands email, calendar and reminders to n8n, and waits for an explicit Yes or No before anything that sends, books or deletes",
        "FastAPI streams replies to a HUD-style interface that shows each step the agent takes, with saved history and per-model health checks",
      ],
    },
    {
      id: "f1-telemetry",
      tier: "red",
      order: "03",
      title: "F1 Telemetry",
      status: "IN DEVELOPMENT",
      genre: "Full-Stack · Motorsport",
      tagline: "Explains a live F1 race - every flag, and why it was shown.",
      // Written from the project's design documentation. It is in the build
      // phase, so the copy describes what it does by design, not a shipped app.
      blurb:
        "A web app for newer Formula 1 fans who can see a flag come out but not what it means. It shows the current flag, explains in plain language why race control raised it, and lists official messages as the race unfolds. The design is documented before the code - problem definition, an IEEE 830-style SRS, data flow diagrams and a use case model - and it is being built in increments, login and the flag display first.",
      stack: ["Python", "Flask", "JavaScript", "MySQL", "HTML/CSS"],
      hue: 0,
      repo: null,
      repoNote: { label: "Not published", title: "No public repository yet" },
      features: [
        "Current flag shown with a plain-language reason, for viewers who don't know the rulebook",
        "Race control messages listed as the race unfolds, refreshed every few seconds",
        "Role-based login: fans follow the race and manage their profile; admins keep race, flag and driver data current",
        "Relational schema for users, races, flags, messages and drivers, with passwords stored hashed",
        "Documented up front: problem definition, SRS, level 0 and level 1 DFDs, and a use case diagram",
      ],
    },
    {
      id: "ppt-agent",
      order: "04",
      title: "AI Presentation Generator",
      status: "BUILT",
      genre: "Agentic AI",
      tagline: "A leader agent that researches a topic, generates imagery, and builds the deck.",
      blurb:
        "A Streamlit app where one orchestrating agent calls two tools: Tavily web search for current material, and an image generation endpoint for slide visuals. Runs on Gemini with model selection at runtime, and loads PDFs and scanned documents through PyMuPDF and OCR so existing material can feed the deck.",
      stack: ["Python", "LangChain", "Gemini", "Groq", "Streamlit", "Tavily", "OCR"],
      hue: 200,
      repo: "https://github.com/HARSHBANSAL2007/PPT-MAKER-",
      features: [
        "Leader agent orchestrating search and image-generation tools",
        "Runtime model selection across Gemini variants",
        "PDF and scanned-document ingestion via PyMuPDF and pytesseract",
        "Generated deck offered as a direct download",
      ],
    },
    {
      id: "resume-agent",
      order: "05",
      title: "AI Resume Generator",
      status: "BUILT",
      genre: "Agentic AI",
      tagline: "Details in, ATS-friendly HTML resume out.",
      blurb:
        "A Streamlit app that turns plain-text details into a styled, ATS-friendly HTML resume you can download. Built on a Gemini agent with a Tavily job-search tool, so the output can be aimed at a specific role, and a prompt-refinement step the model writes for itself and caches.",
      stack: ["Python", "LangChain", "Gemini", "Streamlit", "Tavily"],
      hue: 195,
      // Private repo.
      repo: null,
      features: [
        "Agent with a job-search tool so the resume can target a named role",
        "Self-refining prompt: the model drafts the resume brief once and caches it",
        "Renders the generated HTML inline and offers it as a download",
      ],
    },
    {
      id: "bmw-management",
      order: "06",
      title: "BMW Showroom Management System",
      status: "BUILT",
      genre: "Backend & Databases",
      tagline: "Dealership backend — inventory, customers, and sales.",
      blurb:
        "A Python backend simulating a car dealership: vehicle inventory, customer records, and sales tracking on a MySQL schema. Built to get relational modelling right — foreign keys, joins, and transactions that don't leave the data half-written.",
      stack: ["Python", "MySQL", "Relational Design"],
      hue: 240,
      repo: null,
      features: [
        "Normalised schema across vehicles, customers, and sales records",
        "Transactional writes so a failed sale doesn't corrupt inventory",
        "Indexed lookups across the vehicle catalogue",
      ],
    },
    {
      id: "monar-portfolio",
      order: "07",
      title: "This Portfolio",
      status: "LIVE",
      genre: "Frontend Engineering",
      tagline: "React, Tailwind, and a canvas that renders a rotating icosahedron.",
      blurb:
        "Built from scratch in React and Tailwind on Vite. The background is a hand-written 2D canvas renderer: an icosahedron projected into 2D with its own rotation and perspective maths, plus a drifting particle field, all on one animation loop.",
      stack: ["React 18", "Tailwind CSS", "Vite", "Canvas 2D", "JavaScript"],
      hue: 210,
      repo: "https://github.com/HARSHBANSAL2007/THE-PORTFOLIO",
      features: [
        "3D icosahedron projected to 2D by hand — no three.js, no WebGL",
        "Custom cursor that tracks position with eased interpolation",
        "Respects reduced-motion settings and pauses when the tab is hidden",
      ],
    },
  ],

  /**
   * Skills, grouped so no category looks empty next to the others.
   * Every entry maps to a SKILL_LEVELS key.
   */
  skillsGrouped: [
    {
      category: "01 // LANGUAGES & FOUNDATIONS",
      badge: "LANGUAGES",
      items: [
        { name: "Python 3", level: "primary", desc: "Main language. OOP, file and data handling, API calls, and the agent work below." },
        { name: "JavaScript (ES6+)", level: "primary", desc: "async/await, DOM and canvas APIs, React on the front end and Node on the back." },
        { name: "SQL", level: "proficient", desc: "Raw SQL over an ORM on the KPP platform - joins, indexes, and hand-written migrations." },
        { name: "C", level: "working", desc: "Pointers, structs, manual memory, and the algorithm exercises that come with it." },
        { name: "C++", level: "working", desc: "Classes, STL containers, and the CodeSmart Bootcamp curriculum." },
        { name: "Data Structures & Algorithms", level: "working", desc: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and DP." },
        { name: "PHP", level: "foundational", desc: "Server-side scripting, form handling, and generating pages from a database." },
      ],
    },
    {
      category: "02 // AI & AUTOMATION",
      badge: "AI & AUTOMATION",
      items: [
        { name: "LangChain", level: "proficient", desc: "Agents with tool calling - the orchestration layer behind the presentation generator." },
        { name: "LLM APIs (Gemini, Groq)", level: "proficient", desc: "Calling Gemini and Groq models from code - in the presentation generator and alongside Sentinel's local models." },
        { name: "Prompt Engineering", level: "proficient", desc: "System instructions, personas, and keeping output in a shape code can parse." },
        { name: "n8n Workflow Automation", level: "working", desc: "Event-driven workflows, webhooks, and error handling across multi-step runs." },
        { name: "Document OCR & Parsing", level: "working", desc: "PyMuPDF and pytesseract turning PDFs and scans into text an agent can use." },
        { name: "Pandas & EDA", level: "working", desc: "Loading, cleaning, and summarising datasets." },
        { name: "LangGraph", level: "working", desc: "Graph-based agent flows - routing each request in Sentinel to the model and tools it needs." },
        { name: "Ollama & Local LLMs", level: "working", desc: "Serving Qwen, Nemotron and Mistral models locally on a laptop - the core of Sentinel." },
      ],
    },
    {
      category: "03 // BACKEND & DATA",
      badge: "BACKEND & DATA",
      items: [
        { name: "Node.js & Express", level: "proficient", desc: "Layered API - routes to controllers to services to models - with middleware for auth and validation." },
        { name: "FastAPI", level: "working", desc: "Async Python APIs with streamed responses and health checks - Sentinel's backend." },
        { name: "PostgreSQL", level: "proficient", desc: "Schema design, numbered migrations, and race-safe writes so a slot can't be oversold." },
        { name: "MySQL", level: "proficient", desc: "Relational modelling, foreign keys, and transactional integrity on the showroom backend." },
        { name: "WebSocket (ws)", level: "working", desc: "Live queue updates broadcast as full snapshots, so a reconnecting client is never stale." },
        { name: "JWT Authentication", level: "working", desc: "Protected admin routes and session handling on the KPP dashboard." },
        { name: "REST APIs & Webhooks", level: "working", desc: "HTTP verbs, JSON payloads, rate limiting, and an inbound SMS webhook." },
      ],
    },
    {
      category: "04 // WEB & INTERFACE",
      badge: "WEB & INTERFACE",
      items: [
        { name: "React", level: "proficient", desc: "Components, hooks, context, and routing. Two React apps in KPP plus this site." },
        { name: "HTML5", level: "proficient", desc: "Semantic structure, accessible markup, and forms that work without JavaScript." },
        { name: "CSS3", level: "proficient", desc: "Flexbox, Grid, keyframe animation, design tokens, and mobile-first layouts." },
        { name: "Streamlit", level: "working", desc: "Fast Python UIs for the AI tools - sidebar inputs, spinners, and file downloads." },
      ],
    },
  ],

  // No invented authorisation codes. Issuer is what it is; add dates when handy.
  certifications: [
    { title: "SIH 2026 Internal Hackathon - Participation", issuer: "Innovage Tech, IITM Janakpuri · Sep 2026" },
    { title: "Gen AI & Agentic AI Certification", issuer: "Certification programme" },
    { title: "C/C++ CodeSmart Bootcamp", issuer: "CodeSmart" },
    { title: "Be10x AI Productivity Workshop", issuer: "Be10x" },
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Guru Gobind Singh Indraprastha University (IPU), Delhi",
      period: "2023 — Present",
      status: "CURRENTLY ENROLLED",
      details: "Core software engineering, data structures, algorithms, and database systems.",
    },
    {
      degree: "Senior Secondary (Class 12, Commerce)",
      institution: "Vivekanand School, Anand Vihar, Delhi",
      period: "Completed",
      status: "81%",
      details: "Commerce stream with mathematics.",
    },
  ],
};
