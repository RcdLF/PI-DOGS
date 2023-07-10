import React from "react";

import SearchBar from "./Filtros/SearchBar";
import FilCreado from "./Filtros/FilCreado";
import FilTemp from "./Filtros/FilTemp";
import FilAlf from "./Filtros/FilAlf";
import FilPeso from "./Filtros/FilPeso";

import Refresh from "./Buttons/Refresh";
import CreateDog from "./Buttons/CreateDog";

function NavBar({setLoading}) {
  return (
    <div className="relative w-[100%] flex gap-5 items-center justify-center pt-4 pb-4 bg-blue-500 z-10">
      <Refresh />
      <SearchBar setLoading={setLoading} />
      <FilCreado setLoading={setLoading} />
      <FilTemp setLoading={setLoading} />
      <FilAlf setLoading={setLoading}/>
      <FilPeso setLoading={setLoading} />
      <CreateDog />
    </div>
  );
}

export default NavBar;
