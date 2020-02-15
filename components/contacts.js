import React from 'react'

const Contacts = () => (
  <div id="contacts-component" className="flex-component">
    {/* div below ensures all elements treated as 1 flex item */}
    <div>
      <h4 className="theme-font-color">For all inquiries and bookings:</h4>
      <img src="./logo/herac-management-w350.jpg"></img>
      <p className="theme-font-color">Christopher Masters
      <br/>(718)877-9522
      <br/>bokurx@gmail.com</p>
    </div>

    <style jsx>{`
    #contacts-component {
        text-align: center;
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
