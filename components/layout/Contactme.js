import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l44k7rw', 'template_qu0g81w', form.current, 'user_HOU1ALqsOuswLkyzT')
      .then((result) => {
          console.log('SUCCESS!',result.text);
      }, (error) => {
          console.log('FAILED...',error.text);
      });
  };
  

  return (


<>


             <div className="flex justify-center mt-24">
                   <h1 className="text-2xl font-bold text-zinc-700 lg:text-5xl dark:text-fourth">
                        Send meg melding her
                    </h1>
             </div>
                    
    
        <div className="block p-6 bg-white dark:bg-neutral-800 mx-auto mt-24 max-w-md">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group mb-6">
              <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleInput7"
                placeholder="Name" name="user_name"/>
             </div>
                <div className="form-group mb-6">
                <input type="email" className="form-control block
                   w-full
                   px-3
                   py-1.5
                   text-base
                   font-normal
                   text-gray-700
                   bg-white bg-clip-padding
                   border border-solid border-gray-300
                   rounded
                   transition
                   ease-in-out
                   m-0
                   focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" id="exampleInput8"
                   placeholder="Email address" name="user_email"/>
                 </div>
              <div className="form-group mb-6">
               <textarea
                  className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
                  "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>

            <button type="submit" className="
                  w-full
                  px-6
                  py-2.5
                  bg-orange-300
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-secondary hover:shadow-lg
                  hover:text-primary
                "  onClick={() =>
                  window.setTimeout(function () {
                    location.reload();
                  }, 1500)
                }> 
                  Send
             </button>
         </form>
    </div>



    </>
    
    
   
   
    
  );
  
};
export default ContactMe;

