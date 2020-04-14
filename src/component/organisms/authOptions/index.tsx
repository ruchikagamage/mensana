import React from 'react';
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {TextBlock, Button} from './../../atoms';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: height,
    },
    container: {
        flex: 1,
        position: 'relative',
        width: width,
        height: height,
    },
    topBlock: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: height / 4,
    },
    bottomTextBlock: {
        marginTop: -30,
    },
    breakVertical: {
        height: 15,
    },
    breakHorizontal: {
        width: '2%',
    },
    buttonsBlock: {
        paddingLeft: 5,
        paddingRight: 5,
        position: 'absolute',
        width: '100%',
        bottom: 30,
    },
    signUpOptions: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
});

// interface AuthProps {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     navigation: any;

// }

// interface NProps {
//     navigation: NavigationScreenProp<any>;
//     // userProfile: IUserProfile;
// }

const AuthOptions: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./../../../images/landings.png')}
                style={styles.backgroundImage}>
                <View style={styles.topBlock}>
                    <TextBlock
                        family="primary"
                        letterSpace={-2}
                        size={10}
                        weight="900"
                        colorNumber={0}
                        color="#000000"
                        lheight={0}>
                        Get on
                    </TextBlock>
                    <View style={styles.bottomTextBlock}>
                        <TextBlock
                            family="primary"
                            letterSpace={-2}
                            size={10}
                            weight="900"
                            colorNumber={0}
                            lheight={0}>
                            Greg.
                        </TextBlock>
                    </View>
                </View>
            </ImageBackground>
            {/* <Button
                title="Go to Details"
                onPress={(): void => props.navigation.navigate('Login')}
            /> */}
            <View style={styles.buttonsBlock}>
                <Button
                    backgroundColor={3}
                    size={7}
                    onPress={(): void => navigation.navigate('Login')}
                    rippleColor="#FF5400">
                    <TextBlock
                        size={2.5}
                        weight="700"
                        colorNumber={2}
                        letterSpace={1}>
                        LOG IN
                    </TextBlock>
                </Button>
                <View style={styles.breakVertical} />
                <View style={styles.signUpOptions}>
                    <Button
                        backgroundColor={2}
                        size={7}
                        onPress={(): void => navigation.navigate('Login')}
                        buttinWidth="53">
                        <TextBlock
                            size={1.6}
                            weight="700"
                            colorNumber={0}
                            letterSpace={0}>
                            SIGN UP WITH FACEBOOK
                        </TextBlock>
                    </Button>
                    <View style={styles.breakHorizontal} />
                    <Button
                        backgroundColor={1}
                        size={7}
                        onPress={(): void => navigation.navigate('Login')}
                        buttinWidth="45">
                        <TextBlock
                            size={1.6}
                            weight="700"
                            colorNumber={0}
                            letterSpace={0}>
                            SIGN UP WITH EMAIL
                        </TextBlock>
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default AuthOptions;
