import React from 'react'
import Link from 'next/link'

const Logo = () => (
  <div id="logo" className="row">
    <div className="col-12">
            <Link href="/">
              <img src="./logo/boku-logo-flattened.png"></img>
            </Link>
    </div>

    <style jsx>{`
    #logo {
        text-align: center;
        padding-bottom: 20px;
        padding-top: 20px;
        // background-color: yellow;
        // background-image: url("./.jpg");
    }
    #logo img {
      cursor: pointer;
    }
    @media only screen and (max-width: 600px) {
        #logo img {
            width: 70%;
        }
      }
      @media only screen and (min-width: 601px) {
        #logo img {
            width: 300px;
        }
      }
    `}</style>
  </div>
)

export default Logo
