import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../../Redux/Actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDogByName(name));
    setName("")
    setLoading(true)
  };

  return (
    <div className="bg-amber-400 p-1 rounded-xl flex justify-center items-center text-center font-bold hover:bg-blue-700 transition">
      <input
        type="text"
        className="bg-blue-700 p-1 rounded-lg rounded-e-none outline-none text-gray-100 "
        placeholder="Search name..."
        onInput={(e) => {
          handleName(e);
        }}
      />
      <button
        type="submit"
        className="bg-blue-600 p-1 rounded-lg rounded-s-none text-gray-50"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
