import React from 'react'
import "./Products.css"
import productsTop from "../../assets/images/products__cards-top-img.png"
import productsTopHeading from "../../assets/images/products-top__title-heading.webp"
import product1 from "../../assets/images/product-img1.webp"
import product2 from "../../assets/images/product-img2.webp"
import product3 from "../../assets/images/product-img3.webp"
import product4 from "../../assets/images/product-img4.webp"


function Products() {
  return (
    <div className='products'>
        <div className="container">
            <div className="products__title">
                <h2 className="products__title-heading">Featured Products</h2>
                <ul className="products__title-list">
                    <li>
                        <p className="products__title-link">Stay on Trend</p>
                    </li>
                    <li>
                        <p className="products__title-link">Latest Flagship</p>
                    </li>
                    <li>
                        <p className="products__title-link">Enjoy the Outdoors</p>
                    </li>
                    <li>
                        <p className="products__title-link">Gaming Essentials</p>
                    </li>
                </ul>
            </div>
            <div className="products__cards">
                <div className="products__cards-top">
                    <div className="products__cards-top__img">
                        <img src={productsTop} alt="Product img" />
                    </div>
                    <div className="products__cards-top__title">
                        <img src={productsTopHeading} alt="Heading" />
                        <h4>Xiaomi Fan Festival Special Edition</h4>
                        <p>Limited availability | Mystic Silver</p>
                        <button className='products__cards-top__btn'>Learn more</button>
                    </div>
                </div>
                <div className="products__cards-bottom">
                    <div className="products__cards-bottom__card">
                        <div className="products__cards-bottom__card-img">
                            <img src={product1} alt="Product Img" />
                        </div>
                        <h3 className='products__cards-bottom__card-heading'>Redmi Note 13 5G</h3>
                        <p className='products__cards-bottom__card-desc'>Super-clear 108MP triple camera</p>
                        <button className='products__cards-bottom__card-btn'>Learn more</button>
                    </div>
                    <div className="products__cards-bottom__card">
                        <div className="products__cards-bottom__card-img">
                            <img src={product2} alt="Product Img" />
                        </div>
                        <h3 className='products__cards-bottom__card-heading'>Redmi Watch 4</h3>
                        <p className='products__cards-bottom__card-desc'>Ultra-large 1.97" AMOLED display</p>
                        <button className='products__cards-bottom__card-btn'>Learn more</button>
                    </div>
                    <div className="products__cards-bottom__card">
                        <div className="products__cards-bottom__card-img">
                            <img src={product3} alt="Product Img" />
                        </div>
                        <h3 className='products__cards-bottom__card-heading'>Redmi Buds 5 Pro</h3>
                        <p className='products__cards-bottom__card-desc'>High-resolution, Hi-Fi sound quality</p>
                        <button className='products__cards-bottom__card-btn'>Learn more</button>
                    </div>
                    <div className="products__cards-bottom__card">
                        <div className="products__cards-bottom__card-img">
                            <img src={product4} alt="Product Img" />
                        </div>
                        <h3 className='products__cards-bottom__card-heading'>Redmi Buds 5</h3>
                        <p className='products__cards-bottom__card-desc'>AI noise reduction for calls</p>
                        <button className='products__cards-bottom__card-btn'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products