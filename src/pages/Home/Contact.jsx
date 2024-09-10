import { MdEmail, MdLocationOn, MdShare } from "react-icons/md";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ContactCard = () => {
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

    const emailData = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(
      'service_cdg3nyc', 
      'template_v4xqtr9', 
      emailData,
      '9E8lqT-Rdu04Oq3kS'
    )
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your email has been sent successfully.',
        timer: 1500,
        timerProgressBar: true, 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, () => {
      alert('Failed to send email. Please try again.');
    });
  };

  return (
    <div id="contract" className="">
     <div className="relative mt-20 md:mb-2 mb-10 flex-col justify-center">
        <div className="absolute inset-0 w-[20%] top-5 mx-auto h-10 rounded-full bg-[#7ac74f] blur-xl"></div>
        <div className="relative">
        <p className="text-[#153b01] text-center text-lg font-semibold">
        Get in Touch
        </p>
        <h1 className="md:text-5xl text-2xl text-center my-font font-bold ">Contact Me</h1>
        </div>
      </div>
    <div className='flex flex-col lg:flex-row justify-between items-start w-full mb-8 px-4 gap-8 '> 
    
      
      {/* Left Side: Contact Info */}
      <div className="text-[#0f0101] bg-[#F9FAFB] h-[450px] rounded-md shadow-md border-2 p-6  w-full lg:w-1/2 lg:mt-[72px]">
        <h2 className="text-2xl font-bold mb-4 text-black/70">Let&apos;s talk!</h2>
        <p className=" mb-4">
        I am a dedicated frontend web developer with a passion for creating dynamic and responsive web applications.My contact information is provided below.
        </p>
        {/* <div className="flex items-center mb-4">
          <MdPhone className="text-primary text-xl mr-4" />
          <p className="">+(684) 555-0102</p>
        </div> */}
        <div className="flex items-center mb-4">
          <MdEmail className="text-[#7ac74f] text-xl mr-4" />
          <a  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new" className=" hover:text-primary">jahedasultana47@gmail.com</a>        </div>
        <div className="flex items-center mb-4">
          <MdLocationOn className="text-[#7ac74f] text-xl mr-4" />
          <p className="">Dhaka,Shariatpur</p>
        </div>
        <div className="flex items-center mt-4 space-x-4">
          <MdShare className="text-[#7ac74f] text-xl" />
          {/* Social media icons */}
          <a href="https://www.linkedin.com/in/jahedasultana" className=" hover:text-primary">LinkedIn</a>
          <a href="https://github.com/jahedasultana" className=" hover:text-primary">GitHub</a>
          <a href="https://www.facebook.com/profile.php?id=100094120232292" className=" hover:text-primary">Facebook</a>
        </div>

        
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-16">
        <div className="font-mon p-4 rounded-md shadow-md border-2 bg-[#F9FAFB]">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Get In Touch!</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className='flex gap-2'>
              <div className='w-full'>
                <label htmlFor="name" className="block text-gray-700">Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border-2 border-gray-400 rounded-md bg-gray-100 text-gray-800"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='w-full'>
                <label htmlFor="subject" className="block text-gray-700">Subject: </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-2 border-2 border-gray-400 rounded-md bg-gray-100 text-gray-800"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border-2 border-gray-400 rounded-md bg-gray-100 text-gray-800"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message: </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border-2 border-gray-400 rounded-md bg-gray-100 text-gray-800"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4  text-white font-bold rounded-md  bg-[#7ac74f] hover:border-2 hover:bg-[#41a909] "
            >
              Send Massage
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactCard;
