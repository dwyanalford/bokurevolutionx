import React, { Component } from 'react'
import Menu from './menu'

class BackToMenu extends Component {
  constructor(props) {
    super(props);
    this.state = ''

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick()
  }

  componentWillUnmount() {
    
  }

  handleClick() {
    const x = document.getElementById("desktop-menu")
    if (x.style.display === 'none') {
      // block of code to be executed if the condition is true
      x.style.display = 'block'
    } else {
      // block of code to be executed if the condition is false
      x.style.display = 'none'
    }
  }

  render() {
    return (
      <div id="back-to-menu" className="row">
        <div className="col-12">
            <div id="mobile-menu" className="mobile-menu-title bold-back" onClick={this.handleClick}
           ><p>&#9776;&nbsp;<span id="mobile-menu-name" className="text-color">MENU</span></p>
            </div>
          <div id="desktop-menu" className="desktopmenu border" onMouseLeave={this.handleClick}><Menu />
          </div>
      </div>
      <style jsx>{`
    #back-to-menu {
        position: relative;
        width: 100%;
        color: rgb(62, 63, 63);
        text-align: center;
        // background-color: red;
     }
     .mobile-menu-title {
        width: 20%;
        bottom: 0;
        position: fixed;
        border-radius: 8px;
        cursor: pointer;
        margin-left: 50px;
     }
     .mobile-menu-title:hover {
         background-color: rgb(62, 63, 63);
     }
     .mobile-menu-title p {
        font-size: 24px;
     }
     #mobile-menu-name {
      display: none;
   }
  
     @keyframes menu-transition {
      from {margin-top: -450px;}
      to {margin-top: 0px;}
    }
     #desktop-menu {
        position: fixed;
        top: 0;
        display: none;
        animation-name: menu-transition;
        animation-duration: 0.4s;
        background-image: url("backgrounds/menu/menu-back-to-menu-desktop.jpg");
    }
    @media only screen and (min-width: 800px) {
      #mobile-menu-name {
        display: inline-block;
     }
    }
    @media only screen and (min-width: 1000px) {
      .mobile-menu-title {
        width: 20%;
        top: 0;
        left: 0;
        bottom: 20;
        margin-left: 0;
        height: 70px;
     }
    }
    `}</style>
  </div>
    );
  }
}

export default BackToMenu
