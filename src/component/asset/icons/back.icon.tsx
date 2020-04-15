import * as React from 'react';
import Svg, {Defs, Path, G, Use} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

const GoBack: React.FC = () => {
  return (
    <Svg width={22} height={14} viewBox="0 0 17 10">
      <Defs>
        <Path d="M0 0h375v42a8 8 0 01-8 8H8a8 8 0 01-8-8V0z" id="prefix__b" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(-15 -20)" fillRule="nonzero">
          <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <Use fill="#FFF" xlinkHref="#prefix__b" />
        </G>
        <Path d="M5 9L1 4.99h15H1L5 1" stroke="#302C4C" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </G>
    </Svg>
  );
};

export {GoBack};
