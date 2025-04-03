import React from "react";
import ViewProductButton from "../components/button";

const ProductCard = () => {
    const productName = "Dodge Challenger SRT Hellcat";
    const productPrice = "$71,895";
    const productImage = "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/dodge-111challenger-hellcat-2014-020.jpg";

    return(
        <div className="border rounded-lg shadow-lg p-4 max-w-sm mx-auto bg-white">

        <img
        src={productImage}
        alt={productName}
        />

        <h2 className="text-lg font-semibold mt-2">{productName}</h2>

        <p className="text-gray-700 font-bold">{productPrice}</p>

        <p><ViewProductButton/></p>

        
        </div>
    );
};

export default ProductCard;