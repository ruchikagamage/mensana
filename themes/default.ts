import {reversePalette} from 'styled-theme/composer';

const theme: any = {};

const colors = {
  primary: '#FF5400',
  secondry: '#302C4C',
  blue: '#004FC4',
  white: '#FFFFFF',
  grayScale: ['#8F90A6'],
};

theme.palette = {
  font: [colors.grayScale[0], colors.primary, colors.secondry, colors.white],
  button: [colors.primary, colors.secondry, colors.blue, colors.white, colors.grayScale[0]],
};

theme.reversePalette = reversePalette(theme.palette);

export default theme;
