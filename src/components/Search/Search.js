import React from 'react'
import styles from './search.module.scss'

function Search({setSearch ,setPageNumber}) {
  return (
   <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center my-5 gap-3'>
    <input onChange={(e)=>{ 
       setPageNumber(1);
      return setSearch(e.target.value)}} 
      placeholder='Search for characters' type='search' className={`${styles.input}`} />
    <button onClick={(e)=>e.preventDefault()} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
   </form>
  )
}

export default Search