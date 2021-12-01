import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Componnent/Searchbar/Searchbar';
import ImageGallery from './Componnent/ImageGallery/ImageGallery';
import * as imagesApi from './Componnent/Services/images-api';
import Button from './Componnent/Button/Button';
import Loader from './Componnent/Loader/Loader';
import Modal from './Componnent/Modal/Modal';
import styles from './App.module.css';

export default function App(){
  static defaultProps = {};

  static propTypes = {};

  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageId, setLargeImageId] = useState(null);
  const [largeImage, setLargeImage] = useState([]);


  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImages(false);
    }
  }

  onSearch = search => {
    this.setState({ search, images: [], pageNumber: 1 });
  };

  fetchImagesWithScroll = () => {
    this.fetchImages(true);
  };

  fetchImages = scroll => {
    this.setState({ isLoading: true });
    const { search, pageNumber } = this.state;
    imagesApi
      .fetchImages(search, pageNumber)
      .then(images => {
        this.setState(state => ({
          images: [...state.images, ...images],
          pageNumber: state.pageNumber + 1,
        }));
        return images[0];
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      })
      .then(firstLoadedImage => {
        if (scroll) {
          const { id } = firstLoadedImage;
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      });
  };

  const findPic = () => {
    const largeImg = images.find(image => {
      return image.id === largeImageId;
    });
    return largeImg;
  };

  const openModal = e => {
    setIsModalOpen(true),
      setLargeImageId(Number(e.currentTarget.id)),
  };
  closeModal = () => setIsModalOpen(false) ;

  

    return (
      <div className={styles.App}>
        {this.state.error && (
          <h2 className={styles.error}>
            No pictures were found for your query
          </h2>
        )}
        <Searchbar onSubmit={onSearch} />
        <ImageGallery openModal={openModal} images={images} />
        {isLoading && <Loader />}
        {images.length > 0 ? (
          <Button fetchImages={fetchImagesWithScroll} />
        ) : (
          <div className={styles.Warning}>
            You have to write down right word for search
          </div>
        )}
        {isModalOpen && (
          <Modal largeImageId={largeImageId} onClose={closeModal}>
            <img src={findPic().largeImageURL} alt={findPic().tags} />
          </Modal>
        )}
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  }

