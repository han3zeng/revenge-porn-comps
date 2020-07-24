import React from 'react';
import styled from 'styled-components';
import { navSection } from '../editor/text';
import closeIcon from '../assets/nav-cross.png';
import { FacebookShare, LineShare } from './ShareButtons';
import config from '../config';
import userReportIcon from '../assets/user-report-icon.svg';

const { userReportUrl } = config;

const textPadding = '20px';

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  transform: ${props => props.ifOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition-duration: 235ms;
  overflow-y: auto;
  bottom: 0;
  background-color: ${props => props.theme.purpleBase};
  z-index: 1005;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`

const Cross = styled.img`
  padding: 3px;
  cursor: pointer;
  position: fixed;
  right: ${textPadding};
  top: ${textPadding};
`

const TextWrapper = styled.div`
  margin: 0 auto;
  cursor: ${props => props.disable ? 'not-allowed' : 'pointer'};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    margin-right: 12px;
  }
`


const Text = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin: 15px 0;
  &:link {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    border-bottom: 1px solid transparent;
  }
  &:hover {
    color: white;
    transition: 0.3s;
    border-bottom: 1px solid white;
  }
  &:visited {
    color: white;
  }
`

const TextDisable = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 15px 0;
  color: ${props => props.theme.disableGray}
`

const ShareGroup = styled.div`
  margin: 60px 0;
  display: flex;
  width: 100%;
  justify-content: center;
  > div {
    &:first-child {
      margin-right: 15px;
    }
  }
`

const Divider = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 32px 0;
  &::after {
    content: "";
    width: 120px;
    height: 1px;
    background-color: white;
  }
`;

const UserRrport = styled.a`
  border: 1px solid #ECDF6B;
  padding: 22px;
  max-width: 300px;
  width: 95%;
  margin: 0 auto;
  color: #ECDF6B;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    margin-right: 16px;
  }
  &:hover {
    color: #ECDF6B;
    transition: 0.3s;
  }
  &:link {
    color: #ECDF6B;
    font-weight: bold;
    text-decoration: none;
  }
  &:active {
    color: #ECDF6B;
    text-decoration: none;
  }
  &:visited {
    color: #ECDF6B;
    text-decoration: none;
  }
`;


const MobileMenu = ({ ifOpen, closeMobileMenu }) => {

  const onClickHandler = ({
    anchorId,
  }) => {
    closeMobileMenu();
  }
  const Content = () => {
    const textSet = navSection.map(({
      text,
      disable
    }, index) => {
      return (
        <TextWrapper
          key={`mobileMenu_text_${index}`}
          disable={disable}
        >
          {disable ?
            <TextDisable>
              {text}
            </TextDisable>
          : <Text
            onClick={() => {

            }}
          >
            {text}
          </Text>
          }
        </TextWrapper>
      )
    })
    return (
      <ContentWrapper>
        {textSet}
      </ContentWrapper>
    )
  }


  return (
    <Container
      ifOpen={ifOpen}
    >
      <Cross
        src={closeIcon}
        alt="hanburgerMenu"
        onClick={closeMobileMenu}
      />
      <Content />
      {/*<Divider />*/}
      <ShareGroup>
        <FacebookShare
          type="nav"
        />
        <LineShare
          type="nav"
        />
      </ShareGroup>
      <UserRrport
        href={userReportUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>與記者分享觀後感</span>
        <img
          src={userReportIcon}
        />
      </UserRrport>
    </Container>
  )
}

export default MobileMenu;
