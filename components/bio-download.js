import React from 'react'

const BioDownload = () => (
  <div id="bio-download">
    
      <a href="./pdf/boku-revolution-x-epk.pdf" target="_blank" className="border"><i className="fas fa-download fa-3x"></i><span><br/>Download EPK</span></a>
    

    <style jsx>{`
      #bio-download {
        position: relative;
      }
      #bio-download a {
        position: fixed;
        bottom: 0;
        right: 0;
        text-decoration: none;
        padding: 25px;
        text-align: center;
        margin-right: 10%;
        background-color: black;
      }
    `}</style>
  </div>
)

export default BioDownload
