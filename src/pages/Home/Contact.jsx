
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Include the email as reply_to for EmailJS
    const emailData = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(
      'service_am6mj3z', // Service ID
      'template_0mn0pkm', // Template ID
      emailData,
      '7DgZXfKRKj_4Zvx0q' // Public Key
    )
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your email has been sent successfully.',
        timer: 1500,
        timerProgressBar: true, 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send email. Please try again.');
    });
  };

  return (
    <div id='contact' className='my-16'> 
     <p className="text-[#8d918b] text-center font-semibold text-lg">Get in Touch</p>
     <h1 className="text-5xl text-center font-bold mb-6">Contact Me</h1>

    <div className='flex justify-center items-center text-4xl gap-6 my-4'>
    <a target='_blank'  href="https://github.com/jahedasultana"><FaGithub /></a>
    <a target='_blank'  href="https://www.facebook.com/profile.php?id=100094120232292"><FaFacebook /></a>
    <a target='_blank' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new"><MdEmail /></a>
    </div>

      <div className="flex justify-center items-center text-[#8d918b]  dark:text-gray-200 w-full mb-4">
        <div className="font-mon p-4 rounded-lg shadow-md w-full sm:w-3/4 border-2 border-[#8d918b]">
         
          <form className="space-y-4 " onSubmit={handleSubmit}>
            <div className='flex gap-2 '>
              <div className='w-full'>
                <label htmlFor="name" className="block text-[#8d918b] dark:text-[#8d918b]">Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='w-full'>
                <label htmlFor="subject " className="block text-gray-700 dark:text-[#8d918b]">Subject: </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-[#8d918b]">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-[#8d918b]">Message: </label>
              <textarea
                id="message"
                name="message"
                className="w-full text-gray-700 p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full dark:bg-[#596475] py-2 px-4 bg-black text-white font-bold rounded-md hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;