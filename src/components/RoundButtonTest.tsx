import flexibleButton from './flexibleButton';
import React, { HTMLProps, useState } from 'react'
import './roundButton.scss'

interface Props{
  text?: string;
  setText?: React.Dispatch<React.SetStateAction<string>>;
  className?: HTMLProps<HTMLElement>["className"];
  updatePage2: (page: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
}

const RoundButton2: React.FC<Props> = ({ text, setText, className, updatePage2, value }) => {
  const [isActive, setActive] = useState(false);
 // const [value, setValue] = useState(false);


  const vmin = flexibleButton() / 3;

   const toggleClass = () => {
    setActive(!isActive);
 
  };

  return (
    <>
    <div onClick={() => { updatePage2(1) }} className={`inline round__btn ${className}`} >
    <svg overflow="visible" width={vmin} height={vmin} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="g1">
    <circle id="c1" cx="18.5041" cy="18.5037" r="18.5" fill="#5E5E5E"/>
    <circle id="c2" cx="18.5041" cy="18.5037" r="18" stroke="#5E5E5E"/>
    </g>
    </svg>
    <h2 className='slightly__move--right'>{text}</h2>
    </div>
    </>
  )
  
}

export default RoundButton2