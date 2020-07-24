import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import config from '../config';
import {
  Title,
  SubTitle,
  TextWithoutAnnotation,
  TextWithAnnotation,
  Blockquote,
  Image,
} from './Provider';

const { breakpoints } = config;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 656px;
  margin: 0 auto;
  background-color: transparent;
  @media(max-width: ${breakpoints.maxTablet}px) {
    max-width: 100%;
    width: 100%;
    padding: 0 16px;
  }
`;

class Contents extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  _renderContent() {
    const { data, backgroundColor } = this.props;
    return data.map((dataElem, index) => {
      const { type } = dataElem;
      if (backgroundColor) {
        dataElem.backgroundColor = backgroundColor;
      }
      if (type === 'title') {
        return (
          <Title
            data={dataElem}
          />
        )
      } else if (type === 'subtitle') {
        return (
          <SubTitle
            data={dataElem}
          />
        );
      } else if (type === 'textWithoutAnnotatoin') {
        return (
          <TextWithoutAnnotation
            data={dataElem}
          />
        )
      } else if (type === 'textWithAnnotation') {
        return (
          <TextWithAnnotation
            data={dataElem}
          />
        )
      } else if (type === 'blockquote') {
        return (
          <Blockquote
            data={dataElem}
          />
        )
      } else if (type === 'image') {
        return (
          <Image
            data={dataElem}
          />
        )
      } else {
        return null;
      }
    })
  }


  render() {
    return (
      <Container>
        {this._renderContent()}
      </Container>
    );
  }
}

export default Contents;
