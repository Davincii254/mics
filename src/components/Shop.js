import React from "react";
import '../assets/index.css'
import merch from '../assets/merch1.jpg'

function Shop(){





    return(
        <div className="get">
            {/* <img className="merch" src={merch} alt="Merch"></img> */}
            <div className="container">
            <img className="merch" src={merch} alt="my image" />
            <button className="buynow">Buy Now</button>
            </div>
        </div>
    );
}
export default Shop;