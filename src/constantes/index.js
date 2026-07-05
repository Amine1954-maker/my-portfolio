const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { img:"🎓",label: "Computer Science Student" },
    { img:"💻", label: "10+ Personal Projects" },
    { img:"🚀", label: "Full Stack Developer" },
    {img:"📚", label: "Currently learning Cybersecurity & AI" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        img: "💎",
        title: "Quality Development",
        desc: "Building modern, scalable, and user-friendly applications with clean, maintainable code.",
    },
    {
        img: "🤝",
        title: "Collaborative Approach",
        desc: "Understanding project requirements, maintaining clear communication, and working efficiently from idea to deployment.",
    },
    {
        img: "🚀",
        title: "Reliable Results",
        desc: "Delivering secure, high-performance solutions while meeting project goals and deadlines.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Built responsive and intuitive user interfaces, focusing on performance, usability, and creating seamless user experiences with modern frontend technologies.",

        logoPath: "/images/logo2.png",
        title: "Frontend Developer",
        date: "2022 – 2023",
        responsibilities: [
            "Developed responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.",
            "Collaborated with backend developers to integrate APIs and deliver seamless user experiences.",
            "Optimized web applications for performance, responsiveness, and cross-browser compatibility.",
            "Converted UI designs into clean, maintainable, and reusable code.",
            "Participated in the development of a full-stack Railway Ticket Booking System, contributing to the frontend architecture and user experience.",
        ],
    },
    {
        review: "Expanded into full-stack development, designing complete web applications from frontend to backend while building scalable, secure, and user-friendly solutions.",

        logoPath: "/images/logo1.png",
        title: "Full Stack Developer",
        date: "2023 – Present",
        responsibilities: [
            "Design and develop full-stack web applications using React, Node.js, Express, and MongoDB.",
            "Build secure RESTful APIs with authentication and role-based access control.",
            "Design and manage databases to ensure efficient and reliable data storage.",
            "Collaborate on software projects from planning and development to deployment and testing."
        ],
    },
    {
        review: " Continuously learning and applying knowledge in networking, cybersecurity, artificial intelligence, and software engineering through academic studies and hands-on projects.",

        logoPath: "/images/logo3.png",
        title: "Computer Science Student & Cybersecurity Enthusiast",
        date: "2024 – Present",
        responsibilities: [
            "Studying computer science with a focus on software engineering, networking, and cybersecurity.",
            "Learning and applying networking concepts, including routing, switching, VLANs, firewalls, and SQL databases.",
            "Building hands-on cybersecurity projects to strengthen practical skills, including a Rogue Base Station Detection project.",
            "Expanding knowledge in artificial intelligence and integrating AI into software development projects.",
            "Continuously improving problem-solving skills through personal, academic, and team-based projects."
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Problem Solver",
        mentions: "@problem-solving",
        review:
            "I enjoy analyzing complex challenges and transforming ideas into practical, efficient, and user-friendly software solutions.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Continuous Learning",
        mentions: "@always-learning",
        review:
            "Passionate about expanding my knowledge in full-stack development, networking, cybersecurity, artificial intelligence, and emerging technologies.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Team Collaboration",
        mentions: "@teamwork",
        review:
            "I enjoy collaborating with others, sharing ideas, and contributing to projects that encourage innovation, communication, and continuous improvement.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Quality First",
        mentions: "@clean-code",
        review:
            "Committed to writing clean, maintainable, and scalable code while building reliable, high-performance applications with attention to detail.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Security Awareness",
        mentions: "@cybersecurity",
        review:
            "Applying networking and cybersecurity principles to build secure, resilient, and well-designed software systems using modern development practices.",
        imgPath: "/images/client4.png",
    },
    {
        name: "Innovation",
        mentions: "@innovation",
        review:
            "Always exploring new technologies, building real-world projects, and continuously improving my skills to create better software solutions.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
       
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url:"https://www.linkedin.com/in/abdelkader-amine-lazereg-chalabi-20b4b8312/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};