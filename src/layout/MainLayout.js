import React from 'react'
import Header from '../components/Header'
export default function MainLayout(props) {
  return (
    <div>
<Header />
{props.children}


    </div>
  )
}
