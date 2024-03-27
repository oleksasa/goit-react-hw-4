import React from "react";

const ImageCard = ({alt, image}) =>{
    return (
        <li>
            <img src={image} alt={alt} />
        </li>
    )
}

export default ImageCard;