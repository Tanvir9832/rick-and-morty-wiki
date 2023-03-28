import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards"
import Filters from "./components/Filters/Filters"
import Navbar from "./components/Navbar/Navbar"
import CardDetails from "./components/Cards/CardDetails/CardDetails"

import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import { ContextWeMade } from "./context/context";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Episode from "./components/Pages/Episode"
import Location from "./components/Pages/Location"


function App(){
  return(
    <Router>
      <div className="App">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episode />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}



const Home = ()=> {

  let [gender,setGender] = useState("");
  let [species,setSpecies] = useState("");
  let [status ,setStatus] = useState("");
  let [search,setSearch]=useState("");
  let [pageNumber,setPageNumber] =useState(1);
  let [dataArray,setDataArray] =useState([]);
  let {info ,results} =dataArray;

  // https://rickandmortyapi.com/api/character/?name=rick&status=alive

  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
    (async function(){
      let data = await axios.get(api)
      setDataArray(data.data);

    })()

  },[api])

  return (
    <div className="App">
    <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row ">

                <ContextWeMade.Provider value={{setGender,setStatus,setSpecies,setPageNumber}}>
                    <Filters />
                </ContextWeMade.Provider>
            
          <div className="col-9 ">
            <>
              <Cards page="/" results={results} />

            </>

          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;