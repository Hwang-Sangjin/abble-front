import React from "react";

export default function UI() {
  return (
    <>
      <div className='ui-inner'>
        <nav>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Game</button>
            </li>
            <li>
              <button>Market</button>
            </li>
            <li>
              <button>Dashboard</button>
            </li>
            <li className='btn'>
              <button>Login</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
