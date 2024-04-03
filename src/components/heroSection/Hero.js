import React from 'react'
import heroBg from "../../assets/images/hero-bg.webp"
import "./Hero.css"

function Hero() {
    return (
        <div style={{ backgroundImage: `url(${heroBg})` }} className='hero'>
            <div className="container">
                <div className="hero-content">
                    <img className='hero-content__img' src="https://i02.appmifile.com/181_operator_global/18/03/2024/39cf2899c703eb55be23b20929abefe2.svg" alt="Product title" />
                    <p className='hero-content__desc'>Leica Summilux optical lens
                        Snapdragon® 8 Gen 3 Mobile Platform</p>
                    <button className='hero-content__btn'>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Hero