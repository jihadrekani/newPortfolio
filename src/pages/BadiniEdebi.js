import React from "react";
import pola10 from '../images/poolbadini/pola10.jpg'
import pola11 from '../images/poolbadini/pola11.jpg'
import pola12 from '../images/poolbadini/pola12.jpg'
import Footer from '../components/Footer'


import { Link } from "react-router-dom";

export default function BadiniEdebi() {
  return (


<div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">


{/* ------------------------------------------------- */}
<div className="rounded ">
<div className="flex justify-center ">
  <Link to="/BadiniEdebi10">
    
      <img
        className="p-2 h-[400px]"
        src={pola10}
        alt=""
      />
      </Link>
    <div className="p-6 flex items-center justify-center">
    
    </div>
</div>
</div>
{/* ------------------------------------------------- */}
<div className="rounded ">
<div className="flex justify-center ">
  <Link to="/BadiniEdebi11">
      
      <img
        className="p-2 h-[400px] w-[310px]"
        src={pola11}
        alt=""
      />
      </Link>
    <div className="p-6 flex items-center justify-center">
   
    </div>
</div>
</div>

{/* ------------------------------------------------- */}







<div className="rounded ">
<div className="flex justify-center ">
  <Link to="/BadiniEdebi12">
      
      <img
        className="p-2 h-[400px]"
        src={pola12}
        alt=""
      />
      </Link>
    <div className="p-6 flex items-center justify-center">
     
    </div>
</div>
</div>
{/* ------------------------------------------------- */}

</div>
<Footer />
</div>

    
)
}
