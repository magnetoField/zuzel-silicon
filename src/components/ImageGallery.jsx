import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageGallery({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="gallery-backdrop"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="gallery-container">
          <button
            className="gallery-close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            ✕
          </button>

          <motion.div
            className="gallery-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="gallery-main-image"
            />
          </motion.div>

          {images.length > 1 && (
            <>
              <button
                className="gallery-nav gallery-prev"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="gallery-nav gallery-next"
                onClick={goToNext}
                aria-label="Next image"
              >
                ›
              </button>

              <div className="gallery-counter">
                {currentIndex + 1} / {images.length}
              </div>

              <div className="gallery-thumbnails">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img src={img.src} alt={img.alt} />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
