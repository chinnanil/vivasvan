import React from "react";
import  "./App.css";
import image from "./images/main_image.jpg"


function App() {
  return (
   
      <div className="header">
        <div className="header_left"><img src={image} alt="nothing"></img></div>
        <div className="header_right">2</div>
        
      
    </div>
  );
}

export default App;
