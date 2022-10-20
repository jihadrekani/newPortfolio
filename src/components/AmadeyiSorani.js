import React from "react";
import { Link } from "react-router-dom";
import zansti from '../images/poolbadini/zansti.jpg'
import edebi from '../images/poolbadini/edebi.jpg'
import Footer from '../components/Footer'






export default function AmadeyiSorani() {
  return (
    <div className="">
     
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 pt-6 gap-8">


<div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/SoraniZansti">
              
                <img
                  className="p-2 h-[400px] "
                  src={zansti}
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
            <Link to="/SoraniEdebi">
              
                <img
                  className="p-2 h-[400px]"
                  src={edebi}
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
  );
}
