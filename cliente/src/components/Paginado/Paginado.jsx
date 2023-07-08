import React from "react";
import patita from '../../Images/PAW-ICON.jpg'

function Paginado({ currentPage, totalPages, handlePageChange }) {
  console.log(totalPages);
  return (
    <div className=' flex items-center justify-center gap-5 mb-10 z-10'>
      <div className="bg-amber-400 p-1 rounded-xl text-center font-bold text-gray-300 hover:bg-blue-700">
      <button
        className="bg-blue-700 flex justify-center items-center p-1 rounded-md"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
      >
        <img
        className=" w-7 h-7 mr-1 rounded-md"
        src={patita} 
        />
        Start
      </button>
      </div>
      <div className = "bg-amber-400 p-1 rounded-xl text-center font-bold text-gray-300 hover:bg-blue-700">
      <button
        className='bg-blue-700 flex justify-center items-center p-1 rounded-md text-center font-bold text-gray-300 hover:bg-blue-700 disabled:text-gray-700 disabled:bg-amber-400'
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      </div>
      

      <span className="bg-blue-700 flex justify-center items-center p-1 font-bold text-gray-300 rounded-md border-[3px] border-amber-00">Página: {currentPage}</span>
    <div className = 'bg-amber-400 p-1 rounded-xl text-center font-bold text-gray-300 hover:bg-blue-700'>
      <button
        className='bg-blue-700 flex justify-center items-center p-1 rounded-md text-center font-bold text-gray-300 hover:bg-blue-700 disabled:text-gray-700 disabled:bg-amber-400'
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>

    </div>
    <div className='bg-amber-400 p-1 rounded-xl text-center font-bold text-gray-300 hover:bg-blue-700'>
      <button
        className="bg-blue-700 flex justify-center items-center p-1 rounded-md"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
      >
        Last
        <img
        className=" w-7 h-7 ml-1 rounded-md"
        src={patita} 
        />
      </button> 
    </div>
    </div>
  );
}

export default Paginado;
