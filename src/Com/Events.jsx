import React, { useState } from "react";
import "./HookStyle.css";

const Events = () => {
  //const state = useState();
  const sky = " #a3c6c7";
  const name = "click me";

  const [bg, setBg] = useState(sky);
  const [newname, setName] = useState(name);

  const UpdateStyle = () => {
    const updateBg = "#d28e1242";
    setBg(updateBg);
    setName("Clicked Ok !");
  };

  const BackBg = () => {
    setBg(sky);
    setName("Click Back !");
  };

  return (
    <div className="hook" style={{ backgroundColor: bg }}>
      <button
        className="btn"
        onClick={UpdateStyle}
        onDoubleClick={BackBg}
        onMouseEnter={UpdateStyle}
        onMouseLeave={BackBg}
      >
        {newname}
      </button>
    </div>
  );
};

export default Events;
