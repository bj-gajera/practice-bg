import React from "react";

const Prop = (prop) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-red-500">
        My name is {prop.name} and age is {prop.age} = {prop.data}
      </h1>
      <p className="font-bold text-2xl">{prop.dat}</p>
      <p>
        {prop.obj.name} {prop.obj.age}
      </p>
      <button className="border-2" onClick={() => prop.myFunc("harsh joshi")}>
        change
      </button>
    </>
  );
};

export default Prop;
