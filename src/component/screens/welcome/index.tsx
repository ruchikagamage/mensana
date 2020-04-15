import React, {FC} from 'react';
import Carousel from './../../organisms/carousel';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const Welcome: FC = () => {
  return <Carousel />;
};
export default Welcome;
