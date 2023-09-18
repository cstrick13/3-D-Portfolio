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
    resume,
    blackresume,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    fenway,
    latech,
    github,
    linked,
    cyber,
    ledMatrix,
    calculator
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "resume",
      title: "Resume",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Aumotated Tester",
      icon: backend,
    },
    {
      title: "Cyber Security",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      title: "Web Developer",
      company_name: "Fenway",
      icon: fenway,
      iconBg: "white",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Computer Science",
      company_name: "LaTech",
      icon: latech,
      iconBg: "white",
      date: "Jan 2022 - Nov 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Fenwaygroup",
      icon: fenway,
      iconBg: "white",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "LinkedIn",
      name: "Sara Lee",
      image: linked,
      link: "https://github.com/cstrick13",
    },
    {
      testimonial:
        "GitHub",
      name: "Chris Brown",
      image: github,
      link:"https://www.linkedin.com/in/cory-strickland-b55828229/"
    },
    {
      testimonial:
        "Resume",
      name: "Lisa Wang",
      image: blackresume,
      link: resume
    },
  ];
  
  const projects = [
    {
      name: "MineCraft Led Matrix",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet sint soluta iusto exercitationem excepturi harum optio reprehenderit iure, modi quod magni dicta blanditiis non, numquam quibusdam. Laborum vero pariatur quos recusandae accusamus modi quia fugit quisquam neque Dolore atque totam obcaecati harum dolorum autem quis ratione neque Fuga officia.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "neopixel",
          color: "green-text-gradient",
        },
        {
          name: "javscript",
          color: "pink-text-gradient",
        },
      ],
      image: ledMatrix,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cyber-Druid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet sint soluta iusto exercitationem excepturi harum optio reprehenderit iure, modi quod magni dicta blanditiis non, numquam quibusdam. Laborum vero pariatur quos recusandae accusamus modi quia fugit quisquam neque Dolore atque totam obcaecati harum dolorum autem quis ratione neque Fuga officia",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
        {
          name: "pixelart",
          color: "pink-text-gradient",
        },
      ],
      image: cyber,
      source_code_link: "https://github.com/",
    },
    {
      name: "Vector Calculator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet sint soluta iusto exercitationem excepturi harum optio reprehenderit iure, modi quod magni dicta blanditiis non, numquam quibusdam. Laborum vero pariatur quos recusandae accusamus modi quia fugit quisquam neque Dolore atque totam obcaecati harum dolorum autem quis ratione neque Fuga officia",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };