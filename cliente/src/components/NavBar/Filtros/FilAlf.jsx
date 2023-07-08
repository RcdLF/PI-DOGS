import React from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "../../../Redux/Actions";

function FilAlf() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    e.preventDefault();
    dispatch(filterByName(value));
  };

  return (
    <div className=" bg-amber-400 p-1 rounded-xl rounded-b-none font-bold text-gray-300 hover:bg-blue-700">
      <select 
        className=" text-center outline-none bg-blue-700 rounded-lg rounded-b-none"
      onChange={(e) => handleChange(e)}>
        <option hidden value="">
          Alfabetic
        </option>
        <option 

        value="Asc">A - Z</option>
        <option 
  
        value="Desc">Z-A</option>
      </select>
    </div>
  );
}

export default FilAlf;
