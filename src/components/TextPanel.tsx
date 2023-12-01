import React, { useEffect, useState } from 'react'
import "./textPanel.scss"
import testData from "./../../public/data/test.json"
import RoundButton from "./RoundButtonTest"

const questions = Object.values(testData).map(item => item.Question);
const answers = Object.values(testData).map(item => item.Answers);
const corrects = Object.values(testData).map(item => item.Correct);

let userAnswers: Array<number> = [];

interface props {
  text:number;
}



const TextPanel:React.FC<props> = ({ text = 1 }) => {
  const [page, setPage] = useState(1);

  const [isActive, setActive] = useState(0);

  

  const [radioValue, setRadioValue] = useState(1);

  useEffect(() => {
    console.log('page:', text);
    console.log(corrects)
    console.log('answ:',userAnswers)
    userAnswers[text - 1] === undefined? setActive(0) : setActive(userAnswers[text - 1])
    const numberOfMatches = corrects.filter(value => userAnswers.includes(value)).length;
    console.log(numberOfMatches)
    //setPage(1); 
  }, [text]);

  const CheckFirst = (value:number) => {
    if (userAnswers[text - 1] === 1) {
      userAnswers[text - 1] = 0; 
      setActive(0)
      
    } else {
      setActive(1)
      userAnswers[text - 1] = 1;
    }
  }
  const CheckSecond = (value:number) => {
    if (userAnswers[text - 1] === 2) {
      userAnswers[text - 1] = 0; 
      setActive(0)
    } else {
      userAnswers[text - 1] = 2;
      setActive(2)
    }
  }
  const CheckThird = (value:number) => {
    if (userAnswers[text - 1] === 3) {
      userAnswers[text - 1] = 0; 
      setActive(0)
    } else {
      userAnswers[text - 1] = 3;
      setActive(3)
    }
  }

  return (
    <div className='text__panel'>
        <h1>Test</h1>
        <h3 className='substring'>Evaluate your knowledge</h3>
        <h4>{questions[text - 1]} </h4>
        <div className='test__answers'>
          <div className='inline__flex'>
            <RoundButton 
            className={isActive === 1 ? 'active': undefined}
            updatePage2 = {CheckFirst} 
            //onChange={(e) => setRadioValue(e.currentTarget.value)}
            //value={radio.value}
             />
            <p className='answer'>{answers[text - 1][0]}</p>
          </div>
          <div className='inline__flex'>
            <RoundButton 
            updatePage2 = {CheckSecond}
            className={isActive === 2 ? 'active': undefined}
            
            />
            <p className='answer'>{answers[text - 1][1]}</p>
          </div>
          <div className='inline__flex'>
            <RoundButton updatePage2 = {CheckThird}  
            className={isActive === 3 ? 'active': undefined}
            />
            <p className='answer'>{answers[text - 1][2]}</p>
          </div>
    </div>
    </div>
  )
}

export default TextPanel