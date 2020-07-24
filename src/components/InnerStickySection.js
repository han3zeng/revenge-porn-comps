import React, { Component } from 'react';
import styled from 'styled-components';
import { getRandomInt, weightedRandomInt, getDimension } from '../utils';
import _debounce from 'lodash/debounce';
import { sectionOne } from '../editor/text';

const _ = {
  debounce: _debounce,
}

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  padding-bottom: 20px;
  margin-bottom: 150px;
`;

const Shred = styled.div`
  width: 50;
  height: 50;
  position: absolute;
  opacity: 0;
  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const shredConfigs = [
  {
    width: 144,
    height: 144,
    backgroundColor: 'blue',
    weight: 0.05,
  },
  {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    weight: 0.05,
  },
  {
    width: 75,
    height: 75,
    backgroundColor: 'purple',
    weight: 0.1,
  },
  {
    width: 58,
    height: 58,
    backgroundColor: 'green',
    weight: 0.2,
  },
  {
    width: 44,
    height: 44,
    backgroundColor: 'gray',
    weight: 0.3,
  },
  {
    width: 37,
    height: 37,
    backgroundColor: 'red',
    weight: 0.3,
  }
];

class InnerStickySection extends Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.maxNumber = null;
    this.currentScrollTop = 0;
    this.scrollHandler = this._scrollHandler.bind(this);
    this.resizeHandler = _.debounce(this._resizeHandler.bind(this), 300, { leading: false, trailing: true });
  }

  _resizeHandler() {
    if (!document) {
      return;
    }
    this.forceUpdate();
  }

  _paintContent() {
    const landingElement = document.getElementById('Landing');
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const landingHeight = landingElement.offsetHeight - viewportHeight;
    const landingDistanceBottomToBottom = landingElement.getBoundingClientRect().bottom - viewportHeight;
    const heightPercentage = (() => {
      if (landingDistanceBottomToBottom >= 0) {
        return (landingHeight - landingDistanceBottomToBottom) / landingHeight;
      } else {
        return 1;
      }
    })() * 100;
    const flooredHeightPercentage = Math.floor(heightPercentage);
    const targetId = Math.floor((this.maxNumber * flooredHeightPercentage) / 100);
    for (let i = 0 ; i < targetId ; i++) {
      const targetElement = document.getElementById(`shred-${i}`);
      if (targetElement) {
        targetElement.style.opacity = 1;
      }
    }
  }

  _scrollHandler() {
    if (!document) {
      return;
    }
    const scrollDirection = window.scrollY - this.currentScrollTop > 0 ? 'down' : 'up';
    const landingElement = document.getElementById('Landing');
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const landingHeight = landingElement.offsetHeight - viewportHeight;
    const landingDistanceBottomToBottom = landingElement.getBoundingClientRect().bottom - viewportHeight;
    const heightPercentage = (() => {
      if (landingDistanceBottomToBottom >= 0) {
        return (landingHeight - landingDistanceBottomToBottom) / landingHeight;
      } else {
        return 1;
      }
    })() * 100;
    const flooredHeightPercentage = Math.floor(heightPercentage);
    const targetId = Math.floor((this.maxNumber * flooredHeightPercentage) / 100);
    if (targetId >= 0 && targetId < this.maxNumber) {
      if (scrollDirection === 'down') {
        for (let i = 0 ; i < targetId ; i++) {
          const targetElement = document.getElementById(`shred-${i}`);
          if (targetElement) {
            targetElement.style.opacity = 1;
          }
        }
      } else {
        for (let i = this.maxNumber - 1 ; i >= targetId ; i--) {
          const targetElement = document.getElementById(`shred-${i}`);
          if (targetElement) {
            targetElement.style.opacity = 0;
          }
        }
      }
    }
    this.currentScrollTop = window.scrollY;
  }

  componentDidMount() {
    if (this.container && window && document) {
      this.container.style.height = window.innerHeight || document.documentElement.clientHeight;
    }
    if (window) {
      window.addEventListener('scroll', this.scrollHandler);
      this.currentScrollTop = window.scrollY;
      window.addEventListener('resize', this.resizeHandler)
    }
    this.maxNumber = (() => {
      const currentDimensionStatus =  getDimension();
      if (currentDimensionStatus === 'desktop') {
        return 100;
      } else if (currentDimensionStatus === 'tablet') {
        return 75;
      } else {
        return 50;
      }
    })();
    this._paintContent();
  }

  _renderContent() {
    const result = [];
    const maxNumber = (() => {
      const currentDimensionStatus =  getDimension();
      if (currentDimensionStatus === 'desktop') {
        return 100;
      } else if (currentDimensionStatus === 'tablet') {
        return 75;
      } else {
        return 50;
      }
    })();
    for(let i = 0 ; i < maxNumber ; i++) {
      // const randomNumber = getRandomInt(6);
      const imgUrl = (() => {
        const target = i % sectionOne.imgs.length;
        return sectionOne.imgs[target];
      })();
      const Spec = {
        0: shredConfigs[0].weight,
        1: shredConfigs[1].weight,
        2: shredConfigs[2].weight,
        3: shredConfigs[3].weight,
        4: shredConfigs[4].weight,
        5: shredConfigs[5].weight,
      }
      const getRandomNumber = weightedRandomInt(Spec);
      const randomNumber = getRandomNumber();
      const shredConfig = shredConfigs[randomNumber];
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = (window.innerWidth || document.documentElement.clientWidth) - 20;
      const randomPositionTop = getRandomInt(viewportHeight);
      const randomPositionLeft = getRandomInt(viewportWidth);
      const positionLeft = randomPositionLeft + shredConfig.width > viewportWidth ? randomPositionLeft - (randomPositionLeft + shredConfig.width - viewportWidth) : randomPositionLeft;
      // const positionTop = randomPositionTop + shredConfig.height > viewportHeight ? randomPositionTop - (randomPositionTop + shredConfig.height - viewportHeight) : randomPositionTop;
      const positionTop = randomPositionTop;
      result.push((
        <Shred
          id={`shred-${i}`}
          style={{
            width: `${shredConfig.width}px`,
            height: `${shredConfig.height}px`,
            top: `${positionTop/viewportHeight * 100}%`,
            left: `${positionLeft/(viewportWidth + 5) * 100}%`,
          }}
        >
          <img
            src={imgUrl}
            alt={imgUrl}
          />
        </Shred>
      ));
    }
    return result;
  }

  render() {
    return (
      <Container
        ref={node => {
          if (node && !this.container) {
            this.container = node;
          }
        }}
      >
        {this._renderContent()}
      </Container>
    );
  }
};

export default InnerStickySection;
