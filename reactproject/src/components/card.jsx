import React from "react"
export default function Card({data}){
    return(
    <div className="card">
        <img className="s-image" src={data.images[0]}  alt="Fullmosa Compatible Apple Watch Metal Bands 45mm 44mm 42mm, Stainless Steel Mesh Loop Magnetic Clasp iWatch Band with TPU ..." data-image-index="10" data-image-load="" data-image-latency="s-product-image" data-image-source-density="1" />
        <div className="textDiv">
        <h3>{data.brand}</h3>
        <h4>{data.category}</h4>
        <ul>
            features
            <li>{data.description}</li>
        </ul>
        </div>
        <h2>$120</h2>
        <div className="btnDiv">
        <button className="cartbtn">ADD TO CART<i className="fa-solid fa-cart-shopping cart"></i></button>
        <button className="forwardbtn"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
     </div>
    )
}