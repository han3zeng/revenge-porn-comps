import React, { Component } from 'react';
import styled from 'styled-components';
import InnerStickySection from './InnerStickySection';
import { sectionOne } from '../editor/text';
import config from '../config';

const { title, contents } = sectionOne;
const { breakpoints } = config;

const Container = styled.div`
  box-sizing: border-box;
`;

const LandingTitle = styled.h1`
  box-sizing: border-box;
  position: absolute;
  color: #333333;
  background-color: #ECDF6B;
  top: 50%;
  left: 50%;
  padding: 10px 15px;
  max-width: 480px;
  transform: translate(-50%, -50%);
  @media(max-width: ${breakpoints.maxTablet}px) {
    width: 90%;
  }
`;

const ContentSection = styled.div`
  height: 100vh;
  position: relative;
  > div {
    background: rgba(242, 242, 242, 0.85);
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    padding: 16px;
    transform: translate(-50%, -50%);
    max-width: 400px;
    @media(max-width: ${breakpoints.maxTablet}px) {
      width: 90%;
    }
  }
`;

function createMarkup(content) {
  return {__html: `${content}`};
}

class Landing extends Component {
  constructor(props) {
    super(props);
    this.contentSections = [];
  }

  componentDidMount() {
    if (this.contentSections.length !== 0) {
      this.contentSections.forEach((node, index) => {
        if (node && window && document) {
          node.style.height = window.innerHeight || document.documentElement.clientHeight;
        }
      });
    }
  }

  _renderContent() {
    return contents.map((content, index) => {
      return (
        <ContentSection
          key={`landing-content-${index}`}
          ref={node => {
            if (node) {
              this.contentSections.push(node);
            }
          }}
        >
          <div
            dangerouslySetInnerHTML={createMarkup(content)}
          />
        </ContentSection>
      );
    });
  }

  render() {
    return (
      <Container
        id="Landing"
      >
        <InnerStickySection>
        </InnerStickySection>
        <LandingTitle
          dangerouslySetInnerHTML={createMarkup(title)}
        />
        <div>
          {this._renderContent()}
        </div>
      </Container>
    );
  }
}

export default Landing;
