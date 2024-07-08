import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Non-pro Coder.", "Non-Pro Developer.", "Non-Pro UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Eron Bocol Tabladillo BSIT 4-C</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and coding through each and every interaction.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/erhonbocol.tabladillo?mibextid=ZbWKwL" className="bannerIcon">
              <FaFacebookF />
            </a>
            <a href="https://x.com/BocolEron5642" className="bannerIcon">
              <FaTwitter />
            </a>
            <a href="https://github.com/eronbocol04/PCIT15-EronTabladillo_4C" className="bannerIcon">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            REACT PORTFOLIO
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://pcit-15-eron-tabladillo-4-dwj8wes3c-eronbocol04s-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default LeftBanner
