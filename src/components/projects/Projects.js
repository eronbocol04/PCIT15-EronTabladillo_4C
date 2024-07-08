import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="TAKE A LOOK AT THIS"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Sublimation Website"
          des=" I created a website about Sublimation as our requirement for Sir Clyde Taburada, and upload it to github using Git Commands."
          src={projectOne}
        />
        <ProjectsCard
          title="React Calculator PCIT15"
          des=" I or we rather created a react calculator and make it functional through the effort of Sir June Rey Palabrica who taught us how react works and its functions."
          src={projectTwo}
        />
        <ProjectsCard
          title="React Basic Homepage"
          des=" We created react pages, first we have the homepage where the central hub or main entry point of a website,
           designed to welcome visitors and provide an overview of the site's content and purpose. "
          src={projectThree}
        />
        <ProjectsCard
          title="React Basic About Page"
          des=" We have also react page of About where in section of a website dedicated to providing information
           about the organization, company, individual, or entity behind the website."
          src={projectFour}
        />
        <ProjectsCard
          title="React Basic Services Page"
          des=" We the last one, the page of Services where in a section of a website that details the various services a business or organization offers.
           It serves to inform potential clients or customers about what they can expect and how the business can meet their needs. "
          src={projectFive}
        />
        <ProjectsCard
          title="Capstone System"
          des=" As for our final requirements for our graduation as fourth-year students, we are task to comply our system capstone and so we did. THESIS DEFENDED:)"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects