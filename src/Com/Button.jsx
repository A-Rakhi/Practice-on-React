import React, { useState } from 'react';
import './Button.css';

const Button = () => {

    const [count,setCount] = useState(0);

    const UpdateNum =() =>{
        setCount(count+1);
    };

    const Decrementnum =() =>
    {
        if(count>0){
        setCount(count-1);
     }
     else {
         alert("Sorry, Zero Limit reached")
         setCount(0);
     }

    }
    return ( 
        <>

        <div className="full">
         <div className="box">
          <h2> {count}</h2>

          <div className="box-btn">
          <button className="btn" onClick={UpdateNum}>Increament</button>
          <button className="btn" onClick={Decrementnum} >Decreament</button>
           </div>
           </div>
          </div>
        </>
     );
}
 
export default Button;