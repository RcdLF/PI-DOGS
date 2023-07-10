import Cards from "../../components/Cards/Cards";
import Paginado from "../../components/Paginado/Paginado";
import NavBar from "../../components/NavBar/NavBar";

import React, { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments } from "../../Redux/Actions";

import Loading from "../../components/Loading/Loading";
import Fondo from "../../Images/Fondo.jpg";

export const backgroud = {
  backgroundImage: `url(${Fondo})`,
};

function Home() {
  const allDogs = useSelector((state) => state.allDogs);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const dogToShow = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const totalPages = Math.ceil(allDogs.length / dogsPerPage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getAllDogs());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div
      className="relative w-[100%] h-[100%] flex flex-col bg-cover justify-center items-center"
      style={backgroud}
    >
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <NavBar setLoading={setLoading} />
          <Cards dogToShow={dogToShow} />
          <Paginado
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default Home;
