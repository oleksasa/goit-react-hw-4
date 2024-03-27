import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGellary";

const App = () => {
  const [photos, setPhotos] = useState([]);

  async function fetchImages() {
    const {data} = await axios.get(
      "https://api.unsplash.com/photos/?client_id=XlhamTcBfw1C3XzSRruT_ys2JUUQtmyYn6f_Sn2Gezc"
    );
    setPhotos(data)
  }
 
  console.log(photos);
  
  useEffect(() => {
    fetchImages()
  }, []);
  

  return (<ImageGallery photos={photos}/>)
};


export default App;
