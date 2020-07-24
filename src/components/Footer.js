import React, { Component } from 'react';
import styled from 'styled-components';
import { footerSection } from '../editor/text';
import People from './People';
import Related from './Related';
import config from '../config';

const { breakpoints } = config;

const { fullPageImageUrl, related, people, dataDescription } = footerSection;

const Container = styled.div`
`;

const InnerFixedSection = styled.div`
  width: 100%;
  top: 0;
  position: sticky;
  height: 100vh;
`;


const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px 64px 16px;
  position: relative;
  background: linear-gradient(transparent 0%, #FDF4D0 40%, #FDF4D0 100%);
  padding-top: 500px;
  opacity: 0.9;
`;

const DataContainer = styled.div`
  margin-top: 48px;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:first-child {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  > div:last-child {
    width: 474px;
    @media(max-width: ${breakpoints.maxTablet}px) {
      width: 100%;
    }
  }
`;


class Footer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container>
        <InnerFixedSection>
          <ImageWrapper>
            <img
              src={fullPageImageUrl}
              alt="footer full page image"
            />
          </ImageWrapper>
        </InnerFixedSection>
        <ContentSection>
          <Related
            data={related}
            title="相關新聞"
          />
          <People
            data={people}
            title="製作名單"
          />
          <DataContainer>
            <div>數據來源與研究方法</div>
            <div>{dataDescription}</div>
          </DataContainer>
        </ContentSection>
      </Container>
    );
  }
}

export default Footer;
