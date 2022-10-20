import React from "react";
import zanst from '../images/SeretayiSorani/pola2/zanst.jpg'
import birkari from '../images/SeretayiSorani/pola2/birkari.jpg'
import ayin from '../images/SeretayiSorani/pola2/ayin.jpg'
import englishactivity from '../images/SeretayiSorani/pola2/englishactivity.jpg'
import studentbook from '../images/SeretayiSorani/pola2/studentbook.jpg'
import kurdi from '../images/SeretayiSorani/pola2/kurdi.jpg'
import kurdi1 from '../images/SeretayiSorani/pola2/kurdi1.jpg'
import kurdi2 from '../images/SeretayiSorani/pola2/kurdi2.jpg'
import Footer from '../components/Footer'




export default function Sorani2() {
  return (
    <div className="">
      <h2 className="text-center xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl xs  font-bold text-3xl mt-[50px] mb-5 text-sky-900">
      بنەڕەتى پۆلى دووەم       </h2>

      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">

        <div className="rounded ">
          <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-sm bg-gray-900">
            <p  className="bg-gray-300 rounded-t-md py-2 text-center ">زانست بو هەمووان       </p>

                <img
                  className="p-2 h-[400px]"
                  src={zanst}
                  alt=""
                />
              <div className="p-6 flex items-center justify-center">
                <a href="https://www.bgprogram.org/download.aspx?id=1663" 
                
                  className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>  
{/* ------------------------------------------------- */}
<div className="rounded ">
          <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-sm bg-gray-900">
                <p  className="bg-gray-300 rounded-t-md py-2 text-center">بیرکاری بۆ هەمووان       </p>
                <img
                  className="p-2 h-[400px]"
                  src={birkari}
                  alt=""
                />
              <div className="p-6 flex items-center justify-center">
                <a href="https://www.bgprogram.org/download.aspx?id=947" 
                
                  className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
{/* ------------------------------------------------- */}
        <div className="rounded ">
          <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-sm bg-gray-900">
                <p  className="bg-gray-300 rounded-t-md py-2 text-center">  English - Activity</p>
                <img
                  className="p-2 h-[400px]"
                  src={englishactivity}
                  alt=""
                />
              <div className="p-6 flex items-center justify-center">
                <a href="https://www.bgprogram.org/download.aspx?id=1004" 
                
                  className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>      
{/* ------------------------------------------------- */}
        <div className="rounded ">
          <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-sm bg-gray-900">
                <p  className="bg-gray-300 rounded-t-md py-2 text-center">  Student's Book</p>
                <img
                  className="p-2 h-[400px]"
                  src={studentbook}
                  alt=""
                />
              <div className="p-6 flex items-center justify-center">
                <a href="https://www.bgprogram.org/download.aspx?id=1003" 
                
                  className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
{/* ------------------------------------------------- */}
<div className="rounded ">
          <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-sm bg-gray-900">
                <p  className="bg-gray-300 rounded-t-md py-2 text-center">خوێندنى کوردى</p>
                <img
                  className="p-2 h-[400px]"
                  src={kurdi}
                  alt=""
                />
              <div className="p-6 flex items-center justify-center">
                <a href="https://www.bgprogram.org/download.aspx?id=872" 
                
                  className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
{/* ------------------------------------------------- */}
<div className="rounded ">
          <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-sm bg-gray-900">
                <p  className="bg-gray-300 rounded-t-md py-2 text-center">  په‌روه‌رده‌ى ئيسلامى</p>
                <img
                  className="p-2 h-[400px]"
                  src={ayin}
                  alt=""
                />
              <div className="p-6 flex items-center justify-center">
                <a href="https://www.bgprogram.org/download.aspx?id=1672" 
                
                  className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
{/* ------------------------------------------------- */}
<div className="rounded ">
          <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-sm bg-gray-900">
                <p  className="bg-gray-300 rounded-t-md py-2 text-center">   خوێندنی کوردی - وەرزی یەکەم</p>
                <img
                  className="p-2 h-[400px]"
                  src={kurdi1}
                  alt=""
                />
              <div className="p-6 flex items-center justify-center">
                <a href="https://www.bgprogram.org/download.aspx?id=1672" 
                
                  className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
{/* ------------------------------------------------- */}
<div className="rounded ">
          <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg max-w-sm bg-gray-900">
                <p  className="bg-gray-300 rounded-t-md py-2 text-center">  خوێندنی کوردی - وەرزی دووەم </p>
                <img
                  className="p-2 h-[400px]"
                  src={kurdi2}
                  alt=""
                />
              <div className="p-6 flex items-center justify-center">
                <a href="https://www.bgprogram.org/download.aspx?id=1672" 
                
                  className=" inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-300 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>










      </div>
      <Footer />
    </div>
  );
}
