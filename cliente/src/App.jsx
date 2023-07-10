import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";

function App() {

  return (
    <>
      <Routes>
        <Route path="/detail/:id" Component={Detail }/>
        <Route path="/" Component={Landing }></Route>
        <Route path="/home" Component={Home}></Route>
      </Routes>
    </>
  );
}

export default App;
