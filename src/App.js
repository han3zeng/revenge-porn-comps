import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import VerticalScrollSlides from './components/VerticalScrollSlides';
import FadeInHOC from './components/FadeInHOC';
import { vssData } from './editor/text';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Fake = styled.div`
  height: 800px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid blue;
`;

const FakeFadeInContent = styled.div`
  background-color: red;
  margin: 50px auto;
  border: 1px solid green;
  height: 600px;
`;

function App() {
  return (
    <div>
      <Fake/>
      <VerticalScrollSlides
        data={vssData}
      />
      <Fake/>
      <Fake/>
      <FadeInHOC>
        <FakeFadeInContent />
      </FadeInHOC>
      <GlobalStyle />
    </div>
  );
}

export default App;
