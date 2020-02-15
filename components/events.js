import React from 'react'

const events = [
  { href: 'images-events/event1.jpg', title: 'Bogart House - Dec 19, 2019' },
  { href: 'images-events/2019-oct16-chelsea.jpg', title: 'Chelsea Music Hall - Oct 16, 2019' },
  { href: 'images-events/2019-sep23-silvanna.jpg', title: 'SILVANNA - Sept 23, 2019' },
  { href: 'images-events/2019-sep12-shrine.jpg', title: 'The Shrine - Sept 12, 2019' },
  { href: 'images-events/2019-sep9-block-party.jpg', title: 'Brooklyn Bazaar Block Party - Sep 6, 2019' },
  { href: 'images-events/2019-aug29-dance-bogart.jpg', title: 'Bogart House - Aug 29, 2019' },
  { href: 'images-events/2019-jul15-soulpower.jpg', title: 'SoulPower - July 15, 2019' },
  { href: 'images-events/2019-jul15-bowery.jpg', title: 'The Bowery - July 15, 2019' },
  { href: 'images-events/2019-may7-hotelRX.jpg', title: 'Hotel RX - May 7, 2019' },
  { href: 'images-events/2019-calendar.jpg', title: '' },
].map(event => ({
  ...event,
  key: `event-link-${event.href}-${event.poster}`,
}))

const EventsComponent = () => (
  <div className="flex-component">
      {events.map(({ key, href, title}) => (
        <div key={key} className="events-container border">
                <img src={href} alt={title} width="100%"></img>
                <h4>{title}</h4>
        </div>
      ))}
    <style jsx>{`
    .events-container {
      text-align: center;
      margin-bottom: 30px;
    }
    .events-container img {
      max-width: 600px;
    }
    .events-container h4 {
      width: 375px;
      margin: 0 auto;
      padding-top: 10px;
      padding-bottom: 15px;
    }
    @media only screen and (min-width: 635px) {
      .flex-component {
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
      }
    }
    `}</style>
  </div>
)

export default EventsComponent