

"use client";

import {  Timeline } from "flowbite-react";


const Experience = () => {
  return (
    <div id="experience" className="md:flex gap-10 max-w-6xl mx-auto">
      <div className="lg:w-1/2 pl-5 mx-auto">
      <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
        <h1 className="text-4xl">Experience</h1>
        <Timeline.Content className="text-2xl my-3">Front-End Developer</Timeline.Content>
        <Timeline.Time>june 2023 -present</Timeline.Time>
        <Timeline.Content>Duration: 1 Year</Timeline.Content>
        <Timeline.Title>Responsibilities & Achievements:</Timeline.Title>
    
          <Timeline.Body>
          I developed and maintained diverse React.js web applications, integrating responsive interfaces with HTML, CSS, and Tailwind for enhanced usability. Using Express.js and MongoDB, I built full-stack applications, leveraging JavaScript and React to create engaging user experiences. Collaborating closely with teams, I ensured smooth application integration and deployment, managing state efficiently with React hooks and Redux. Continuous optimization and rigorous testing further improved application performance and user satisfaction.
          </Timeline.Body>
      <Timeline><span className="text-xl">Technologies Used:</span> React.js,JavaScript,HTML,CSS,Tailwind CSS,Express.js,MongoDB,Node.js</Timeline>
          <Timeline></Timeline>
          
        </Timeline.Content>
      </Timeline.Item>
      </Timeline>
      </div>

      <div className=" mx-auto pl-5 pt-3">
      <Timeline>
        
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
           
            <Timeline.Title className="text-4xl">Education</Timeline.Title>
            <Timeline.Content className="text-2xl ">Higher Secondary Certificate (HSC)</Timeline.Content>
            <p className="text-xl">session 2019-2020</p>
            <li>Completed</li>
          <h2 className="text-3xl my-5">Bachelor of Science (BSc)</h2>
            <h3 className="text-xl font-bold">Computer science and engineering</h3>
            <h1 className="text-2xl mt-5">Northern university of bangladesh</h1>
           
            <p className="text-xl mt-4 ">Currently pursuing</p>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
      </div>
    </div>
  );
};

export default Experience;
