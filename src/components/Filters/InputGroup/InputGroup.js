import React from 'react'

const InptutGroup = ({total ,name, setId}) => {
const page = [...Array(total).keys()];
const handleChange=(e)=>{
  setId(e.target.value);
}


  return (
    <>
    <div class="input-group mb-3">
  <select class="form-select" id={name} onChange={handleChange}>
    <option selected>Choose...</option>
    {
        page.map((x)=>{
            return <option value={x+1} key={x}>{name} - {x+1}</option>
        })
    }

  </select>
  
    </div>

    </>
  )
}

export default InptutGroup