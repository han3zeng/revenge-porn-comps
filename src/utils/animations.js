import { keyframes } from 'styled-components';

const fadeInBottomToTop = distance => keyframes`
  from {
    transform: translateY(${distance}px);
  }

  to {
    transform: translateY(0);
  }
`;

const fadeInOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export {
  fadeInBottomToTop,
  fadeInOpacity,
}
