import React from 'react';
import styled from 'styled-components';
import config from '../config';

const { textMaxWidth } = config;

function createMarkup(content) {
  return {__html: `${content}`};
}

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid red;
`;

const Section = styled.section`
  background-color: black;
  color: white;
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

const InnerScrollSection = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px;
  margin: 0 auto;
  max-width: ${textMaxWidth}px;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url("${props => props.imageUrl}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

class VerticalScrollSlides extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.scrollHandler = this._scrollHandler.bind(this);
    this.sections = [];
    this.currentScrollTop = 0;
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.scrollHandler);
      this.currentScrollTop = window.scrollY;
    }
  }

  _scrollHandler() {
    const scrollDirection = window.scrollY - this.currentScrollTop > 0 ? 'down' : 'up';
    this.sections.forEach((node, index) => {
      const sectionDistanceTopToTop = node.getBoundingClientRect().top;
      const sectionDistanceBottomToTop = node.getBoundingClientRect().bottom;
      const innerScrollSectionTopToTop = node.lastElementChild.getBoundingClientRect().top;
      const innerScrollSectionBottomToTop = node.lastElementChild.getBoundingClientRect().bottom;
      const paddingTop = parseInt(node.style.paddingTop, 10);
      const paddingBottom = parseInt(node.style.paddingBottom, 10);
      const fixedSectionDisplay = node.firstElementChild.style.display;
      if (true) {
        if (scrollDirection === 'down' || scrollDirection === 'up') {
          if (sectionDistanceTopToTop - paddingTop < 0 && !fixedSectionDisplay) {
            node.firstElementChild.style.display = 'initial';
          }
          if (innerScrollSectionTopToTop <= paddingTop && innerScrollSectionTopToTop > 0) {
            const opacity = (paddingTop - innerScrollSectionTopToTop) / paddingTop;
            const scaleValue = 1.2 - (opacity) * 0.2;
            node.firstElementChild.style.opacity = opacity;
            node.firstElementChild.style.transform = `scale(${scaleValue})`;
          } else if (sectionDistanceBottomToTop <= paddingBottom && sectionDistanceBottomToTop >= 0) {
            const opacity = 1 - ((paddingBottom - sectionDistanceBottomToTop) / paddingBottom);
            // const scaleValue = 1.2 - (opacity) * 0.2;
            node.firstElementChild.style.opacity = opacity;
            // node.firstElementChild.style.transform = `scale(${scaleValue})`;
          } else if (innerScrollSectionBottomToTop >= 0 && innerScrollSectionTopToTop <=0) {
            node.firstElementChild.style.opacity = 1;
            node.firstElementChild.style.transform = `scale(1)`;
          } else if (sectionDistanceBottomToTop <= 0 || sectionDistanceTopToTop >= 0) {
            node.firstElementChild.style.opacity = 0;
            // node.firstElementChild.style.transform = `scale(1.2)`;
          }
        }
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
          style={{
            paddingTop: `${window.innerHeight}px`,
            paddingBottom: `${Math.ceil(window.innerHeight/2)}px`
          }}
          ref={(node) => {
            if (node) {
              this.sections.push(node);
            }
          }}
        >
          <InnerFixedSection>
            <Background
              imageUrl={imageUrl}
            />
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
      <Container>
        {this._renderSections()}
      </Container>
    )
  }
}

export default VerticalScrollSlides;
