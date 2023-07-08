import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../Redux/Actions";
import patita from '../../Images/PAW-ICON.jpg'
import Card from "../Card/Card";
import Refresh from "../NavBar/Buttons/Refresh";

function Cards({ dogToShow }) {
  return (
    <div className="relative">
      {!dogToShow ? 
      <div className="absolute flex flex-col text-center justify-center items-center">

        <h2
         className=" font-bold text-white underline underline-offset-0"
        >Dogs not found</h2>
          <p className=" font-light">Please refresh the page!</p>
          <Refresh />
      </div>
      :
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

      </div>}
    </div>
  );
}

export default Cards;
