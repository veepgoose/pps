import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Motion Variants for the form animation
const formVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Server responded with error:', data);
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-light-footer to-light-menuText dark:from-dark-background dark:to-dark-footer py-12">
      {/* Starry background with animation */}
      <motion.div className="absolute inset-0 w-full h-full flex justify-center items-center z-0 pointer-events-none overflow-hidden">
        <motion.img
          src="/starrySky1.svg"
          alt="Starry background 1"
          className="absolute left-0 w-1/2 h-full object-cover opacity-40"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        />
        <motion.img
          src="/starrySky2.svg"
          alt="Starry background 2"
          className="absolute right-0 w-1/2 h-full object-cover opacity-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        />
      </motion.div>

      {/* Form with motion animation */}
      <motion.div
        className="relative w-11/12 md:w-[817px] h-auto min-h-[400px] mx-auto mt-12 mb-28 md:mb-28 lg:h-[500px] lg:mt-28"
        variants={formVariant}
        initial="initial"
        whileInView="animate"
      >
        {/* Background rectangles */}
        <div className="absolute w-full h-full bg-[#192A51] border-4 rounded-2xl border-black left-1 md:left-[27px] top-1 md:top-[17px]"></div>
        <div className="absolute w-full h-full bg-[#7493AF] border-4 rounded-2xl border-black"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-[689px] space-y-4">
            {/* Name input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full md:w-[349px] h-[52px] bg-[#FFF6E3] border-4 border-black rounded-2xl px-4 py-2 font-mono font-black text-base md:text-xl placeholder-black placeholder-opacity-100 focus:placeholder-opacity-0"
                required
              />
            </div>

            {/* Email input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full h-[52px] bg-[#FFF6E3] border-4 border-black rounded-2xl px-4 py-2 font-mono font-black text-base md:text-xl placeholder-black placeholder-opacity-100 focus:placeholder-opacity-0"
                required
              />
            </div>

            {/* Message textarea */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full h-[160px] md:h-[224px] bg-[#FFF6E3] border-4 border-black rounded-2xl px-4 py-2 resize-none font-mono font-black text-base md:text-xl placeholder-black placeholder-opacity-100 focus:placeholder-opacity-0"
                required
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[150px] md:w-[185px] h-[40px] md:h-[47px] bg-[#FB6FC6] border-4 border-black rounded-2xl font-mono font-black text-[#192A51] text-base md:text-xl hover:bg-[#FCFF6C] hover:text-black transition-all"
              >
                SUBMIT
              </button>
            </div>

            {/* Status message */}
            {status && (
              <p className="text-center font-bold mt-4">{status}</p>
            )}
          </div>
        </form>
      </motion.div>
      
    </section>
   
  );
};

export default ContactForm;

