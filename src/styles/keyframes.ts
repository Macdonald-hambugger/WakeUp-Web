import { keyframes } from 'styled-components';

export const frameUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translate3d(0, 1px, 0);
  }
`;

export const frameDown = keyframes`
  from {
    transform: translate3d(0, 1px, 0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;
