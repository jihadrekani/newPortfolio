import React from "react";
import { Link } from "react-router-dom";
import s from '../images/seretayi.jpg'
import n from '../images/navnji.jpg'
import a from '../images/amadeyi.jpg'
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";




export default function Home() {
  return (
    <div className="">
      <h2 className="text-center font-bold text-3xl mt-[50px] mb-5 text-sky-900">
      قوناغێ بهەلبژێرە :
      </h2>

      <div className="container center  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">

<div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/seretayi">
              
                <img
                  className="p-2 h-[400px] "
                  src={s}
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
            <Link to="/navnji">
              
                <img
                  className="p-2 h-[400px]"
                  src={n}
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
            <Link to="/amadeyi">
        
                <img
                  className="p-2 h-[400px]"
                  src={a}
                  alt=""
                  />
                  </Link>
              <div className="p-6 flex items-center justify-center">
               
              </div>
          </div>
        </div>





      </div>
      <SocialMedia />
      <Footer />
      </div>
  );
}
