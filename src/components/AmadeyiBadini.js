import React from "react";
import { Link } from "react-router-dom";
import zansti from '../images/poolbadini/zansti.jpg'
import edebi from '../images/poolbadini/edebi.jpg'





export default function AmadeyiBadini() {
  return (
    <div className="">
     
     <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 pt-6 gap-8">


<div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/Badinizansti">
              
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
            <Link to="/BadiniEdebi">
              
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
      </div>
  );
}
