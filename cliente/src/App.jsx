import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
