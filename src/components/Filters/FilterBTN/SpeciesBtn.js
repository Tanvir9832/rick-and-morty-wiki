import React,{useContext} from 'react'
import { ContextWeMade } from '../../../context/context'


const SpeciesBtn = () => {
  const {setSpecies,setPageName} =useContext(ContextWeMade);
  return (
    <div className='d-flex flex-wrap gap-3'>
      <button onClick={()=>{setSpecies("human"); setPageName("1")}} className='btn btn-outline-primary'>Human</button>
      <button onClick={()=>{setSpecies("Alien"); setPageName("1")}} className='btn btn-outline-primary'>Alien</button>
      <button onClick={()=>{setSpecies("Humanoid"); setPageName("1")}} className='btn btn-outline-primary'>Humanoid</button>
      <button onClick={()=>{setSpecies("poopybutthole"); setPageName("1")}} className='btn btn-outline-primary'>Poopybutthole</button>
      <button onClick={()=>{setSpecies("Mythological"); setPageName("1")}} className='btn btn-outline-primary'>Mythological</button>
      <button onClick={()=>{setSpecies("Unknown"); setPageName("1")}} className='btn btn-outline-primary'>Unknown</button>
      <button onClick={()=>{setSpecies("Animal"); setPageName("1")}} className='btn btn-outline-primary'>Animal</button>
      <button onClick={()=>{setSpecies("Disease"); setPageName("1")}} className='btn btn-outline-primary'>Disease</button>
      <button onClick={()=>{setSpecies("Robot"); setPageName("1")}} className='btn btn-outline-primary'>Robot</button>
      <button onClick={()=>{setSpecies("Cronenberg"); setPageName("1")}} className='btn btn-outline-primary'>Cronenberg</button>
      <button onClick={()=>{setSpecies("Planet"); setPageName("1")}} className='btn btn-outline-primary'>Planet</button>
    </div>
  )
}

export default SpeciesBtn