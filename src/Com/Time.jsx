import React , {useState} from 'react';
import './HookStyle.css'

const Time = () => {
  
    //const state = useState();

    let newTime = new Date().toLocaleTimeString();

    const [curtime, setcurTime] = useState(newTime);

    const UpdateTime = () => {

        let newTime = new Date().toLocaleTimeString();
        setcurTime(newTime);

    };

    return ( 
        <div>
            <h1>{curtime}</h1> <br/>
            <button className="btn" onClick={UpdateTime}>Click Here</button>
        </div>
     );
}
 
export default Time;