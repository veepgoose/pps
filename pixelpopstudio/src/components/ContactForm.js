import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // Add this line

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
    <div className="relative w-[817px] h-[484px] mx-auto mt-8 mb-28">
      {/* Background rectangles */}
      <div className="absolute w-full h-full bg-[#192A51] border-4 border-black left-[27px] top-[17px]"></div>
      <div className="absolute w-full h-full bg-[#7493AF] border-4 border-black"></div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-[689px] space-y-4">
          {/* Name input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-[349px] h-[52px] bg-[#FFF6E3] border-4 border-black px-4 py-2 font-inter font-black text-xl placeholder-black placeholder-opacity-100 focus:placeholder-opacity-0"
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
              className="w-full h-[52px] bg-[#FFF6E3] border-4 border-black px-4 py-2 font-inter font-black text-xl placeholder-black placeholder-opacity-100 focus:placeholder-opacity-0"
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
              className="w-full h-[224px] bg-[#FFF6E3] border-4 border-black px-4 py-2 resize-none font-inter font-black text-xl placeholder-black placeholder-opacity-100 focus:placeholder-opacity-0"
              required
            ></textarea>
          </div>
          
          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[185px] h-[47px] bg-[#FB6FC6] border-4 border-black font-inter font-black text-xl"
            >
              Submit
            </button>
          </div>
          
          {/* Status message */}
          {status && (
            <p className="text-center font-bold mt-4">{status}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;