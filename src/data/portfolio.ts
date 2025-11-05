export const portfolioData = {
  name: "Sahbaz Chaudhary",
  title: "Software Developer",
  role: "MERN & Spring Boot Specialist",
  location: "Mumbai, India",
  phone: "+91 91363 07464",
  email: "sahbaz.dev@gmail.com",
  description:
    "Driven software developer specializing in MERN stack and Spring Boot. Passionate about creating modern, scalable, and high-performance web applications.",
  resumeUrl:
    "https://drive.google.com/file/d/1v_XtRa_WptuQ8TaQInc9prSV8U1GLoSW/view?usp=sharing",
  social: {
    github: "https://github.com/mohdsahbaz",
    linkedin: "https://linkedin.com/in/mohdsahbaz",
    email: "mailto:sahbaz.dev@gmail.com",
  },
};

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "React Native", level: 70 },
    { name: "Next.js", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "Next.js (API)", level: 85 },
    { name: "Spring Boot", level: 70 },
    { name: "Django", level: 70 },
    { name: "ASP.NET", level: 70 },
  ],
  database: [
    { name: "MongoDB", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 80 },
  ],
  devops: [
    { name: "Git & GitHub", level: 95 },
    { name: "Docker", level: 30 },
    { name: "AWS", level: 10 },
  ],
  tools: [
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 90 },
    { name: "Figma", level: 55 },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Personal CRM System",
    description:
      "A personalized CRM (Customer Relationship Management) system built for my own use to efficiently organize clients, projects, employees, and daily tasks. Developed using React, Node.js, MongoDB, and Tailwind CSS, it features role-based dashboards for admin, managers, and employees. The system includes project tracking, client management, task assignment, and progress analytics to boost productivity and maintain clear project visibility. Optimized for speed, scalability, and intuitive user experience, this CRM serves as a powerful personal productivity and management tool.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://devmynt-crm.onrender.com/",
    githubUrl: "",
    image: "crm",
  },
  {
    id: 2,
    name: "Doctor Management Dashboard",
    description:
      "A complete Doctor Management System built using React, Node.js, Express, and PostgreSQL. This project provides an admin dashboard to manage master and selected doctors across multiple databases (D2C & Lloyd). It includes features like dynamic filtering, sorting, pagination, import/export (Excel), and data validation. Users can add, update, and manage doctor records with a clean, responsive interface. The system also supports role-based data handling, advanced search, and customizable exports for efficient medical data management.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://admin-dashboard-khaki-iota.vercel.app/",
    githubUrl: "https://github.com/MohdSahbaz/admin_dashboard",
    image: "doctor-dashboard",
  },
  {
    id: 3,
    name: "Jarwis - Domain AGI Security Engineer",
    description:
      "A secure and scalable frontend platform built for advanced domain-based AI security management. Developed using React, Tailwind CSS, and Firebase, it features dedicated dashboards for public users, admins, and authenticated members. Integrated Firebase for real-time data synchronization, authentication, and secure role-based access control. Designed with a responsive UI and optimized performance to ensure seamless functionality across all devices while maintaining robust data protection standards.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://www.jarwis.ai/",
    githubUrl: "",
    image: "jarwis",
  },
  {
    id: 4,
    name: "Library Management System",
    description:
      "A full-stack Library Management System built using React, Node.js, Express, and MongoDB. This project streamlines book tracking, borrowing, and user management with a modern, responsive UI. It includes smart search, secure authentication, and automated return reminders to enhance library operations and improve user experience. Designed for scalability and performance, this system ensures efficient resource management for schools, colleges, and public libraries.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://lms-client-uo7q.onrender.com/",
    githubUrl: "https://github.com/MohdSahbaz/Library-Management-System-New",
    image: "library",
  },
  {
    id: 5,
    name: "Hear Her",
    description:
      "An awareness and education website dedicated to promoting maternal health and wellness. Developed using HTML, CSS, jQuery, and Bootstrap, it delivers accessible, responsive, and user-friendly content focused on supporting pregnant women and families. The platform features interactive elements, intuitive navigation, and mobile-friendly layouts to ensure inclusive access to vital maternal health information while emphasizing empathy and awareness.",
    tech: ["HTML", "CSS", "jQuery", "Bootstrap"],
    liveUrl: "https://dimgrey-ape-296594.hostingersite.com/",
    githubUrl: "",
    image: "hearher",
  },
  {
    id: 6,
    name: "GuideSpire",
    description:
      "GuideSpire is a fast, scalable, and visually engaging multi-game guide platform built with React, Spring Boot, and Tailwind CSS. It delivers simplified and user-friendly gaming content for popular titles like Wuthering Waves and Genshin Impact — featuring tier lists, character builds, boss strategies, and more. Designed with a responsive interface and optimized performance, GuideSpire ensures smooth navigation, quick load times, and an exceptional user experience across all devices.",
    tech: ["React", "Spring Boot", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/MohdSahbaz/GuideSpire",
    image: "guidespire",
  },
];

export const workExperience = [
  {
    company: "NorthStar Technologies International Ltd.",
    role: "Full Stack Developer",
    period: "Sep 2025 – Present",
    location: "Mumbai, Maharashtra, India · Remote",
    description: [
      "Developing and maintaining scalable full-stack web applications with a modern tech stack, ensuring performance, accessibility, and cross-platform compatibility.",
      "Building responsive and dynamic frontends using React.js, Next.js, React Native, JavaScript, TypeScript, HTML5, CSS3, and Tailwind CSS.",
      "Creating robust backend systems with Node.js, Express.js, Next.js (API), Spring Boot, and Django for secure and efficient data handling.",
      "Integrating and managing databases including MongoDB, MySQL, and PostgreSQL to ensure data reliability and scalability.",
      "Collaborating with designers and backend engineers to implement reusable components, optimized API endpoints, and CI/CD-ready architectures.",
      "Focusing on code quality, performance optimization, and seamless user experience across web and mobile interfaces.",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Delivered custom full-stack web applications for clients using React, Node.js, and MongoDB.",
      "Developed APIs and backend logic with Express.js for dynamic and secure data operations.",
      "Built responsive UI components using Tailwind CSS and JavaScript for smooth user experiences.",
      "Optimized performance, handled deployments, and ensured scalability for multiple client projects.",
    ],
  },
  {
    company: "NorthStar Technologies International Ltd.",
    role: "Frontend Developer Intern",
    period: "Feb 2025 – Jun 2025",
    location: "Remote",
    description: [
      "Developed and optimized user interfaces using React and Tailwind CSS.",
      "Collaborated with backend developers to integrate RESTful APIs.",
      "Enhanced UI/UX for accessibility, responsiveness, and improved performance.",
      "Participated in code reviews, version control, and agile development processes.",
    ],
  },
];
