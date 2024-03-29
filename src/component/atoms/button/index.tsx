import React, {FC} from 'react';
import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import styled, {css} from 'styled-components/native';
import {palette} from 'styled-theme';
import Ripple from 'react-native-material-ripple';

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset =
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight!;

const deviceHeight = isIphoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength;

const applyHeight = ({size = 0}): string => {
  const heightPercent = (size * deviceHeight) / 100;
  return Platform.OS === 'ios' ? Math.round(heightPercent) + 'px' : Math.round(heightPercent) + 10 + 'px';
};

const applybackground = ({backgroundColor = 0, border = false}): number =>
  border === true ? 'transparent' : palette('button', backgroundColor, false);

const applyWidth = ({buttonWidth = 100}): string => `${buttonWidth}%`;

const applyBorderRadius = ({radius = 5}): string => `${radius}px`;

const applyBorderColor = ({backgroundColor = 0}): string => palette('button', backgroundColor, false);

const style = css`
  height: ${applyHeight};
  background-color: ${applybackground};
  width: ${applyWidth};
  justify-content: center;
  align-items: center;
  border-radius: ${applyBorderRadius};
  border: 2px solid ${applyBorderColor};
`;

const C = styled.View`
  ${style};
`;
// letter-spacing: 2;
interface Props {
  size?: number;
  backgroundColor?: number;
  buttonWidth?: string | number;
  onPress?: Function;
  rippleColor?: string;
  radius?: number;
  border?: boolean;
}

export const Button: FC<Props> = (props) => {
  const {children, size, backgroundColor, buttonWidth, onPress, rippleColor, radius, border} = props;

  return (
    <C size={size} backgroundColor={backgroundColor} buttonWidth={buttonWidth} radius={radius} border={border}>
      <Ripple
        rippleColor={rippleColor ? rippleColor : 'rgb(0, 0, 0)'}
        rippleDuration={600}
        onPress={onPress}
        radius={radius}
        border={border}
        style={styles.block}>
        {children}
      </Ripple>
    </C>
  );
};

Button.defaultProps = {
  size: 10,
  buttonWidth: 100,
  backgroundColor: 0,
  rippleColor: 'rgb(0, 0, 0)',
};
