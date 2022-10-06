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
      </Routes>

</div>
  );
}



export default App;
