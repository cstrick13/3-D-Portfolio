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
    calculator,
    appium,
    azure,
    bash,
    cSharp,
    java,
    linux,
    python,
    reactNative,
    scrum,
    sql,
    calc
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
      id: "works",
      title: "Projects",
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
      title: "Automated Testing",
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
      name: "Python",
      icon: python,
    },
    {
      name: "Appium",
      icon: appium,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "C#",
      icon: cSharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "React Native",
      icon: reactNative,
    },
    {
      name: "Scrum",
      icon: scrum,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "Html",
      icon: html,
    },
  ];
  
  const experiences = [
    {
      title: "Education",
      company_name: "Louisiana Tech",
      icon: latech,
      iconBg: "white",
      date: "Sept 2020 - Nov 2024",
      points: [
        "Computer Science with a concetration in Cyber Security and a minor in Game design",
        "Expected graduation date is Nov 2024",
        "GPA: 3.0",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Fenwaygroup",
      icon: fenway,
      iconBg: "white",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed a website and Video Display system for smart parking meters.",
        "Integrated Augmented Reality for enforcement purposes, enabling users to pay through the meters.",
        "Established a new SQL database to handle data storage and management as well as set up an Azure environment to host the application.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Proficient in C#, ASP.NET, SQL Server, Azure, and WinForms for software development.",
      ],
    },
    {
      title: "React Native",
      company_name: "Fenwaygroup",
      icon: fenway,
      iconBg: "white",
      date: "May 2022 - Dec 2022",
      points: [
        "Implemented a structured testing cycle including user-level bug testing, feature-specific testing, and overall regression testing.",
        "Managed test cases using Confluence documentation and logged issues in Jira for tracking and debugging.",
        "Integrated Bluetooth functionality for enhanced user experience and convenience and enabled in-app payment options for parking, providing a seamless and convenient payment solution.",
        "Proficient in React Native, JavaScript/TypeScript, automated testing, and project management tools like Jira and Confluence for efficient and collaborative mobile app development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "LinkedIn",
      name: "Sara Lee",
      image: linked,
      link: "https://www.linkedin.com/in/cory-strickland-b55828229/",
    },
    {
      testimonial:
        "GitHub",
      name: "Chris Brown",
      image: github,
      link:"  https://github.com/cstrick13"
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
        "An engineering expo project done using python,raspbery pi interface and javascript web development.The matrix allowed the user to create custom pixel art on a website connected to a Pi.It did live updates from the web app to your screen,also imports of pixel assest for saving,displaying and changing the image as well store the images in a file as the pixel art.We won first place in the cyber expo",
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
    },
    {
      name: "Cyber-Druid",
      description:
        "A 2d top down pixel art rouguelike that follows a cyber-druid who has to save his planet from cyber-corruption of a rouge and dangerous invasive alien race.The game is made in Unity and features procedural dungeon loading for a roguelike experience and more.",
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
    },
    {
      name: "Vector Calculator",
      description:
        "A React Native project that takes two vector arrays and allows you to scale them per the user's preference.After which it runs multiple vector calculations multiplying,adding,subtracting and dot prouct.As well as displays the formula and how you would go about performing the operation on the two vectors ",
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
      image: calc,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };