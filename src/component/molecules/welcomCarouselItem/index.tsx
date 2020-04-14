import React, {ComponentType} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TextBlock} from '../../atoms/textBlock';

const {width, height} = Dimensions.get('window');

export interface FlatListItem {
  title: string;
  titleExtend?: string;
  subTitle: string;
  description: string;
  component: ComponentType;
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

const WelcomeCarouselItem: React.FC<WelcomeProps> = (props) => {
  const {item} = props;
  const Page = item.component;
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
          {item.description}
        </TextBlock>
      </View>
    </View>
  );
};

export default WelcomeCarouselItem;
