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
      id: "ai-workflow",
      order: "01",
      title: "Multi-Purpose AI Model Workflow",
      status: "IN PROGRESS",
      genre: "Orchestration & Automation",
      tagline: "Route one request across many models without losing context.",
      blurb:
        "An automation framework built in n8n that connects several AI inference models behind one entry point. Handles the data pipeline between them so context survives the hand-off from one model to the next.",
      stack: ["n8n", "Python", "AI APIs", "JSON Pipelines"],
      hue: 220,
      highlight: true,
      features: [
        "Routes prompts to a fast or a deeper model depending on the request",
        "Carries state across multi-step runs instead of re-sending everything",
        "Retries a failed node rather than dropping the whole workflow",
      ],
    },
    {
      id: "agentic-suite",
      order: "02",
      title: "Autonomous AI Agents Suite",
      status: "BUILT",
      genre: "Agentic AI & Document Intelligence",
      tagline: "Agents that generate decks, read documents, and analyse data.",
      blurb:
        "A set of Python agents built on LangChain: one drafts PowerPoint decks, one parses resumes into structured fields, and one runs exploratory analysis on financial data. OCR feeds the parsing agent so scanned documents work too.",
      stack: ["Python", "LangChain", "OCR", "Pandas"],
      hue: 200,
      highlight: false,
      features: [
        "Generates a PowerPoint deck from raw notes or research text",
        "OCR pipeline that turns scanned documents into parseable text",
        "Runs EDA on a dataset and reports what it found, driven by prompts",
      ],
    },
    {
      id: "bmw-management",
      order: "03",
      title: "BMW Showroom Management System",
      status: "BUILT",
      genre: "Backend & Databases",
      tagline: "Dealership backend — inventory, customers, and sales.",
      blurb:
        "A Python backend simulating a car dealership: vehicle inventory, customer records, and sales tracking on a MySQL schema. Built to get relational modelling right — foreign keys, joins, and transactions that don't leave the data half-written.",
      stack: ["Python", "MySQL", "Relational Design"],
      hue: 240,
      highlight: false,
      features: [
        "Normalised schema across vehicles, customers, and sales records",
        "Transactional writes so a failed sale doesn't corrupt inventory",
        "Indexed lookups over the vehicle catalogue",
      ],
    },
    {
      id: "monar-portfolio",
      order: "04",
      title: "This Portfolio",
      status: "LIVE",
      genre: "Frontend Engineering",
      tagline: "React, Tailwind, and a canvas that renders a rotating icosahedron.",
      blurb:
        "Built from scratch in React and Tailwind on Vite. The background is a hand-written 2D canvas renderer: an icosahedron projected into 2D with its own rotation and perspective maths, plus a drifting particle field, all on one animation loop.",
      stack: ["React 18", "Tailwind CSS", "Vite", "Canvas 2D", "JavaScript"],
      hue: 210,
      highlight: false,
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
        { name: "JavaScript (ES6+)", level: "proficient", desc: "async/await, DOM and canvas APIs, React components. This site is the working example." },
        { name: "C", level: "working", desc: "Pointers, structs, manual memory, and the algorithm exercises that come with it." },
        { name: "C++", level: "working", desc: "Classes, STL containers, and the CodeSmart Bootcamp curriculum." },
        { name: "PHP", level: "foundational", desc: "Server-side scripting, form handling, and generating pages from a database." },
      ],
    },
    {
      category: "02 // AI & AUTOMATION",
      badge: "AI & AUTOMATION",
      items: [
        { name: "LangChain", level: "proficient", desc: "Chains, tool calling, and document loaders — the framework behind the agents suite." },
        { name: "n8n Workflow Automation", level: "proficient", desc: "Event-driven workflows, webhooks, and error handling across multi-step runs." },
        { name: "Prompt Engineering", level: "proficient", desc: "System instructions, few-shot examples, and keeping output in a shape code can parse." },
        { name: "LLM APIs & Multi-Model Routing", level: "working", desc: "Calling different model endpoints and passing context between them." },
        { name: "Document OCR & Parsing", level: "working", desc: "Turning scanned and unstructured documents into structured, queryable fields." },
      ],
    },
    {
      category: "03 // WEB & INTERFACE",
      badge: "WEB & INTERFACE",
      items: [
        { name: "HTML5", level: "proficient", desc: "Semantic structure, accessible markup, and forms that work without JavaScript." },
        { name: "CSS3", level: "proficient", desc: "Flexbox, Grid, keyframe animation, and mobile-first responsive layouts." },
        { name: "React", level: "proficient", desc: "Components, hooks, and state. Built this site in React 18 on Vite." },
        { name: "Tailwind CSS", level: "working", desc: "Utility-first styling with a custom theme — the palette and shadows on this page." },
      ],
    },
    {
      category: "04 // DATA & FOUNDATIONS",
      badge: "DATA & FOUNDATIONS",
      items: [
        { name: "MySQL & SQL", level: "proficient", desc: "Schema design, joins, foreign keys, and transactions. Backbone of the showroom project." },
        { name: "Data Structures & Algorithms", level: "working", desc: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and DP." },
        { name: "Pandas & EDA", level: "working", desc: "Loading, cleaning, and summarising datasets; the analysis half of the agents suite." },
        { name: "REST APIs & Webhooks", level: "working", desc: "HTTP verbs, JSON payloads, auth headers, and receiving callbacks from services." },
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
