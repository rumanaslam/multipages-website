import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
const Header = () => {
  return (
    <div>
      <header className='header'>
        <h1 className='logo'>
        Rang-e-Zevar
        </h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/jwellery">Jewellery</Link>
            <Link href="/contact">Contact</Link>
          <FaShoppingCart style={{color:"#cfb53b",fontSize:'24px'}}/>
        </nav>
      </header>
    </div>
  )
}

export default Header
