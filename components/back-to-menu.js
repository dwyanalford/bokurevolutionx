import React from 'react'
import Link from 'next/link'

const BackToMenu = () => (
      <div id="back-to-menu">
        <Link href="/">
        <div>
            <div id="mobile-menu" className="mobile-menu-title" 
           ><p id="">&#9776;&nbsp;<span id="mobile-menu-name" className="text-color">MENU</span></p>
            </div>
      </div>
      </Link>
      <style jsx>{`
    #back-to-menu {
        position: relative;
        color: rgb(62, 63, 63);
        text-align: center;
     }
     .mobile-menu-title {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0 25px;
      border-radius: 8px;
      cursor: pointer;
      background-color: black;
      opacity: 0.90; 
      margin-top: 25px;
     }
     .mobile-menu-title:hover {
         opacity: 1;
     }
     #back-to-menu p:hover {
      color: #2586c6;
     }
     .mobile-menu-title p {
        font-size: 24px;
     }
     #mobile-menu-name {
      display: none;
   }
  
     @keyframes menu-transition {
      from {margin-left: -720px;}
      to {margin-left: 0px;}
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
     #back-to-menu span:hover {
      color: #2586c6;
  }
    }
    
    `}</style>
  </div>
  
  )

export default BackToMenu
