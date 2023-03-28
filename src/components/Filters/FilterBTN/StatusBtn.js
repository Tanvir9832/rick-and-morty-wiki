import React ,{useContext} from 'react'
import { ContextWeMade } from '../../../context/context'

const StatusBtn = () => {
  const {setStatus , setPageName} =useContext(ContextWeMade);
  return (
    <div className='d-flex gap-3 flex-wrap'>
    <button onClick={()=>{setStatus("Alive"); setPageName("1")}} className='btn btn-outline-primary'>Alive</button>
    <button onClick={()=>{setStatus("Dead"); setPageName("1")}} className='btn btn-outline-primary'>Dead</button>
    <button onClick={()=>{setStatus("Unknown"); setPageName("1")}} className='btn btn-outline-primary'>Unknown</button>
</div>
  )
}

export default StatusBtn