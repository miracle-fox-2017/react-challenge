import React from 'react'
import {Link} from 'react-router-dom'
import foto from '../icon.png'

const Header = ()=>(
  <div className="header-header">
    <header>
      <img src={foto} width="100px" alt="foto"/>
      <nav>
        <ul className="list-group">
          <li className="list-group-item"><Link to='/'>Home</Link></li>
          <li className="list-group-item"><Link to='/youman'>Youman</Link></li>
          <li className="list-group-item"><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  </div>
)

export default Header;