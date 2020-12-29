import React from "react";
import  "./App.css";
import image from "./images/main_image.jpg";
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
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScuA6rnt8QH_Ke3QhobUcYQC53BbMyNru0Ic-i6lLWvUx97mg/viewform?usp=sf_link" class="title__potluck-btn" rel="noopener noreferrer">Register with us →</a>
              </div>
              <div className="people">
                <Card />
              </div>
        </div>
       
      
    </div>
  );
}

export default App;
