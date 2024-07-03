import { TbCheckbox } from "react-icons/tb";

const About = () => {
    return (
        <div id='about' className=' p-16' >
            <div className=' lg:flex justify-center items-center space-y-8 ' >

            <div className=' '>
                      <img className=' border-2 border-[#FF6B00] w-64 ml-8 md:ml-0 ' src="../../../public/profile.jpg" alt="" />
                </div>



                <div className='flex-1 space-y-10 ' >
                <div className='w-11/12 mx-auto font-Poppins' >
                <p className='text-yellow-600 mb-2 text-center ' >About me</p>
            <h3 className=' text-2xl md:text-4xl text-center uppercase font-semibold border-y-2 py-4' >Journey of a Web Developer Extraordinaire</h3>
                </div>
                <p className='font-Inter text-justify md:w-9/12 mx-auto'>
                Experienced web developer specializing in sleek front-end design with HTML5, CSS3, and Tailwind CSS. Proficient in JavaScript, React.js, and React Router for crafting dynamic user interfaces. Demonstrated backend expertise in Node.js, Express.js, and MongoDB, ensuring robust server-side development. Skilled in Git, GitHub, Firebase, and more, facilitating seamless collaboration and deployment. Passionate about creating immersive web experiences, from design to implementation, with a comprehensive skill set covering the full development stack.
                </p>
                {/* <div className=' md:w-9/12 mx-auto flex justify-evenly'>
                    <div>
                    <p className="flex  items-center font-bold gap-4" ><TbCheckbox className="text-[#FF6B00]" />  Front end Developer</p>
                    <p className="flex items-center font-bold gap-4" > <TbCheckbox className="text-[#FF6B00]" />Mern-stack Developer</p>
                    <p className="flex items-center font-bold gap-4" > <TbCheckbox className="text-[#FF6B00]" />Junior Developer</p>
                    </div>
                    <div>
                   
                    </div>
                </div> */}
                
                

                <div className='flex justify-center' >

                <a href="https://docs.google.com/document/d/1W-VhuA9-hZAqtB17TxN3MAucKmNVUgGRcF-6ZNIvFe4" download>
                   
                <button className='btn  bg-[#FF6B00] text-white hover:bg-[#FF6B00] ' >Download My Resume </button>
                    </a>

                   
                   </div>

                </div>
               

            </div>
            
        </div>
    );
};

export default About;