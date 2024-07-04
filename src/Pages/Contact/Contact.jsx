



import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log('Form data:', new FormData(form.current));
      emailjs.sendForm('service_jzvs2dj', 'template_dptm839', form.current, {
          publicKey: 'g-0E2QqH4U0aUUy5t',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
  };


    return (
        <div id="Contact" className=" lg:mt-24" >
            <div className='md:w-5/12 mx-auto text-center my-10 font-Poppins ' >
            <p className='text-yellow-600 mb-2 ' >My Contact</p>
            <h3 className='text-4xl uppercase font-semibold border-y-2 py-4' >I WANT TO HEAR FROM YOU</h3>
            
            </div>

            <div className="lg:flex w-11/12 mx-auto my-10" >
                <div className="flex-1 lg:p-10" >
                     <div className=' py-10 lg:pl-4 space-y-10 lg:mr-36' >
                        <div className='bg-black text-white rounded-xl p-4  lg:p-6 space-y-4'>
                            <div>
                            <h1 className='text-3xl font-bold font-Poppins' >Phone</h1>
                            <p className='text-xl font-Inter font-medium' >+8801309660175</p>
                            <p className='text-xl font-Inter font-medium' >+8801850580952</p>
                            </div>
                            <div>
                            <h1 className='text-3xl font-bold font-Poppins' >Email</h1>
                            <p className='text-xl font-Inter font-medium' >ashimsarkar5558@gmail.com</p>
                                
                            </div>
                            <div>
                            <h1 className='text-3xl font-bold font-Poppins' >Address</h1>
                            <p className='text-xl font-Inter font-medium' >Dhaka, Bangladesh.</p>
                                
                            </div>
                        </div>

                      

                     </div>
                </div>
                <div className=" " >
                    <h2 className='text-xl border-b-2 pb-4 font-Poppins font-semibold text-center my-6 mx-4 ' >If you have any porject or need help. Contact me</h2>
            
              
                 <div className='flex-col'>
                 <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />

    </form>
                 </div>
                   <div className='my-16 flex gap-5'>
                   <a href="https://www.linkedin.com/in/ashim-sarkar-0b22432b5" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
  </a>
  <a href="https://www.facebook.com" target="_blank">
     <img src="https://img.shields.io/badge/facebook-FF5722?style=for-the-badge&logo=facebook&logoColor=white" target="_blank" /> 
  </a>
  <a href="https://www.instagram.com" target="_blank">
     <img src="https://img.shields.io/badge/instagram-FF5722?style=for-the-badge&logo=instagram&logoColor=white" target="_blank" /> 
  </a>
  <a href="https://github.com/ashimsarkar1512" target="_blank">
     <img src="https://img.shields.io/badge/github-FF5722?style=for-the-badge&logo=github&logoColor=white" target="_blank" /> 
  </a>
                   </div>

                  </div>


                </div>
            </div>
      
    );
};

export default Contact;



         