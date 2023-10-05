import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion,  AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { nuopelnai } from "../constants";
import './nuopelnai.css';

const NuopelnaiCard = ({ nuopelnai }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "white",
      }}
      contentArrowStyle={{ borderRight: "15px solid #1d1836" }}
      
      iconStyle={{ background: " #6c6999 ", }}
      icon={ 
        <div className='icon-style '>
          
        </div>
      }
    >
      <div>
      </div>
      <h3 className='metai'>{nuopelnai.title}</h3>

      <ul className='list-nuopelnu'>
        {nuopelnai.points.map((point, index) => (
          <li
            key={`nuopelnai-point-${index}`}
            className='points-nuopelnu'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Nuopelnai = () => {
  return (
    
    <div className="nuopelnai">

    <div>
    <AnimatePresence>
      <div >
        <h2 className={` text-center pb-5`}>
          Pasiekimai ir nuopelnai:
        </h2>
      </div>
      </AnimatePresence>
      <div className='boxas'>
        <VerticalTimeline className="custom-line">
          {nuopelnai.map((nuopelnai, index) => (
            <NuopelnaiCard
              key={`experience-${index}`}
              nuopelnai={nuopelnai}
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </div>
  );
};

export default Nuopelnai;