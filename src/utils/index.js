import config from '../config';

const { breakpoints } = config;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function weightedRandomInt(spec) {
  var i, j, table=[];
  for (i in spec) {
    for (j=0; j<spec[i]*10; j++) {
      table.push(i);
    }
  }
  return function() {
    return table[Math.floor(Math.random() * table.length)];
  }
}

function getDimension() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth >= +breakpoints.minDesktop) {
    return 'desktop';
  } else if (breakpoints.minTablet <= viewportWidth && viewportWidth <= +breakpoints.maxTablet) {
    return 'tablet';
  } else {
    return 'mobile';
  }
}

export {
  getRandomInt,
  weightedRandomInt,
  getDimension,
}
