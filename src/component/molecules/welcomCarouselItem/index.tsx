import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {TextBlock} from './../../atoms/textBlock';
import WelCome from './../../asset/svgBackground/welocme';
import What from './../../asset/svgBackground/what';
import Why from './../../asset/svgBackground/why';
import AuthOptions from './../../organisms/authOptions';

const {width, height} = Dimensions.get('window');

export interface FlatListItem {
    title: string;
    titleExtend?: string;
    subTitle: string;
    discription: string;
    // component: ReactNode;
    id: number;
}

interface WelcomeProps {
    item: FlatListItem;
    navigation: string;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004FC4',
        width: width,
        height: height,
    },
    textBox: {
        paddingHorizontal: 30,
    },
});

const WelcomeCarouselItem: React.FC<WelcomeProps> = (props) => {
    return (
        <View style={styles.container}>
            {props.item.id === 1 ? (
                <WelCome />
            ) : props.item.id === 2 ? (
                <What />
            ) : props.item.id === 3 ? (
                <Why />
            ) : (
                <AuthOptions navigation={props.navigation} />
            )}
            {props.item.title ? (
                <View style={styles.textBox}>
                    <TextBlock
                        family="secondry"
                        size={3}
                        colorNumber={0}
                        lheight={50}>
                        {props.item.title}
                    </TextBlock>
                    <TextBlock
                        family="secondry"
                        size={3}
                        colorNumber={0}
                        lheight={30}>
                        {props.item.titleExtend}
                    </TextBlock>
                    <TextBlock
                        size={2.2}
                        lheight={40}
                        weight="600"
                        colorNumber={0}>
                        {props.item.subTitle}
                    </TextBlock>
                    <TextBlock
                        size={2.2}
                        weight="400"
                        lheight={20}
                        colorNumber={0}>
                        {props.item.discription}
                    </TextBlock>
                </View>
            ) : null}
        </View>
    );
};

export default WelcomeCarouselItem;
