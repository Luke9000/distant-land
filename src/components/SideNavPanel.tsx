import React from 'react'
import "./SideNavPanel.scss"
import "./navButton.scss"
import ContactButton from "./NavButtonContacts"
import LibraryButton from "./NavButtonLibrary"
import TestButton from "./NavButtonTest"
import AboutButton from "./NavButtonAbout"
import TransparentRing from "./../assets/svg/tranparentRing.svg"
import SpinBtn from "./SpinBtn"

const SideNavPanel = () => {

  return (
    
    <>  
            <img src = {TransparentRing} className='background__space scroll__infinite'  alt = "ring"></img>
            <div className='side__panel'>    
              <div className='inline__flex'>
                <LibraryButton />
                <ContactButton />
              </div>          
              <h1>Distant <br></br> Land
              </h1>  
              <div className='above'>
                <SpinBtn /> 
              </div>
              <div className='inline__flex'>
                <TestButton />
                <AboutButton />
              </div>
            </div>
        
    </>
    
  )
}

export default SideNavPanel

{ /* <img  src = {LibraryButton2} className='nav__btn' onClick={() => alert('123')}></img> */}