import React, { useState,useRef,useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import image1 from '../../images/shop.jpg';
import image2 from '../../images/building.jpg';
import image3 from '../../images/service-station.jpg';
import image4 from '../../images/visiting-card.jpg';


const images = [image1, image2, image3,image4]
const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageSize, setImageSize] = useState({ width: 'auto', height: 'auto' });
  
    const imgRef = useRef(null);
  
    useEffect(() => {
      const updateImageSize = () => {
        if (imgRef.current) {
          const { naturalWidth, naturalHeight } = imgRef.current;
          setImageSize({
            width: `${naturalWidth}px`,
            height: `${naturalHeight}px`,
          });
        }
      };
  
      updateImageSize();
  
      window.addEventListener('resize', updateImageSize);
      return () => {
        window.removeEventListener('resize', updateImageSize);
      };
    }, [currentIndex]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    return (
        <>
        <div className="relative mx-auto" 
            style={{ width: imageSize.width, height: imageSize.height }}>
        <img
          ref={imgRef}
          src={images[currentIndex]}
          alt="slide"
          className="w-full h-full object-contain"
        />
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center justify-center">
          <Icon
            name="chevron left"
            size="big"
            onClick={prevSlide}
            className="cursor-pointer bg-blue-300 bg-opacity-90 p-2
             rounded-full hover:bg-opacity-75 ml-4"
          />
        </div>
  
        <div className="absolute inset-y-0 right-0 flex items-center justify-center">
          <Icon
            name="chevron right"
            size="big"
            onClick={nextSlide}
            className="cursor-pointer bg-blue-300 bg-opacity-90 p-2 rounded-full hover:bg-opacity-75 mr-4"
          />
        </div>
        </>
      
      
    );
  };

export default ImageSlider;
