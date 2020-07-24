import React from 'react';
import styled from 'styled-components';
import closeIcon from '../assets/nav-cross.png';


const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: ${props => props.ifOpen ? '60' : '0'};
  display: ${props => props.ifOpen ? 'initial' : 'none'};
`;

const DarkArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0,0,0,.3);
  transform: translateZ(0);
  transition: opacity .2s linear;
  opacity: ${props => props.ifOpen ? '1' : '0'};
  visibility:${props => props.ifOpen ? 'visible' : 'hidden'};
  z-index: ${props => props.ifOpen ? '60' : '0'};
`;

const InfoContainer = styled.div`
  z-index: 61;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  max-width: 375px;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 60vh;
  transform: translate(-50%, -50%);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Cross = styled.img`
  padding: 3px;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const Mask = ({ ifOpen, closeMobileMenu, Content }) => {
  const ContentComp = () => {
    if (Content) {
      return (
        <InfoContainer>
          <Cross
            src={closeIcon}
            alt="close info popup"
            onClick={closeMobileMenu}
          />
          {Content}
        </InfoContainer>
      )
    }
    return null;
  }
  return (
    <Container
      ifOpen={ifOpen}
    >
      <DarkArea
        ifOpen={ifOpen}
        onClick={closeMobileMenu}
      />
      <ContentComp />
    </Container>
  );
}

export default Mask;
