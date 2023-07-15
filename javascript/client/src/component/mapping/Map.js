import React from "react";

const Map = () => {
  const Mappingdata = [
    {
      name: "red",
      age: 45,
      address: "ahemedabad",
    },
    {
      name: "green",
      age: 20,
      address: "palanpur",
    },
    {
      name: "blue",
      age: 25,
      address: "surat",
    },
  ];
  return (
    <>
      <div className="border-2 p-4">
        {/* {Mappingdata[0].name} */}
        {Mappingdata.map((item) => {
          return (
            <>
              <div className="text-2xl border-4 border-black">
                <h1 className="text-xl font-semibold">
                  {item.name}
                  {item.age}
                  {item.address}
                </h1>
                <p></p>
                <p>{item.address}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Map;
