import React, { useEffect } from "react";
import Card from "../Card/Card";
import Refresh from "../NavBar/Buttons/Refresh";

function Cards({ dogToShow }) {
  return (
    <div className="relative">
      {dogToShow.length === 0 ? (
        <div className="flex h-[100vh] flex-col text-2xl text-center justify-center items-center">
          <h6 className=" font-bold text-white text-5xl underline underline-offset-2">
            Dogs not found
          </h6>
          <p className=" font-light p-5">Please refresh the page!</p>
          <Refresh />
        </div>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-4">
          {dogToShow.map((d) => {
            return (
              <Card
                key={d.id}
                id={d.id}
                name={d.name}
                img={d.image}
                temp={d.temperaments}
                peso={d.weight}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cards;
