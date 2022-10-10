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
import Sereki from './components/Nav'
import Badini1 from './pages/Badini1';
import Badini2 from './pages/Badini2';
import Badini3 from './pages/Badini3';
import Badini4 from './pages/Badini4';
import Badini5 from './pages/Badini5';
import Badini6 from './pages/Badini6';
import Badini7 from './pages/Badini7';
import Badini8 from './pages/Badini8';
import Badini9 from './pages/Badini9';
// import BadiniZansti10 from './pages/BadiniZansti10';
import BadiniZansti11 from './pages/BadiniZansti11';
import BadiniZansti12 from './pages/BadiniZansti12';
import BadiniZansti from './pages/BadiniZansti';




function App() {
  return (
    <div className='' >
<Nav />


<Routes>
        <Route path="/" element={<Destpek />} />
        <Route path="Amadeyi" element={<Amadeyi />} />
        <Route path="Navnji" element={<Navnji />} />
        <Route path="Seretayi" element={<Seretayi />} />
        <Route path="SeretayiSorani" element={<SeretayiSorani />} />
        <Route path="/SeretayiBadini" element={<SeretayiBadini />} />
        <Route path="NavnjiBadini" element={<NavnjiBadini />} />
        <Route path="NavnjiSorani" element={<NavnjiSorani />} />
        <Route path="AmadeyiBadini" element={<AmadeyiBadini />} />
        <Route path="AmadeyiSorani" element={<AmadeyiSorani />} />
        <Route path="Sereki" element={<Sereki />} />
        <Route path="Badini1" element={<Badini1 />} />
        <Route path="Badini2" element={<Badini2 />} />
        <Route path="Badini3" element={<Badini3 />} />
        <Route path="Badini4" element={<Badini4 />} />
        <Route path="Badini5" element={<Badini5 />} />
        <Route path="Badini6" element={<Badini6 />} />
        <Route path="Badini7" element={<Badini7 />} />
        <Route path="Badini8" element={<Badini8 />} />
        <Route path="Badini9" element={<Badini9 />} />
        {/* <Route path="BadiniZansti10" element={<BadiniZansti10 />} /> */}
        <Route path="BadiniZansti11" element={<BadiniZansti11 />} />
        <Route path="BadiniZansti12" element={<BadiniZansti12 />} />
        <Route path="BadiniZansti" element={<BadiniZansti />} />
      </Routes>

</div>
  );
}



export default App;
