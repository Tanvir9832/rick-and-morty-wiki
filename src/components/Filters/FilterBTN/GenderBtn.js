import React,{useContext} from 'react'
import { ContextWeMade } from '../../../context/context'


const GenderBtn = () => {
  const {setGender,setPageName} =useContext(ContextWeMade);
  return (
    <div className='d-flex flex-wrap gap-3'>
        <button onClick={()=>{setGender("Male"); setPageName("1");}} className='btn btn-outline-primary'>Male</button>
        <button onClick={()=>{setGender("female"); setPageName("1");}} className='btn btn-outline-primary'>Female</button>
        <button onClick={()=>{setGender("GenderLess"); setPageName("1");}}className='btn btn-outline-primary'>GenderLess</button>
        <button onClick={()=>{setGender("unknown"); setPageName("1");}} className='btn btn-outline-primary'>Unknown</button>
    </div>
  )
}

export default GenderBtn