import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({testimonial,index,name,image,link}) =>(
  <motion.div variants={fadeIn("", "spring" ,index *0.5,0.75)} className="bg-black-200 p-10 rounded-3xl 
  xs:w-[320px] w-full">
    <div className="mt-1 text-white font-black text-[30px]">
    <p className="text-white tracking-wider text-[30px]">{testimonial}</p>
    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <img className="cursor-pointer items-center justify-center w-[250px] h-[250px] object-cover"src={image} alt={`feedback-by-${name}`} onClick={() => window.open(link, "_blank")}/>
      </div>
    </div>
    </div>
    
  </motion.div>
)

const Feedbacks = () => {
  // return (
  //   <div className={`mt-12 bg-black-100 rounded-[20px]`}>
  //     <div
  //       className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
  //     >
  //       <motion.div variants={textVariant()}>
  //         <p className={styles.sectionSubText}>Check these out</p>
  //         <h2 className={styles.sectionHeadText}>Socials</h2>
  //       </motion.div>
  //     </div>
  //     <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
  //       {testimonials.map((testimonial, index) => (
  //         <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default SectionWrapper(Feedbacks,"resume")