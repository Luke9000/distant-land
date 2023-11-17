import React, { useLayoutEffect, useState } from 'react'
import "./navButton.scss"


let width = () => {
  let vmin = Math.min(window.innerWidth, window.innerHeight) / 2;
  console.log(vmin);
  return (vmin);
};


let vmin = width() /2;



const NavButtonLibrary: React.FC = () => {

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
      <g id="LibraryBtn">
      <g id="g2">
      <path id="t3" d="M108.75 68.4537L119.905 74.8943C120.679 75.3409 121.155 76.1662 121.155 77.0594V89.9406C121.155 90.8338 120.679 91.6591 119.905 92.1057L108.75 98.5463C107.976 98.9928 107.024 98.9928 106.25 98.5463L95.0946 92.1057C94.3211 91.6591 93.8446 90.8338 93.8446 89.9406V77.0594C93.8446 76.1662 94.3211 75.3409 95.0946 74.8943L106.25 68.4537C107.024 68.0072 107.976 68.0072 108.75 68.4537Z" stroke="#B9B9B9" stroke-width="3"/>
      <path id="t2" d="M128.75 104.454L139.905 110.894C140.679 111.341 141.155 112.166 141.155 113.059L141.155 125.941C141.155 126.834 140.679 127.659 139.905 128.106L128.75 134.546C127.976 134.993 127.024 134.993 126.25 134.546L115.095 128.106C114.321 127.659 113.845 126.834 113.845 125.941L113.845 113.059C113.845 112.166 114.321 111.341 115.095 110.894L126.25 104.454C127.024 104.007 127.977 104.007 128.75 104.454Z" stroke="#B9B9B9" stroke-width="3"/>
      <path id="t1" d="M88.75 105.454L99.9054 111.894C100.679 112.341 101.155 113.166 101.155 114.059V126.941C101.155 127.834 100.679 128.659 99.9054 129.106L88.75 135.546C87.9765 135.993 87.0235 135.993 86.25 135.546L75.0946 129.106C74.3211 128.659 73.8446 127.834 73.8446 126.941V114.059C73.8446 113.166 74.3211 112.341 75.0946 111.894L86.25 105.454C87.0235 105.007 87.9765 105.007 88.75 105.454Z" stroke="#B9B9B9" stroke-width="3"/>
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

export default NavButtonLibrary