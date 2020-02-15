import React from 'react'
import Head from 'next/head'
import Logo from '../components/logo'
import EventsComponent from '../components/events'
import BackToMenu from '../components/back-to-menu'
import Copyright from '../components/copyright'

import "../layout.scss"
import "../theme.scss"

const Events = () => (
  <div id="events-page">
    <Head>
      <title>Events</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Open+Sans&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Hind+Madurai:600|Open+Sans:600&display=swap" rel="stylesheet"></link>
    </Head>
    <Logo />
    <div><h1 className="page-title">EVENTS</h1></div>
    <EventsComponent />
    <BackToMenu />
    <Copyright />


    <style jsx>{`
    
    `}</style>
  </div>
)

export default Events
