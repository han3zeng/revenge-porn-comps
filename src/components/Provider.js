import React, { Component } from 'react';
import styled from 'styled-components';
import arrowActivePurple from '../assets/annotation-active-dark.svg';
import arrowActiveYellow  from '../assets/annotation-active-light.svg';
import arrowDefaultPurple from '../assets/annotation-default-dark.svg';
import arrowDefaultYellow from '../assets/annotation-default-light.svg';
import config from '../config';

const { breakpoints } = config;


const getHighlightTextColor = props => props.backgroundColor === 'purple' ? '#ECDF6B' : '#48448F';
const getTextColor = props => props.backgroundColor === 'purple' ? 'white' : '#333333';

function createMarkup(content) {
  return {__html: `${content}`};
}

const TextContainer = styled.p`
  color: ${props => getTextColor(props)};
  line-height: 180%;
  font-size: 18px;
  strong {
    font-weight: bold;
    color: ${props => getHighlightTextColor(props)};
  }

  a {
    &:hover {
      color: ${props => getHighlightTextColor(props)};
      transition: 0.3s;
      border-color: ${props => getHighlightTextColor(props)} !important;
    }
    &:link {
      color: ${props => getHighlightTextColor(props)};
      font-weight: bold;
      text-decoration: none;
      border-bottom: 1px solid #A4965F;
    }
    &:active {
      color: ${props => getHighlightTextColor(props)};
      text-decoration: none;
      border-bottom: 1px solid #A4965F;
    }
    &:visited {
      color: ${props => getHighlightTextColor(props)};
      text-decoration: none;
      border-bottom: 1px solid #A4965F;
    }
  }
`;

const AnnotationContainer = styled.span`
  color: ${props => getHighlightTextColor(props)};
  cursor: pointer;
`;

const AnnotationWrapper = styled.div`
  display: inline-flex;
  > div:first-child {
    margin-right: 4px;
  }
`;

const AnnotationPopup = styled.div`
  background-color: ${props => props.backgroundColor === 'purple' ? '#DCDCE2' : 'white'};
  color: #333333;
  padding: 16px;
  margin: 5px 0;
`;

class Annotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifShow: false,
    }
  }

  _toggle() {
    const { ifShow } = this.state;
    this.setState({
      ifShow: !ifShow,
    })
  }

  render() {
    const { content, backgroundColor, annotation } = this.props;
    const { ifShow } = this.state;
    const ArrowUrl = (() => {
      if (backgroundColor === 'purple') {
        if (ifShow) {
          return arrowActivePurple;
        }
        return arrowDefaultPurple;
      } else {
        if (ifShow) {
          return arrowActiveYellow
        }
        return arrowDefaultYellow;
      }
    })();

    if (!ifShow) {
      return (
        <AnnotationContainer
          onClick={() => {
            this._toggle();
          }}
          backgroundColor={backgroundColor}
        >
          <AnnotationWrapper>
            <div>{content}</div>
            <img src={ArrowUrl} alt='test' />
          </AnnotationWrapper>
        </AnnotationContainer>
      )
    }
    return (
      <AnnotationContainer
        onClick={() => {
          this._toggle();
        }}
        backgroundColor={backgroundColor}
      >
        <span
          onClick={() => {
            this._toggle();
          }}
        >
          <AnnotationWrapper>
            <div>{content}</div>
            <img src={ArrowUrl} alt='test' />
          </AnnotationWrapper>
        </span>
        <AnnotationPopup
          backgroundColor={backgroundColor}
        >
          {annotation}
        </AnnotationPopup>
      </AnnotationContainer>
    );
  }
}

class TextWithAnnotation extends Component {
  constructor(props) {
    super(props);
  }

  _renderContent() {
    const { data } = this.props;
    const { type, backgroundColor, content } = data;
    return content.map((contentElem, index) => {
      const { type, text, annotation } = contentElem;

      if (type === 'plainText') {
        return (
          <span
            dangerouslySetInnerHTML={createMarkup(text)}
          />
        );
      } else if (type === 'annotation') {
        return (
          <Annotation
            content={text}
            backgroundColor={backgroundColor}
            annotation={annotation}
          />
        );
      } else {
        return null;
      }
    });
  }

  render() {
    const { data } = this.props;
    const { backgroundColor } = data;
    return (
      <TextContainer
        backgroundColor={backgroundColor}
      >
        {this._renderContent()}
      </TextContainer>
    )
  }
}

const TextWithoutAnnotation = ({ data }) => {
  const { backgroundColor, content } = data;
  return (
    <TextContainer
      backgroundColor={backgroundColor}
      dangerouslySetInnerHTML={createMarkup(content)}
    />
  )
}

const TitleContainer = styled.h1`
  position: relative;
  border-left: 1px solid ${props => getHighlightTextColor(props)};
  padding-bottom: 34px;
  color: ${props => getTextColor(props)};
  font-size: 36px;
  padding-left: 16px;
  box-sizing: border-box;
  line-height: 90%;
  display: flex;
  mark {
    padding: 6px;
    background-color: ${props => getHighlightTextColor(props)};
    color: ${props => props.backgroundColor === 'purple' ? '#333333' : 'white'};
  }
`;

const Title = ({ data }) => {
  const { backgroundColor, text } = data;
  return (
    <TitleContainer
      backgroundColor={backgroundColor}
    >
      <mark backgroundColor={backgroundColor} dangerouslySetInnerHTML={createMarkup(text)} />
    </TitleContainer>
  );
}

const SubTitleContainer = styled.h2`
  position: relative;
  color: ${props => getHighlightTextColor(props)};
  font-size: 22px;
  padding-left: 16px;
  text-align: center;
  line-height: 90%;
`;

const SubTitle = ({ data }) => {
  const { backgroundColor, text } = data;
  return (
    <SubTitleContainer
      backgroundColor={backgroundColor}
      dangerouslySetInnerHTML={createMarkup(text)}
    />
  );
};

const BlockquoteContainer = styled.div`
  max-width: 488px;
  width: 100%;
  font-size: 22px;
  line-height: 160%;
  margin: 48px auto;
  color: ${props => getHighlightTextColor(props)};
  a {
    &:hover {
      color: ${props => getHighlightTextColor(props)};
      transition: 0.3s;
      border-color: ${props => getHighlightTextColor(props)} !important;
    }
    &:link {
      color: ${props => getHighlightTextColor(props)};
      font-weight: bold;
      text-decoration: none;
      border-bottom: 1px solid #A4965F;
    }
    &:active {
      color: ${props => getHighlightTextColor(props)};
      text-decoration: none;
      border-bottom: 1px solid #A4965F;
    }
    &:visited {
      color: ${props => getHighlightTextColor(props)};
      text-decoration: none;
      border-bottom: 1px solid #A4965F;
    }
  }
  @media(max-width: ${breakpoints.maxTablet}px) {

  }
`;

const BottomRow = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    background-color: ${props => getTextColor(props)};
    flex-grow: 1;
    height: 1px;
    margin-right: 10px;
  }
  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    > div:first-child {
      margin-right: 10px;
    }
    > div:last-child {
      font-size: 14px;
      color: ${props => getTextColor(props)};
    }
  }
`;

const IconContainer = styled.div`
  width: 68px;
  height: 68px;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Blockquote = ({ data }) => {
  const { backgroundColor, text, iconUrl, title } = data;
  return (
    <BlockquoteContainer
      backgroundColor={backgroundColor}
    >
      <div dangerouslySetInnerHTML={createMarkup(text)} />
      <BottomRow
        backgroundColor={backgroundColor}
      >
        <div />
        <div>
          <IconContainer>
            <img src={iconUrl} / >
          </IconContainer>
          <div>{title}</div>
        </div>
      </BottomRow>
    </BlockquoteContainer>
  );
}

const ImageContainer = styled.div`
  margin-bottom: 50px;
`

const ImageWrapper = styled.div`
  width: 100%;
  > img {
    width: 100%;
  }
`;

const Caption = styled.div`
  font-size: 12px;
  color: ${props => getTextColor(props)};
  margin-top: 8px;
`;

const Image = ({ data }) => {
  const { caption, imgUrl, backgroundColor } = data;
  return (
    <ImageContainer>
      <ImageWrapper>
        <img src={imgUrl} />
      </ImageWrapper>
      <Caption
        backgroundColor={backgroundColor}
      >
        {caption}
      </Caption>
    </ImageContainer>
  );
};

export {
  TextWithAnnotation,
  Image,
  Blockquote,
  TextWithoutAnnotation,
  Title,
  SubTitle,
}
