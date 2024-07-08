import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';


const About = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [, setExperienceData] = useState(false);
  const [, setAchievementData] = useState(false);
  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="4+ YEARS OF SOMEHOW SO CALLED EXPERIENCE" des="All About Me" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${educationData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
          >
            Professional Skills
          </li>
          <li

          >
          </li>
          <li

          >
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  );
}

export default About