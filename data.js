// Portfolio Data Configuration for Salik Suwal
// Bachelor of Computer Engineering (BE Computer)

const PORTFOLIO_DATA = {
  personal: {
    name: "Salik Suwal",
    shortName: "Salik",
    title: "Computer Engineering Student & Aspiring Software Architect",
    tagline: "Exploring the bridge between low-level hardware & high-level software intelligence.",
    status: "Starting BE Computer Engineering",
    availability: "Open to collaborations, open-source & internships",
    location: "Nepal",
    email: "saliksuwal.contact@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    discord: "salik_suwal#0000",
    bio: [
      "Hello, World! I am Salik Suwal, an incoming Computer Engineering undergraduate passionate about understanding how computing works from silicon to software.",
      "My journey is driven by deep curiosity in systems programming, data structures, low-level architecture (C/C++), intelligent algorithms, and modern full-stack web technologies.",
      "As I embark on my BE Computer degree, I aim to build high-performance tools, contribute to impactful open-source projects, and architect solutions that solve real-world problems."
    ],
    stats: [
      { label: "Engineering Degree", value: "BE Computer" },
      { label: "Core Focus", value: "Systems & Software" },
      { label: "Projects Built", value: "8+" },
      { label: "Learning Streak", value: "Daily 💻" }
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        icon: "code-2",
        items: [
          { name: "C / C++", level: 85, badge: "Core Focus", icon: "cpp", desc: "Memory management, pointers, OOP, STL & algorithms" },
          { name: "Python", level: 80, badge: "Versatile", icon: "python", desc: "Automation, data analysis, script crafting & AI exploration" },
          { name: "JavaScript (ES6+)", level: 82, badge: "Frontend/Backend", icon: "javascript", desc: "Modern async JS, DOM manipulation & web interfaces" },
          { name: "SQL", level: 75, badge: "Database", icon: "database", desc: "Relational schema design, querying & indexing" }
        ]
      },
      {
        id: "core-cs",
        name: "Core CS & Engineering",
        icon: "cpu",
        items: [
          { name: "Data Structures & Algorithms", level: 80, badge: "Essential", icon: "binary", desc: "Trees, Graphs, Sorting, Time/Space Complexity" },
          { name: "Computer Architecture", level: 75, badge: "Hardware-Software", icon: "microchip", desc: "Logic gates, ALU, CPU cycles, Assembly basics" },
          { name: "Object Oriented Design", level: 82, badge: "Design Principles", icon: "box", desc: "Encapsulation, Polymorphism, Design Patterns" },
          { name: "Operating Systems Basics", level: 70, badge: "Systems", icon: "terminal", desc: "Processes, Threads, Memory allocation, CLI mastery" }
        ]
      },
      {
        id: "web-dev",
        name: "Web & Full-Stack",
        icon: "globe",
        items: [
          { name: "HTML5 & Modern CSS3", level: 90, badge: "Semantic & Responsive", icon: "layout", desc: "Flexbox, CSS Grid, animations & glassmorphism" },
          { name: "Tailwind CSS", level: 88, badge: "Rapid UI", icon: "palette", desc: "Utility-first modern interface development" },
          { name: "Node.js & Express", level: 74, badge: "Backend Basics", icon: "server", desc: "REST APIs, Middleware, JSON routing" },
          { name: "RESTful APIs", level: 80, badge: "Integration", icon: "network", desc: "Client-server architecture & API consumption" }
        ]
      },
      {
        id: "tools",
        name: "Tools, Embedded & DevOps",
        icon: "wrench",
        items: [
          { name: "Git & GitHub", level: 85, badge: "Version Control", icon: "git-branch", desc: "Branching workflows, commits & collaboration" },
          { name: "Linux / Bash CLI", level: 78, badge: "Dev Environment", icon: "terminal", desc: "Shell scripting, file management & tooling" },
          { name: "VS Code & Vim", level: 88, badge: "Productivity", icon: "file-code", desc: "Advanced extensions, shortcuts & configurations" },
          { name: "Arduino / Embedded Concept", level: 70, badge: "Hardware", icon: "cpu", desc: "Microcontroller logic, sensor interfacing basics" }
        ]
      }
    ]
  },

  roadmap: [
    {
      semester: "Year 1: The Foundations",
      phase: "Semesters 1 & 2",
      status: "current",
      statusLabel: "In Progress / Starting 🚀",
      topics: [
        "C Programming & Computational Problem Solving",
        "Engineering Mathematics, Calculus & Linear Algebra",
        "Basic Electronics & Digital Logic Design (Boolean Algebra, Gates)",
        "Physics of Computing & Semiconductor fundamentals",
        "Object-Oriented Programming (C++) & Memory Internals"
      ],
      goal: "Establish rock-solid problem-solving fundamentals in C/C++ and digital electronics."
    },
    {
      semester: "Year 2: Core Engineering & Systems",
      phase: "Semesters 3 & 4",
      status: "upcoming",
      statusLabel: "Upcoming",
      topics: [
        "Data Structures & Advanced Algorithm Analysis (Trees, Graphs, DP)",
        "Computer Organization & Architecture (Microprocessors 8085/8086)",
        "Discrete Mathematics & Graph Theory",
        "Database Management Systems (DBMS) & Relational Design",
        "Operating System Concepts & Shell Programming"
      ],
      goal: "Master data manipulation at scale and understand the complete execution pipeline."
    },
    {
      semester: "Year 3: Advanced Architectures & Specialization",
      phase: "Semesters 5 & 6",
      status: "upcoming",
      statusLabel: "Future Horizon",
      topics: [
        "Computer Networks & Protocol Stacks (TCP/IP, Sockets)",
        "Software Engineering Principles & System Architecture",
        "Microcontroller Systems, Embedded I/O & Real-Time OS",
        "Artificial Intelligence, Machine Learning & Computer Vision",
        "Minor Engineering Project / Hardware-Software Integration"
      ],
      goal: "Engineer complex integrated software systems and intelligent algorithms."
    },
    {
      semester: "Year 4: Culmination, Research & Industry Capstone",
      phase: "Semesters 7 & 8",
      status: "upcoming",
      statusLabel: "Future Horizon",
      topics: [
        "Distributed Systems, Cloud Computing & Cyber Security",
        "Compiler Design & Formal Language Theory",
        "Major Capstone Engineering Project",
        "Industry Internship & Open Source Research Publications"
      ],
      goal: "Graduate as a world-class Computer Engineer ready for high-impact innovation."
    }
  ],

  projects: [
    {
      id: "algo-matrix",
      title: "AlgoMatrix: Interactive Algorithm & Data Structure Visualizer",
      category: "Systems & Algorithms",
      featured: true,
      tagline: "Visual step-by-step execution of sorting, graph search, and tree traversal algorithms.",
      description: "An interactive, web-based visualizer engineered to demonstrate how memory arrays, pointers, and graph node traversals operate in real time. Supports custom input arrays, step-by-step playback, comparison count tracking, and time-complexity metrics.",
      technologies: ["JavaScript (ES6+)", "HTML5 Canvas", "Tailwind CSS", "Algorithm Analysis"],
      github: "https://github.com",
      demo: "#",
      stats: { "Algorithms": "10+", "Frame Rate": "60 FPS", "Complexity Analysis": "Live" },
      highlights: [
        "Interactive canvas animation with customizable execution speed",
        "Visualizes QuickSort, MergeSort, Dijkstra's Shortest Path, and Binary Search Trees",
        "Memory array swap and pointer tracking panel"
      ]
    },
    {
      id: "cyber-terminal-os",
      title: "Salik OS: Web-Based Cyber Terminal & Command Shell",
      category: "Tools & Systems",
      featured: true,
      tagline: "A retro-futuristic virtual terminal emulator running in the browser.",
      description: "A customized browser-based UNIX-like shell emulator featuring interactive command parsing, history buffer, auto-complete, customized theme palettes, and built-in interactive developer utility commands.",
      technologies: ["Vanilla JS", "Bash Syntax Engine", "CSS Grid", "Web Audio API"],
      github: "https://github.com",
      demo: "#",
      stats: { "Commands": "18+", "Themes": "4 Cyber Modes", "SFX": "Web Audio" },
      highlights: [
        "Real-time command evaluation with flag parsing (e.g., ls -la, cat, matrix)",
        "Synthesized sci-fi keyboard feedback using Web Audio API",
        "History navigation via ArrowUp / ArrowDown keys"
      ]
    },
    {
      id: "smart-campus-hub",
      title: "CampusConnect: Engineering Academic Portal Concept",
      category: "Web Applications",
      featured: true,
      tagline: "Centralized resource management, syllabus tracking, and study tracker for engineering students.",
      description: "A clean, responsive portal designed for BE Computer students to organize semester syllabi, track assignment deadlines, store reference PDF notes, and calculate GPA milestones with intuitive visualization graphs.",
      technologies: ["HTML5", "Tailwind CSS", "Local Storage API", "Modern JS"],
      github: "https://github.com",
      demo: "#",
      stats: { "Modules": "Syllabus + GPA + Notes", "Responsive": "100%", "Storage": "Offline Ready" },
      highlights: [
        "Semester-wise course breakdown with interactive completion checkboxes",
        "Instant GPA / SGPA calculator based on engineering grading criteria",
        "Dark glassmorphism user interface designed for night study sessions"
      ]
    },
    {
      id: "cpp-cli-game-engine",
      title: "NeonQuest: C++ 2D ASCII Game & Physics Engine",
      category: "C / C++ & Core",
      featured: false,
      tagline: "Object-oriented modular terminal game engine with custom physics and collision detection.",
      description: "A terminal-based engine written in C++ illustrating OOP inheritance, polymorphic entities, grid collision detection, state machines, and high-score serialization using file streams.",
      technologies: ["C++17", "OOP Architecture", "File I/O", "Terminal ANSI Graphics"],
      github: "https://github.com",
      demo: "#",
      stats: { "Language": "C++17", "Paradigm": "OOP", "Architecture": "State Machine" },
      highlights: [
        "Clean separation of Game Loop, Render Pipeline, and Input Controller",
        "Custom collision math and velocity vector handling",
        "Portable across Windows Command Prompt and Linux Terminal"
      ]
    },
    {
      id: "iot-weather-monitor",
      title: "AeroSense: Embedded Microcontroller Telemetry Node",
      category: "Hardware & IoT",
      featured: false,
      tagline: "Microcontroller telemetry logger with real-time sensor visualization dashboard.",
      description: "An IoT monitoring prototype simulating sensor data acquisition (Temperature, Humidity, Pressure) via microcontrollers, formatting packets via UART serial stream, and rendering telemetry on a live browser dashboard.",
      technologies: ["C / Embedded C", "Arduino / ESP32 Logic", "Serial Communication", "WebSocket Dashboard"],
      github: "https://github.com",
      demo: "#",
      stats: { "Sensors": "DHT22 / BMP280", "Protocol": "UART / JSON", "Update Rate": "1000ms" },
      highlights: [
        "Efficient C sensor sampling with interrupt handling",
        "Real-time telemetry stream display with threshold alerts",
        "Hardware-to-Software integration prototype"
      ]
    }
  ],

  labExperiments: [
    {
      id: "matrix-rain",
      title: "Matrix Digital Rain",
      icon: "binary",
      description: "High-speed falling Japanese Katakana and green code streams rendered dynamically on canvas.",
      actionLabel: "Launch Matrix Rain"
    },
    {
      id: "particle-gravity",
      title: "Particle Physics Sandbox",
      icon: "atom",
      description: "Interactive particle cosmos that reacts to cursor gravity wells, repulsion fields, and velocity shifts.",
      actionLabel: "Attract Particles"
    },
    {
      id: "synth-audio",
      title: "Web Audio Synthesizer",
      icon: "volume-2",
      description: "Futuristic sci-fi UI sound synthesizer generating custom frequencies, harmonics, and laser tones on click.",
      actionLabel: "Play Sci-Fi Chime"
    }
  ],

  terminalHelp: [
    { cmd: "help", desc: "List all available terminal commands" },
    { cmd: "about", desc: "Display Salik's background and engineering vision" },
    { cmd: "skills", desc: "Print technical skills arsenal and proficiency levels" },
    { cmd: "projects", desc: "Showcase featured computer engineering projects" },
    { cmd: "roadmap", desc: "View the 4-year BE Computer Engineering roadmap" },
    { cmd: "education", desc: "Display university, degree & academic milestones" },
    { cmd: "contact", desc: "Get direct contact details & social channels" },
    { cmd: "theme <neon|space|matrix|minimal>", desc: "Change the active portfolio visual theme" },
    { cmd: "matrix", desc: "Toggle full-screen cyber matrix rain overlay" },
    { cmd: "sfx", desc: "Toggle futuristic UI sound effects on/off" },
    { cmd: "sudo hire-me", desc: "Execute automated interview invitation sequence" },
    { cmd: "clear", desc: "Clear the terminal output screen" },
    { cmd: "exit", desc: "Close the interactive terminal window" }
  ]
};
