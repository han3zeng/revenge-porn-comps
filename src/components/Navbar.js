import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import ptsIconSrc from '../assets/psharp-logo.svg';
import { FacebookShare, LineShare } from './ShareButtons';
import _throttle from 'lodash/throttle';
import { navSection } from '../editor/text';
import hamburgerUrl from '../assets/hamburger.svg';
import config from '../config';

const { breakpoints } = config;

const _ = {
  throttle: _throttle,
}

const height = '80px';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: ${height};
  position: fixed;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  top: 0px;
  transition-duration: 0.3s;
`;


const RightSubContainer = styled.div`
  display: flex;
  align-items: center;
  > div:nth-child(2) {
    margin-left: 8px;
    margin-right: 24px;
  }
  > div:nth-child(3) {
    margin-right: 24px;
  }
`;

const TextContainer = styled.div`
  @media(max-width: ${breakpoints.maxTablet}px) {
    display: none;
  }
  a {
    margin-right: 16px;
    &:hover {
      color: white;
      transition: 0.3s;
      border-color: white !important;
    }
    &:link {
      color: white;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 1px solid #d3d3d3;
    }
    &:active {
      color: white;
      text-decoration: none;
      border-bottom: 1px solid #d3d3d3;
    }
    &:visited {
      color: white;
      text-decoration: none;
      border-bottom: 1px solid #d3d3d3;
    }
  }
`;

const Hamburger = styled.img`
  display: none;
  @media(max-width: ${breakpoints.maxTablet}px) {
    display: initial;
  }
  cursor: pointer;
`;

const Navbar = memo(({ openMobileMenu }) => {
  let userScrollDown = null;
  let previousScrollY = null;
  let containerNode = null;
  const setContainerRef = (node) => {
    containerNode = node;
  }

  useEffect(() => {
    function trackScrollMovement() {
      if (previousScrollY) {
        userScrollDown = previousScrollY < window.scrollY;
      }
      previousScrollY = window.scrollY;
      if (userScrollDown && containerNode) {
        containerNode.style.transform = `translateY(-${height})`;
      } else if(!userScrollDown && containerNode) {
        containerNode.style.transform = `translateY(0)`;
      }
    }
    const throttledTrackScrollMovementthrottle = _.throttle(trackScrollMovement, 300);
    document.addEventListener('scroll', throttledTrackScrollMovementthrottle);
    return () => {
      document.removeEventListener('scroll', throttledTrackScrollMovementthrottle);
    }
  });

  const TextArea = () => {
    const Content = navSection.map(({ text, href }, index) => {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      );
    })
    return (
      <TextContainer>
        {Content}
      </TextContainer>
    );
  }

  return (
    <Container
      ref={setContainerRef}
    >
      <a
        href="https://newslab.pts.org.tw/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={ptsIconSrc}
          alt="public television service logo"
        />
      </a>
      <RightSubContainer>
        <TextArea />
        <FacebookShare />
        <LineShare />
        <Hamburger
          onClick={() => {
            openMobileMenu();
          }}
          src={hamburgerUrl}
          alt="hamburger of navbar"
        />
      </RightSubContainer>
    </Container>
  );
});

export default Navbar;
