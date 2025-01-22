import ProductCard from './productcard'
import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

root.render(
    <div className="main-container">
        <div className="main-content">
            <div className="commentary-section">
                <div className="left-side">
                    <div className="eyebrow">Chapter 00</div>
                    <div className="title">Why Does this Website Exist?</div>
                </div>
                <div className="right-side">
                <div className="description">My name is Dallin. I’m a Design Engineer. I struggled with explaining what that means, so I built a site that shows the design engineering process.</div>
                <div className="description">Let’s start at the end. Below is a wireframe of a product search page. Let’s not focus on the whole page, though. Let’s zero in on just one component.</div>
                </div>
            </div>
            <div 
            className="card-holder"
            style={{ backgroundColor: 'white', padding: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '24px', maxWidth: '1440px', margin: '24px'}}
            >
                {/* <h1>Hello World.</h1> */}
                {/* <ProductCard style={{scale: '1'}}/> */}
                <img src="coffee-website.jpg" style={{scale: '.8', borderRadius: '8px'}}/>
            </div>
        </div>
        <div className="main-content">
        </div>
        
    </div>
)