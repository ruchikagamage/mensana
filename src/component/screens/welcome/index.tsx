import React, {ReactNode} from 'react';
import Carousel from './../../organisms/carousel';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
    navigation: StackNavigationProp<ParamListBase>;
};

function Welcome({navigation}: Props): ReactNode {
    return <Carousel navigation={navigation} />;
}
export default Welcome;
