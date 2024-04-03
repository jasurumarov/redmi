import React from 'react'
import "./Explore.css"
import img1 from "../../assets/images/explore1.webp"
import img2 from "../../assets/images/explore2.webp"
import img3 from "../../assets/images/explore3.webp"

function Explore() {
  return (
    <div className='explore'>
        <div className="container">
            <h2 className='explore__title'>Explore Xiaomi</h2>
            <div className="explore__cards">
                <div className="explore__card item">
                    <div className="explore__card-img">
                        <img src={img1} alt="Card img" />
                    </div>
                    <div className="explore__card-container">
                        <h3 className='explore__card-heading'>Go Behind the Scenes With Xiaomi 14 Ultra</h3>
                        <p className="explore__card-desc">Breaking Bad director puts the powerful video creation tool through its paces.</p>
                        <button className="explore__card-btn">Learn more</button>
                    </div>
                </div>
                <div className="explore__card item">
                    <div className="explore__card-img">
                        <img src={img2} alt="Card img" />
                    </div>
                    <div className="explore__card-container">
                        <h3 className='explore__card-heading'>Smarter every wear</h3>
                        <p className="explore__card-desc">Access over 200 apps, keep track of your fitness, make payments, and more, all from your wrist.</p>
                        <button className="explore__card-btn">Learn more</button>
                    </div>
                </div>
                <div className="explore__card item">
                    <div className="explore__card-img">
                        <img src={img3} alt="Card img" />
                    </div>
                    <div className="explore__card-container">
                        <h3 className='explore__card-heading'>Every shot iconic</h3>
                        <p className="explore__card-desc">Unleash your creativity and take amazing photos whenever, wherever, and with whoever.</p>
                        <button className="explore__card-btn">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore