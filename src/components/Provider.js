import React, { Component } from 'react';
import styled from 'styled-components';

const getHighlightTextColor = props => props.backgroundColor === 'purple' ? '#ECDF6B' : '#48448F';
const getTextColor = props => props.backgroundColor === 'purple' ? 'white' : '#333333';

function createMarkup(content) {
  return {__html: `${content}`};
}

const Container = styled.p`
  color: ${props => getTextColor(props)};
  line-height: 180%;
  b {
    font-weight: 700;
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
      border-bottom: 1px solid rgb(216, 216, 216);
    }
    &:active {
      color: ${props => getHighlightTextColor(props)};
      text-decoration: none;
      border-bottom: 1px solid rgb(216, 216, 216);
    }
    &:visited {
      color: ${props => getHighlightTextColor(props)};
      text-decoration: none;
      border-bottom: 1px solid rgb(216, 216, 216);
    }
  }
`;

const AnnotationContienr = styled.span`
  color: ${props => getHighlightTextColor(props)};
  cursor: pointer;
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
    if (!ifShow) {
      return (
        <AnnotationContienr
          onClick={() => {
            this._toggle();
          }}
          backgroundColor={backgroundColor}
        >
          {content}
        </AnnotationContienr>
      )
    }
    return (
      <AnnotationContienr
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
          {content}
        </span>
        <AnnotationPopup
          backgroundColor={backgroundColor}
        >
          {annotation}
        </AnnotationPopup>
      </AnnotationContienr>
    );
  }
}

class TextWithAnnotation extends Component {
  constructor(props) {
    super(props);
  }

  _renderContent() {
    const { data } = this.props;
    // console.log('data: ', data)
    // return (
    //   <div>test</div>
    // )
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
      <Container
        backgroundColor={backgroundColor}
      >
        {this._renderContent()}
      </Container>
    )
  }
}

const Image = () => null;
const Quote = () => null;
const TextWithoutAnnotation = () => null;
const Title = () => null;

export {
  TextWithAnnotation,
  Image,
  Quote,
  TextWithoutAnnotation,
  Title,
}
