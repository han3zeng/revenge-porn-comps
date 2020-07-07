import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const translateValue = 20;

const fadeIn = keyframes`
  from {
    transform: translateY(${translateValue}px);
  }

  to {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  transform: translateY(${translateValue}px);
  animation: ${props => props.fadeIn ? css`${fadeIn} 0.3s linear forwards` : 'none'};
`;

class FadeInHOC extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.content = null;
    this.scrollHandler = this._scrollHandler.bind(this);
    this.state = {
      fadeIn: false,
    }
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.scrollHandler);
    }
  }

  _scrollHandler() {
    if (this.content && (window || document)) {
      const contentDistanceTopToTop = this.content.getBoundingClientRect().top;
      const viewPortHeight = window.innerHeight || document.documentElement.clientHeight;
      const { fadeIn } = this.state;
      if (contentDistanceTopToTop <= viewPortHeight && !fadeIn) {
        console.log('past')
        this.setState({
          fadeIn: true,
        })
      }
    }
  }

  render() {
    const { children } = this.props;
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
        <div
          ref={(node) => {
            if (!this.content && node) {
              this.content = node;
            }
          }}
        >
          {children}
        </div>
      </Container>
    );
  }
}

export default FadeInHOC;
