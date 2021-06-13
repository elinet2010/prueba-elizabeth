/* import external modules */
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image'
import Menu from '../Menu'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Menu />
        <Link to="/" className="header__logo">
          <Image
            alt="Logo-compañia"
            className="header__logo"
            src="/images/logo.png"
          />
        </Link>
        <div className="header__images">
          <Image src="/images/moneda.svg" />
          <Image src="/images/idioma.svg" />
        </div>
      </nav>
    </header>
  )
}

export default Header
