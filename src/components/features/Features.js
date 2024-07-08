import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="System Development"
          des="We developed different systems, one of those is our system in Capstone the Emergency Alert System Via SMS Notification."
         
        />
        <Card
          title="React Portfolio Development"
          des="For our final requirement in PCIT15 we are going to create Portfolio, to complete and pass the subject."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Hardware Development"
          des="We developed our hardware components namely flood and fire alert system via SMS notification, We used Arduino, GSM modules and sensors."
          icon={<SiProgress />}
        />
        <Card
          title="React Calculator Development"
          des="We learned to create and make it functional react calculator through the efforts of Sir June Rey palabrica, CCS Instructor."
          icon={<FaMobile />}
        />
        <Card
          title="Thesis|Capstone"
          des="We do our capstone through intensive research. Developing our software and hardware to meet such expectations."
          icon={<SiAntdesign />}
        />
        <Card
          title="Local Hosting"
          des="We used to run our system through localhost by server such XAMPP and 000Webhost for websites hosting."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features