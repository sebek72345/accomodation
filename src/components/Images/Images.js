import React from "react";
import ImageGallery from "react-image-gallery";
import img1 from "../../images/images/1.jpg";
import img2 from "../../images/images/2.jpg";
import img3 from "../../images/images/3.jpg";
const PREFIX_URL =
  "https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/";

class App extends React.Component {
  constructor() {
    super();
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

    this.images = [
      {
        original: img1,
        thumbnail: img1,
      },
      {
        original: img2,
        thumbnail: img2,
      },
      {
        original: img3,
        thumbnail: img3,
      },
      {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        original: `${PREFIX_URL}4v.jpg`,
        embedUrl:
          "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
        description: "Render custom slides within the gallery",
        renderItem: this._renderVideo.bind(this),
      },
      {
        original: `${PREFIX_URL}image_set_default.jpg`,
        thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
        imageSet: [
          {
            srcSet: `${PREFIX_URL}image_set_cropped.jpg`,
            media: "(max-width: 1280px)",
          },
          {
            srcSet: `${PREFIX_URL}image_set_default.jpg`,
            media: "(min-width: 1280px)",
          },
        ],
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: "featured-slide",
        thumbnailClass: "featured-thumb",
        description: "Custom class for slides & thumbnails",
      },
    ].concat(this._getStaticImages());
  }

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
    this._resetVideo();
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

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 12; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail: `${PREFIX_URL}${i}t.jpg`,
      });
    }

    return images;
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {this.state.showVideo[item.embedUrl] ? (
          <div className="video-wrapper">
            <a
              className="close-video"
              onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
            ></a>
            <iframe
              title="pictures"
              width="560"
              height="315"
              src={item.embedUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
            <div className="play-button"></div>
            <img className="image-gallery-image" src={item.original} />
            {item.description && (
              <span
                className="image-gallery-description"
                style={{ right: "0", left: "initial" }}
              >
                {item.description}
              </span>
            )}
          </a>
        )}
      </div>
    );
  }

  render() {
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
