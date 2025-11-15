import { Github, Linkedin, Mail, Phone, Briefcase, Smartphone, Heart, Code, Database, Server, Component, PenTool, LayoutTemplate, BrainCircuit, Bot, GitBranch, Terminal, Twitter, MessageCircle } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Abdullah Balfaqih",
  title: "IT Specialist | Full Stack Engineer | Front-End & Back-End Developer",
    location: "Seiyun, Hadhramaut, Yemen",
  email: "abdullahbalfaqih0@gmail.com",
  phone: "+967776097665",
  whatsapp: "967776097665", // WhatsApp number without '+' or special characters
  cvUrl: "/cv", // IMPORTANT: This now points to the internal CV page
  socials: [
    { name: "WhatsApp", url: "https://wa.me/967776097665", icon: MessageCircle },
    { name: "Twitter", url: "https://x.com/aqih0", icon: Twitter },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abdullah-balfaqih-31b006303", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/AbdullahBalfaqih", icon: Github },
    { name: "Email", url: "mailto:abdullahbalfaqih0@gmail.com", icon: Mail },
  ],
  summary: "As a detail-oriented IT graduate, I specialize in full-stack development, building scalable web and desktop applications with a focus on efficient and reliable solutions."
};

export const PROFESSIONAL_EXPERIENCE = [
  {
    role: "Freelance Web Developer",
    company: "Shaliha Platform",
    location: "Seiyun, Hadhramaut, Yemen",
    period: "Jul 2023 – Aug 2023",
    jobType: "Full Time",
    description: [
      "Developed a full-stack, scalable web booking platform for villas, pools, and apartments, integrating property management and reporting features with a user-friendly interface.",
      "Ensured full mobile responsiveness and SEO-optimized structure, enhancing accessibility and search visibility.",
      "Delivered efficient and reliable solutions, reducing booking errors and saving operational time, while boosting client satisfaction.",
    ],
    icon: Briefcase,
    url: "https://www.shaliha.website/"
  },
  {
    role: "Freelance Software Developer",
    company: "Crisper Restaurant",
    location: "Seiyun, Hadhramaut, Yemen",
    period: "Nov 2023 – Feb 2024",
    jobType: "Full Time",
    description: [
      "Developed a full-stack desktop restaurant management system (mini ERP) with POS, inventory, HR, and accounting modules.",
      "Developed and integrated an online ordering website with real-time RESTful APIs for order processing, payments, and reporting.",
      "Optimized operations, reducing losses, improving reliability, and boosting customer satisfaction.",
    ],
    icon: Briefcase,
    url: "https://www.crisper.food/"
  },
  {
    role: "Freelance Web Developer",
    company: "Global Truck Logistics",
    location: "Remote",
    period: "Sep 2023 – Oct 2023",
    jobType: "Full Time",
    description: [
      "Designed and implemented a comprehensive logistics management system with role-based dashboards, simplifying workflow, improving operational visibility, and enhancing user access control.",
      "Developed modules for parcel tracking, payroll, branch operations, and expense management, integrating real-time data to streamline processes.",
      "Enhanced coordination, delivery accuracy, and overall efficiency across multiple branches, reducing errors and improving service reliability.",
    ],
    icon: Briefcase,
    url: "#"
  },
  {
    role: "Web Developer",
    company: "Community Cleanup Platform",
    location: "Remote",
    period: "May 2023 – Jun 2023",
    jobType: "Part Time",
    description: [
      "Developed a full-stack web platform for reporting and managing local waste issues, providing an accessible and interactive interface for community engagement.",
      "Implemented features for task reporting, status tracking, and data visualization, enabling efficient monitoring and faster resolution of environmental issues.",
      "Contributed to community impact by streamlining waste reporting, increasing responsiveness, and promoting civic participation.",
    ],
    icon: Briefcase,
    url: "https://cleanyourhood.homes/dashboard"
  },
  {
    role: "Mobile App Developer",
    company: "Aqary App",
    location: "Remote",
    period: "Mar 2023 - Apr 2023",
    jobType: "Part Time",
    description: [
      "Developed a cross-platform mobile application for real estate listings and property management.",
      "Implemented features for property search, filtering, and agent communication.",
    ],
    icon: Smartphone,
    url: "#"
  },
  {
    role: "Web Developer",
    company: "Nabdh Al-Hayat",
    location: "Remote",
    period: "Jan 2023 - Feb 2023",
    jobType: "Part Time",
    description: [
      "Created a website for blood donations and campaign management.",
      "Included features for donor registration, appointment scheduling, and campaign tracking.",
    ],
    icon: Heart,
    url: "#"
  },
];

export const EDUCATION_TRAINING = {
  degree: {
    institution: "Seiyun University, Seiyun, Yemen",
    title: "Bachelor’s Degree in Information Technology",
    graduation: "Graduated: 2024",
    gpa: "GPA: Very Good",
    project: "Graduation Project – “Mroor Care”: Developed a smart traffic management and appointment booking system in collaboration with the Traffic Department of Hadhramaut. The system streamlined scheduling for driver’s license renewals, vehicle inspections, and other services, reducing overcrowding and wait times."
  },
  internship: {
    role: "Python Developer Intern",
    company: "Odoo Systems",
    period: "Mar 2024 – May 2024",
    description: [
      "Developed a custom car archiving module using Python and the Odoo framework, contributing to ERP system functionality and improving data management workflows.",
      "Gained hands-on experience in ERP systems, module integration, and database management.",
    ],
    githubLink: "#",
  },
  certifications: [
    { name: "Google Prompting Essentials", issuer: "Google", date: "2025", description: "Awarded for completing Google's essential training on AI prompt engineering." },
    { name: "IT Service Management & ITIL", issuer: "Alison", date: "2025", description: "Certified in ITIL Level 4, demonstrating expertise in IT service management frameworks." },
    { name: "Onex Pro ERP System (v7.5)", issuer: "Yemen Soft", date: "2025", description: "Recognized for proficiency in the Onex Pro ERP system for enterprise resource planning." },
    { name: "Search Engine Optimization", issuer: "Edraak", date: "2025", description: "Completed an in-depth course on SEO strategies and best practices." },
    { name: "Various Professional Courses", issuer: "Exceed Institute, Sana'a", date: "2020", description: "Completed several professional development courses at Exceed Institute in Sana'a." },
    { name: "Project Management Fundamentals", issuer: "Various Institutes", date: "2017", description: "Acquired foundational knowledge in project management methodologies." },
  ],
};

export const SKILLS = {
  technical: [
    "Python", "C#", "C++", "TypeScript", "HTML", "CSS", "JavaScript",
    "ASP.NET", "Next.js", "React", "MS SQL Server", "Oracle DB", "PostgreSQL",
    "Firebase", "Supabase", "Odoo ERP", "n8n", "API Integration", "Firebase Hosting",
    "Docker", "GitHub", "Entity Framework", "Adobe Photoshop", "Adobe Illustrator", "Data Analysis"
  ],
  soft: [
    "Critical Thinking", "Problem Solving", "Adaptability", "Time Management",
    "Collaboration", "Teamwork", "Strong Leadership", "Communication"
  ],
  languages: [
    { name: "Arabic", proficiency: "Native" },
    { name: "English", proficiency: "Proficient" }
  ]
};

export const PROJECTS = [
    {
      id: "shaliha-platform",
      name: "Shaliha Booking Platform",
      description: "A full-stack, scalable web booking platform for villas, pools, and apartments with property management and reporting features.",
      technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "crisper-restaurant",
      name: "Crisper Restaurant ERP",
      description: "A desktop restaurant management system with POS, inventory, HR, and accounting, plus an integrated online ordering website.",
      technologies: ["C#", ".NET", "MS SQL Server", "RESTful APIs"],
      githubUrl: "#",
      liveUrl: null,
    },
    {
      id: "global-truck-logistics",
      name: "Global Truck Logistics System",
      description: "Comprehensive logistics management system with role-based dashboards, parcel tracking, payroll, and expense management.",
      technologies: ["ASP.NET", "React", "PostgreSQL", "API Integration"],
      githubUrl: "#",
      liveUrl: null,
    },
    {
      id: "community-cleanup",
      name: "Community Cleanup Platform",
      description: "A web platform for reporting and managing local waste issues, featuring task reporting, status tracking, and data visualization.",
      technologies: ["React", "Node.js", "Firebase", "Leaflet.js"],
      githubUrl: "#",
      liveUrl: "#",
    }
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];


export const SERVICES = [
  { 
      id: "web-development", 
      title: "Web Development", 
      icon: Code,
      shortDescription: "Building dynamic, responsive websites and applications using modern frameworks and best practices.",
      fullDescription: "I specialize in creating high-performance, scalable web solutions from the ground up. My process involves understanding your business needs to deliver a product that is not only visually appealing but also robust and secure. I focus on creating seamless user experiences and efficient backend systems.",
      whatIDo: [
        "Full-stack development with Next.js and ASP.NET.",
        "Responsive UI/UX design with React and Tailwind CSS.",
        "RESTful API design and integration.",
        "Custom content management systems (CMS)."
      ],
      technologies: [
        { name: "Next.js", icon: LayoutTemplate },
        { name: "React", icon: Component },
        { name: "ASP.NET", icon: Server },
        { name: "TypeScript", icon: Code },
        { name: "Tailwind CSS", icon: PenTool },
        { name: "Firebase", icon: Code },
        { name: "Supabase", icon: Database },
        { name: "Git", icon: GitBranch },
      ]
  },
  { 
      id: "mobile-desktop-apps", 
      title: "Mobile & Desktop App Development", 
      icon: Smartphone,
      shortDescription: "Crafting cross-platform mobile and desktop applications with a focus on user experience and performance.",
      fullDescription: "I develop native-like mobile and desktop applications using C# and .NET MAUI, ensuring a consistent and high-quality experience across different platforms. My approach is to build applications that are intuitive, fast, and can scale with your business needs.",
      whatIDo: [
          "Cross-platform development for iOS, Android, Windows, and macOS.",
          "User-centric interface and experience design.",
          "Integration with device hardware and native APIs.",
          "Offline functionality and data synchronization."
      ],
      technologies: [
        { name: "C#", icon: Code },
        { name: ".NET MAUI", icon: Smartphone },
        { name: "MS SQL Server", icon: Database },
        { name: "Entity Framework", icon: Server },
        { name: "Git", icon: GitBranch },
        { name: "Visual Studio", icon: Terminal },
      ]
  },
  { 
      id: "database-management", 
      title: "Database Management & AI", 
      icon: BrainCircuit,
      shortDescription: "Designing robust database architectures and integrating AI for intelligent data processing.",
      fullDescription: "I design and manage efficient, secure, and scalable database systems. Furthermore, I leverage AI and machine learning to build intelligent features, automate processes, and derive valuable insights from your data. From Odoo ERP customization to building custom AI agents, I can help you unlock the power of your data.",
      whatIDo: [
          "Database schema design and optimization.",
          "ERP customization and module development (Odoo).",
          "Building and integrating AI-powered chatbots and agents.",
          "Process automation with tools like n8n.",
      ],
      technologies: [
          { name: "MS SQL Server", icon: Database },
          { name: "PostgreSQL", icon: Database },
          { name: "Python", icon: Code },
          { name: "Odoo ERP", icon: Briefcase },
          { name: "Genkit/AI", icon: Bot },
          { name: "n8n", icon: GitBranch }
      ]
  },
];

    
