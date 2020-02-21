import React from 'react'

const videos = [
  { href: 'https://www.youtube.com/embed/IbhKGinhrLE?rel=0', coverart: '', title: '2020 PROMO Video - (2:47)', description: 'Future music entertainment. FME!'},
  { href: 'https://www.youtube.com/embed/uwvLpwtJ-AI?rel=0', coverart: '', title: 'B.R.O.N.X - (4:17)', description: 'Official Video'},
  { href: 'https://www.youtube.com/embed/L6RwIMkqOZg?rel=0', coverart: '', title: 'ETHEREAL NEGUS - (3:34)', description: 'The most powerful Word on the planet'},
  { href: 'https://www.youtube.com/embed/CHjKJr49ULQ?rel=0', coverart: '', title: 'Soul Power Conceptual dance battle - (1:09)', description: 'July 15th, 2019. Live Performance'},
  { href: 'https://www.youtube.com/embed/cyoFDRxU6rs?rel=0', coverart: '', title: 'The Making of a Masterpeice (5:55)', description: 'Part 1 Behind the Scenes Hop Doc - Location Hollywood Ca. The Viper Room and The Knitting Factory.'},
  { href: 'https://www.youtube.com/embed/-KXuTd5oCds?rel=0', coverart: 'posters/poster-boku-concept.jpg', title: 'Motel Sixx picture of a future time - (6:40)', description: 'Herc paints a picture of a future time, when society has collapsed and humanity is reborn in a barren wasteland'},
  { href: 'https://www.youtube.com/embed/VS5jeBexZhI?rel=0', coverart: 'posters/poster-boku-concept.jpg', title: 'Clone 379 - (1:02)', description: 'This model is a clone that was created to store any and all information about the history of Hip Hop music and culture which has long since been forgotten'},
].map(video => ({
  ...video,
  key: `video-link-${video.href}-${video.poster}`,
}))

const Video = () => (
  <div className="flex-component">
      {videos.map(({ key, href, title, description }) => (
        <div key={key} className="video-container opaque-bg border">
            <iframe src={href} frameborder="0" allow="" allowfullscreen></iframe>
            <h3 className="bold-text border-bottom">{title}</h3>
            <p className="">{description}</p>
        </div>
      ))}
    <style jsx>{`
    .flex-component {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
  }
    .video-container {
      padding: 16px;
      margin: auto;
      margin-bottom: 30px;
      width: 100%;
      // background-color: green;
    }
    .video-container iframe {
      width: 100%;
      height: 300px;
    }
    @media only screen and (min-width: 956px) {
      .flex-component {
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
      }
      .video-container {
        width: 50%;
        padding: 16px;
        margin-bottom: 30px;
      }
    }
    
    `}</style>
  </div>
)

export default Video
