import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import { requestPhotos } from "./components/services/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { GlobalCSS } from "./styles/global";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  async function fetchImages(value, page) {
    try {
      setLoading(true);

      const data = await requestPhotos({
        queryValue: value,
        page,
      });

      setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
    } catch (e) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (value.trim() !== "") {
      fetchImages(value, currentPage);
    }
  }, [value, currentPage]);

  const handleSubmit = (value) => {
    setPhotos([]);
    setValue(value);
  };

  return (
    <>
      <GlobalCSS />
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery
        photos={photos}
        openModal={(photo) => setOpenModal(photo)}
      />
      {photos.length !== 0 && (
        <LoadMoreBtn onClick={() => setCurrentPage(currentPage + 1)} />
      )}
      <ImageModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default App;
