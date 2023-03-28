import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const CardDetails = () => {
  const {id} =useParams();
  const api =`https://rickandmortyapi.com/api/character/${id}`;
  const [data,setData] = useState("");

  useEffect(() => {
    (
      async function(){
        let dat  = await axios.get(api); 
        if(dat){
          setData(dat.data);
        }else{
          setData('');
        }
          
       
      }
    )();
  }, [api])
  
  let {name,status,image,gender,location,origin,species,type } =data;
  
   if(data){
    return(
      <div className='container d-flex justify-content-center mt-5'>
        <div className='d-flex flex-column gap-1'>
            <h1 className={`text-center`}>{name}</h1>
            <img src={image} alt="loading" />

            {
              (
                ()=>{
                  if(status==="Alive"){
                    return <h3 className='text-white bg-success text-center mt-2 rounded-3'>{status}</h3>
                  }
                  else if(status==="Dead"){
                    return <h3 className='text-white bg-danger text-center mt-2 rounded-3'>{status}</h3>
                  }else{
                    return <h3 className='text-white bg-secondary text-center mt-2 rounded-3'>{status}</h3>
                  }
                }
              )()
            }
            
            <p><span className='fw-bold'>Gender : </span> {gender}</p>
            <p><span className='fw-bold'>Location : </span> {location?.name}</p>
            <p><span className='fw-bold'>Origin : </span> {origin?.name}</p>
            <p><span className='fw-bold'>Species : </span> {species}</p>
            <p><span className='fw-bold'>Type : </span> {type ? type : "unknown"}</p>
      
        </div>
       
      </div>
      
      
        )
   }else{
    return(
    <h1 className='text-center text-primary mt-5'>404 Page Not Found</h1>
    )
   }
  }
 



export default CardDetails