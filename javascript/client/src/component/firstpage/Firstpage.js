import React from "react";
import "./firstpage.css";
import Child from "./Child";

const Firstpage = () => {
  const styles = {
    color: "yellow",
    backgroundColor: "gray",
    textAlign: "center",
  };

  return (
    <>
      <div style={{ color: "red", backgroundColor: "green", fontSize: "45px" }}>
        <h1>hello world</h1>
      </div>
      <div style={styles} className="font-bold text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem quis
        similique nostrum non, sit debitis. Tempore, velit, hic, porro nihil
        repudiandae quasi qui vero veritatis voluptates architecto excepturi
        facere?
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus,
        debitis qui praesentium expedita harum consectetur officia perferendis
        consequuntur, recusandae eum illum laudantium labore accusantium quo
        autem voluptas facere asperiores?
      </div>
      <Child />
    </>
  );
};

export default Firstpage;
