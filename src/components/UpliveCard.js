import React from 'react'
import '../styles/UpliveCard.css'
import unnamed from '../images/unnamed.jpg'

export default function UpliveCard() {
    return (
        <div class="upcard">
                <div class="upimage">
                <img src={unnamed} alt="viv"></img>
                </div>
                <div class="updetails">
                  <p>Agency Code :<span className="agencycode">11246</span>  <br /> 
                  <hr /> 
                  Fill this Form to join UPLive <br />
                  <br />
                 <a href=" https://forms.gle/gRVJf8KBzsNhFECC9" >Form</a></p>
                </div>
        </div>
    )
}
