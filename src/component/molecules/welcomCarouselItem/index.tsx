import React, {useMemo} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
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

const pages = [WelCome, What, Why, AuthOptions];

const WelcomeCarouselItem: React.FC<WelcomeProps> = (props) => {
  const {item} = props;
  const Page = useMemo(() => pages[item.id], [item.id]);
  return (
    <View style={styles.container}>
      <Page />
      <View style={styles.textBox}>
        <TextBlock family="secondry" size={3} lheight={50}>
          {item.title}
        </TextBlock>
        {item.titleExtend && (
          <TextBlock family="secondry" size={3} lheight={30}>
            {item.titleExtend}
          </TextBlock>
        )}
        <TextBlock size={2.2} lheight={40} weight="600">
          {item.subTitle}
        </TextBlock>
        <TextBlock size={2.2} weight="400" lheight={20}>
          {item.discription}
        </TextBlock>
      </View>
    </View>
  );
};

export default WelcomeCarouselItem;
