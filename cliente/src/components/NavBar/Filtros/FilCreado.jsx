import React from "react";
import { useDispatch } from "react-redux";
import { filtroCreado, getAllDogs } from "../../../Redux/Actions";

function FilCreado({setLoading}) {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const value = e.target.value;
    e.preventDefault();
    if(value !=="Created")dispatch(getAllDogs())
    dispatch(filtroCreado(value));
    setLoading(true)
  };

  return (
    <div
      className=" bg-amber-400 p-1 rounded-xl rounded-b-none font-bold text-gray-300 hover:bg-blue-700"
    >
      <select
        className=" text-center outline-none bg-blue-700 rounded-lg rounded-b-none"
        onChange={(e) => {
          handleFilter(e);
        }}
      >
        <option value="All" className="">
          All
        </option>
        <option value="Created" className="">
          Created
        </option>
        <option value="Existing" className="">
          Existing
        </option>
      </select>
    </div>
  );
}

export default FilCreado;
