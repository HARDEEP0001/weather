import React from 'react';
import './App.css';
import Tempapp from "./Components/Tempapp";
import hi from "./video/hi.mp4";
function App(){
  return(
    <div className='App'>
    
    
    <video autoPlay loop muted>
      <source src={hi} type="video/mp4"/>
      
    </video>
    <Tempapp />
    
    
    


    
  
  </div>
  )
}
export default App;