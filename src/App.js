import React, { Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import VerticalScrollSlides from './components/VerticalScrollSlides';
import FadeInHOC from './components/FadeInHOC';
import SidePicture from './components/SidePicture';
import { vssData, ISLRData, contentProto } from './editor/text';
import Landing from './components/Landing';
import IntermittentScrollLR from './components/IntermittentScrollLR';
import Contents from './components/Contents';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.purpleBase};
  }
`;

const Fake = styled.div`
  height: 800px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid blue;
  background-color: black;
`;

const FakeFadeInContent = styled.div`
  background-color: red;
  margin: 50px auto;
  border: 1px solid green;
  height: 600px;
`;

const FakeWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: black;
  color: white;
`;

const theme = {
  purpleBase: '#1A183F',
  fontFamily: '"Noto Sans TC", sans-serif',
};

function App() {
  return (
    <Fragment>
      <ThemeProvider
        theme={theme}
      >
        <Landing />
        <IntermittentScrollLR
          data={ISLRData}
        />
        <Contents
          data={contentProto}
        />
        {/*<VerticalScrollSlides
          data={vssData}
        />*/}
        <Fake />
        <Fake />
        <FadeInHOC>
          <FakeFadeInContent />
        </FadeInHOC>
        <Fake />
        <FakeWrapper>
          <div>
            qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf
          </div>
          <SidePicture
            type="right"
            imgUrl="https://d3prffu8f9hpuw.cloudfront.net/revenge-porn/test-cover-01.jpg"
            caption="this is testing caption"
          />
          <div>
            qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf qwef wqef wqe fqewf
          </div>
          <SidePicture
            type="left"
            imgUrl="https://d3prffu8f9hpuw.cloudfront.net/revenge-porn/test-cover-02.jpeg"
            caption="this is testing caption"
          />
        </FakeWrapper>
        <Fake />
        <GlobalStyle />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
