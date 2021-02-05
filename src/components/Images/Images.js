import React from "react";
import ImageGallery from "react-image-gallery";
import img1 from "../../images/lite/1.jpg";
import img2 from "../../images/lite/2.jpg";
import img3 from "../../images/lite/3.jpg";
import img4 from "../../images/lite/4.jpg";
import img5 from "../../images/lite/5.jpg";
import img6 from "../../images/lite/6.jpg";
import img7 from "../../images/lite/7.jpg";
import img8 from "../../images/lite/8.jpg";
import img9 from "../../images/lite/9.jpg";
import img10 from "../../images/lite/10.jpg";
import img11 from "../../images/lite/11.jpg";
import img12 from "../../images/lite/12.jpg";
import img13 from "../../images/lite/13.jpg";
import img14 from "../../images/lite/14.jpg";
import img15 from "../../images/lite/15.jpg";
import img16 from "../../images/lite/16.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.allPhoto();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "left",
      showVideo: {},
    };
  }
  images = [];
  allPhoto = () => {
    for (let i = 1; i < 17; i++) {
      console.log(img16);
      this.images.push({
        original: img16,
        thumbnail: `../../images/lite/${i}.jpg`,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.slideInterval !== prevState.slideInterval ||
      this.state.slideDuration !== prevState.slideDuration
    ) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }

  _onImageClick(event) {
    console.debug(
      "clicked on image",
      event.target,
      "at index",
      this._imageGallery.getCurrentIndex()
    );
  }

  _onImageLoad(event) {
    console.debug("loaded image", event.target.src);
  }

  _onSlide(index) {
    console.debug("slid to index", index);
  }

  _onPause(index) {
    console.debug("paused on index", index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug("isFullScreen?", !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug("playing from index", index);
  }

  _handleInputChange(state, event) {
    this.setState({ [state]: event.target.value });
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  render() {
    console.log(this.images);

    return (
      <ImageGallery
        ref={(i) => (this._imageGallery = i)}
        items={this.images}
        lazyLoad={false}
        onClick={this._onImageClick.bind(this)}
        onImageLoad={this._onImageLoad}
        onSlide={this._onSlide.bind(this)}
        onScreenChange={this._onScreenChange.bind(this)}
        infinite={this.state.infinite}
        showBullets={this.state.showBullets}
        showFullscreenButton={
          this.state.showFullscreenButton &&
          this.state.showGalleryFullscreenButton
        }
        showThumbnails={this.state.showThumbnails}
        showIndex={this.state.showIndex}
        showNav={this.state.showNav}
        isRTL={this.state.isRTL}
        thumbnailPosition={this.state.thumbnailPosition}
        slideDuration={parseInt(this.state.slideDuration)}
        slideInterval={parseInt(this.state.slideInterval)}
        slideOnThumbnailOver={this.state.slideOnThumbnailOver}
        additionalClass="app-image-gallery"
      />
    );
  }
}

export default App;
