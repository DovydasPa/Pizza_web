import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import './Restoranai.css';
import { optikos } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { Container } from 'reactstrap';

const ProjectCard = ({ optikos }) => {
  return (
    <div className="c">
      <Tilt className='c1 bg-color3 bg-opacity-20 p-5 rounded-2xl sm:w-[460px] w-full' options={{ max: 50, scale: 1, speed: 500,}} >

        <div className="c2 relative w-full h-[230px]">
          <img src={optikos.image} alt='project_image' className='c3 w-full h-full object-cover rounded-2xl'/>
        </div>

        <ul className='c4 mt-5 list-disc ml-5 space-y-2'>
        {optikos.points.map((point, index) => (
          <li key={`optikos-point-${index}`} className='c5 text-color2 text-[20px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>

      </Tilt>
    </div>
  );
};

const Restoranai = () => {
  return (
    <div className="container-restoranai">
    <div className="container-restoranai-vidus">
    <div className="c6 sm:px-16 px-6 sm:py-16 py-10">

        <h2 className="restoranai-text">Restoranai:</h2>


      <div className='c7 mt-20 flex flex-wrap gap-7'>
        {optikos.map((optikos, index) => (
          <ProjectCard  key={`optikos-${index}`}
          optikos={optikos} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Restoranai;

