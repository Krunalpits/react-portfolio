import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A passionate full stack developer with a knack for crafting robust and scalable web applications. With a year of hands-on experience, I have honed my skills in front-end technologies like React js, as well as back-end technologies like Python, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a year of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "JAN 2023 - MAR- 2024",
    role: "Full Stack Developer",
    company: "Inpinite Solutions",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "python", "AWS", "Research and development, Databases"],
  },
  {
    year: "JUN 2022 - JUL 2023",
    role: "Frontend Developer",
    company: "Mythics Design",
    description: `Designed and developed user interfaces for web applications using HTML, CSS, Javascript. Fashioned User Interfaces & Implemented responsive designs along with optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "Adobe xd", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "KNP & Associates Reporting Software ",
    image: project1,
    description:
      "Created KNP & Associates (firm of Company Secretaries) to gather employee data and generate forms and reports for the client, such as salary and attendance reports etc. This provides highperformance data analysis and storage in a database. AWS S3 bucket was used for deployment and storage. Roles and responsibilities: requirement gathering, coding, testing, client demo, deployment and maintenance, preparing analytical documents.",

    technologies: ["React js", "Python Flask", "PostgreSQL", "AWS"],
  },
  {
    title: "Bizzilly Web App",
    image: project2,
    description:
      "Bizzilly is a Single Page web Application (SPWA) made with ReactJS and Strapi database. This is a search application displaying information pertaining to various businesses. Bizzilly will help its users find business organizations within the range of 100 kms. The website comprises of impressive web-based interface using Material UI. This Web Application makes it easy for users to complete a desired action without requesting too much information.",
    technologies: ["React Js", "Figma", "Strapi"],
  },

  {
    title: "Inventory Management System",
    image: project4,
    description:
      "Applied theoretical concepts to real-world situations in my undergraduate program. Developed 'Inventory Management System' with Python for efficient backend and ReactJS for a user-friendly UI. Implemented tech solutions, ensuring seamless product management, and actively contributed to the software development process.",
    technologies: ["React js", "Python", "Figma"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React js", "tailwind", "Figma", "framer-motion"],
  },

  {
    title: "SURFER",
    image: project1,
    description:
      "The website's sleek and modern design, created with Material-UI, presents a visually appealing and user-friendly experience. The integration of React Js adds interactivity and enhances the overall functionality of the site.",
    technologies: ["React js", "Material UI"],
  },
];

export const CONTACT = {
  address: "6560, montezuma road, San diego, CA-92115 ",
  phoneNo: "+619 389-8104",
  email: "krunalpits2000@gmail.com",
};
