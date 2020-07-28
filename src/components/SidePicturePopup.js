import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Mask from './Mask';
import closeIcon from '../assets/nav-cross.svg';
import { SidePictures } from '../editor/text';
import arrowIconSrc from '../assets/user-report-icon.svg';

const textPadding = '20px';

const Container = styled.div`
  padding-bottom: 115px;
`;

const ContentContainer = styled.div`
  position: fixed;
  z-index: 61;
  display: ${props => props.ifOpen ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F2F2F2;
  height: 80%;
  width: 97%;
  max-width: 470px;
  top: 50%;
  left: 50%;
  padding: 24px;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
`;

const Cross = styled.img`
  padding: 3px;
  cursor: pointer;
  position: fixed;
  right: ${textPadding};
  top: ${textPadding};
`;

const ImageWrapper = styled.div`
  height: 234px;
  width: 144px;
  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const TitleRow = styled.div`
  font-size: 22px;
  color: #48448F;
  margin: 16px 0;
`;

const Text = styled.p`
  font-size: 18px;
  color: #333333;
`;

const NextPersonContainer = styled.div`
  background-color: ${props => props.theme.purpleBase};
  padding: 8px 16px;
  max-width: 180px;
  width: 95%;
  margin: ${props => props.isMobileMenu ? '0 auto' : '64px auto 0 auto'};
  color: #ECDF6B;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    font-size: 14px;
    margin-right: 16px;
  }
`;


const NextPerson = ({ targetUrl, isMobileMenu = null, onClickNext}) => {
  return (
    <NextPersonContainer
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      isMobileMenu={isMobileMenu}
      onClick={() => {
        onClickNext();
      }}
    >
      <span>看看其他人的故事</span>
      <img
        src={arrowIconSrc}
      />
    </NextPersonContainer>
  );
}


class SidePicturePopup extends Component {
  constructor(props) {
    super(props);
    this.contentNode = null;
    this.onClickHandler = this._onClickHandler.bind(this);
  }

  _onClickHandler() {
    const { increamentTargetId } = this.props;
    if (increamentTargetId) {
      increamentTargetId();
    }
    if (this.contentNode) {
      this.contentNode.scrollTop = 0;
    }
  }

  _renderContent() {
    const { ifOpen, closeSidePicturePopup, sidepictureId, increamentTargetId } = this.props;
    if (!ifOpen || sidepictureId === null) {
      return null;
    }
    const targetContent = SidePictures.find(({ id }) => id === sidepictureId);
    if (!targetContent) {
      return null;
    }
    const { imgUrl, content } = targetContent;
    const { name, year, text } = content;
    const Texts = text.map((textSectionm, index) => <Text>{textSectionm}</Text>);
    const Content = (
      <Fragment>
        <ImageWrapper>
          <img src={imgUrl} alt={'sidepicture pop-up img'} />
        </ImageWrapper>
        <TitleRow>
          <span>{name}</span>
          <span>{year}</span>
        </TitleRow>
        {Texts}
      </Fragment>
    );
    return (
      <ContentContainer
        ifOpen={ifOpen}
        ref={(node) => {
          if(node && !this.contentNode) {
            this.contentNode = node;
          }
        }}
      >
        <Cross
          src={closeIcon}
          alt="hanburgerMenu"
          onClick={closeSidePicturePopup}
        />
        {Content}
        <NextPerson
          onClickNext={this.onClickHandler}
        />
      </ContentContainer>
    );
  }
  render() {
    const { ifOpen, closeSidePicturePopup } = this.props;
    return (
      <Container>
        {this._renderContent()}
        <Mask
          ifOpen={ifOpen}
          closeMobileMenu={closeSidePicturePopup}
        />
      </Container>
    );
  }
}

export default SidePicturePopup;
