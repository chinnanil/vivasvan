import React from "react";
import  "./App.css";
//import image from "./images/main_image.jpg";
import Card from "./components/Card";



function App() {
  return (
   
      <div className="header">
        <div className="header_left"></div>
        <div className="header_right">
              <div className="title"><h2 className="tagLine">Official Agency for jlStream</h2>
              <a target="_blank" href="" class="title__potluck-btn" rel="noopener noreferrer">Register with us →</a>
              </div>
              <div className="people">
                <Card />
              </div>
        </div>
       
      
    </div>
  );
}

export default App;
