import React from 'react'
import './styles.css'
import {svgGenerator} from '../../helpers/svg'
import { useHistory } from 'react-router-dom'

function NavBar({name,redirect}) {
  const history = useHistory()
  const handleClick = () => {
    history.push(redirect)
  }
  return (
    <header className="navbar">
      {redirect && <button className="navbar__back" onClick={handleClick} >{svgGenerator('back')}</button>}
      <div className="navbar__label">{name}</div>
    </header>
  )
}

export default NavBar
