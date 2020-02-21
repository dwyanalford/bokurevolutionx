import React from 'react'

const Bio = () => (
  <div id="bio-component" className="flex-component">
    <div className="composite opaque-bg">
    <p className="border-top-left"><span>WATCH</span> VIDEO - The Band and The Music (2:46)</p>
    <iframe className="border"  src="https://www.youtube.com/embed/IbhKGinhrLE?rel=0" frameBorder="0" allowFullScreen></iframe>
    {/* width="420" height="236" */}
        
        <p><span>BOKU REVOLUTION X</span> is a super, funky, highly skilled, ethnomusicology, rap band.</p>
    </div>
    <div className="opaque-bg">
      <h2 className="">BIO EPK</h2>
      <p>Fronted by lead vocalist <span>Jo D. Jonz</span> with <span>Mike Tree</span> on drums and <span>Billy White</span> on keyboard. <span>BOKU</span> has performed all over Los Angeles to sold out crowds at the most premier venues in the city, such as <span>House of Blues, El Rey, The Whiskey, The Roxy, Henry Fonda</span> and <span>the Troubadour</span>. </p>
      <p>Considered ahead of their time by legendary reggae group <span>Morgan Heritage</span> and garnered fans such as Grammy award winner <span>Natalie Imbruglia</span>. Their unmatched skill set along with their innate, seamless, style, in which they morph, different, genres into their own unique sound.</p>
    </div>
    <div className="composite opaque-bg"><img src="./images-bio/boku-band.jpg" alt="Boku Revolution X BRX live stage at Shrine in New York City 2019" width="100%"></img></div>
    <div className="opaque-bg"><p>They made the perfect opening act at the summer <span>UCLA</span> concert series, for <span>The Roots</span>. They are considered the second coming of <span>The Roots</span>, yet more conscious. They have also been compared to the likes of <span>Outcast</span> for Jonz’s lyrical content <span>Mos Def</span> and <span>Big Krit</span> on production by <span>24Our music magazine</span>, earlier this year. </p>
    <p>Their song <span>“Buddha Walk”</span> was chosen as song of the day by <span>Songshooter.com</span>, And As they prepare for the first studio album and tour <span>BOKU</span> could not be any more suited for the current climate of music.</p></div>
    <div className="composite opaque-bg"><img src="./images-bio/crowd.jpg" alt="Crowd at Boku Revolution X BRX 2019 Event" width="100%"></img></div>
    <div className="opaque-bg"><p>They are still in a class of their own and are able to rock any crowd from hardcore Hip-Hop to Punk, Rock & Grudge, which they so famously proved after arriving at a gig in a parking lot of a strip mall to a crowd of teenage punk fans. Surprised but undaunted <span>BOKU</span> took the stage and turned the skeptical crowd into true believers.</p>
    <p><span>BOKU</span> members are comprised of hip, futuristic, impresarios that have nothing but love and knowledge of music that will surely delight any listener, from small rooms</p>
    </div>
    <div className="composite opaque-bg"><img src="./images-bio/jo-d-nyc.jpg" alt="Jo D Jonz Boku Revolution X BRX" width="100%"></img></div>
    <div className="opaque-bg"><p>to concert stadiums. The new album is of course in their signature <span>BOKU</span> tradition, a hybrid of sounds and tones that have a bit of something for everyone, mixing, <span>traditional hip-hop, trap, trip, soul, funk, rock and EDM.</span></p>
 <p>As<span>BOKU Revolution X</span> prepares for their upcoming, international tour, they have been using New York City as their testing ground... With a new sound and a new audience, <span>BOKU</span> has wowed diverse New York audiences at such venues as <span>SHRINE, THE WELL and SIDEWALK</span>, where one impressed fan said after the show... 
</p></div>
    <div className="opaque-bg"><img src="./images-bio/band-on-stage.jpg" alt="Jo D Jonz Boku Revolution X BRX" width="100%"></img></div>
    <div className="opaque-bg"><p>...said to JONZ  <span>“It’s, your time.”</span>&nbsp;
This band is in fact, what legends are made of and as understood by an unsuspecting, new fan, who happened to walk in on their performance in Harlem, said. “I was feeling down and I came in and heard you guys and yawl lifted my spirits. Thank you, you guys are so bad m’fo...” And with their forthcoming visual album <span>“FANTASY MANIFESTO”</span>, the world will surely know it and the music scene will be inspired and uplifted by their originality and musical integrity, forever!
</p></div>
    <style jsx>{`
    .flex-component {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
  }
    #bio-component div {
        padding: 0 24px;
        width: 100%;
        // background-color: green;
    }
      #bio-component iframe {
        width: 100%;
        height: 300px;
      }
      #bio-component p {
        border-left: 1px solid rgb(62, 63, 63);
        padding-left: 15px;
      }
      #bio-component h2 {
        padding-left: 15px;
      }
      @media only screen and (min-width: 1000px) {
        .flex-component {
          flex-direction: row;
          flex-wrap: wrap;
        }
        #bio-component div {
          width: 50%;
          margin-bottom: 25px;
      }
      }
    `}</style>
  </div>
)

export default Bio
