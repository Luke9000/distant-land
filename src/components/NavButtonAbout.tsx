import React, { useLayoutEffect, useState } from 'react'
import "./navButton.scss"


let width = () => {
  let vmin = Math.min(window.innerWidth, window.innerHeight) / 2;
  console.log(vmin);
  return (vmin);
};


let vmin = width() /2;



const NavButtonAbout: React.FC = () => {

  const [vmin, setVmin] = useState(() => width() / 4);


 const handleResize = () => {
  setVmin(width() / 4);
};

useLayoutEffect(() => {

  setVmin(width() / 4);

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); 

  
  const handleClick = () => {
    console.log('123');
  };

  return (
    <>
      <svg overflow="visible" className='nav__btn side__elem' onClick = {handleClick} width= {vmin} height= {vmin} viewBox="0 0 216 216" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="AboutBtn">
      <g id="g2">
<path id="t3" d="M109 101.5L107 101.5C103.962 101.5 101.5 99.0376 101.5 96L101.5 74.8029C101.5 73.8737 101.735 72.9596 102.184 72.146L103.184 70.3335C105.276 66.5427 110.724 66.5427 112.816 70.3335L113.816 72.146C114.265 72.9596 114.5 73.8737 114.5 74.8029L114.5 96C114.5 99.0376 112.038 101.5 109 101.5Z" stroke="#B9B9B9" stroke-width="3"/>
<path id="t2" d="M115.01 113.424L116.425 112.01C118.573 109.862 122.055 109.862 124.203 112.01L139.191 126.999C139.848 127.656 140.328 128.469 140.586 129.361L141.161 131.35C142.362 135.509 138.51 139.362 134.35 138.161L132.362 137.586C131.469 137.328 130.656 136.848 129.999 136.191L115.01 121.203C112.863 119.055 112.863 115.572 115.01 113.424Z" stroke="#B9B9B9" stroke-width="3"/>
<path id="t1" d="M99.3559 112.01L100.77 113.425C102.918 115.573 102.918 119.055 100.77 121.203L85.7815 136.191C85.1244 136.848 84.3116 137.328 83.4189 137.586L81.4302 138.161C77.2708 139.362 73.4182 135.51 74.6198 131.35L75.1943 129.362C75.4522 128.469 75.9321 127.656 76.5891 126.999L91.5777 112.01C93.7256 109.863 97.208 109.863 99.3559 112.01Z" stroke="#B9B9B9" stroke-width="3"/>
</g>
      <g id="g1">
      <path id="c3" d="M107.5 188.5C151.683 188.5 187.5 152.683 187.5 108.5C187.5 64.3172 151.683 28.5 107.5 28.5C63.3172 28.5 27.5 64.3172 27.5 108.5C27.5 152.683 63.3172 188.5 107.5 188.5Z" stroke="#B9B9B9" stroke-width="3"/>
      <path id="c2" d="M107.5 188.5C151.683 188.5 187.5 152.683 187.5 108.5C187.5 64.3172 151.683 28.5 107.5 28.5C63.3172 28.5 27.5 64.3172 27.5 108.5C27.5 152.683 63.3172 188.5 107.5 188.5Z" stroke="#B9B9B9" stroke-width="3"/>
      <path id="c1" d="M107.5 188.5C151.683 188.5 187.5 152.683 187.5 108.5C187.5 64.3172 151.683 28.5 107.5 28.5C63.3172 28.5 27.5 64.3172 27.5 108.5C27.5 152.683 63.3172 188.5 107.5 188.5Z" stroke="#B9B9B9" stroke-width="3"/>
      </g>
      </g>
      </svg>
    </>
  )
}

export default NavButtonAbout