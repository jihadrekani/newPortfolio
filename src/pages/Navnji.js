import React from 'react'
import { Link } from 'react-router-dom'
import badiniimg from '../images/badini.jpg'
import soraniimg from '../images/sorani.jpg'
import Footer from '../components/Footer'

export default function Navnji() {
  return (
    <div>

<div className='grid correct-display grid-cols-2  mx-auto space-x-1 mt-[80px]'>

<Link to="/NavnjiBadini">
<div className="flex flex-wrap justify-center">
  <img
  src={badiniimg}
  className="p-1 bg-white border rounded max-w-sm"
  alt="..."
/>
</div>
</Link>

<Link to="/NavnjiSorani">
<div className="flex flex-wrap justify-center">
  <img
  src={soraniimg}
  className="p-1 bg-white border rounded max-w-sm"
  alt="..."
/>
</div>
</Link>
</div>

<Footer />
    </div>
  )
}
