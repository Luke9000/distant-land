import React, { useEffect, useState } from 'react';
import "./imagePanel.scss"
import SubText from "./SubText" 


//const screenResolutionTreshhold1 = 1.4;
const screenResolutionTreshhold2 = 1.1;

const ImagePanel: React.FC = () => {
  const [shouldRenderLast, setShouldRenderLast] = useState<boolean>(window.innerWidth / window.innerHeight > screenResolutionTreshhold2);
  useEffect(() => {
    const handleResize = () => {
      setShouldRenderLast(window.innerWidth / window.innerHeight > screenResolutionTreshhold2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='flex__inline'>
      {shouldRenderLast ?
      <>
        <div className='background__surface inline__elem pluto flow__animation '>
            <SubText />
            <h2 className='floating__text lift__anim' >Pluto
            <SubText />
            </h2>    
        </div>
      </>
      : 
        <div className='background__surface inline__elem single__image pluto'>
          <h2 className='floating__text--middle lift__anim' >Pluto
          <SubText />
          </h2> 
        </div>
      }

      {shouldRenderLast ? (  
        <>
        <div className='background__surface shifted__right inline__elem mars flow__animation'>
          <h2 className='floating__text lift__anim' >Mars
          <SubText /> 
          </h2> 
        </div>
        </>
      ) : null}
      {shouldRenderLast ? ( 
        <>
        <div className='background__surface shifted__right2 inline__elem flow__animation'>
            <h2 className='floating__text lift__anim'>Venus
            <SubText />  
            </h2> 
             
        </div>
        </>
      ) : null}

      

      </div>
    </>
  )
}

export default ImagePanel