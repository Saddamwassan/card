import React from "react"
export default function Card(){
    return(
    <div className="card">
        <img className="s-image" src="https://m.media-amazon.com/images/I/71JmuWGUR0L._AC_UY218_.jpg"  alt="Fullmosa Compatible Apple Watch Metal Bands 45mm 44mm 42mm, Stainless Steel Mesh Loop Magnetic Clasp iWatch Band with TPU ..." data-image-index="10" data-image-load="" data-image-latency="s-product-image" data-image-source-density="1" />
        <h3>Apple</h3>
        <h4>Apple Watch in sale</h4>
        <h2>$120</h2>
        <div className="btnDiv">
        <button className="cartbtn">ADD TO CART<i className="fa-solid fa-cart-shopping cart"></i></button>
        <button className="forwardbtn"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
     </div>
    )
}