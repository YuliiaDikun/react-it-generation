export const device = {
    mobile: '(max-width: 767.5px)',
    tablet: '(min-width: 768px) and (max-width: 1199.5px)',
    desktop: '(min-width: 1200px)',
    mobileOnly: '(max-width: 479.5px)'
  }

export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    white: '#ffffff',
    grey: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  
  media: {
    mobile: `@media screen and ${device.mobile}`,
    tablet: `@media screen and ${device.tablet}`,
    desktop: `@media screen and ${device.desktop}`,
    mobileOnly: `@media screen and ${device.mobileOnly}`,
  },
  
});
