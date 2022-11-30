// import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Products from './components/Products';
import RickMorty from './components/RickMorty';
import ProjLog from './components/ProjLog';




function App() {

  return (

    <section id="app">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/rickmorty" element={<RickMorty />}></Route>
          <Route exact path="/quotes" element={<APIPage />}></Route>
          <Route exact path="/projLog" element={<ProjLog />}></Route>
        </Routes>
      </div>
    </section>

  );
}

export default App;
