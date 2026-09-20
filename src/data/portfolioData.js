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

  inProgressProject: {
    tag: "IN PROGRESS",
    title: "Multi-Purpose AI Model Workflow Framework",
    stack: ["n8n", "Python", "AI APIs", "LangChain"],
    headline: "One pipeline, many models",
    blurb:
      "An n8n-based framework that routes a request to whichever AI model suits it, then keeps context consistent as the job moves between them. The interesting part isn't the models — it's passing state cleanly across steps that each want a different input shape.",
    // What I'm actually building, not benchmark claims.
    metrics: ["Prompt routing", "Context hand-off", "Retry on failure"],
    link: "#projects",
    repo: null,
  },

  // Facts anyone can check on this page.
  metrics: [
    { label: "CORE LANGUAGES", value: "5", sub: "Python, JS, C, C++, PHP" },
    { label: "PROJECTS BUILT", value: "4", sub: "1 in progress" },
    { label: "CERTIFICATIONS", value: "5", sub: "Gen AI, C/C++, more" },
    { label: "BCA @ IPU DELHI", value: "2023", sub: "Currently enrolled" },
  ],

  projects: [
    {
      id: "kpp-sih",
      order: "01",
      title: "KPP — Farmer Procurement Queue Platform",
      status: "BUILT",
      genre: "Full-Stack · Smart India Hackathon",
      tagline: "Replaces the crowd outside a government procurement centre with a fair digital queue.",
      blurb:
        "Built for Smart India Hackathon. Farmers book a slot at a government produce-procurement centre, get a QR token on check-in, and watch their position update live; staff run the queue and read analytics from a separate dashboard. The queue is deliberately not first-come-first-served — it orders by priority flag, then small and marginal farmers (5 acres or under), then booked slot time, then arrival.",
      stack: ["Node.js", "Express", "PostgreSQL", "WebSocket", "React", "JWT", "Jest"],
      hue: 215,
      highlight: true,
      // Private repo — no link until it is made public.
      repo: null,
      features: [
        "Race-safe booking: capacity is checked so a slot cannot be oversold under concurrent requests",
        "Queue state broadcast over WebSocket as a full snapshot, never a diff, so a reconnecting client is always consistent",
        "SMS booking fallback for farmers without a smartphone, and a button-based help tree with no chatbot — every answer is fixed and reviewable",
        "Raw SQL over an ORM for control of the concurrency-sensitive paths, with numbered migrations applied in order",
        "Jest + Supertest integration suite including a 50-farmer concurrent booking simulation",
      ],
    },
    {
      id: "ai-workflow",
      order: "02",
      title: "Multi-Purpose AI Model Workflow",
      status: "IN PROGRESS",
      genre: "Orchestration & Automation",
      tagline: "Route one request across many models without losing context.",
      blurb:
        "An automation framework built in n8n that connects several AI inference models behind a single entry point, handling the data pipeline between them so context survives the hand-off from one model to the next.",
      stack: ["n8n", "Python", "AI APIs", "JSON Pipelines"],
      hue: 220,
      highlight: true,
      repo: null,
      features: [
        "Routes prompts to a fast or a deeper model depending on the request",
        "Carries state across multi-step runs instead of re-sending everything",
        "Retries a failed node rather than dropping the whole workflow",
      ],
    },
    {
      id: "ppt-agent",
      order: "03",
      title: "AI Presentation Generator",
      status: "BUILT",
      genre: "Agentic AI",
      tagline: "A leader agent that researches a topic, generates imagery, and builds the deck.",
      blurb:
        "A Streamlit app where one orchestrating agent calls two tools: Tavily web search for current material, and an image generation endpoint for slide visuals. Runs on Gemini with model selection at runtime, and loads PDFs and scanned documents through PyMuPDF and OCR so existing material can feed the deck.",
      stack: ["Python", "LangChain", "Gemini", "Groq", "Streamlit", "Tavily", "OCR"],
      hue: 200,
      highlight: false,
      repo: "https://github.com/HARSHBANSAL2007/PPT-MAKER-",
      features: [
        "Leader agent orchestrating search and image-generation tools",
        "Runtime model selection across Gemini variants",
        "PDF and scanned-document ingestion via PyMuPDF and pytesseract",
        "Generated deck offered as a direct download",
      ],
    },
    {
      id: "bmw-management",
      order: "04",
      title: "BMW Showroom Management System",
      status: "BUILT",
      genre: "Backend & Databases",
      tagline: "Dealership backend — inventory, customers, and sales.",
      blurb:
        "A Python backend simulating a car dealership: vehicle inventory, customer records, and sales tracking on a MySQL schema. Built to get relational modelling right — foreign keys, joins, and transactions that don't leave the data half-written.",
      stack: ["Python", "MySQL", "Relational Design"],
      hue: 240,
      highlight: false,
      repo: null,
      features: [
        "Normalised schema across vehicles, customers, and sales records",
        "Transactional writes so a failed sale doesn't corrupt inventory",
        "Indexed lookups across the vehicle catalogue",
      ],
    },
    {
      id: "monar-portfolio",
      order: "05",
      title: "This Portfolio",
      status: "LIVE",
      genre: "Frontend Engineering",
      tagline: "React, Tailwind, and a canvas that renders a rotating icosahedron.",
      blurb:
        "Built from scratch in React and Tailwind on Vite. The background is a hand-written 2D canvas renderer: an icosahedron projected into 2D with its own rotation and perspective maths, plus a drifting particle field, all on one animation loop.",
      stack: ["React 18", "Tailwind CSS", "Vite", "Canvas 2D", "JavaScript"],
      hue: 210,
      highlight: false,
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
      category: "01 // LANGUAGES",
      badge: "LANGUAGES",
      items: [
        { name: "Python 3", level: "primary", desc: "Main language. OOP, file and data handling, API calls, and the agent work below." },
        { name: "JavaScript (ES6+)", level: "primary", desc: "async/await, DOM and canvas APIs, React on the front end and Node on the back." },
        { name: "SQL", level: "proficient", desc: "Raw SQL over an ORM on the KPP platform — joins, indexes, and hand-written migrations." },
        { name: "C", level: "working", desc: "Pointers, structs, manual memory, and the algorithm exercises that come with it." },
        { name: "C++", level: "working", desc: "Classes, STL containers, and the CodeSmart Bootcamp curriculum." },
        { name: "PHP", level: "foundational", desc: "Server-side scripting, form handling, and generating pages from a database." },
      ],
    },
    {
      category: "02 // AI & AUTOMATION",
      badge: "AI & AUTOMATION",
      items: [
        { name: "LangChain", level: "proficient", desc: "Agents with tool calling — the orchestration layer behind the presentation generator." },
        { name: "LLM APIs (Gemini, Groq)", level: "proficient", desc: "Calling model endpoints with runtime model selection and prompt-shaped output." },
        { name: "Prompt Engineering", level: "proficient", desc: "System instructions, personas, and keeping output in a shape code can parse." },
        { name: "n8n Workflow Automation", level: "working", desc: "Event-driven workflows, webhooks, and error handling across multi-step runs." },
        { name: "Document OCR & Parsing", level: "working", desc: "PyMuPDF and pytesseract turning PDFs and scans into text an agent can use." },
      ],
    },
    {
      category: "03 // WEB & INTERFACE",
      badge: "WEB & INTERFACE",
      items: [
        { name: "React", level: "proficient", desc: "Components, hooks, context, and routing. Two React apps in KPP plus this site." },
        { name: "HTML5", level: "proficient", desc: "Semantic structure, accessible markup, and forms that work without JavaScript." },
        { name: "CSS3", level: "proficient", desc: "Flexbox, Grid, keyframe animation, design tokens, and mobile-first layouts." },
        { name: "Tailwind CSS", level: "working", desc: "Utility-first styling with a custom theme — the palette and shadows on this page." },
        { name: "Streamlit", level: "working", desc: "Fast Python UIs for the AI tools — sidebar inputs, spinners, and file downloads." },
      ],
    },
    {
      category: "04 // BACKEND & REAL-TIME",
      badge: "BACKEND & REAL-TIME",
      items: [
        { name: "Node.js & Express", level: "proficient", desc: "Layered API — routes to controllers to services to models — with middleware for auth and validation." },
        { name: "PostgreSQL", level: "proficient", desc: "Schema design, numbered migrations, and race-safe writes so a slot can't be oversold." },
        { name: "WebSocket (ws)", level: "working", desc: "Live queue updates broadcast as full snapshots, so a reconnecting client is never stale." },
        { name: "JWT Authentication", level: "working", desc: "Protected admin routes and session handling on the KPP dashboard." },
        { name: "REST APIs & Webhooks", level: "working", desc: "HTTP verbs, JSON payloads, rate limiting, and an inbound SMS webhook." },
      ],
    },
    {
      category: "05 // DATA & FOUNDATIONS",
      badge: "DATA & FOUNDATIONS",
      items: [
        { name: "MySQL", level: "proficient", desc: "Relational modelling, foreign keys, and transactional integrity on the showroom backend." },
        { name: "Jest & Supertest", level: "working", desc: "Integration tests against a fresh migrated database, including a 50-user concurrency simulation." },
        { name: "Data Structures & Algorithms", level: "working", desc: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and DP." },
        { name: "Pandas & EDA", level: "working", desc: "Loading, cleaning, and summarising datasets." },
      ],
    },
  ],

  // No invented authorisation codes. Issuer is what it is; add dates when handy.
  certifications: [
    { title: "Gen AI & Agentic AI Certification", issuer: "Certification programme" },
    { title: "C/C++ CodeSmart Bootcamp", issuer: "CodeSmart" },
    { title: "Be10x AI Productivity Workshop", issuer: "Be10x" },
    { title: "Ministry of HRM Certificate", issuer: "Government of India" },
    { title: "Narcotics Control Bureau Certification", issuer: "Narcotics Control Bureau" },
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
