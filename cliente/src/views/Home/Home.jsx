import React, { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Paginado from "../../components/Paginado/Paginado";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../Redux/Actions";
import Loading from "../../components/Loading/Loading";
import Fondo from '../../Images/Fondo.jpg'

function Home() {
  const allDogs = useSelector((state) => state.allDogs);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const dogToShow = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const totalPages = Math.ceil(allDogs.length / dogsPerPage);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    dispatch(getAllDogs());
  }, []);



  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="relative h-100 flex flex-col justify-center items-center">
      <img src={Fondo}
      className="absolute" 
      alt="No cargue xd" />
      {
        loading ? 
        <Loading setLoading={setLoading}/> :
        <Cards dogToShow={dogToShow} />
      }
      {
        loading ? <></> :
      <Paginado
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      }
    </div>
  );
}

export default Home;
