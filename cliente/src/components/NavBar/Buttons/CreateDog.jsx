import React from "react";
import { useNavigate } from "react-router-dom";
import patita from '../../../Images/PAW-ICON.jpg'

function CreateDog() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/post");
  };
  return (
    <div className="bg-amber-400 p-1 rounded-xl text-center font-bold text-gray-300 hover:bg-blue-700">
      <button
        className="bg-blue-700 flex justify-center items-center p-1 rounded-md"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Create your own
        <img
        className=" w-7 h-7 ml-1 rounded-md"
        src={patita}
      />
      </button>
    </div>
  );
}

export default CreateDog;
