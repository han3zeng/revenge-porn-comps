import React from 'react';
import styled, { css } from 'styled-components';
import { fadeInOpacity } from '../utils/animations';
import config from '../config';
import arrowIconSrc from '../assets/user-report-icon.svg';

const { breakpoints } = config;

const imageWidth = 152;
const imageHeight = 246;
const gap = 20;

const Container = styled.div`
  position: relative;
  opacity: 0;
  animation: ${props => props.fadeIn ? css`${fadeInOpacity} 0.3s linear forwards` : 'none'};
  cursor: poinetr;
  @media(max-width: ${breakpoints.maxTablet}px) {
    display: none;
  }
`;

const ImageWrapperBase = styled.div`
  cursor: pointer;
  position: absolute;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
  top: 0;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageRight = styled(ImageWrapperBase)`
  right: -${imageWidth}px;
`;

const ImageLeft = styled(ImageWrapperBase)`
  left: -${gap + imageWidth}px;
`;

const BottomRow = styled.div`
  background-color: #28164E;
  color: #ECDF6B;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px 7px;
`;

class SidePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false,
    }
    this.scrollHandler = this._scrollHandler.bind(this);
    this.container = null;
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.scrollHandler);
    }
  }

  _scrollHandler() {
    if (this.container && (window || document)) {
      const contentDistanceTopToTop = this.container.getBoundingClientRect().top;
      const viewPortHeight = window.innerHeight || document.documentElement.clientHeight;
      const { fadeIn } = this.state;
      if (contentDistanceTopToTop <= viewPortHeight/1.4 && !fadeIn) {
        this.setState({
          fadeIn: true,
        })
      }
    }
  }

  _renderContent() {
    const { type, imgUrl, caption, openSidePicturePopup, id } = this.props;
    const FinalImage = type === 'right' ? ImageRight : ImageLeft;
    return (
      <FinalImage
        onClick={() => {
          openSidePicturePopup({
            sidepictureId: id,
          });
        }}
      >
        <img
          src={imgUrl}
          alt={caption}
        />
        <BottomRow>
          她的故事
          <img src={arrowIconSrc} />
        </BottomRow>
      </FinalImage>
    );
  }
  render() {
    const { fadeIn } = this.state;
    return (
      <Container
        ref={(node) => {
          if (!this.container && node) {
            this.container = node;
          }
        }}
        fadeIn={fadeIn}
      >
        {this._renderContent()}
      </Container>
    );
  }
}

export default SidePicture;
