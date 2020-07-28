import React, { Component } from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar'
import Mask from './Mask';

const Container = styled.div`
  padding-bottom: 115px;
`


class NavbarController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifOpen: false,
    }
    this.openMobileMenu = this._openMobileMenu.bind(this);
    this.closeMobileMenu = this._closeMobileMenu.bind(this);
    this.currentScrollY = null;
  }

  _openMobileMenu() {
    this.setState({
      ifOpen: true,
    })
    if (document) {
      document.body.style.overflow = 'hidden';
      this.currentScrollY = window.scrollY;
      document.body.style.position = 'fixed';
    }
  }

  _closeMobileMenu() {
    this.setState({
      ifOpen: false,
    })
    document.body.style.overflow = null;
    document.body.style.position = null;
    window.scrollTo(0, this.currentScrollY);
  }

  render() {
    const { ifOpen } = this.state;
    return (
      <Container>
        <Navbar
          openMobileMenu={this.openMobileMenu}
          ifOpen={ifOpen}
        />
        <MobileMenu
          closeMobileMenu={this.closeMobileMenu}
          ifOpen={ifOpen}
        />
      </Container>
    );
  }
}

export default NavbarController;
