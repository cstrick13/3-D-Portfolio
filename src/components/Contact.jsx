import {useState,useRef} from 'react';
import emailjs from '@emailjs/browser';
import {cory} from '../assets';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {Tilt} from "react-tilt";


const Contact = () => {
  const [form,setForm] = useState({})
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Example: Using EmailJS to send the form data
      emailjs
        .send(
          "service_xdp1g1a", // Replace with your EmailJS service ID
          "template_z7iii5d", // Replace with your EmailJS template ID
          formData,
          "li7o3GRv_iuiDJCpK" // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log("Message sent: ", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log("Error: ", error.text);
            alert("Failed to send message.");
          }
        );
  
      // Clear the form
      setFormData({ name: "", email: "", message: "" });
    };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
       
       <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full max-w-lg bg-gray-900 shadow-2xl rounded-3xl p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      >
        <h3 className="text-3xl font-extrabold text-white mb-8 text-center">
          Get in Touch
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 bg-opacity-40 text-white rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 bg-opacity-40 text-white rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 bg-gray-800 bg-opacity-40 text-white rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-400 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

    
    
      <motion.div  variants={slideIn('right',"tween",.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")