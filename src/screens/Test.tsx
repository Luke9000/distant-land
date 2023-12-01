import { useState } from 'react'
import NavButtons from '../components/NavButtons'
import SideTestPanel from '../components/SideTestPanel'
import TextPanel from '../components/TextPanel'
import './../components/Basic.scss'


const Test = () => {
  const [page, setPage] = useState(1);

  const updatePage = (value:number) => {
    setPage(value);
  }


  return (
    <>
        
        <div className='bg__img bg__img--test'></div>
        <SideTestPanel updatePage={updatePage} />
        <NavButtons />  
        <TextPanel text = {page} />
        
        
        
    </>
  )
}

export default Test