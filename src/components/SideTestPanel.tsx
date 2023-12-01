import {useState} from 'react'
import "./Basic.scss"
import "./SideTestPanel.scss"
import TransparentRing from "./../assets/svg/tranparentRing.svg"
import RoundButton from "./RoundButton"

interface SideTestPanelProps {
    updatePage: (page: number) => void;
  }
  

var page:number = 1;

const SideTestPanel: React.FC<SideTestPanelProps> = ({ updatePage }) => {

    const [textTop, setTextTop] = useState<string>("Q1")
    const [textMid, setTextMid] = useState<string>("Q1")
    const [textBot, setTextBot] = useState<string>("Q2")

    updatePage(page);

    const nextPage = () => {
        page++;
        setTextTop("Q" + (page - 1));
        setTextMid(page !== 7? `Q${ page }` : "Result" );
        setTextBot(page !== 6? `Q${ page + 1 }` : "Result")
        updatePage(page);
      };

    const prevPage = () => {
        page--;
        setTextTop("Q" + (page - 1));
        setTextMid("Q" + page );
        setTextBot(page !== 6? `Q${ page + 1 }` : "Result")
        updatePage(page);
    };

  return (
    <>
        <img src = {TransparentRing} className='background__space scroll__infinite'  alt = "ring"></img>
        <div className="side__panel">
            {page !== 1 && (
                <div className="shift__top" onClick={() => prevPage()} >
                    <RoundButton text = {textTop} setText = {setTextTop}/>
                </div>
            )}
           
            <div className="shift__right">
                <RoundButton 
                    text = {textMid} 
                    setText = {setTextMid} 
                    className="active"
                />
            </div>

            {page !== 7 && (
                <div className="shift__bottom" onClick={() => nextPage()}>
                    <RoundButton text = {textBot} setText = {setTextBot}/>
                </div>
            )}
        </div>
        
    </>
  )
}

export default SideTestPanel