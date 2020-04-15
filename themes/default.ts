/* eslint-disable @typescript-eslint/no-explicit-any */
import {reversePalette} from 'styled-theme/composer';

const theme: any = {};

const colors = {
  primary: '#FF5400',
  secondry: '#302C4C',
  blue: '#004FC4',
  white: '#FFFFFF',
};

theme.palette = {
  font: [colors.primary, colors.secondry, colors.white],
  button: [colors.primary, colors.secondry, colors.blue, colors.white],
};

theme.reversePalette = reversePalette(theme.palette);

export default theme;
