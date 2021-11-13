import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__container">
                    <img className="home__image" src="https://i.imgur.com/SUeDrDa.png" alt="" />
                </div>
                <div className="home__row">
                <Product
                id="123456" 
                title="KIRUNDO Women’s Stripe Color Block Short Sweater Long Sleeve Stitching Color Crew Neck Loose Knitted Pullovers Jumper Tops"
                price={25.99} image='https://i.imgur.com/34VaN1m.jpg' 
                rating={5}/>
                <Product
                id="456654" 
                title='OKAKOPA Modern Glam Tufted Velvet Chaise Lounge with Scrolled Backrest,Indoor Chaise Lounge Chair,Dark Grey' 
                price={299.99} image='https://i.imgur.com/MTF6s0S.jpg' 
                rating={4}/>
                </div>
                <div className="home__row">
                <Product
                id="419723" 
                title='Logitech C922x Pro Stream Webcam – Full 1080p HD Camera' 
                price={89.23} image='https://i.imgur.com/ar15vzr.jpg' 
                rating={5}/>
                <Product
                id="136795" 
                title="URBANFIND Men's Slim Fit Lightweight Sportswear Jacket Casual Bomber Jacket" 
                price={39.99} image='https://i.imgur.com/2Gs6NRM.jpg' 
                rating={5}/>
                <Product
                id="136795" 
                title="NEST Fragrances NEST02OS002 Votive Candle- Ocean Mist & Sea Salt , 2 oz" 
                price={17.00} image='https://i.imgur.com/Xq7WBGe.jpg' 
                rating={4}/>
                </div>
                <div className="home__row">
                <Product
                id="136795" 
                title="SAMSUNG CH890 Series 34-Inch Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Curved, HDMI, USB-C, Height Adjustable Stand, 3 Yr WRNTY (LC34H890WGNXGO)" 
                price={649.99} image='https://i.imgur.com/8GuuAdK.jpg' 
                rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
