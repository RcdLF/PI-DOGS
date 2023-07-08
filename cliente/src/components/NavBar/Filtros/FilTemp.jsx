import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByTemperament, getTemperaments } from "../../../Redux/Actions";

function FilTemp() {
  const dispatch = useDispatch();
  const allTemps = useSelector((state) => state.temperaments);


  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleSelect = (e) => {
    const value = e.target.value;
    e.preventDefault();
    dispatch(getByTemperament(value));
  };

  return (
    <div
      className=" bg-amber-400 p-1 rounded-xl rounded-b-none font-bold text-gray-300 hover:bg-blue-700"
    >
    <select
      className="  text-center outline-none bg-blue-700 rounded-lg rounded-b-none"
      name="Temp"
      id="Temp"
      onChange={(e) => {
        handleSelect(e);
      }}
    >
      <option value="All">All</option>
      {allTemps.map((g) => {
        return (
          <option
          value={g.id} key={g.id}>
            {g.name}
          </option>
        );
      })}
      ;
    </select>
    </div>
  );
}

export default FilTemp;
