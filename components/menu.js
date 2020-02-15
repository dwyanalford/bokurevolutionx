import React from 'react'
import Link from 'next/link'

const Menu = () => (
    <div id="menu" className="row">
        <div className="menu-group">
        <Link href="/bio">
        <div className="menu-link-div">
            <div className="menu-image"><div></div>
                <img src="../icons/menu-icon-bio.png" width="100"></img>
            </div>
            <div className="menu-text"><p>DATA</p></div>
        </div>
        </Link>
        
        <Link href="/watch">
        <div className="menu-link-div">
            <div className="menu-image"><div></div>
                <img src="../icons/menu-icon-watch.png" width="100"></img>
            </div>
            <div className="menu-text"><p>WATCH</p></div>
        </div>
        </Link>
        <a href="https://soundcloud.com/bokurevolutionx" target="_blank" rel="noopener noreferrer">
        <div className="menu-link-div">
        <div className="menu-image">
                <img src="../icons/menu-icon-listen.png" width="100"></img>
            </div>
            <div className="menu-text"><p>LISTEN</p></div>
        </div>
        </a>
        <a href="https://bokurevolutionx.square.site/s/shop" target="_blank" rel="noopener noreferrer">
        <div className="menu-link-div">
        <div className="menu-image">
                <img src="../icons/menu-icon-shop.png" width="100"></img>
            </div>
            <div className="menu-text"><p>SHOP</p></div>
        </div>
        </a>
        <Link href="/events">
        <div className="menu-link-div">
        <div className="menu-image">
                <img src="../icons/menu-icon-events.png" width="100"></img>
            </div>
            <div className="menu-text"><p>EVENTS</p></div>
        </div>
        </Link>
        {/* <div className="menu-link-div">
        <div className="menu-image">
                <img src="../icons/menu-icon-press.png" width="100"></img>
            </div>
            <div className="menu-text"><p>PRESS</p></div>
        </div> */}
        <Link href="/contact">
        <div className="menu-link-div">
        <div className="menu-image">
                <img src="../icons/menu-icon-contact.png" width="100"></img>
            </div>
            <div className="menu-text"><p>CONTACT</p></div>
        </div>
        </Link>
        </div>
        <style jsx>{`
        #menu {
            width: 100%;
            // background-color: blue;
        }
        .menu-group {
            margin: 0 auto;
            width: 90%;
            padding-top: 25px;
            border-left: none;
            border-right: none;
            border-bottom: none;
            // background-color: red;
        }
        .menu-link-div {
            float: left;
            height: 120px;
            width: 150px;
            color: #d9d8d8;
            text-align: center;
            margin-right: 25px;
            margin-left: 30px;
            margin-bottom: 35px;
            cursor: pointer;
            // ** important border below
            border: 1px solid none;
            // background-image: url("../icons/menu-icon-bio.png");
            // background-size: 100%;
            // background-color: white;
        }
        .menu-link-div:hover {
            color: #75C4C3;
            border-bottom: 1px solid #75C4C3;
        }
        .menu-image {
            width: 140px;
            margin: auto;
            // background-image: url("../icons/menu-icon-bio.png");
            // background-size: 100%;
            // background-repeat: no-repeat;
        }
        
        .menu-text {
            width: 90%;
            margin: auto;
            height: 20%;
            // background-color: gold;
        }
        .menu-text > p {
            padding: 0px;
            padding-top: 10px;
            margin: 0 auto;
            font-size: 18px;
        }
        @media screen and (min-width: 528px) and (max-width: 600px){
            .menu-link-div {
                margin-right: 15px;
                margin-left: 60px;
            }
        }
        @media screen and (min-width: 601px) and (max-width: 686px){
            .menu-link-div {
                margin-right: 15px;
                margin-left: 70px;
            }
        }
        @media screen and (min-width: 687px) and (max-width: 715px){
            .menu-link-div {
                margin-right: 15px;
                margin-left: 90px;
            }
        }
        @media screen and (min-width: 783px) and (max-width: 872px){
            .menu-link-div {
                margin-right: 15px;
                margin-left: 50px;
            }
        }
        @media screen and (min-width: 873px) and (max-width: 943px){
            .menu-link-div {
                margin-right: 15px;
                margin-left: 70px;
            }
        }
        @media screen and (min-width: 944px) and (max-width: 1200px){
            .menu-link-div {
                margin-right: 15px;
                margin-left: 80px;
            }
        }
      `}</style>
    </div>
)

export default Menu