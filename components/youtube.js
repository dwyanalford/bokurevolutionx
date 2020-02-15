import React from 'react'

const Youtube = () => (
  <div id="youtube" className="flex-component">
      <div className="opaque-bg">
        <a href="https://www.youtube.com/channel/UCxvsByh8JaY1nm--lxBDUxg" target="_blank" rel="noopener noreferrer">
            <img src="../logo/youtube-icon.png" width="40" height="40"></img>
            <p>WATCH ON <br/>YOUTUBE</p>
        </a>
      </div>

    <style jsx>{`
      #youtube > div {
          position: fixed;
          bottom: 0;
          right: 0;
          text-align: center;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 10px;
          border-radius: 8px;
      }
      #youtube a {
          cursor: pointer;
          text-decoration: none;
      }
      #youtube p {
          font-size: 20px;
          line-height: 1.1;
      }
      #youtube img {
        
      }
      @media only screen and (min-width: 700px) {
        #youtube div {
            right: 100px;
      }
    `}</style>
  </div>
)

export default Youtube
