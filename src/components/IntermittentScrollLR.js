import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import config from '../config';

const { breakpoints } = config;

function createMarkup(content) {
  return {__html: `${content}`};
}

const intersectionInterval = 50;

const Container = styled.div`
  background-color: ${props => props.theme.purpleBase};
  position: relative;
`;

const Section = styled.section`
  background-color: ${props => props.theme.purpleBase};
`;

const InnerFixedSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  display: none;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  top: 50%;
  left: calc(50% + ${intersectionInterval}px);
  transform: translate(-100%, -50%);
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media(max-width: ${breakpoints.maxTablet}px) {
    width: 100%;
    height: 375px;
    top: 0;
    left: 0;
    transform: initial;
  }
`;

const InnerScrollSection = styled.div`
  position: relative;
  background: rgba(242, 242, 242, 0.85);
  z-index: 2;
  text-align: center;
  padding: 16px;
  max-width: 400px;
  left: calc(50% - ${intersectionInterval}px);
  @media(max-width: ${breakpoints.maxTablet}px) {
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// <ImageWrapper>
// </ImageWrapper>


class IntermittentScrollLR extends Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.sections = [];
    this.scrollHandler = this._scrollHandler.bind(this);
    this.currentScrollTop = 0;
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.scrollHandler);
      this.currentScrollTop = window.scrollY;
    }
  }

  _scrollHandler() {
    // const scrollDirection = window.scrollY - this.currentScrollTop > 0 ? 'down' : 'up';
    this.sections.forEach((node, index) => {
      const sectionDistanceTopToTop = node.getBoundingClientRect().top;
      const sectionDistanceBottomToTop = node.getBoundingClientRect().bottom;
      const innerScrollSectionTopToTop = node.lastElementChild.getBoundingClientRect().top;
      const innerScrollSectionBottomToTop = node.lastElementChild.getBoundingClientRect().bottom;
      const paddingTop = parseInt(node.style.paddingTop, 10);
      const paddingBottom = parseInt(node.style.paddingBottom, 10);
      const fixedSectionDisplay = node.firstElementChild.style.display;
      if (sectionDistanceTopToTop - paddingTop < 0 && !fixedSectionDisplay) {
        node.firstElementChild.style.display = 'initial';
      }
      if (innerScrollSectionTopToTop <= paddingTop && innerScrollSectionTopToTop > 0) {
        const opacity = (paddingTop - innerScrollSectionTopToTop) / paddingTop;
        node.firstElementChild.style.opacity = opacity;
      } else if (sectionDistanceBottomToTop <= paddingBottom && sectionDistanceBottomToTop >= 0) {
        const opacity = 1 - ((paddingBottom - sectionDistanceBottomToTop) / paddingBottom);
        node.firstElementChild.style.opacity = opacity;
      } else if (innerScrollSectionBottomToTop >= 0 && innerScrollSectionTopToTop <=0) {
        node.firstElementChild.style.opacity = 1;
      } else if (sectionDistanceBottomToTop <= 0 || sectionDistanceTopToTop >= 0) {
        node.firstElementChild.style.opacity = 0;
      }
    });
    this.currentScrollTop = window.scrollY;
  }

  _renderSections() {
    if (!window) {
      return null;
    }
    const { data } = this.props;
    return data.map((dataElem, index) => {
      const { imageUrl, id, text } = dataElem;
      return (
        <Section
          id={id}
          key={id}
          ref={(node) => {
            if (node) {
              this.sections.push(node);
            }
          }}
          style={{
            paddingTop: `${window.innerHeight}px`,
            paddingBottom: `${Math.ceil(window.innerHeight/2)}px`
          }}
        >
          <InnerFixedSection>
            <ImageWrapper>
              <img
                src={imageUrl}
                alt={imageUrl}
              />
            </ImageWrapper>
          </InnerFixedSection>
          <InnerScrollSection
            dangerouslySetInnerHTML={createMarkup(text)}
          />
        </Section>
      );
    })
  }

  render() {
    return (
      <Container
        ref={node => {
          if(node && !this.container) {
            this.container = node;
          }
        }}
      >
        {this._renderSections()}
      </Container>
    );
  }
}

export default IntermittentScrollLR;
