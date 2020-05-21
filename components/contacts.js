import React from 'react'

const Contacts = () => (
  <div id="contacts-component" className="flex-component">
    {/* div below ensures all elements treated as 1 flex item */}
    <div>
    <img width="300" src="./logo/herac-management-w350.jpg"></img>
      <h4 className="theme-font-color">For all inquiries and bookings:</h4>
      <p className="theme-font-color">Christopher Masters</p>
      <a href="mailto:herac@heracmgmt.com?subject=herac-website-inquiry" target="_top">herac&#64;heracmgmt.com</a>
    </div>

    <style jsx>{`
    #contacts-component {
        text-align: center;
        padding: 35px 0;
    }
      #contacts-component img {
          max-width: 350px;
          margin: auto;
      }
      #contacts-component p {
          font-size: 26px;
      }
    `}</style>
  </div>
)

export default Contacts
