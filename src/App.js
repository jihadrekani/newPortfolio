import React from "react";
import s from './images/seretayi.jpg'
import n from './images/navnji.jpg'
import a from './images/amadeyi.jpg'





import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav';
import Amadeyi from './pages/Amadeyi';
import Seretayi from './pages/Seretayi';
import Navnji from './pages/Navnji';
import SeretayiBadini from './components/SeretayiBadini'
import SeretayiSorani from './components/SeretayiSorani'
import NavnjiBadini from './components/NavnjiBadini'
import NavnjiSorani from './components/NavnjiSorani'
import AmadeyiBadini from './components/AmadeyiBadini'
import AmadeyiSorani from './components/AmadeyiSorani'
import Destpek from './components/Nav'
import Badini1 from './pages/Badini1';
import Badini2 from './pages/Badini2';
import Badini3 from './pages/Badini3';
import Badini4 from './pages/Badini4';
import Badini5 from './pages/Badini5';
import Badini6 from './pages/Badini6';
import Badini7 from './pages/Badini7';
import Badini8 from './pages/Badini8';
import Badini9 from './pages/Badini9';
import BadiniZansti_10 from './pages/BadiniZansti_10';
import BadiniZansti11 from './pages/BadiniZansti11';
import BadiniZansti12 from './pages/BadiniZansti12';
import BadiniZansti from './pages/BadiniZansti';
import BadiniEdebi from './pages/BadiniEdebi';
import BadiniEdebi10 from './pages/BadiniEdebi10';
import BadiniEdebi11 from './pages/BadiniEdebi11';
import BadiniEdebi12 from './pages/BadiniEdebi12';
// sorani
import Sorani1 from './pages/Sorani1';
import Sorani2 from './pages/Sorani2';
import Sorani3 from './pages/Sorani3';
import Sorani4 from './pages/Sorani4';
import Sorani5 from './pages/Sorani5';
import Sorani6 from './pages/Sorani6';
import Sorani7 from './pages/Sorani7';
import Sorani8 from './pages/Sorani8';
import Sorani9 from './pages/Sorani9';
import SoraniZansti10 from './pages/SoraniZansti10';
import SoraniZansti11 from './pages/SoraniZansti11';
import SoraniZansti12 from './pages/SoraniZansti12';
import SoraniZansti from './pages/SoraniZansti';
import SoraniEdebi from './pages/SoraniEdebi';
import SoraniEdebi10 from './pages/SoraniEdebi10';
import SoraniEdebi11 from './pages/SoraniEdebi11';
import SoraniEdebi12 from './pages/SoraniEdebi12';

import Home from './components/Home'
import SocialMedia from './components/SocialMedia';




function App() {
  return (
    <div className='' >
<Nav />
<Routes>
        {/* <Route path="/" exact element={<Destpek />} /> */}
        <Route path="/"  element={<Home />} />
        <Route path="Amadeyi" element={<Amadeyi />} />
        <Route path="Navnji" element={<Navnji />} />
        <Route path="Seretayi" element={<Seretayi />} />
        <Route path="SeretayiSorani" element={<SeretayiSorani />} />
        <Route path="SeretayiBadini" element={<SeretayiBadini />} />
        <Route path="NavnjiBadini" element={<NavnjiBadini />} />
        <Route path="NavnjiSorani" element={<NavnjiSorani />} />
        <Route path="AmadeyiBadini" element={<AmadeyiBadini />} />
        <Route path="AmadeyiSorani" element={<AmadeyiSorani />} />
        <Route path="Badini1" element={<Badini1 />} />
        <Route path="Badini2" element={<Badini2 />} />
        <Route path="Badini3" element={<Badini3 />} />
        <Route path="Badini4" element={<Badini4 />} />
        <Route path="Badini5" element={<Badini5 />} />
        <Route path="Badini6" element={<Badini6 />} />
        <Route path="Badini7" element={<Badini7 />} />
        <Route path="Badini8" element={<Badini8 />} />
        <Route path="Badini9" element={<Badini9 />} />
        <Route path="BadiniZansti_10" element={<BadiniZansti_10 />} />
        <Route path="BadiniZansti11" element={<BadiniZansti11 />} />
        <Route path="BadiniZansti12" element={<BadiniZansti12 />} />
        <Route path="BadiniZansti" element={<BadiniZansti />} />
        <Route path="BadiniEdebi" element={<BadiniEdebi />} />
        <Route path="BadiniEdebi10" element={<BadiniEdebi10 />} />
        <Route path="BadiniEdebi11" element={<BadiniEdebi11 />} />
        <Route path="BadiniEdebi12" element={<BadiniEdebi12 />} />
        {/* sorani */}
        <Route path="Sorani1" element={<Sorani1 />} />
        <Route path="Sorani2" element={<Sorani2 />} />
        <Route path="Sorani3" element={<Sorani3 />} />
        <Route path="Sorani4" element={<Sorani4 />} />
        <Route path="Sorani5" element={<Sorani5 />} />
        <Route path="Sorani6" element={<Sorani6 />} />
        <Route path="Sorani7" element={<Sorani7 />} />
        <Route path="Sorani8" element={<Sorani8 />} />
        <Route path="Sorani9" element={<Sorani9 />} />
        <Route path="SoraniZansti10" element={<SoraniZansti10 />} />
        <Route path="SoraniZansti11" element={<SoraniZansti11 />} />
        <Route path="SoraniZansti12" element={<SoraniZansti12 />} />
        <Route path="SoraniZansti" element={<SoraniZansti />} />
        <Route path="SoraniEdebi" element={<SoraniEdebi />} />
        <Route path="SoraniEdebi10" element={<SoraniEdebi10 />} />
        <Route path="SoraniEdebi11" element={<SoraniEdebi11 />} />
        <Route path="SoraniEdebi12" element={<SoraniEdebi12 />} />
        <Route path="Home" element={<Home />} />
        <Route path="SocialMedia" element={<SocialMedia />} />

                  </Routes>
       










      </div>

  );
}



export default App;
