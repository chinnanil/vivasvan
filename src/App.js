import React from "react";
import  "./App.css";

import Card from "./components/Card";

import myPost from "./images/collage2.jpg";




function App() {
  return (
   
      <div className="header">
        <div className="header_left">
      
          <img src={myPost} alt="collage"></img>

          
        </div>
        <div className="header_right">
              <div className="title"><h2 className="tagLine">Official Agency of jlStream</h2>
              <a target="_blank" href="#" class="title__potluck-btn" rel="noopener noreferrer">Agency Code :→ <code style={{fontSize:20}}>1899</code> </a>
              
              </div>
              <div className="people">
                <Card />
              </div>
        </div>
       
      
    </div>
  );
}

export default App;
