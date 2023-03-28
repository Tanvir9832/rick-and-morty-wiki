import React,{useContext} from 'react'
import Species from './Category/Species'
import Status from './Category/Status'
import Gender from './Category/Gender'
import { ContextWeMade } from '../../context/context'

function Filters() {
  const {setGender ,setSpecies, setStatus,setPageName} =useContext(ContextWeMade)
  const clear =()=>{
    setGender("");
    setSpecies("");
    setStatus("");
    setPageName(1);

  }
  return (
    <div className='col-sm-12 col-lg-3 col-md-3'>
      <div className='text-center fs-4 mb-2 fw-bold'>Filter</div>
      <div style={{cursor : "pointer"}} onClick={clear} className='text-center text-decoration-underline text-primary mb-4'>Clear Filter</div>

      <div className="accordion" id="accordionExample">

          <Status />
          <Species />
          <Gender />

      </div>
    </div>
  )
}

export default Filters