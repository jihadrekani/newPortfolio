import React from 'react'
import { Link } from 'react-router-dom'
import badiniimg from '../images/badini.jpg'
import soraniimg from '../images/sorani.jpg'
export default function Seretayi() {
  return (
    <div>
<div className='grid grid-cols-2 xl:grid-cols2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1    container mx-auto space-x-1 mt-[80px]'>

<Link to="/SeretayiBadini">
<div className="flex flex-wrap justify-center">
  <img
  src={badiniimg}
  className="p-1 bg-white border rounded max-w-sm"
  alt="..."
/>
</div>
</Link>

<Link to="/SeretayiSorani">
<div className="flex flex-wrap justify-center">
  <img
  src={soraniimg}
  className="p-1 bg-white border rounded max-w-sm"
  alt="..."
/>
</div>
</Link>
</div>

    </div>
  )
}
