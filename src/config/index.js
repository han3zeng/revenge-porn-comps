// mobile <= 767
// tablet 768 - 1023
// deskto >= 1024 && <= 1440
const breakpoints = {
  maxDesktop: '1440',
  minDesktop: '1024',
  maxTablet: '1023',
  minTablet: '768',
  maxMobile: '767',
}

const config = {
  textMaxWidth: '400',
  breakpoints,
  cdnUrlBase: 'https://d3prffu8f9hpuw.cloudfront.net/revenge-porn',
  userReportUrl: 'https://www.google.com',
}

export default config;
