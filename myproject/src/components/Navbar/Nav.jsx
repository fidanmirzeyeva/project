import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <header>
      <nav class="nav_header">
        <div class="nav1">
          <h3 class="class"><span href="">Start Bootstrap</span></h3>
        </div>
        <div class="nav2">
          <ul>
         <Link to={"/"}>HOME</Link>
         <Link to={"/About"} >ABOUT</Link>
         <Link to={"SamplePost"} >SAMPLE POST</Link>
         <Link to={"/Contact"} >CONTACT</Link>
          </ul>
        </div>

        <button class="btn">
          <a href="">MENU<i class="fa-solid fa-bars"></i></a>
        </button>
      </nav>
    </header>
    </div>
  )
}

export default Nav