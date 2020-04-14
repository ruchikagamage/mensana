import React, {FC, ReactNode} from 'react';
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

const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
        ? standardLength - offset
        : standardLength;

const applyHeight = ({size = 0}): string => {
    const heightPercent = (size * deviceHeight) / 100;
    return Math.round(heightPercent) + 'px';
};

const applybackground = ({backgroundColor = 0}): number =>
    palette('button', backgroundColor, false);

const applyWidth = ({buttonWidth = 100}): string => `${buttonWidth}%`;

const style = css`
    height: ${applyHeight};
    background-color: ${applybackground};
    width: ${applyWidth};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

const C = styled.View`
    ${style};
`;
// letter-spacing: 2;
interface Props {
    size?: number;
    backgroundColor?: number;
    buttonWidth?: string | number;
    onPress: Function;
    rippleColor?: string;
}

export const Button: FC<Props> = (props) => {
    const {
        children,
        size,
        backgroundColor,
        buttonWidth,
        onPress,
        rippleColor,
    } = props;

    return (
        <C
            size={size}
            backgroundColor={backgroundColor}
            buttonWidth={buttonWidth}>
            <Ripple
                rippleColor={rippleColor ? rippleColor : 'rgb(0, 0, 0)'}
                rippleDuration={600}
                onPress={onPress}
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
