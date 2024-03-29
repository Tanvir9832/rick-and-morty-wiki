import React from 'react'
import GenderBtn from '../FilterBTN/GenderBtn'

const Gender = ({gender}) => {
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
    <GenderBtn />
      </div>
    </div>
  </div>
  )
}

export default Gender