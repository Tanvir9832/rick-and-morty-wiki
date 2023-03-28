import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

function Cards({results,page}) {

  return (
         <div className="row">
            {results&&results.map((elm)=>{
              return(

                <Link to={`${page}${elm.id}`} className={`${styles.cards} col-lg-3 col-sm-12 col-md-4 mt-2 card position-relative m-3 text-decoration-none text-dark`} key={elm.id}>
                  <img src={elm.image} className={`${styles.img} card-img-top img-fluid`} alt='loading' />
                  <div className='card-body'>
                    <h1 className='card-title fs-4 fw-bold mb-4'>{elm.name}</h1>
                    <div className='fs-6 card-text'>Last Location</div>
                    <div className='fs-5 card-text'>{elm.location.name}</div>

                  </div>
                  {
                    (()=>{
                      if(elm.status ==='Dead'){
                        return(
                          <div className={`badge bg-danger position-absolute`}>{elm.status}</div>
                        )
                      }else if(elm.status === 'Alive'){
                        return(
                          <div className={`badge bg-success position-absolute`}>{elm.status}</div>
                        )
                          
                      }else{
                        return(
                          <div className={`badge bg-secondary position-absolute`}>{elm.status}</div>
                        )
                          
                      }
                    })()}

                </Link>
              )
            })}
         </div>
  )
}

export default Cards