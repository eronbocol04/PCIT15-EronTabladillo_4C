import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS Information Technology"
            subTitle="Central Philippines State University  (2020 - 2024)"
            result="Brgy. Camingawan"
            des=" Educational innovation and community empowerment in Negros Occidental."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Camansi National High School (2011 - 2015)"
            result="Brgy. Camansi"
            des="Stage of formal education that follows primary education and precedes higher education."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="On-the-Job Training"
            subTitle="KCAT. Inc. - (October 2023 - January 2024)"
            result="Kabankalan City"
            des="The first fiber internet provider in Negros Island, With the most experience here, The highest level of technical expertise is one call away.."
          />
          <ResumeCard
            title="Ammateur Front/Back-end Developer"
            subTitle="Nike - (2023 - 2024)"
            result="CCS BSIT 4-C"
            des="Working on Capstone as our Thesis, Creating system with front/back-end as our primary concerned to make it functional."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
