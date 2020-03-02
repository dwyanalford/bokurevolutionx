import React from 'react'
import Head from 'next/head'
import Logo from '../components/logo'
import BioComponent from '../components/bio'
import BackToMenu from '../components/back-to-menu'
import Copyright from '../components/copyright'
import BioDownload from '../components/bio-download'

import "../layout.scss"
import "../theme.scss"

const Bio = () => (
  <div id="bio">
    <Head>
      <title>Boku Bio</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Open+Sans&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai:600|Open+Sans:600&display=swap" rel="stylesheet"></link>
    </Head>

    <Logo />
    <BioComponent />
    <Copyright />
    <BackToMenu />
    <BioDownload />

    

    <style jsx>{`
          #bio {
                background-image: url("../backgrounds/body-backg-mobile.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: top center;
                background-attachment: fixed;
                padding: 0px;
                margin: 0px;
            }
        @media only screen and (max-width: 800px) {
           #bio {
          padding-bottom: 50px;
         }
    `}</style>
  </div>
)

export default Bio
