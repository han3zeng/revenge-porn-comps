import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import VerticalScrollSlides from './components/VerticalScrollSlides';
import FadeInHOC from './components/FadeInHOC';
import { vssData, ISLRData, contentProto, SidePictures } from './editor/text';
import Landing from './components/Landing';
import IntermittentScrollLR from './components/IntermittentScrollLR';
import Contents from './components/Contents';
import NavbarController from './components/NavbarController';
import Footer from './components/Footer';
import SidePicturePopup from './components/SidePicturePopup';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: linear-gradient(${props => props.theme.purpleBase} 0%, 70%, ${props => props.theme.yellowBase} 80%);
    font-family: ${props => props.theme.fontFamily};
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
  purpleBase: '#19173F',
  yellowBase: '#FDF4D0',
  fontFamily: '"Noto Sans TC", sans-serif',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifOpen: false,
      sidepictureId: null,
    }
    this.openSidePicturePopup = this._openSidePicturePopup.bind(this);
    this.closeSidePicturePopup = this._closeSidePicturePopup.bind(this);
    this.increamentTargetId = this._increamentTargetId.bind(this);
  }

  _increamentTargetId() {
    const total = SidePictures.length;
    const { sidepictureId } = this.state;
    let targetId = 0;
    if (sidepictureId < total - 1) {
      targetId = sidepictureId + 1;
    }
    this.setState({
      sidepictureId: targetId,
    })
  }

  _openSidePicturePopup({
    sidepictureId,
  }) {
    this.setState({
      ifOpen: true,
      sidepictureId: sidepictureId,
    })
    if (document) {
      document.body.style.overflow = 'hidden';
    }
  }

  _closeSidePicturePopup() {
    this.setState({
      ifOpen: false,
    })
    document.body.style.overflow = null;
    document.body.style.position = null;
  }

  render() {
    const { ifOpen, sidepictureId } = this.state;
    return (
      <Fragment>
        <ThemeProvider
          theme={theme}
        >
          <NavbarController />
          <Landing />
          <IntermittentScrollLR
            data={ISLRData}
          />
          <Contents
            data={contentProto}
            backgroundColor={'purple'}
            openSidePicturePopup={this.openSidePicturePopup}
          />
          <VerticalScrollSlides
            data={vssData}
          />
          <Contents
            data={contentProto}
            backgroundColor={'yellow'}
            openSidePicturePopup={this.openSidePicturePopup}
          />
          <Contents
            data={contentProto}
            backgroundColor={'yellow'}
            openSidePicturePopup={this.openSidePicturePopup}
          />
          <Footer />
          {/*<FadeInHOC>
            <FakeFadeInContent />
          </FadeInHOC>*/}
          <SidePicturePopup
            closeSidePicturePopup={this.closeSidePicturePopup}
            ifOpen={ifOpen}
            sidepictureId={sidepictureId}
            increamentTargetId={this.increamentTargetId}
          />
          <GlobalStyle />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
