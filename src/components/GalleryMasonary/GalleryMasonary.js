import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import img1 from "../../images/images/1.jpg";
import img2 from "../../images/images/2.jpg";
import img3 from "../../images/images/3.jpg";
import img10 from "../../images/images/10.jpg";
import img11 from "../../images/images/11.jpg";
import img12 from "../../images/images/12.jpg";
import img13 from "../../images/images/13.jpg";
import img14 from "../../images/images/14.jpg";
import img15 from "../../images/images/15.jpg";
import img20 from "../../images/images/20.jpg";
import img16 from "../../images/images/16.jpg";
import img17 from "../../images/images/17.jpg";
import img18 from "../../images/images/18.jpg";
import img19 from "../../images/images/19.jpg";

const photos = [
  { src: img1, width: 4, height: 3 },
  { src: img2, width: 4, height: 3 },
  { src: img3, width: 4, height: 3 },
  { src: img10, width: 4, height: 3 },
  { src: img11, width: 4, height: 3 },
  { src: img12, width: 4, height: 3 },
  { src: img13, width: 4, height: 3 },
  { src: img14, width: 4, height: 3 },
  { src: img15, width: 4, height: 3 },
  { src: img16, width: 4, height: 3 },
  { src: img17, width: 4, height: 3 },
  { src: img18, width: 4, height: 3 },
  { src: img19, width: 4, height: 3 },
  { src: img20, width: 4, height: 3 },
];

export default function GalleryMasonary({ title, direction }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} style={{ width: "800px" }}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,

                frameProps: { autoSize: "height" },
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
