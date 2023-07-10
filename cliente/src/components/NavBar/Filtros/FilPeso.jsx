import React from "react";
import { useDispatch } from "react-redux";
import { filtroByWeight } from "../../../Redux/Actions";

function FilPeso({setLoading}) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    e.preventDefault();
    dispatch(filtroByWeight(value));
    setLoading(true)
  };

  return (
    <div
      className=" bg-amber-400 p-1 rounded-xl rounded-b-none font-bold text-gray-300 hover:bg-blue-700"
    >
      <select
        name="Peso"
        id="Peso"
        className="  text-center outline-none bg-blue-700 rounded-lg rounded-b-none"
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Weight"
      >
        <option hidden value="">
          Weight
        </option>
        <option value="Des">Des</option>
        <option value="Asc">Asc</option>
      </select>
    </div>
  );
}

export default FilPeso;
