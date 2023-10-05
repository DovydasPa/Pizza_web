import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Atsiliepimai.css';

import { zmones } from '../constants/index.js';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",  }}
      onClick={onClick}
    />
  );
}
const Atsiliepimai = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
     dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      
    }));
  };



  return (
    

    <div>
  
      <div className="Page">
    
      <Slider {...settings}>

     

        {zmones.map(item => 
            // bg-gradient-to-r from-blue-500 to-pink-500 bg-opacity-20
          <div className="kortele">
            <div className="card-top">

              
              <img
                src={
                  defaultImage[item.komentaras] === item.komentaras
                    ? defaultImage.linkDefault
                    : item.image
                }
                onError={handleErrorImage}
              /><h1 className='fs-6'>{item.komentaras}</h1>
            </div>
            <div className='card-bottom'>
              <h3>{item.name}</h3>
            </div>
          </div>
        )}
      </Slider>
    </div></div>
  
  );
 }

export default Atsiliepimai;


{/* // import React from 'react';  

// import ReactDOM from 'react-dom';  

// const Atsiliepimai = () => {
//   const data = [
//     { id: 1, name: "John Doe", surname: "asasas" },
//     { id: 2, name: "Victor Wayne", surname: "sdfsdf" },
//     { id: 3, name: "Jane Doe", surname: "asdad" },
//   ];

//   return (
//     <div className="users">
//       {data.map(user => 
    
//         <div className="user">{user.name } {user.surname}</div>
//       )}
//     </div>
//   );
// };

// export default Atsiliepimai;   */}