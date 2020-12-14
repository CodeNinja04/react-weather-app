import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
import React,{useState,useEffect} from 'react';
import './App.css';
import axios from "axios";


function App() {
const [data,setData]=useState([])
const [res,setRes]=useState([])
const [main, setMain] = useState();
const [coord,setCoord]= useState([])
const [query,setQuery]= useState("indore");  
  
const handleChange = (event) => {
  setQuery(event.target.value);
};


  
  useEffect(() => {
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=5bbde8bcde83930efedd0c6a7f3c3475`
          )
          .then(async function (response) {
            console.log(response.data);
            await setMain(response.data.main);
            await setData(response.data);
            await setRes(response.data.weather[0]);
            await setCoord(response.data.coord);
          });
    });

   
  return (
    <div className="App">
    
      <Input
        icon="users"
        iconPosition="left"
        placeholder="Search "s
        onChange={handleChange}
      />
    <h1>{data.name}</h1>
    <div>
      <h2>COORDINATES:</h2>
      Latitude:{coord.lat} <p>Longitude:{coord.lon}</p> 
    </div>
    <div>Weather:</div>
      Description:{res.main}
    </div>
  );
}

export default App;


/*  
<div>TEST</div>
      <div>weather:{res.main}</div>
      <div>description : {res.description}</div>
      <div>id: {res.id}</div>
      */