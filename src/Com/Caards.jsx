import React from "react";
import Cdata from "./Cdata";
import Card from "./Card";

const Caards = (props) => {
  return (
    <>
      <div className="App">
        <h1 className="h1">Series</h1>

        {Cdata.map((val, index) => {
          console.log(index);
          return (
            <Card
              key={val.id}
              cimg1={val.cimg1}
              cname={val.cname}
              ctitle={val.ctitle}
              links={val.links}
            />
          );
        })}
      </div>
    </>
  );
};

export default Caards;
