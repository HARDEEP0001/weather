import React ,{useEffect, useState} from "react";
import "./css/style.css";
import hi from "../video/hi.mp4";


const Tempapp= () => {
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState("ambala");
    useEffect( () => {
     const fetchApi=async () => {
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=451efc26898aa90c9a5d10d01b5bdc14`;
        const response=await fetch(url);
        const resJson=await response.json();
        //console.log(resJson);
        setcity(resJson.main);

     };
     fetchApi();

    },[search])

    return(
        <>
        
    
    
    <video autoPlay loop muted>
      <source src={hi} type="video/mp4"/>
      
    </video>
            <div className="box">
                  <div className="inputData">
                <input type="search"
                value={search}
                className="inputFeild"
                    onChange= { (event) => {
                             setsearch(event.target.value)
                    }}
                />
                  </div>
                  {!city ? (
                    <p className="errorMsg">No Data Found</p>
                  ):(
                    <div>

                    <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view">{search}</i>
            </h2>
            <h1 className="temp">
                  {city.temp}°Cel
            </h1>
            <h3
                className="tempmin_max">Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel
            </h3>


            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>

                  )}
           
         
            </div>
            </>
    )
}
export default Tempapp;
