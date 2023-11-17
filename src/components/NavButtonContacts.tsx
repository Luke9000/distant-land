import React, { useLayoutEffect, useState } from 'react'
import "./navButton.scss"

let width = () => {
  let vmin = Math.min(window.innerWidth, window.innerHeight) / 2;
  console.log(vmin);
  return (vmin);
};




const NavButtonContacts: React.FC = () => {

  const handleClick = () => {
    console.log('123');
  };


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


  return (
    <>
      <svg overflow="visible" className='nav__btn side__elem slide__down' onClick = {handleClick} width= {vmin} height= {vmin} viewBox="0 0 216 216" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="ContactBtn">
      <g id="g2">
      <path id="t3" d="M106.335 96.25L98.1077 82C97.1454 80.3333 98.3483 78.25 100.273 78.25L116.727 78.25C118.652 78.25 119.855 80.3333 118.892 82L110.665 96.25C109.703 97.9167 107.297 97.9167 106.335 96.25Z" stroke="#B9B9B9" stroke-width="3"/>
      <path id="t2" d="M120.43 108.368L136.324 112.626C138.183 113.124 138.806 115.448 137.445 116.809L125.81 128.444C124.449 129.805 122.125 129.182 121.627 127.323L117.368 111.43C116.87 109.571 118.571 107.87 120.43 108.368Z" stroke="#B9B9B9" stroke-width="3"/>
      <path id="t1" d="M99.6323 112.43L95.3736 128.324C94.8755 130.183 92.5518 130.806 91.191 129.445L79.5559 117.81C78.1951 116.449 78.8177 114.125 80.6767 113.627L96.5705 109.368C98.4294 108.87 100.13 110.571 99.6323 112.43Z" stroke="#B9B9B9" stroke-width="3"/>
      </g>
      <g id="g1">
      <path id="c3" d="M108.5 188.5C152.683 188.5 188.5 152.683 188.5 108.5C188.5 64.3172 152.683 28.5 108.5 28.5C64.3172 28.5 28.5 64.3172 28.5 108.5C28.5 152.683 64.3172 188.5 108.5 188.5Z" stroke="#B9B9B9" stroke-width="3"/>
      <path id="c2" d="M108.5 188.5C152.683 188.5 188.5 152.683 188.5 108.5C188.5 64.3172 152.683 28.5 108.5 28.5C64.3172 28.5 28.5 64.3172 28.5 108.5C28.5 152.683 64.3172 188.5 108.5 188.5Z" stroke="#B9B9B9" stroke-width="3"/>
      <path id="c1" d="M108.5 188.5C152.683 188.5 188.5 152.683 188.5 108.5C188.5 64.3172 152.683 28.5 108.5 28.5C64.3172 28.5 28.5 64.3172 28.5 108.5C28.5 152.683 64.3172 188.5 108.5 188.5Z" stroke="#B9B9B9" stroke-width="3"/>
      </g>
      </g>
      </svg>
    </>
  )
}

export default NavButtonContacts