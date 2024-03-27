import React from "react";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ photos }) {
  return (
    <ul>
      {photos?.map((photo) => (
        <ImageCard
          key={photo.id}
          image={photo.urls.small}
          alt={photo.alt_description}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
