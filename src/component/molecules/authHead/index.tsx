import React from 'react';
import {Logo} from './../../asset/icons';
import {TextBlock, HorizontalBreak} from './../../atoms';

interface Props {
  heading: string;
  subHeading?: string;
}

const AuthHead: React.FC<Props> = ({heading, subHeading}) => {
  return (
    <>
      <Logo />
      <HorizontalBreak size={20} />
      <TextBlock family="primary" letterSpace={0} size={4} weight="600" colorNumber={1} lheight={0}>
        {heading}
      </TextBlock>
      <TextBlock family="primary" letterSpace={0} size={2} weight="600" colorNumber={1} lheight={30}>
        {subHeading}
      </TextBlock>
    </>
  );
};

export default AuthHead;
