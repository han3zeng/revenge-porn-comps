import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import config from '../config';

const { breakpoints } = config;

import {
  Title,
  Text,
  Annotation,
  Quote,
  Image,
} from './Provider';

const Container = styled.div`
  max-width: 656px;
  @media(max-width: ${breakpoints.maxTablet}) {
    max-width: 100%;
    width: 100%;
    padding: 0 16px;
  }
`;

class Content extends Component {
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
        return (
          <Title
            data={data}
          />
        )
      } else if (type === 'text') {
        return (
          <Text
            data={data}
          />
        )
      } else if (type === 'annotation') {
        return (
          <Annotation
            data={data}
          />
        )
      } else if (type === 'quote') {
        return (
          <Quote
            data={data}
          />
        )
      } else if (type === 'image') {
        return (
          <Image
            data={data}
          />
        )
      } else {
        return null;
      }
    })
  }


  render() {
    return (
      <Fragment>
        {this._renderContent()}
      </Fragment>
    );
  }
}

export default Content;
