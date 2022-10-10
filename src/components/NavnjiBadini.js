import React from "react";
import { Link } from "react-router-dom";
import pola1 from '../images/poolbadini/pola1.jpg'
import pola2 from '../images/poolbadini/pola2.jpg'
import pola3 from '../images/poolbadini/pola3.jpg'
import pola4 from '../images/poolbadini/pola4.jpg'
import pola5 from '../images/poolbadini/pola5.jpg'
import pola6 from '../images/poolbadini/pola6.jpg'
import pola7 from '../images/poolbadini/pola7.jpg'
import pola8 from '../images/poolbadini/pola8.jpg'
import pola9 from '../images/poolbadini/pola9.jpg'





export default function NavnjiBadini() {
  return (
    <div className="">
      <h2 className="text-center font-bold text-3xl mt-[50px] mb-5 text-sky-900">
        پەرتوکێن قوتاغا سەرەتایی بادینـی
      </h2>

      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">







<div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/badini7">
              
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
            <Link to="/badini8">
              
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
            <Link to="/badini9">
        
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
      </div>
  );
}
