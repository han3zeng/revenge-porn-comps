import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { fadeInOpacity } from '../utils/animations';

const imageWidth = 110;
const imageHeight = 164;
const gap = 20;

const Container = styled.div`
  position: relative;
  opacity: 0;
  animation: ${props => props.fadeIn ? css`${fadeInOpacity} 0.3s linear forwards` : 'none'};
`;

const ImageWrapperBase = styled.div`
  position: absolute;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
  top: 0;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageRight = styled(ImageWrapperBase)`
  right: -${gap + imageWidth}px;
`;

const ImageLeft = styled(ImageWrapperBase)`
  left: -${gap + imageWidth}px;
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
    const { type, imgUrl, caption } = this.props;
    if (type === 'right') {
      return (
        <ImageRight>
          <img
            src={imgUrl}
            alt={caption}
          />
        </ImageRight>
      );
    }
    return (
      <ImageLeft>
        <img
          src={imgUrl}
          alt={caption}
        />
      </ImageLeft>
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
