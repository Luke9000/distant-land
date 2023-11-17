import React, { useLayoutEffect, useState } from 'react'
import "./imagePanel.scss"

let width = () => {
  let vmin = Math.min(window.innerWidth, window.innerHeight) / 2;
  console.log(vmin);
  return (vmin);
};


let vmin = width() /2;

const SubText: React.FC = () => {

  const handleClick = () => {
    console.log('123');
  };


  const [vmin, setVmin] = useState(() => width() / 1.5);
 
 const handleResize = () => {
  setVmin(width() / 1.5);
};

useLayoutEffect(() => {

  setVmin(width() / 1.5);

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); 


  return (
    <svg className='floating__text--sub' width={vmin} height={vmin} viewBox="0 0 541 170" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_999_2265)">
    <rect width="541" height="170" rx="59" fill="url(#paint0_radial_999_2265)" fill-opacity="0.3"/>
    </g>
    <defs>
    <filter id="filter0_b_999_2265" x="-1" y="-1" width="543" height="172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5"/>
    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_999_2265"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_999_2265" result="shape"/>
    </filter>
    <radialGradient id="paint0_radial_999_2265" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(270.5 85) rotate(90) scale(85 270.5)">
    <stop offset="0.484375"/>
    <stop offset="1" stop-opacity="0"/>
    </radialGradient>
    </defs>
    </svg>
  )
}

export default SubText