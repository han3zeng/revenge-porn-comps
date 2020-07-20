import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import VerticalScrollSlides from './components/VerticalScrollSlides';
import FadeInHOC from './components/FadeInHOC';
import SidePicture from './components/SidePicture';
import { vssData } from './editor/text';
import Landing from './components/Landing';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: black;
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

function App() {
  return (
    <div>
      <Landing />
      <Fake />
      <VerticalScrollSlides
        data={vssData}
      />
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
    </div>
  );
}

export default App;
