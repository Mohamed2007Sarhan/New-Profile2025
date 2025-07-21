import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  ATHR,
  Microsoft,
  Horus_University,
  iBrand,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SoftWare Engineer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer (Team Lead)",
    company_name: "ATHR",
    company_link: "https://m.athr-sa.com/en/",
    icon: ATHR,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Leading a team of front-end developers to build and maintain modern web applications using React.js and related technologies.",
      "Driving the architecture and implementation of scalable and maintainable UI components with a focus on performance and code quality.",
      "Collaborating closely with designers, product managers, and backend engineers to deliver seamless and consistent user experiences.",
      "Overseeing code reviews, mentoring junior developers, and ensuring adherence to best practices in development and version control workflows.",
      "Implementing responsive layouts and ensuring compatibility across major browsers and devices, following accessibility standards.",
      "Playing a key role in technical decision-making, sprint planning, and progress tracking to align with business goals and project timelines.",
    ],
  },
  {
    title: "Full Stack Developer (External Contributor)",
    company_name: "Microsoft",
    company_link: "https://www.microsoft.com/en-us/",
    icon: Microsoft,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Contributing to full-stack application development as an external collaborator, working across both front-end and back-end components.",
      "Building responsive and dynamic user interfaces using React.js with a strong emphasis on performance, reusability, and clean code architecture.",
      "Developing and integrating robust backend APIs using Node.js and Express, with secure authentication, validation, and database interaction.",
      "Collaborating remotely with internal engineering teams to deliver scalable features aligned with enterprise-grade quality and performance standards.",
      "Implementing best practices in code structure, version control (Git), and CI/CD workflows to maintain development efficiency and project reliability.",
      "Applying advanced debugging, optimization techniques, and writing reusable components to enhance user experience and application performance.",
    ],
  },
  {
    title: "SoftWare Engineering",
    company_name: "Horus University",
    company_link: "https://horus.edu.eg/",
    icon: Horus_University,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing secure and high-performance software tools using C++ with a strong emphasis on low-level programming, memory optimization, and network communication.",
      "Designing and implementing custom networking protocols and packet analysis tools to monitor and enhance system-level data flow and security.",
      "Utilizing advanced debugging and profiling tools such as Valgrind and GDB to ensure memory safety, performance efficiency, and reliability of critical components.",
      "Building and maintaining security-focused modules with encryption, authentication, and access control mechanisms tailored for sensitive environments.",
      "Collaborating with a multidisciplinary team of developers, system administrators, and network engineers with varying levels of experience to tackle real-world technical challenges.",
      "Conducting performance testing and code reviews to ensure code quality, scalability, and adherence to industry best practices.",
      "Integrating academic research findings into practical software implementations to bridge the gap between theoretical knowledge and applied development.",
      "Participating in technical discussions, brainstorming sessions, and team standups to drive innovation and foster a collaborative development culture.",

    ],
  },
  {
    title: "FullStack Development",
    company_name: "IBrand",

    icon: iBrand,
    iconBg: "#383E56",
    date: "Jan 2025 - Jan 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developing a professional-grade website with visually appealing design, harmonious color integration, and clean, high-performance code implementation.",

    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
