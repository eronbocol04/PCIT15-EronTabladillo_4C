import React from 'react'
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Eron Bocol Tabladillo</h3>
        <p className="text-lg font-normal text-gray-400">
          Non-Pro/Ammateur Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I can somehow save you from errors, so reach me out, deal with me.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+639510016373</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Click Email: <a href="mailto:aimhigh0498@gmail.com" className="text-lightText">aimhigh0498@gmail.com</a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/erhonbocol.tabladillo?mibextid=ZbWKwL" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://x.com/BocolEron5642" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://eronbocol04.github.io/PSIT01eronbocoltabladillo/" className="bannerIcon">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft