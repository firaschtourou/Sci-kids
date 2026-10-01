import React from 'react'
import './welcome.css'
import frontground from './frontground.png'

const Welcome = () => {
  return (
    <div className="main">
      <div class="container">
        <div className="background-photo">
          <img src={frontground} alt="Image 1" className="foreground-photo" />
        </div>
        <div className='page-container'>
          <div className="div6">
            <div className="column">
              <div className="div7">
                <div className="welcomeToSciKids">
                  Welcome to <br />
                  SCI KIDS.
                </div>
                <div className="div8">
                  <div className="loremIpsumDolorSitAmetConsectetuerAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMag">
                    Hello everyone sci-kids is a platform that offers several services dedicated to children
                  </div>
                  <div className='buttons-container'>
                    <div className="joinNow"><button className='join'>Join now</button></div>
                    <div className="joinNow"><button className='partner'>Becom a partner</button></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column2">
              <img alt='imaged'
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/000288d40054ac83e3c44530ce2c3de6a174efae7bcbe65e3df8e9c0b5268278?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/000288d40054ac83e3c44530ce2c3de6a174efae7bcbe65e3df8e9c0b5268278?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/000288d40054ac83e3c44530ce2c3de6a174efae7bcbe65e3df8e9c0b5268278?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/000288d40054ac83e3c44530ce2c3de6a174efae7bcbe65e3df8e9c0b5268278?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/000288d40054ac83e3c44530ce2c3de6a174efae7bcbe65e3df8e9c0b5268278?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/000288d40054ac83e3c44530ce2c3de6a174efae7bcbe65e3df8e9c0b5268278?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/000288d40054ac83e3c44530ce2c3de6a174efae7bcbe65e3df8e9c0b5268278?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/000288d40054ac83e3c44530ce2c3de6a174efae7bcbe65e3df8e9c0b5268278?apiKey=ba0309dab51447bea3dfd91fdbb99527&&apiKey=ba0309dab51447bea3dfd91fdbb99527"
                className="dooby" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Welcome