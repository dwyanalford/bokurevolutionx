import React from 'react'
import Head from 'next/head'
import Logo from '../components/logo'
import Video from '../components/video'
import BackToMenu from '../components/back-to-menu'
import Copyright from '../components/copyright'

import "../layout.scss"
import "../theme.scss"

const Watch = () => (
  <div id="watch">
    <Head>
      <title>Watch BRX</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Open+Sans&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai:600|Open+Sans:600&display=swap" rel="stylesheet"></link>
    </Head>
    <Logo />
    <div><h2 className="page-title">LATEST VIDEOS</h2></div>
    <div className="row"><Video /></div>
    <Copyright />
    <BackToMenu />
    
    
    <style jsx>{`
    @media only screen and (max-width: 900px) {
      #watch {
          background-image: url("../backgrounds/videos-background-mobile.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
          padding: 0px;
          margin: 0px;
      }
    }
    @media only screen and (min-width: 901px) {
      #watch {
          background-image: url("../images-bio/bio-background-desktop.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
          padding: 0px;
          margin: 0px;
      }
    }

    `}</style>
  </div>
)

export default Watch
