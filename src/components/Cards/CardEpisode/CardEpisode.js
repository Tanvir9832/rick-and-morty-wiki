import React from 'react'
import { Link } from 'react-router-dom';
import Style from '../Cards.module.scss'

const CardEpisode = ({newResults ,page}) => {
  return (
    <div className='row'>
        {
            newResults.map((element,index)=>{
                const {id ,name,image,status} = element.data ;

                return(
                <Link to={`${page}${id}`} key={index} className={`${Style.cards} text-dark text-decoration-none card col-lg-3 col-sm-12 col-md-3 position-relative m-2 fluid`}>
                        <img src={image} alt="Loading" className={`${Style.img} card-img-top`} />
                        <div className='card-body'>
                        <h1 className='card-title fs-4 mb-4 fw-bold'>{name}</h1>
                        <div className='fs-6 card-text'>Last location</div>
                        <div className='fs-5 card-text'>{element.data.location.name}</div>
                        </div>
                            {(()=>{
                                if(status==="Alive"){
                                    return(
                                        <div className='badge bg-success position-absolute'>{status}</div>
                                        )
                                   
                                }else if(status==="Dead"){
                                    return(
                                    <div className='badge bg-danger position-absolute'>{status}</div>
                                    )
                                }else{
                                    return(
                                    <div className='badge bg-secondary position-absolute'>{status}</div>
                                    )
                                }
                            })()

                            }

                        
                    </Link>
                )
            })
        }
    </div>
  )
}

export default CardEpisode