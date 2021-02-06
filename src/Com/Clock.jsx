import React, { useState } from 'react';

const Clock = () => {

     //const state = useState();

     let newTime = new Date().toLocaleTimeString();
     const [curTime, setcurTime] = useState(newTime);
     
     const UpdateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setcurTime(newTime);
     };

     setInterval(UpdateTime);

    return ( 

        <>
          <h1 style= { { padding: '50px' } }> { curTime } </h1>
        </>
     );
}
 
export default Clock;