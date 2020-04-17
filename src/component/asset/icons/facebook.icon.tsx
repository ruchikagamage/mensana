import * as React from 'react';
import Svg, {G, Text, TSpan, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Facebook() {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26">
      <G fill="none" fillRule="evenodd">
        <Text
          fontFamily="Inter"
          fontSize={16}
          fontWeight={400}
          letterSpacing={-0.011}
          fill="#8F90A6"
          transform="translate(-21 -601)">
          <TSpan x={62.87} y={620}>
            {'Connect with Facebook'}
          </TSpan>
        </Text>
        <Path
          d="M23.833 0H2.167A2.146 2.146 0 000 2.167v21.666C0 25.047.953 26 2.167 26h21.666A2.146 2.146 0 0026 23.833V2.167A2.146 2.146 0 0023.833 0zM13 25.133v-8.666H9.533V13H13V9.967c0-2.47 1.907-4.55 4.333-4.767h3.9v3.467h-3.466c-.737 0-1.3.563-1.3 1.3V13H20.8v3.467h-4.333v8.666H13zm12.133-1.3c0 .737-.563 1.3-1.3 1.3h-6.5v-7.8h4.334v-5.2h-4.334V9.967c0-.26.174-.434.434-.434H22.1v-5.2h-4.81c-2.903.26-5.157 2.73-5.157 5.634v2.166H8.667v5.2h3.466v7.8H2.167c-.737 0-1.3-.563-1.3-1.3V2.167c0-.737.563-1.3 1.3-1.3h21.666c.737 0 1.3.563 1.3 1.3v21.666z"
          fill="#8F90A6"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export {Facebook};
