import React from 'react'
import Head from 'next/head'
import Logo from '../components/logo'
import Contacts from '../components/contacts'
import BackToMenu from '../components/back-to-menu'
import Copyright from '../components/copyright'

import "../layout.scss"
import "../theme.scss"

const Contact = () => (
  <div id="contact-page">
    <Head>
      <title>Contacts</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Open+Sans&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai:600|Open+Sans:600&display=swap" rel="stylesheet"></link>
    </Head>
    <Logo />
    <Contacts />
    <Copyright />
    <BackToMenu />

    <style jsx>{`
    #contact-page {
      background-image: url("../backgrounds/contact-background.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
    }
    `}</style>
  </div>
)

export default Contact
