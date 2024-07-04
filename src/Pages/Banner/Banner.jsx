

import './Banner.css'
import { useTypewriter } from 'react-simple-typewriter';
const Banner = () => {
    const [typeEffect] = useTypewriter({
        words : ['Web Developer ', 'FontEnd Developer', 'React Developer', 'MERN Developer'],
        loop : {},
        typeSpeed : 100,
        deleteSpeed : 40,
    })
    return (
        <div className=" h-[695px] md:h-[615px] background1 font-Poppins " >

            <div className='flex lg:pt-28 flex-col-reverse lg:flex-row gap-5' >
                <div className=' flex-1 text-white lg:pl-16 space-y-10 ' >
                    <h1 className=' text-3xl text-center lg:text-5xl font-bold ' >HI, I'M Ashim!</h1>
                    <div className=' h-4 lg:h-12' >
                    <h2 className='  text-center lg:text-5xl font-semibold text-[#FF6B00]' >{typeEffect}</h2>
                    </div>
                    
                    
                    <p className='font-Inter text-center px-10' >
                        
                    Experienced web developer skilled in front-end (HTML, CSS, JavaScript - React) and back-end (Node.js, Express.js, MongoDB) technologies. Renowned for API integration, testing, deployment, security, and strong problem-solving and communication skills. 
                    </p>

                   <div className='flex justify-center' >
                    

                   <a href="https://drive.google.com/file/d/10gvtRJulqrqUWDQKFWj4vX7FqsW7ptzp/view" download>
                   
                <button className='btn  bg-[#FF6B00] text-white hover:bg-[#FF6B00] ' >Download My Resume </button>
                    </a>
                   </div>



                        
                </div>
                <div className=' flex-1' >
                    <div className=' pl-32 pt-2  md:pt-0 lg:pl-48  ' >
                    <img className=' w-48 md:w-96 border-2 rounded-xl md:rounded-full bg-[#FF6B00]'  src="https://i.ibb.co/SXpGJvc/profile.jpg" alt="" />
                    </div>
                   
                </div>
            </div>


            {/* --------------------------- */}
            <div>
        <svg
          className="waves mt-16 lg:-mt-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
             xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
             xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
             xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
            
        </div>
    );
};

export default Banner;