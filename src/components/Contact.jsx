import {useState,useRef} from 'react';
import {cory} from '../assets';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {Tilt} from "react-tilt";

const Contact = () => {
  const [form,setForm] = useState({})
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
       
      <motion.div variants={slideIn('left',"tween",.2,1)} className="flex-[.80] bg-black-100 p-8 rounded-2xl w-[250px] h-[650px]"  >
          <h3 className={styles.sectionHeadText}>Contacts</h3>
          <div className="flex flex-col items-center justify-center pb-10">
      <div className="bg-white shadow-md rounded-xl p-7 max-w-md items-center justify-center">
          <img className="w-[200px] h-[200px] rounded-full shadow-lg mx-auto mb-4"  src={cory} alt="Contact Avatar" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Cory Strickland</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
          
    <div className="mb-4">
      <label className="block text-gray-500 dark:text-gray-400 text-sm font-bold mb-2">
              Phone Number:
      </label>
    <div className="bg-white bg-opacity-25 p-3 rounded-lg font-semibold">
      <p className="text-gray-500 dark:text-gray-400 ">601-329-9202</p>
    </div>
    </div>
    <div className="mb-4">
      <label className="block text-gray-500 dark:text-gray-400  text-sm font-bold mb-2">
              Email:
      </label>
    <div className="bg-white bg-opacity-25 p-3 rounded-lg font-semibold">
      <p className="text-gray-500 dark:text-gray-400 ">corystrickland13@gmail.com</p>
      </div>
      </div>
        </div>
    </div>
    </motion.div>
    
    
      <motion.div  variants={slideIn('right',"tween",.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")