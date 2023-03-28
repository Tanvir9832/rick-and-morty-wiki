import axios from 'axios';
import React, { useEffect, useState } from 'react'

import CardEpisode from '../Cards/CardEpisode/CardEpisode';
import InptutGroup from '../Filters/InputGroup/InputGroup';

const Location = () => {
  const [id,setId] =useState('1');
  const [locationData, setLocationData] = useState([]);
  const [newResults,setNewResults] =useState([]);
  const LocationApi =`https://rickandmortyapi.com/api/location/${id}`;

  const {name,type,dimension} = locationData;


  useEffect(()=>{
     (async function dataFetching(){
      const data = await axios.get(LocationApi);
      setLocationData(data.data)

      const a = await Promise.all(
        data.data.residents.map((x)=>{
          return axios.get(x);
        })
      )
     setNewResults(a);
    })()
    
    
  },[LocationApi])

  return (
    <div className='container'>
      <h1 className='text-center fs-1 fw-bold'>Location : <span className='text-primary'>{name}</span></h1>
      <h3 className='text-center fs-5 mt-3'>Dimension : {dimension}</h3>
      <h5 className='text-center fs-6 mb-3'> Type : {type}</h5>


      <div className='row'>
        <div className='col-sm-12 col-lg-3 col-md-3 '>
            <div className='text-center mb-3 fw-bold'>
              Location
            </div>
            <div>
                  <InptutGroup setId={setId} name="Location" total={126} />
            </div>
        </div>
        <div className='col-9'>
            <CardEpisode page="/location/" newResults={newResults} />
        </div>
      </div>
    </div>
  )
}

export default Location