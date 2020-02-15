import React from 'react'
import Head from 'next/head'
import Logo from '../components/logo'
import Menu from '../components/menu'
import Copyright from '../components/copyright'

import "../layout.scss"
import "../theme.scss"


const Home = () => (
  <div id="home-menu">
    <Head>
      <title>Home - BRX</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Open+Sans&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai:600|Open+Sans:600&display=swap" rel="stylesheet"></link>
    
    </Head>
    <Logo />
    <Menu />
    <div className="bgcolor"></div>
    <Copyright />

    <style jsx>{`
    @media only screen and (max-width: 600px) {
      #home-menu {
          background-image: url("../backgrounds/clone-379-v1-500.png");
          background-repeat: no-repeat;
          background-size: auto;
          background-position: top center;
          background-attachment: fixed;
      }
    }
    @media only screen and (min-width: 601px) {
      #home-menu {
          background-image: url("../backgrounds/clone-379-v1-835.png");
          background-repeat: no-repeat;
          background-size: auto;
          background-position: top center;
          background-attachment: fixed;
      }
    }
    @media only screen and (min-width: 1100px) {
      #home-menu {
          background-image: url("../backgrounds/clone-379-v1-1100.png");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center center;
          background-attachment: fixed;
      }
    }
    `}</style>
  </div>
)

export default Home
