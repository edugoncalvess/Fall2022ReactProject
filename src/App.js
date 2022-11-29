// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="/" element={<Products />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/rickmorty" element={<RickMorty />}></Route>
          <Route exact path="/projLog" element={<ProjLog />}></Route>
        </Routes>
      </div>
    </section>
  );
}

export default App;
