import React from 'react'
import Link from 'next/link'

const Menu = () => (
    <div id="menu" className="flex-component">
        <Link href="/bio">
        <div className="menu-link-div">
            <div className="menu-image">
                <img src="../icons/menu-icon-bio.png" width="100" className="border"></img>
            </div>
            <div className="menu-text"><p>DATA</p>
            </div>
        </div>
        </Link>
        <Link href="/watch">
        <div className="menu-link-div">
            <div className="menu-image">
                <img src="../icons/menu-icon-watch.png" width="100" className="border"></img>
            </div>
            <div className="menu-text"><p>WATCH</p>
            </div>
        </div>
        </Link>
        
        <div className="menu-link-div">
            <a href="https://soundcloud.com/bokurevolutionx" target="_blank">
                <div className="menu-image">
                    <img src="../icons/menu-icon-listen.png" width="100"  className="border"></img>
                </div>
                <div className="menu-text"><p>LISTEN</p>
                </div>
            </a>
        </div>
        

        <div className="menu-link-div">
        <a href="https://bokurevolutionx.square.site/s/shop" target="_blank">
            <div className="menu-image">
                <img src="../icons/menu-icon-shop.png" width="100" className="border"></img>
            </div>
            <div className="menu-text"><p>SHOP</p>
            </div>
        </a>
        </div>
        
        <Link href="/events">
        <div className="menu-link-div">
            <div className="menu-image">
                <img src="../icons/menu-icon-events.png" width="100" className="border"></img>
            </div>
            <div className="menu-text"><p>EVENTS</p>
            </div>
        </div>
        </Link>
        <Link href="/contact">
        <div className="menu-link-div">
            <div className="menu-image">
                <img src="../icons/menu-icon-contact.png" width="100" className="border"></img>
            </div>
            <div className="menu-text"><p>CONTACT</p>
            </div>
        </div>
        </Link>
        <style jsx>{`
        #menu {
            padding-top: 45px;
        }
        .flex-component {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
        .menu-link-div {
            width: 130px;
            // margin-right: 8px;
            text-align: center;
            cursor: pointer;
            // ** important border below
            border: 1px solid none;
            margin-bottom: 30px;
            // background-color: blue;
        }
        .menu-link-div:hover {
            border: 1px solid #75C4C3;
            // padding: 24px 0px;
        }
        .menu-image {
            margin: auto;
            // background-color: red;
        }
        .menu-text {
            margin: auto;
            height: 20%;
            // background-color: gold;
        }
        .menu-text p {
            color: grey;
        }
        #menu  a {
            text-decoration: none;
        }
        #menu img {
            border-radius: 12px;
            width: 120px;   
        }
        @media only screen and (min-width: 500px) {
            .menu-link-div {
                width: 200px;
            }
        }
        // to fix <p> text increase for 2 menu items here
        @media only screen and (min-width: 700px) {
            #menu  a {
                font-size: 1em;
            }
        }
        @media only screen and (min-width: 1100px) {
            #menu {
                padding-left: 100px;
            }
            .menu-link-div {
                width: 250px;
            }
        }
        
      `}</style>
    </div>
)

export default Menu