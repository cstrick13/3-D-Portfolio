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
       
      <motion.div variants={slideIn('left',"tween",.2,1)} >
      <Tilt className="flex-[.80] bg-black-100 p-8 rounded-2xl" options={{
          max: 20,
          scale: 1,
          speed: 450,
        }}>
          <h3 className={styles.sectionHeadText}>Contacts</h3>
      <div className="bg-gradient-to-b from-white to-tertiary shadow-md rounded-xl p-7 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
          <img className="w-[200px] h-[200px] rounded-full mr-4 items-center" src={cory} alt="Contact Avatar" />
          </div>
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2">
              Phone Number:
      </label>
    <div className="bg-white bg-opacity-25 p-3 rounded-lg font-semibold">
      <p className="text-black ">601-329-9202</p>
    </div>
    </div>
    <div className="mb-4">
      <label className="block text-black  text-sm font-bold mb-2">
              Email:
      </label>
    <div className="bg-white bg-opacity-25 p-3 rounded-lg font-semibold">
      <p className="text-black ">corystrickland13@gmail.com</p>
      </div>
        </div>
    </div>
    </Tilt>
    </motion.div>
    
    
      <motion.div  variants={slideIn('right',"tween",.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")