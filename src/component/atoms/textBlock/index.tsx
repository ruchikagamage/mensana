import React, {ReactNode} from 'react';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import styled, {css} from 'styled-components/native';
import {palette} from 'styled-theme';

const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset =
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight!;

const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
        ? standardLength - offset
        : standardLength;

const applyFontfamily = ({family = 'Inter'}): string =>
    family === 'secondry' ? 'Russo One' : 'Inter';

const applyFontSize = ({size = 0}): string => {
    const heightPercent = (size * deviceHeight) / 100;
    return Math.round(heightPercent) + 'px';
};

const applyFontColor = ({colorNumber = 0, color = null}): number =>
    color ? color : palette('font', colorNumber, true);

const applyLineHeight = ({lheight = 0}): string => lheight + 'px';

const applyWeight = ({weight = '400'}): string => weight;

const applySpace = ({letterSpace = 1}): string => letterSpace + 'px';

const style = css`
    color: ${applyFontColor};
    font-family: ${applyFontfamily};
    font-size: ${applyFontSize};
    line-height: ${applyLineHeight};
    font-weight: ${applyWeight};
    letter-spacing: ${applySpace};
`;

const C = styled.Text`
    ${style};
`;
// letter-spacing: 2;
interface Props {
    children: ReactNode;
    family: string;
    size: number;
    colorNumber: number;
    lheight: number;
    weight: string;
    color: string;
    letterSpace: number;
}

const TextBlock = (props: Props): JSX.Element => {
    const {
        children,
        family,
        size,
        colorNumber,
        lheight,
        weight,
        color,
        letterSpace,
    } = props;

    // console.log(props);
    return (
        <C
            family={family}
            letterSpace={letterSpace}
            size={size}
            weight={weight}
            color={color}
            colorNumber={colorNumber}
            lheight={lheight}>
            {children}
        </C>
    );
};

TextBlock.defaultProps = {
    family: 'Intro',
    size: 10,
    lheight: 0,
    weight: '400',
    color: null,
    letterSpace: 0,
    colorNumber: 0,
};

export {TextBlock};
