import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import config from '../config';
import {
  Title,
  TextWithoutAnnotation,
  TextWithAnnotation,
  Quote,
  Image,
} from './Provider';

const { breakpoints } = config;

const Container = styled.div`
  max-width: 656px;
  margin: 0 auto;
  @media(max-width: ${breakpoints.maxTablet}) {
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
    const { data } = this.props;
    return data.map((dataElem, index) => {
      const { type } = dataElem;
      if (type === 'title') {
        return null;
        return (
          <Title
            data={dataElem}
          />
        )
      } else if (type === 'textWithoutAnnotatoin') {
        return null;
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
      } else if (type === 'quote') {
        return (
          <Quote
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
