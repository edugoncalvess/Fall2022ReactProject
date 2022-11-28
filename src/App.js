// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Products from './components/Products';
import RickMorty from './components/RickMorty';
import ProjLog from './components/ProjLog';




function App() {

  return (
    <section id="app">
      <div className="container">
        <Navbar />
        <Products />
        {/* <RickMorty  /> */}
        {/* <ProjLog /> */}
      </div>
    </section>
  );
}

export default App;
