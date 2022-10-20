import React from "react";
import { Link } from "react-router-dom";
import pola7 from '../images/poolbadini/pola7.jpg'
import pola8 from '../images/poolbadini/pola8.jpg'
import pola9 from '../images/poolbadini/pola9.jpg'
import Footer from '../components/Footer'





export default function NavnjiSorani() {
  return (
    <div className="">
      <h2 className="text-center font-bold text-3xl mt-[50px] mb-5 text-sky-900">
        پەرتوکێن قوتاغا سەرەتایی بادینـی
      </h2>

      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">







<div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/sorani7">
              
                <img
                  className="p-2 h-[400px] "
                  src={pola7}
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
            <Link to="/sorani8">
              
                <img
                  className="p-2 h-[400px]"
                  src={pola8}
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
            <Link to="/sorani9">
        
                <img
                  className="p-2 h-[400px]"
                  src={pola9}
                  alt=""
                  />
                  </Link>
              <div className="p-6 flex items-center justify-center">
               
              </div>
          </div>
        </div>







      </div>
      <Footer />
      </div>
  );
}
