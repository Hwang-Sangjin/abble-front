import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Abble</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/game'>Game</a>
            </li>
            <li>
              <a href='/market'>Market</a>
            </li>
            <li>
              <a href='/dashboard'>Dashboard</a>
            </li>
            <li className='btn'>
              <a href='/login'>Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
