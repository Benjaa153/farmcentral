import React from "react";
import { FaGithub, FaInstagram } from 'react-icons/fa';

const SocialIcon = () => {
  const icons = [
    { name: "FaGithub", icon: <FaGithub />, url: "https://github.com/SoftFusion-Technologies" },
    { name: "FaInstagram", icon: <FaInstagram />, url: "https://www.instagram.com/softfusiontechnologies/?hl=es" },
  ];

  return (
    <div className="text-white">
      {icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 cursor-pointer inline-flex items-center rounded-full bg-keppel mx-1.5 text-xl hover:bg-darkcyan duration-300"
        >
          {icon.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcon;
