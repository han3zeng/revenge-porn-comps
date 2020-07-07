import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import VerticalScrollSlides from './components/VerticalScrollSlides';
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

function App() {
  return (
    <div>
      <Fake/>
      <VerticalScrollSlides
        data={vssData}
      />
      <Fake/>
      <GlobalStyle />
    </div>
  );
}

export default App;
