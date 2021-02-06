import React from 'react';
import './CardStyle.css'
//import "./react-bootstrap";


const Card = (props) => {
    return ( 
    <>
    <div className="card-group">
      <div className="card">
       <img src="cimg1" className="card-img-top" alt="..."/> 
        <div className="card-body">
         <h5 className="card-title">{props.ctitle}</h5>
          <p className="card-text">{props.cname}</p>
           <a href={props.links} target="">
            <button>Watch Now</button>
            </a>
          </div>
       </div>
     </div>
  </>

     );
}
 
export default Card;