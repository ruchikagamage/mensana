import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, FlatList, Dimensions, Animated} from 'react-native';
import WelcomeCarouselItem, {
    FlatListItem,
} from './../../molecules/welcomCarouselItem';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        flex: 1,
        left: 0,
        right: 0,
        bottom: 20,
    },
    flatStyle: {
        backgroundColor: '#004FC4',
    },
});
// let flatList: number;

export const data: FlatListItem[] = [
    {
        title: 'Welcome ',
        titleExtend: 'to MENSANA',
        subTitle: 'Nunc vel rhoncus nibh, ut tincidunt',
        discription:
            'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim.',
        id: 1,
    },
    {
        title: 'What Mensana do ?',
        subTitle: 'Nunc vel rhoncus nibh, ut tincidunt',
        discription:
            'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim.',
        id: 2,
    },
    {
        title: 'Why Join ?',
        subTitle: 'Nunc vel rhoncus nibh, ut tincidunt',
        discription:
            'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim.',
        id: 3,
    },
    {
        title: '',
        subTitle: '',
        discription: '',
        id: 4,
    },
];

const Carousel: React.FC = (props: object) => {
    const scrollX = new Animated.Value(0);
    const position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);
    const [slideNumber, updateSlideNumber] = useState(null);

    const getScreenIndex = useCallback(({viewableItems}) => {
        updateSlideNumber(viewableItems[0].index);
    }, []);

    const visiblebleConfig = {
        itemVisiblePercentThreshold: 50,
    };

    useEffect(() => {
        setDataList(data);
    }, [dataList]);
    if (data && data.length) {
        return (
            <View>
                <FlatList
                    style={styles.flatStyle}
                    data={data}
                    horizontal
                    pagingEnabled
                    onEndReachedThreshold={0.01}
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                    keyExtractor={(item, index) => 'key' + index}
                    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                    renderItem={({item}) => {
                        return (
                            <WelcomeCarouselItem
                                navigation={props.navigation}
                                item={item}
                            />
                        );
                    }}
                    bounces={false}
                    directionalLockEnabled={true}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                        {
                            useNativeDriver: false,
                            listener: (event) => {
                                console.log(event);
                            },
                        },
                    )}
                    onViewableItemsChanged={getScreenIndex}
                    viewabilityConfig={visiblebleConfig}
                />
                {slideNumber !== 3 && (
                    <View style={styles.dotView}>
                        {data.map((_, i) => {
                            const opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp',
                            });
                            return (
                                <Animated.View
                                    key={i}
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{
                                        opacity,
                                        height: 12,
                                        width: 12,
                                        backgroundColor: '#FFF',
                                        margin: 8,
                                        borderRadius: 10,
                                    }}
                                />
                            );
                        })}
                    </View>
                )}
            </View>
        );
    } else {
        return null;
    }
};
export default Carousel;
