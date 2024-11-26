import { motion } from "motion/react"
import { useState } from "react"

export default function ProductCard(props) {
    const [imageHovered, setImageHovered] = useState(false)

    return <div className="product-card" {...props}>
        <div className="image-section">
            <motion.img 
                initial={{top: '48px'}}
                whileHover={{top: '32px'}}
                src="coffee-bag.png"
            />
        </div>
        <div className="info-section">
            <div className="brand-name">Starbucks</div>
            <div className="product-name">Medium Roast House Blend</div>
            <div className="star-ratings">
                <div className="stars">
                    <img src="star.svg"/>
                    <img src="star.svg"/>
                    <img src="star.svg"/>
                    <img src="star.svg"/>
                    <img src="star.svg"/>
                </div>
                <div className="ratings-number">(121 reviews)</div>
            </div>
            <div className="pricing-section">
                <div className="strike-through">$8.99*</div>
                <div className="main-price-section">
                    <div className="main-price">$7.99</div>
                    <div className="price-per-ounce">(0.75/ounce)</div>
                </div>
                <div className="promo-messaging">*This offer is valid until April 3 or as long as stock lasts</div>
            </div>
            <div className="availability-messaging">
                <div className="dot-indicator"/>
                <div className="message">
                    16 in stock
                </div>
            </div>
            <div className="size-section">
                <div className="label">Size</div>
                <div className="selector">
                    <div className="option">12oz</div>
                    <div className="option">16oz</div>
                    <div className="option">20oz</div>
                </div>
            </div>
            <button className="primary-cta">Add to Cart</button>
        </div>
    </div>
}