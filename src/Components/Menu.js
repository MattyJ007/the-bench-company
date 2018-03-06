import React, { Component } from 'react'

class Menu extends Component {
  render () {
    return (
      <div className='menu'>
        <nav class='navbar'>
          <div class='flexicon'>
            <hr /><hr /><hr />
          </div>
          <div class='menu'>
            <ul>
              <li class='active'>
                <div class='button-box'>
                  Home
                  <span class='text-underline' />
                </div>
              </li>
              <li>
                <div class='button-box active'>
                Gallery
                  <span class='text-underline' />
                </div>
              </li>
              <li>
                <div class='button-box'>
                Products
                  <span class='text-underline' />
                </div>
              </li>
              <li>
                <div class='button-box'>
                About
                  <span class='text-underline' />
                </div>
              </li>
              <li>
                <div class='button-box'>
                Contact Us
                  <span class='text-underline' />
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Menu
