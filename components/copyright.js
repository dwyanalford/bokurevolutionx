import React from 'react'

const Copyright = () => (
  <div className="row">
    <div id="copyright" className="col-12">
        <p>&copy; 2020. Boku Revolution X. A Jo. D. Jonz concept. All Rights Reserved.
        <br/>Web Developer: d a d a
        </p>
    </div>

    <style jsx>{`
      #copyright {
        padding-top: 25px;
      }
      #copyright p {
          font-size: 12px;
          color: grey;
          text-align: center;
      }
      @media only screen and (min-width: 600px) {
        #copyright p {
          font-size: 14px;
      }
      }
      
    `}</style>
  </div>
)

export default Copyright
