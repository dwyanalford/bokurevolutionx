import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const BioDownload = () => (
  <div id="bio-download">
    
      <a href="./pdf/boku-revolution-x-epk.pdf" target="_blank"><FontAwesomeIcon icon={faDownload} size="xs" />Download EPK</a>
    

    <style jsx>{`
      #bio-download {
        position: relative;
      }
      #bio-download a {
        position: fixed;
        bottom: 0;
        left: 0;
        text-decoration: none;
        padding: 25px;
        background-color: black;
      }
    `}</style>
  </div>
)

export default BioDownload
