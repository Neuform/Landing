import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import data from '../Extras/portfolioData'


const PortfolioCarousel = () => {
    
    const items = data.map((item)=> <img src={item.image} className='cursor-pointer '  ></img>)

    return(
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
        disableDotsControls  
    />
    )
}


export default PortfolioCarousel