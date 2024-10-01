import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { resume } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center mx-auto">
    <div className="flex flex-row items-start gap-5 flex-wrap sm:flex-nowrap">

  <div>
    <h1 className={`${styles.heroHeadText} text-white`}>
      Welcome I'm, <span className="text-[skyblue]">Cory</span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      I do fullstack engineering and data analyst
      <br className="sm:block hidden" />
    </p>

    {/* Button container */}
    <div className="flex flex-col sm:flex-row sm:justify-start mt-5 gap-4">
      {/* GitHub Button */}
      <a
        href="https://github.com/cstrick13"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-800 text-white text-lg sm:text-xl rounded-lg hover:bg-gray-700 hover:text-sky-400 transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
      >
        <i className="fab fa-github"></i> GitHub
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/cory-strickland-b55828229/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white text-lg sm:text-xl rounded-lg hover:bg-blue-500 hover:text-sky-200 transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
      >
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>

      {/* Resume Button */}
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-600 text-white text-lg sm:text-xl rounded-lg hover:bg-green-500 hover:text-green-200 transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
      >
        <i className="fas fa-file-alt"></i> Resume
      </a>

      {/* Contact Me Button */}
      <a
        href="#contact"
        className="px-4 py-2 bg-purple-600 text-white text-lg sm:text-xl rounded-lg hover:bg-purple-500 hover:text-purple-200 transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
      >
        <i className="fas fa-envelope"></i> Contact Me
      </a>
    </div>
  </div>
</div>

<div className="absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center sm:flex hidden">
  <a href="#about">
    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
      <motion.div
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
        className="w-3 h-3 rounded-full bg-secondary mb-1"
      />
    </div>
  </a>
</div>

    </section>
  )
}

export default Hero