import React , {useState} from 'react';
import './HookStyle.css';

const Hook = () => {

    //const state =useState();
     //console.log(state);

     const [count,setCount] = useState(0);

     const ChangeNum = () =>
     {
         setCount(count + 5);
        //console.log("clicked" + count++);

     };


    return ( 
        <div className="hook">
        <h2> {count} </h2> <br/>
        <button className="btn" onClick={ChangeNum}>Click Me</button>
        </div>
     );
}
 
export default Hook;