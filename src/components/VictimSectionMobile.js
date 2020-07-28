import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { SidePictures } from '../editor/text';
import config from '../config';

const { breakpoints } = config;
const { maxiPhone, minDesktop } = breakpoints;

const TextTitle = '點擊看他們的故事';

const Container = styled.div`
  margin: 150px 0;
  @media(min-width: ${minDesktop}px) {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(53, 1fr);
  height: 1320px;
  margin-bottom: 20px;
  @media(max-width: ${maxiPhone}px) {
    height: 1020px;
  }
`;

const ItemBase = styled.div`
  cursor: pointer;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ItemOne = styled(ItemBase)`
  grid-column-start: 2;
  grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 14;
  background-color: black;
`;

const ItemTwo = styled(ItemBase)`
  grid-column-start: 13;
  grid-column-end: 21;
  grid-row-start: 4;
  grid-row-end: 17;
`;

const ItemThree = styled(ItemBase)`
  grid-column-start: 8;
  grid-column-end: 14;
  grid-row-start: 17;
  grid-row-end: 26;
`;

const ItemFour = styled(ItemBase)`
  grid-column-start: 10;
  grid-column-end: 20;
  grid-row-start: 28;
  grid-row-end: 42;
`;

const ItemFive = styled(ItemBase)`
  grid-column: 1 / 8;
  grid-row: 35 / 45;
`;

const ItemSix = styled(ItemBase)`
  grid-column: 9 / 16;
  grid-row: 42 / 54;
`;

const Title = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
`;

const GridItems = [
  ItemOne,
  ItemTwo,
  ItemThree,
  ItemFour,
  ItemFive,
  ItemSix,
]

class VictimSectionMobile extends Component {
  _renderGridSection() {
    const { openSidePicturePopup } = this.props;
    let SidePicturesTwoD = [];
    let i;
    let j;
    let chunk = 6;
    for (i = 0,j = SidePictures.length; i < j; i += chunk) {
      SidePicturesTwoD.push(SidePictures.slice(i, i+chunk));
    }
    const Result = SidePicturesTwoD.map((SidePictureSection, index) => {
      const Content = SidePictureSection.map(({ imgUrl, id }, index) => {
        const targetIndex = index % 6;
        const Comp = GridItems[targetIndex];
        return (
          <Comp
            onClick={() => {
              openSidePicturePopup({
                sidepictureId: id,
              });
            }}
          >
            <img src={imgUrl} />
          </Comp>
        );
      })
      return (
        <Grid>
          {Content}
        </Grid>
      )
    });
    return Result;
  }

  render() {
    return (
      <Container>
        <Title>
          {TextTitle}
        </Title>
        {this._renderGridSection()}
      </Container>
    );
  }
}

export default VictimSectionMobile;
