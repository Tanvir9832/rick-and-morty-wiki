import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
import CardEpisode from '../Cards/CardEpisode/CardEpisode';
import InputGroup from '../Filters/InputGroup/InputGroup'

const Episode = () => {

  const [episodeData,setEpisodeData] = useState([]);
  const [id ,setId] =useState("1");
  const [newResults,setNewResults] = useState([]);

  const episodeApi = `https://rickandmortyapi.com/api/episode/${id}`;
  const {air_date,name} =episodeData&&episodeData;


  useEffect(()=>{
    (async function dataFetching(){
      const data = await axios.get(episodeApi);
       setEpisodeData(data.data);

      let a =await Promise.all(
        data.data.characters.map((x)=>{
          return axios.get(x);
        })
      )
     setNewResults(a);
    })()
    
  },[episodeApi])
  

  return (
    <div className='container'>
      <div className='row'>
          <h1 className='text-center'> Episode Name : <span className='text-primary'>{name===""?"unknown": name }</span></h1>
          <h5 className='text-center'>Air Date : {air_date===""?"unknown": air_date}</h5>
      </div>
      <div className='row'>
        <div className="col-lg-3 col-md-3 col-sm-12">
         <div className='text-center mb-3 fw-bold'>
         Pick Episode
         </div>
         <div>
          <InputGroup name="Episode" total={51} setId={setId} />
         </div>
          </div>


          <div className="col-9">
            <>
              <CardEpisode page="/episodes/" newResults={newResults} />
            </>
          </div>
      </div>
    </div>
  )
}

export default Episode