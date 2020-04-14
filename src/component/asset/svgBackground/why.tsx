import * as React from 'react';
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Text,
    TSpan,
    Circle,
    Ellipse,
    Mask,
    Use,
} from 'react-native-svg';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const SvgComponent: React.FC = () => {
    return (
        <Svg width={width} height={379}>
            <Defs>
                <LinearGradient
                    x1="50.014%"
                    y1="99.989%"
                    x2="50.014%"
                    y2="-.002%"
                    id="prefix__a">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50.006%"
                    x2="100.009%"
                    y2="50.006%"
                    id="prefix__b">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="99.991%"
                    y2="50%"
                    id="prefix__c">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1=".009%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    id="prefix__d">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1=".108%"
                    y1="50.022%"
                    x2="100.108%"
                    y2="50.022%"
                    id="prefix__e">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="100.024%"
                    y2="50%"
                    id="prefix__f">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    id="prefix__g">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50.003%"
                    x2="100%"
                    y2="50.003%"
                    id="prefix__h">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    id="prefix__i">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    id="prefix__j">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1=".017%"
                    y1="50.058%"
                    x2="100.002%"
                    y2="50.058%"
                    id="prefix__k">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="100.099%"
                    y2="50%"
                    id="prefix__l">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="-.099%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    id="prefix__m">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="100.036%"
                    y2="50%"
                    id="prefix__n">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="49.993%"
                    x2="99.991%"
                    y2="49.993%"
                    id="prefix__o">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="100.008%"
                    y2="50%"
                    id="prefix__p">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    id="prefix__q">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="49.989%"
                    x2="100%"
                    y2="49.989%"
                    id="prefix__r">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="49.975%"
                    x2="99.864%"
                    y2="49.975%"
                    id="prefix__s">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="0%"
                    y1="49.975%"
                    x2="99.864%"
                    y2="49.975%"
                    id="prefix__t">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="50%"
                    y1="100.125%"
                    x2="50%"
                    y2="0%"
                    id="prefix__u">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="50%"
                    y1="100%"
                    x2="50%"
                    y2="0%"
                    id="prefix__v">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="50%"
                    y1="100%"
                    x2="50%"
                    y2="-.125%"
                    id="prefix__w">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="50.007%"
                    y1="100%"
                    x2="50.007%"
                    y2="0%"
                    id="prefix__x">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="50.002%"
                    y1="100.002%"
                    x2="50.002%"
                    y2="-.01%"
                    id="prefix__y">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="49.936%"
                    y1="100.023%"
                    x2="49.936%"
                    y2="-.069%"
                    id="prefix__z">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="49.992%"
                    y1="100%"
                    x2="49.992%"
                    y2="0%"
                    id="prefix__C">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="50%"
                    y1="100%"
                    x2="50%"
                    y2="-.037%"
                    id="prefix__D">
                    <Stop stopOpacity={0.12} offset="0%" />
                    <Stop stopOpacity={0.09} offset="55%" />
                    <Stop stopOpacity={0.02} offset="100%" />
                </LinearGradient>
                <LinearGradient
                    x1="49.996%"
                    y1="100.001%"
                    x2="49.996%"
                    y2=".007%"
                    id="prefix__E">
                    <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
                    <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
                    <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
                </LinearGradient>
                <Path
                    d="M9.535 1.563L8.905.02.693 3.497c-.381.16-.63.541-.63.965v9.13h1.622V4.88l7.85-3.317z"
                    id="prefix__A"
                />
            </Defs>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M0 0h453v379c-65.333-46.667-136-70-212-70S84.667 278.333 0 217V0z"
                    fillOpacity={0.736}
                    fill="#FFF"
                />
                <G transform="translate(65 4)">
                    <Path
                        d="M26.276 116.976h240.327c2.304 0 4.513.916 6.142 2.546a8.698 8.698 0 012.544 6.148v86.294H17.59V125.67c0-4.802 3.89-8.694 8.686-8.694z"
                        fill="#535461"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M6.686 164.47h20.933c2.233 0 4.044 1.839 4.044 4.107v43.387h-26.4c-1.45 0-2.624-1.193-2.624-2.665v-40.722a4.14 4.14 0 011.185-2.905 4.012 4.012 0 012.862-1.202z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M4.044 164.47h20.933a4.01 4.01 0 012.862 1.202 4.14 4.14 0 011.185 2.905v43.387h-26.4c-1.45 0-2.624-1.193-2.624-2.665v-40.722c0-2.268 1.81-4.107 4.044-4.107z"
                        fill="#535461"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M286.738 211.964h-26.4v-43.387c0-2.268 1.81-4.107 4.043-4.107h20.937c2.233 0 4.043 1.839 4.043 4.107V209.3c0 1.472-1.174 2.665-2.623 2.665z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M289.38 211.964h-26.404v-43.387c0-2.268 1.81-4.107 4.044-4.107h20.936c2.233 0 4.044 1.839 4.044 4.107V209.3c0 1.472-1.175 2.665-2.624 2.665h.003z"
                        fill="#535461"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M36.171 179.422h220.537c1.662 0 3.257.665 4.432 1.849a6.338 6.338 0 011.836 4.465v26.228H29.904v-26.228c0-3.487 2.806-6.314 6.267-6.314z"
                        fill="#535461"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M36.171 179.422h220.537c1.662 0 3.257.665 4.432 1.849a6.338 6.338 0 011.836 4.465v26.228H29.904v-26.228c0-3.487 2.806-6.314 6.267-6.314z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.15}
                    />
                    <Path
                        fill="#535461"
                        fillRule="nonzero"
                        d="M13.193 211.964h8.795v9.675h-8.795z"
                    />
                    <Path
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.15}
                        d="M13.193 211.964h8.795v9.675h-8.795z"
                    />
                    <Path
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                        d="M13.193 211.759h8.795v1h-8.795z"
                    />
                    <Path
                        fill="#535461"
                        fillRule="nonzero"
                        d="M279.686 221.638h-8.795v-9.675h8.795z"
                    />
                    <Path
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.15}
                        d="M279.686 221.638h-8.795v-9.675h8.795z"
                    />
                    <Path
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                        d="M279.686 212.169h-8.795v-1h8.795z"
                    />
                    <Text
                        fill="#000"
                        opacity={0.7}
                        fontFamily="Helvetica"
                        fontSize={9.58}>
                        <TSpan x={67.723} y={147.964}>
                            {'1'}
                        </TSpan>
                    </Text>
                    <Path
                        d="M51.116 102.827l-1.33-.25 2.643-9.765c4.161-31.292-11.563-34.444-17.46-34.55a19.357 19.357 0 00-2.07-.63V53.94A19.575 19.575 0 0047.46 38.12h.05c.937 0 1.698-1.43 1.698-3.192a4.439 4.439 0 00-.738-2.632c.067-.667.101-1.35.103-2.05a20.385 20.385 0 00-6.281-14.741 13.145 13.145 0 00-1.443-3.888c-1.446-2.555-3.856-5.22-2.875-7.996l-6.358.667-.06-4.198c-1.994.356-2.815 2.665-3.989 4.304-2.832 3.948-8.512 4.498-12.271 7.573-1.276 1.046-4.151 4.224-3.606 6.31A20.354 20.354 0 007.81 30.27c0 .69.035 1.374.104 2.049a4.439 4.439 0 00-.738 2.632c0 1.762.761 3.191 1.698 3.191h.05A19.574 19.574 0 0023.53 53.94v3.695c-.701.171-1.393.381-2.07.63-5.897.106-21.622 3.258-17.46 34.55l2.642 9.765-.628.117a7.245 7.245 0 00-4.648 3.033 7.276 7.276 0 00-1.146 5.44l10.424 55.968a2.2 2.2 0 00.916 1.411 2.19 2.19 0 001.643.348l1.838-.333v1.09a6.115 6.115 0 00-3.397 5.477v.693h12.298v-.693c0-2.15-1.13-4.142-2.971-5.244v-2.435l1.678-.314a2.193 2.193 0 001.408-.918 2.2 2.2 0 00.347-1.647l-9.778-52.608h27.158l-9.792 52.588a2.203 2.203 0 00.347 1.647c.33.481.836.812 1.408.918l1.679.314v2.435a6.113 6.113 0 00-2.972 5.244v.693h12.298v-.693a6.115 6.115 0 00-3.397-5.477v-1.09l1.838.333a2.19 2.19 0 001.644-.348 2.2 2.2 0 00.916-1.41l10.556-56.68c.654-3.537-1.666-6.939-5.192-7.612z"
                        opacity={0.7}
                        transform="translate(43.096 68.602)"
                        fill="url(#prefix__a)"
                        fillRule="nonzero"
                    />
                    <Path
                        fill="#FDB797"
                        fillRule="nonzero"
                        d="M58.048 229.554h6.157v7.916h-6.157zm20.229 0h6.157v7.916h-6.157z"
                    />
                    <Path
                        fill="#4D8AF0"
                        fillRule="nonzero"
                        d="M51.892 166.229h37.819v13.193H51.892z"
                    />
                    <Path
                        d="M51.999 165.617h37.725V179.4H51.999z"
                        opacity={0.05}
                        fill="#000"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M51.892 168.26s14.111 3.246 18.908 3.246c4.796 0 18.91-3.242 18.91-3.242v-2.035H51.893v2.032z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M89.71 168.215s-14.11 3.291-18.909 3.291c-4.8 0-18.91-3.291-18.91-3.291V145.58a18.94 18.94 0 015.54-13.386 18.9 18.9 0 0113.37-5.544c10.444 0 18.91 8.475 18.91 18.93v22.634z"
                        fill="#F55F44"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M66.843 116.976h8.796v11.235c0 2.053-1.605 3.717-3.584 3.717h-1.628c-1.98 0-3.584-1.664-3.584-3.717v-11.235z"
                        fill="#FDB797"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M66.33 232.08l-9.893 1.844a1.72 1.72 0 01-1.998-1.365l-10.366-55.093a5.606 5.606 0 01.897-4.224 5.684 5.684 0 013.645-2.357l5.994-1.11a1.72 1.72 0 011.998 1.365l11.086 58.947a1.71 1.71 0 01-1.362 1.993zm9.828 0l9.849 1.844a1.714 1.714 0 001.99-1.365l10.422-55.648a5.078 5.078 0 00-4.07-5.92l-6.532-1.216a1.714 1.714 0 00-1.989 1.365l-11.04 58.947a1.71 1.71 0 001.37 1.993z"
                        fill="#4D8AF0"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M66.843 124.341c2.89.734 5.907.734 8.796 0v-6.486h-8.796v6.486z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Circle
                        fill="#333"
                        fillRule="nonzero"
                        cx={70.801}
                        cy={100.705}
                        r={19.789}
                    />
                    <Circle
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={70.801}
                        cy={105.102}
                        r={18.91}
                    />
                    <Path
                        d="M58.964 83.345c3.634-2.906 9.128-3.424 11.863-7.156 1.14-1.551 1.941-3.728 3.862-4.069l.056 3.971 6.15-.618c-.95 2.618 1.379 5.136 2.778 7.555a12.251 12.251 0 011.64 5.846c-2.134 1.258-4.78-.114-7.157-.844-2.308-.71-4.767-.782-7.185-.851a15.228 15.228 0 00-3.707.2c-1.051.28-2.075.648-3.06 1.103-1.636.654-6.797 3.204-8.317 1.571-1.726-1.856 1.677-5.575 3.077-6.708z"
                        fill="#333"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M60.065 96.354c1.02.56 2.14.902 3.293 1.007a28.5 28.5 0 0014.132-1.618c.737 1.907 2.539 3.216 4.452 3.837 1.914.621 3.952.655 5.968.671.443.05.89-.037 1.284-.251.896-.618.461-2.015-.06-2.991l-2.594-4.794c-.768-1.417-1.555-2.86-2.744-3.934-1.488-1.343-3.464-1.97-5.414-2.37a29.968 29.968 0 00-13.894.473c-4.845 1.35-11.072 5.868-4.423 9.97z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M60.065 95.472a8.43 8.43 0 003.293 1.008c4.77.664 9.626.108 14.132-1.62.737 1.908 2.539 3.219 4.452 3.84 1.914.621 3.952.655 5.968.672.443.05.89-.038 1.284-.252.896-.618.461-2.016-.06-2.993l-2.591-4.787c-.767-1.417-1.555-2.862-2.743-3.937-1.489-1.343-3.465-1.972-5.415-2.371a29.948 29.948 0 00-13.894.473c-4.848 1.34-11.075 5.862-4.426 9.967z"
                        fill="#333"
                        fillRule="nonzero"
                    />
                    <Ellipse
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={89.711}
                        cy={105.102}
                        rx={1.759}
                        ry={3.078}
                    />
                    <Ellipse
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={52.771}
                        cy={105.102}
                        rx={1.759}
                        ry={3.078}
                    />
                    <Path
                        d="M66.843 127.635s-23.54-3.727-18.691 33.264l2.831 10.607 8.095-.334s-5.267-12.334-2.025-20.56c3.243-8.225 9.79-22.977 9.79-22.977zm8.796 0s23.545-3.726 18.69 33.267l-2.832 10.604-8.095-.334s5.267-12.33 2.024-20.553c-3.243-8.223-9.787-22.984-9.787-22.984z"
                        fill="#F55F44"
                        fillRule="nonzero"
                    />
                    <Circle
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={55.41}
                        cy={173.265}
                        r={4.398}
                    />
                    <Circle
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={87.952}
                        cy={173.265}
                        r={4.398}
                    />
                    <Path
                        d="M60.021 233.952h2.211c2.547 0 4.611 2.015 4.611 4.5v1.656H55.41v-1.656c0-2.485 2.064-4.5 4.611-4.5zm20.231 0h2.21c2.546 0 4.61 2.015 4.61 4.5v1.656H75.64v-1.656c0-1.194.486-2.34 1.35-3.183a4.668 4.668 0 013.263-1.317z"
                        fill="#333"
                        fillRule="nonzero"
                    />
                    <Text fill="#FFF" fontFamily="Helvetica" fontSize={9.217}>
                        <TSpan x={68.602} y={148.843}>
                            {'1'}
                        </TSpan>
                    </Text>
                    <Path
                        d="M56.773 147.759s-1.7 8.62 1.275 12.313m27.662-12.313s1.7 8.62-1.276 12.313"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <G opacity={0.7} transform="translate(102.024 55.41)">
                        <Path
                            fill="url(#prefix__b)"
                            fillRule="nonzero"
                            d="M37.261 91.822H76.12v28.568H37.261z"
                        />
                        <Path
                            d="M.224 7.445s14.499 1.68 19.43 1.68c4.933 0 19.432-1.68 19.432-1.68V.302H.224v7.143z"
                            opacity={0.1}
                            transform="translate(37.04 91.942)"
                            fill="url(#prefix__c)"
                            fillRule="nonzero"
                        />
                        <Path
                            d="M76.124 98.965s-14.5 1.68-19.432 1.68c-4.932 0-19.431-1.68-19.431-1.68v-28.15c0-10.674 8.7-19.328 19.431-19.328 10.732 0 19.432 8.654 19.432 19.328v28.15z"
                            fill="url(#prefix__d)"
                            fillRule="nonzero"
                        />
                        <Path
                            d="M57.66 56.95h-1.952c-2.027 0-3.67-1.634-3.67-3.65V41.822h9.293v11.474c0 .97-.386 1.899-1.074 2.584a3.68 3.68 0 01-2.597 1.07z"
                            fill="url(#prefix__e)"
                            fillRule="nonzero"
                        />
                        <Path
                            fill="url(#prefix__f)"
                            fillRule="nonzero"
                            d="M37.261 110.31H51.2v94.113H37.261z"
                        />
                        <Path
                            fill="url(#prefix__g)"
                            fillRule="nonzero"
                            d="M62.185 110.31h13.939v94.113H62.185z"
                        />
                        <Path
                            d="M.324 6.675c3.052.747 6.24.747 9.293 0V.093H.324v6.582z"
                            opacity={0.1}
                            transform="translate(51.723 42.154)"
                            fill="url(#prefix__h)"
                            fillRule="nonzero"
                        />
                        <Ellipse
                            fill="url(#prefix__i)"
                            fillRule="nonzero"
                            cx={56.692}
                            cy={25.02}
                            rx={20.276}
                            ry={20.167}
                        />
                        <Ellipse
                            fill="url(#prefix__j)"
                            fillRule="nonzero"
                            cx={56.692}
                            cy={29.64}
                            rx={19.431}
                            ry={19.328}
                        />
                        <Path
                            d="M3.207 11.322c1.031.62 2.242.866 3.437 1.029a30.421 30.421 0 0014.746-1.66c.771 1.942 2.65 3.276 4.649 3.907 1.998.63 4.13.664 6.23.69.46.05.926-.039 1.335-.255.934-.628.483-2.065-.064-3.047l-2.706-4.883c-.801-1.44-1.622-2.914-2.863-4.006-1.552-1.368-3.614-1.992-5.65-2.413a32.02 32.02 0 00-14.5.481C2.77 2.543-3.74 7.146 3.208 11.322z"
                            opacity={0.1}
                            transform="translate(41.712 8.63)"
                            fill="url(#prefix__k)"
                            fillRule="nonzero"
                        />
                        <Path
                            d="M44.92 19.53c1.03.62 2.242.866 3.436 1.03a30.421 30.421 0 0014.747-1.66c.77 1.941 2.65 3.276 4.648 3.906 1.999.63 4.131.664 6.23.69.46.05.926-.038 1.335-.255.934-.627.484-2.065-.063-3.047l-2.707-4.883c-.8-1.44-1.622-2.914-2.863-4.006-1.552-1.367-3.614-1.991-5.65-2.413a32.02 32.02 0 00-14.499.481c-5.052 1.378-11.562 5.982-4.615 10.157z"
                            fill="url(#prefix__k)"
                            fillRule="nonzero"
                        />
                        <Ellipse
                            fill="url(#prefix__l)"
                            fillRule="nonzero"
                            cx={75.91}
                            cy={29.64}
                            rx={1.689}
                            ry={3.15}
                        />
                        <Ellipse
                            fill="url(#prefix__m)"
                            fillRule="nonzero"
                            cx={37.474}
                            cy={29.64}
                            rx={1.689}
                            ry={3.15}
                        />
                        <Ellipse
                            fill="url(#prefix__n)"
                            fillRule="nonzero"
                            cx={108.646}
                            cy={4.853}
                            rx={4.645}
                            ry={4.62}
                        />
                        <Text
                            fill="#000"
                            fontFamily="Helvetica"
                            fontSize={9.492}>
                            <TSpan x={49.344} y={72.785}>
                                {'00'}
                            </TSpan>
                        </Text>
                        <Path
                            d="M57.116 37.205s-10.982 3.78-19.431-4.62c0 0 .667 2.784 1.858 6.143 3.923 7.324 12.107 11.34 20.337 9.98 8.23-1.36 14.668-7.795 15.997-15.987-1.98 1.088-16.412 7.989-18.761 4.484zm-.424 5.042c-2.099 0-3.8-1.593-3.8-2.52 0-.926 1.701-.84 3.8-.84 2.1 0 3.801-.086 3.801.84 0 .927-1.702 2.52-3.8 2.52z"
                            fill="url(#prefix__o)"
                            fillRule="nonzero"
                        />
                        <Path
                            d="M67.02 54.435s22.618-12.613 36.557-49.596l6.757 4.203s-11.192 47.126-39.28 58.006L67.02 54.435z"
                            fill="url(#prefix__p)"
                            fillRule="nonzero"
                        />
                        <Ellipse
                            fill="url(#prefix__q)"
                            fillRule="nonzero"
                            cx={4.739}
                            cy={4.853}
                            rx={4.645}
                            ry={4.62}
                        />
                        <Path
                            d="M46.364 54.435S23.746 41.822 9.807 4.853L3.05 9.055s11.192 47.113 39.283 57.993l4.031-12.613z"
                            fill="url(#prefix__r)"
                            fillRule="nonzero"
                        />
                        <Path
                            d="M50.359 207.782h-12.25v-1.952c.001-2.635 2.15-4.77 4.798-4.77h2.67c2.65 0 4.798 2.138 4.798 4.774l-.016 1.948z"
                            fill="url(#prefix__s)"
                            fillRule="nonzero"
                        />
                        <Path
                            d="M75.28 207.782H63.03v-1.952c0-1.265.505-2.479 1.405-3.374a4.808 4.808 0 013.393-1.395h2.67a4.804 4.804 0 013.393 1.397c.9.895 1.406 2.11 1.405 3.376l-.017 1.948z"
                            fill="url(#prefix__t)"
                            fillRule="nonzero"
                        />
                    </G>
                    <Path
                        fill="#4D8AF0"
                        fillRule="nonzero"
                        d="M139.843 147.759h37.819v28.145h-37.819z"
                    />
                    <Path
                        d="M139.843 155.758s14.11 1.676 18.91 1.676c4.8 0 18.91-1.676 18.91-1.676v-7.12h-37.82v7.12z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M177.663 154.93s-14.11 1.624-18.91 1.624c-4.8 0-18.91-1.625-18.91-1.625v-27.196c0-10.313 8.467-18.673 18.91-18.673 10.444 0 18.91 8.36 18.91 18.673v27.196z"
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M153.916 99.386h8.795v11.235c0 2.052-1.604 3.716-3.583 3.716h-1.63c-1.978 0-3.582-1.664-3.582-3.716V99.386z"
                        fill="#FDB797"
                        fillRule="nonzero"
                    />
                    <Path
                        fill="#4D8AF0"
                        fillRule="nonzero"
                        d="M139.843 166.229h13.193v91.47h-13.193zm24.627 0h13.193v91.47H164.47z"
                    />
                    <Path
                        d="M153.916 105.871a17.84 17.84 0 008.795 0v-6.485h-8.795v6.485z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Circle
                        fill="#814E4D"
                        fillRule="nonzero"
                        cx={158.753}
                        cy={83.114}
                        r={19.789}
                    />
                    <Circle
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={158.753}
                        cy={87.512}
                        r={18.91}
                    />
                    <Path
                        d="M147.135 77.884a8.41 8.41 0 003.294 1.007 28.5 28.5 0 0014.132-1.618c.738 1.907 2.54 3.216 4.453 3.837 1.914.621 3.952.655 5.968.671.443.05.89-.037 1.284-.251.896-.618.461-2.014-.059-2.991l-2.595-4.794c-.768-1.416-1.555-2.86-2.744-3.934-1.488-1.343-3.465-1.97-5.414-2.37a29.972 29.972 0 00-13.896.473c-4.841 1.346-11.069 5.868-4.423 9.97z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M147.135 77.884a8.41 8.41 0 003.294 1.007 28.5 28.5 0 0014.132-1.618c.738 1.907 2.54 3.216 4.453 3.837 1.914.621 3.952.655 5.968.671.443.05.89-.037 1.284-.251.896-.618.461-2.014-.059-2.991l-2.595-4.794c-.768-1.416-1.555-2.86-2.744-3.934-1.488-1.343-3.465-1.97-5.414-2.37a29.972 29.972 0 00-13.896.473c-4.841 1.35-11.069 5.868-4.423 9.97z"
                        fill="#814E4D"
                        fillRule="nonzero"
                    />
                    <Ellipse
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={177.663}
                        cy={87.512}
                        rx={1.759}
                        ry={3.078}
                    />
                    <Ellipse
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={139.843}
                        cy={87.512}
                        rx={1.759}
                        ry={3.078}
                    />
                    <Circle
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={209.325}
                        cy={63.325}
                        r={4.398}
                    />
                    <Text fill="#FFF" fontFamily="Helvetica" fontSize={9.217}>
                        <TSpan x={152.157} y={129.494}>
                            {'00'}
                        </TSpan>
                    </Text>
                    <Path
                        d="M159.519 95.053s-10.638 3.65-18.796-4.463c0 0 .665 2.69 1.795 5.942 3.794 7.072 11.71 10.95 19.67 9.636 7.961-1.313 14.189-7.526 15.475-15.436-1.909 1.047-15.87 7.708-18.144 4.321zm-.41 4.869c-2.027 0-3.69-1.542-3.69-2.433 0-.891 1.663-.812 3.677-.812 2.015 0 3.677-.086 3.677.812s-1.632 2.433-3.663 2.433z"
                        fill="#814E4D"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M168.867 111.729s22.055-12.32 35.63-48.404l6.587 4.1s-10.908 45.982-38.285 56.587l-3.932-12.283z"
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                    <Circle
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={108.181}
                        cy={63.325}
                        r={4.398}
                    />
                    <Path
                        d="M148.639 111.729s-22.054-12.32-35.644-48.404l-6.573 4.1s10.916 45.982 38.3 56.587l3.917-12.283z"
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M145.336 254.18h2.21c2.547 0 4.61 2.015 4.61 4.5v1.657h-11.433v-1.656c0-1.194.486-2.34 1.351-3.183a4.668 4.668 0 013.262-1.317zm24.62 0h2.208c1.225-.003 2.4.47 3.267 1.315a4.445 4.445 0 011.352 3.187v1.655H165.35v-1.655c0-1.194.484-2.339 1.348-3.183a4.663 4.663 0 013.259-1.318z"
                        fill="#333"
                        fillRule="nonzero"
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={116.536}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={116.536}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M115.524 158.76c.007-.407.337-.771.842-.93.505-.159 1.09-.082 1.49.197-.234-.373-.747-.606-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={120.054}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={120.054}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M119.042 158.76c.007-.407.337-.771.842-.93.505-.159 1.09-.082 1.49.197-.234-.373-.747-.606-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={109.5}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={109.5}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M108.488 158.76c.006-.407.337-.771.842-.93.505-.159 1.09-.082 1.49.197-.234-.373-.747-.606-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.331 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M112.886 155.241c.006-.406.336-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={121.813}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={121.813}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M120.801 155.241c.007-.406.337-.77.842-.929.505-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={120.054}
                        cy={154.355}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={120.054}
                        cy={154.355}
                        r={1.319}
                    />
                    <Path
                        d="M119.042 154.361c.007-.405.337-.77.842-.929.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={120.934}
                        cy={156.994}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={120.934}
                        cy={156.994}
                        r={1.319}
                    />
                    <Path
                        d="M119.922 157c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.045.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M116.404 155.241c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={150.837}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={150.837}
                        r={1.319}
                    />
                    <Path
                        d="M116.404 151.723c.006-.406.337-.77.842-.93.505-.158 1.09-.08 1.489.197-.234-.372-.746-.606-1.302-.592-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={152.596}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={152.596}
                        r={1.319}
                    />
                    <Path
                        d="M122.56 153.482c.007-.406.337-.77.842-.929.506-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M122.56 156.12c.007-.405.337-.77.842-.928.506-.16 1.09-.082 1.49.196-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={126.211}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={126.211}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M125.199 155.241c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.303-.593-.555.014-1.045.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={125.331}
                        cy={156.114}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={125.331}
                        cy={156.114}
                        r={1.319}
                    />
                    <Path
                        d="M124.32 156.12c.006-.405.336-.77.841-.928.506-.16 1.09-.082 1.49.196-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.068.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={115.657}
                        cy={152.596}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={115.657}
                        cy={152.596}
                        r={1.319}
                    />
                    <Path
                        d="M114.645 153.482c.006-.406.336-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M112.886 157.88c.006-.406.336-.77.842-.93.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.014-1.046.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={111.259}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={111.259}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M110.247 158.76c.006-.407.337-.771.842-.93.505-.159 1.09-.082 1.49.197-.234-.373-.747-.606-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={113.018}
                        cy={156.994}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={113.018}
                        cy={156.994}
                        r={1.319}
                    />
                    <Path
                        d="M112.006 157.88c.006-.406.337-.77.842-.93.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={156.114}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={156.114}
                        r={1.319}
                    />
                    <Path
                        d="M118.163 156.12c.006-.405.337-.77.842-.928.505-.16 1.09-.082 1.489.196-.234-.373-.746-.606-1.302-.592-.555.014-1.045.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={152.596}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={152.596}
                        r={1.319}
                    />
                    <Path
                        d="M118.163 152.602c.006-.405.337-.77.842-.929.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.013-1.045.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={120.934}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={120.934}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M119.922 155.241c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.045.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={149.958}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={149.958}
                        r={1.319}
                    />
                    <Path
                        d="M118.163 150.843c.006-.405.337-.77.842-.929.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.013-1.045.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={120.054}
                        cy={151.717}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={120.054}
                        cy={151.717}
                        r={1.319}
                    />
                    <Path
                        d="M118.163 151.723c.006-.406.337-.77.842-.93.505-.158 1.09-.08 1.489.197-.234-.372-.746-.606-1.302-.592-.555.014-1.045.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={120.934}
                        cy={152.596}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={120.934}
                        cy={152.596}
                        r={1.319}
                    />
                    <Path
                        d="M119.922 152.602c.006-.405.337-.77.842-.929.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.013-1.045.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={122.693}
                        cy={151.717}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={122.693}
                        cy={151.717}
                        r={1.319}
                    />
                    <Path
                        d="M121.695 152.609c.007-.4.335-.759.837-.915.502-.156 1.083-.08 1.48.194-.222-.38-.738-.622-1.301-.61-.564.01-1.06.273-1.254.66-.193.389-.044.824.377 1.098a.792.792 0 01-.139-.427z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={122.693}
                        cy={153.476}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={122.693}
                        cy={153.476}
                        r={1.319}
                    />
                    <Path
                        d="M121.68 153.482c.007-.406.338-.77.843-.929.505-.159 1.09-.082 1.489.197-.233-.373-.746-.607-1.302-.593-.555.014-1.045.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={116.536}
                        cy={151.717}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={116.536}
                        cy={151.717}
                        r={1.319}
                    />
                    <Path
                        d="M115.524 151.723c.007-.406.337-.77.842-.93.505-.158 1.09-.08 1.49.197-.234-.372-.747-.606-1.302-.592-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={113.018}
                        cy={156.114}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={113.018}
                        cy={156.114}
                        r={1.319}
                    />
                    <Path
                        d="M112.006 156.12c.006-.405.337-.77.842-.928.505-.16 1.09-.082 1.49.196-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={115.657}
                        cy={153.476}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={115.657}
                        cy={153.476}
                        r={1.319}
                    />
                    <Path
                        d="M114.645 153.482c.006-.406.336-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={110.38}
                        cy={156.994}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={110.38}
                        cy={156.994}
                        r={1.319}
                    />
                    <Path
                        d="M109.367 157.88c.007-.406.337-.77.843-.93.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.014-1.046.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={156.114}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={156.114}
                        r={1.319}
                    />
                    <Path
                        d="M122.56 157c.007-.406.337-.77.842-.929.506-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={149.078}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={149.078}
                        r={1.319}
                    />
                    <Path
                        d="M116.404 149.084c.006-.405.337-.77.842-.929.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.013-1.046.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={151.717}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={151.717}
                        r={1.319}
                    />
                    <Path
                        d="M113.765 152.602c.007-.405.337-.77.842-.929.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.013-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={113.018}
                        cy={154.355}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={113.018}
                        cy={154.355}
                        r={1.319}
                    />
                    <Path
                        d="M112.006 154.361c.006-.405.337-.77.842-.929.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={156.994}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={156.994}
                        r={1.319}
                    />
                    <Path
                        d="M113.765 157c.007-.406.337-.77.842-.929.505-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={116.536}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={116.536}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M115.524 155.241c.007-.406.337-.77.842-.929.505-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={156.994}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={156.994}
                        r={1.319}
                    />
                    <Path
                        d="M116.404 157c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={127.09}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={127.09}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M126.078 158.76c.007-.407.337-.771.842-.93.506-.159 1.09-.082 1.49.197-.234-.373-.747-.606-1.302-.593-.555.014-1.046.272-1.245.656-.2.383-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={125.331}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={125.331}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M124.32 157.88c.006-.406.336-.77.841-.93.506-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.068.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={121.813}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={121.813}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={121.813}
                        cy={156.994}
                        r={1.319}
                    />
                    <Path
                        d="M120.801 157.88c.007-.406.337-.77.842-.93.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={118.295}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={118.295}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M117.283 158.76c.007-.407.337-.771.842-.93.505-.159 1.09-.082 1.49.197-.234-.373-.747-.606-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={152.596}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={117.416}
                        cy={152.596}
                        r={1.319}
                    />
                    <Path
                        d="M116.404 153.482c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={154.355}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={154.355}
                        r={1.319}
                    />
                    <Path
                        d="M118.163 154.361c.006-.405.337-.77.842-.929.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.014-1.045.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={116.536}
                        cy={150.837}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={116.536}
                        cy={150.837}
                        r={1.319}
                    />
                    <Path
                        d="M115.524 150.843c.007-.405.337-.77.842-.929.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.013-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={118.295}
                        cy={150.837}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={118.295}
                        cy={150.837}
                        r={1.319}
                    />
                    <Path
                        d="M117.283 150.843c.007-.405.337-.77.842-.929.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.013-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={120.934}
                        cy={150.837}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={120.934}
                        cy={150.837}
                        r={1.319}
                    />
                    <Path
                        d="M119.922 151.723c.006-.406.337-.77.842-.93.505-.158 1.09-.08 1.489.197-.234-.372-.746-.606-1.302-.592-.555.014-1.045.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={153.476}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={153.476}
                        r={1.319}
                    />
                    <Path
                        d="M112.886 153.482c.006-.406.336-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M113.765 155.241c.007-.406.337-.77.842-.929.505-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={115.657}
                        cy={156.994}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={115.657}
                        cy={156.994}
                        r={1.319}
                    />
                    <Path
                        d="M114.645 157.88c.006-.406.336-.77.842-.93.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.014-1.046.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={156.114}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={156.114}
                        r={1.319}
                    />
                    <Path
                        d="M118.163 157c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.045.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M122.56 155.241c.007-.406.337-.77.842-.929.506-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={124.452}
                        cy={154.355}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={124.452}
                        cy={154.355}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={121.813}
                        cy={154.355}
                        r={1.319}
                    />
                    <Path
                        d="M123.44 154.361c.006-.405.337-.77.842-.929.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.303-.592-.555.014-1.045.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={126.211}
                        cy={156.994}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={126.211}
                        cy={156.994}
                        r={1.319}
                    />
                    <Path
                        d="M125.199 157c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.303-.593-.555.014-1.045.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={120.054}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={120.054}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M119.042 158.76c.007-.407.337-.771.842-.93.505-.159 1.09-.082 1.49.197-.234-.373-.747-.606-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={113.018}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={113.018}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M112.006 157.88c.006-.406.337-.77.842-.93.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={111.259}
                        cy={156.114}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={111.259}
                        cy={156.114}
                        r={1.319}
                    />
                    <Path
                        d="M110.247 156.12c.006-.405.337-.77.842-.928.505-.16 1.09-.082 1.49.196-.234-.373-.747-.606-1.302-.592-.556.014-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={155.235}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={155.235}
                        r={1.319}
                    />
                    <Path
                        d="M112.907 155.262c.007-.4.334-.759.834-.915.501-.156 1.08-.08 1.476.194-.214-.384-.727-.632-1.291-.625-.565.007-1.066.268-1.262.657-.196.388-.048.826.374 1.102a.79.79 0 01-.13-.413z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={112.139}
                        cy={153.476}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={112.139}
                        cy={153.476}
                        r={1.319}
                    />
                    <Path
                        d="M111.126 153.482c.007-.406.337-.77.843-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={150.837}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={113.898}
                        cy={150.837}
                        r={1.319}
                    />
                    <Path
                        d="M112.886 151.723c.006-.406.336-.77.842-.93.505-.158 1.09-.08 1.489.197-.234-.372-.746-.606-1.302-.592-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={157.873}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={123.572}
                        cy={157.873}
                        r={1.319}
                    />
                    <Path
                        d="M122.56 158.76c.007-.407.337-.771.842-.93.506-.159 1.09-.082 1.49.197-.234-.373-.747-.606-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Path
                        fill="url(#prefix__x)"
                        fillRule="nonzero"
                        d="M125.55 180.301h-14.56l-3.689-21.988h21.988z"
                    />
                    <Path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M125.699 179.422h-13.977l-3.541-21.109h21.108z"
                    />
                    <Path
                        fill="#6C63FF"
                        fillRule="nonzero"
                        d="M108.18 158.313h3.616l3.42 21.109h-3.519zm21.11 0h-3.592l-3.445 21.109h3.494zm-12.314 0h3.518v21.108h-3.518z"
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={112.139}
                        cy={154.355}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={112.139}
                        cy={154.355}
                        r={1.319}
                    />
                    <Path
                        d="M111.126 154.361c.007-.405.337-.77.843-.929.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.014-1.046.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={150.837}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={150.837}
                        r={1.319}
                    />
                    <Path
                        d="M113.765 150.843c.007-.405.337-.77.842-.929.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.013-1.046.272-1.245.655-.2.384-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={110.38}
                        cy={156.114}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={110.38}
                        cy={156.114}
                        r={1.319}
                    />
                    <Path
                        d="M109.367 157c.007-.406.337-.77.843-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={108.62}
                        cy={147.319}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={108.62}
                        cy={147.319}
                        r={1.319}
                    />
                    <Path
                        d="M107.625 147.333c.006-.399.334-.757.836-.913.502-.156 1.082-.08 1.479.193-.22-.38-.737-.624-1.301-.613-.565.011-1.063.274-1.256.662-.192.389-.04.824.385 1.097a.792.792 0 01-.143-.426z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={140.283}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={114.777}
                        cy={140.283}
                        r={1.319}
                    />
                    <Path
                        d="M113.765 140.29c.007-.407.337-.771.842-.93.505-.159 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={134.127}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={119.175}
                        cy={134.127}
                        r={1.319}
                    />
                    <Path
                        d="M118.163 134.133c.006-.406.337-.77.842-.93.505-.158 1.09-.081 1.489.197-.234-.373-.746-.606-1.302-.592-.555.014-1.045.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.116-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__u)"
                        fillRule="nonzero"
                        cx={128.849}
                        cy={146.44}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={128.849}
                        cy={146.44}
                        r={1.319}
                    />
                    <Path
                        d="M127.837 146.446c.007-.406.337-.77.842-.93.506-.158 1.09-.08 1.49.197-.234-.372-.747-.606-1.302-.592-.555.014-1.046.272-1.245.656-.2.383-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={135.886}
                        cy={156.114}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={135.886}
                        cy={156.114}
                        r={1.319}
                    />
                    <Path
                        d="M134.873 156.12c.007-.405.337-.77.843-.928.505-.16 1.09-.082 1.489.196-.234-.373-.746-.606-1.302-.592-.555.014-1.046.272-1.245.655-.199.384-.068.818.332 1.103a.794.794 0 01-.117-.433z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={108.62}
                        cy={178.982}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={108.62}
                        cy={178.982}
                        r={1.319}
                    />
                    <Path
                        d="M107.608 178.988c.007-.406.337-.77.843-.929.505-.159 1.09-.082 1.489.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.199.383-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={106.861}
                        cy={176.343}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={106.861}
                        cy={176.343}
                        r={1.319}
                    />
                    <Path
                        d="M105.85 177.229c.006-.406.336-.77.841-.929.506-.159 1.09-.082 1.49.197-.234-.373-.746-.607-1.302-.593-.555.014-1.046.272-1.245.656-.2.383-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={105.102}
                        cy={164.03}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={105.102}
                        cy={164.03}
                        r={1.319}
                    />
                    <Path
                        d="M104.09 164.036c.007-.406.337-.77.842-.929.506-.159 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.593-.555.014-1.046.272-1.245.656-.2.383-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={130.608}
                        cy={178.102}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={130.608}
                        cy={178.102}
                        r={1.319}
                    />
                    <Path
                        d="M129.596 178.108c.007-.405.337-.77.842-.929.506-.158 1.09-.081 1.49.197-.234-.373-.746-.606-1.302-.592-.555.013-1.046.272-1.245.655-.2.384-.068.818.332 1.103a.794.794 0 01-.117-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__v)"
                        fillRule="nonzero"
                        cx={133.247}
                        cy={176.343}
                        r={1.319}
                    />
                    <Circle
                        fill="#FBC02D"
                        fillRule="nonzero"
                        cx={133.247}
                        cy={176.343}
                        r={1.319}
                    />
                    <Path
                        d="M132.235 176.35c.006-.406.337-.77.842-.93.505-.158 1.09-.081 1.49.197-.234-.373-.747-.606-1.302-.592-.556.013-1.046.272-1.245.655-.2.384-.069.818.331 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={133.247}
                        cy={178.102}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={133.247}
                        cy={178.102}
                        r={1.319}
                    />
                    <Path
                        d="M132.235 178.988c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.331 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Circle
                        fill="url(#prefix__w)"
                        fillRule="nonzero"
                        cx={127.97}
                        cy={178.102}
                        r={1.319}
                    />
                    <Circle
                        fill="#FDD835"
                        fillRule="nonzero"
                        cx={127.97}
                        cy={178.102}
                        r={1.319}
                    />
                    <Path
                        d="M126.958 178.988c.006-.406.337-.77.842-.929.505-.159 1.09-.082 1.49.197-.234-.373-.747-.607-1.302-.593-.556.014-1.046.272-1.245.656-.2.383-.069.818.331 1.103a.794.794 0 01-.116-.434z"
                        fill="#FFF"
                        fillRule="nonzero"
                        opacity={0.2}
                    />
                    <Text
                        fill="#000"
                        opacity={0.7}
                        fontFamily="Helvetica"
                        fontSize={9.953}>
                        <TSpan x={221.639} y={154.241}>
                            {'9'}
                        </TSpan>
                    </Text>
                    <Path
                        d="M80.395 55.564c-7.2-6.2-15.02-11.606-21.035-15.46.29-.93.511-1.881.664-2.844h.05c.97 0 1.76-1.482 1.76-3.323a4.598 4.598 0 00-.753-2.704c.069-.698.104-1.406.106-2.123a21.244 21.244 0 00-.663-5.29c.21-.63.334-1.287.368-1.95-.01-.536.052-1.07.186-1.589.205-.484.47-.94.79-1.359a8.607 8.607 0 00.765-7.785c-.354-.88-.928-1.76-1.827-2.07a1.935 1.935 0 01-.663-.272 1.184 1.184 0 01-.332-.877c-.05-1.1.262-2.183.299-3.286.036-1.103-.299-2.326-1.25-2.878a3.582 3.582 0 00-1.87-.332c-1.374.029-2.74.219-4.07.565-2.089.545-4.427 1.445-6.27.332-.496-.353-.97-.736-1.42-1.146-2.411-1.897-6.34-1.386-8.188 1.066-.922 1.226-1.4 2.858-2.696 3.675-2.371 1.495-5.95-.664-8.131 1.117-1.639 1.329-1.343 3.987-2.653 5.648-1.31 1.661-3.068 2.39-3.234 4.825-.1.894.137 1.793.664 2.521a21.113 21.113 0 00-2.053 9.111c0 .716.035 1.423.106 2.123a4.598 4.598 0 00-.766 2.728c0 1.828.79 3.323 1.76 3.323h.05c.166 1.014.409 2.013.727 2.99-5.97 3.844-13.693 9.19-20.803 15.31 2.202 13.228 19.805 21.598 19.805 21.598v26.458l-2.975.538c-3.957.742-6.567 4.557-5.83 8.523l10.854 58.262a2.209 2.209 0 002.577 1.768l1.97-.37v1.054c-2.08.997-3.522 1.469-3.522 3.927v.9h12.764v-.9c0-2.279-1.24-2.635-3.08-3.698v-2.442l1.803-.332a2.213 2.213 0 001.764-2.582L25.99 113.77h28.152l-10.165 54.55a2.213 2.213 0 001.765 2.582l1.804.333v2.442c-1.84 1.063-3.081 1.415-3.081 3.698v.9h12.764v-.9c0-2.459-1.443-2.94-3.522-3.927v-1.06l1.97.388a2.209 2.209 0 002.577-1.767l10.986-59a6.586 6.586 0 00-1.034-4.929 6.562 6.562 0 00-4.212-2.75l-3.684-.664V76.543l.298.642s17.586-8.407 19.788-21.62zm-64.096 2.658l11.584-8.05a20.142 20.142 0 007.342 3.495v3.814a20.165 20.165 0 00-8.238 4.22L16.3 58.222zm28.606-.74V53.66a20.143 20.143 0 007.471-3.598l11.733 8.157-10.685 3.485.19.41a20.18 20.18 0 00-8.71-4.633z"
                        opacity={0.7}
                        transform="translate(184.699 73.88)"
                        fill="url(#prefix__y)"
                        fillRule="nonzero"
                    />
                    <Path
                        fill="#FDB797"
                        fillRule="nonzero"
                        d="M211.084 238.349h6.157v7.916h-6.157zm20.229 0h6.157v7.916h-6.157z"
                    />
                    <Path
                        fill="#4D8AF0"
                        fillRule="nonzero"
                        d="M204.928 172.386h38.699v14.072h-38.699z"
                    />
                    <Path
                        d="M205.129 172.495h38.407v14.194h-38.407z"
                        opacity={0.05}
                        fill="#000"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M204.928 175.31s14.444 3.232 19.34 3.232c4.898 0 19.359-3.248 19.359-3.248v-2.029h-38.7v2.046z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M243.627 174.305s-14.434 3.358-19.357 3.358c-4.922 0-19.342-3.358-19.342-3.358v-23.088c.007-10.655 8.665-19.29 19.342-19.29a19.363 19.363 0 0113.682 5.645 19.282 19.282 0 015.675 13.645v23.088z"
                        fill="#3AD29F"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M219.88 122.253h9.674v11.343c0 1.993-1.71 3.609-3.821 3.609h-2.032c-2.11 0-3.821-1.616-3.821-3.61v-11.342z"
                        fill="#FDB797"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M219.359 240.791l-10.338 1.928a1.73 1.73 0 01-2.008-1.38l-10.783-57.556a5.691 5.691 0 01.902-4.27 5.712 5.712 0 013.664-2.382l6.431-1.2a1.73 1.73 0 012.009 1.38l11.495 61.479c.168.93-.443 1.82-1.372 2.001zm9.843 0l10.304 1.928a1.724 1.724 0 002-1.38l10.828-58.12a5.132 5.132 0 00-4.095-5.984l-6.966-1.304a1.724 1.724 0 00-2 1.38l-11.452 61.485a1.727 1.727 0 001.38 1.995z"
                        fill="#4D8AF0"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M219.88 129.616a21.44 21.44 0 009.674 0v-6.483h-9.674v6.483z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Circle
                        fill="#FFCF51"
                        fillRule="nonzero"
                        cx={224.277}
                        cy={105.542}
                        r={20.229}
                    />
                    <Circle
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={224.277}
                        cy={109.94}
                        r={19.349}
                    />
                    <Ellipse
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={243.627}
                        cy={110.38}
                        rx={1.759}
                        ry={3.078}
                    />
                    <Ellipse
                        fill="#FDB797"
                        fillRule="nonzero"
                        cx={205.807}
                        cy={110.38}
                        rx={1.759}
                        ry={3.078}
                    />
                    <Path
                        d="M213.26 242.747h2.681c2.66 0 4.818 2.233 4.818 4.987v2.05h-12.313v-2.04a5.074 5.074 0 011.405-3.533 4.734 4.734 0 013.41-1.464zm20.23 0h2.68c2.66 0 4.818 2.233 4.818 4.987v2.05h-12.313v-2.04a5.074 5.074 0 011.405-3.533 4.734 4.734 0 013.41-1.464z"
                        fill="#333"
                        fillRule="nonzero"
                    />
                    <Text fill="#FFF" fontFamily="Helvetica" fontSize={9.492}>
                        <TSpan x={221.639} y={154.12}>
                            {'9'}
                        </TSpan>
                    </Text>
                    <Path
                        d="M206.746 99.305s-.836 5.472 3.767 2.523c4.603-2.949 20.501-1.682 25.53 2.523 5.03 4.206 6.697.841 7.534 0 .836-.84-9.06-14.896-14.65-15.99-15.065-2.942-22.18 10.944-22.18 10.944z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M206.746 99.305s-.836 5.472 3.767 2.523c4.603-2.948 20.501-1.682 25.53 2.523 5.03 4.206 6.697.841 7.534 0 .836-.84-9.06-14.896-14.65-15.99-15.065-2.944-22.18 10.944-22.18 10.944z"
                        fill="#FFCF51"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M208.952 89.381c1.276-1.555 1.005-4.09 2.57-5.345 2.1-1.67 5.547.36 7.831-1.057 1.25-.775 1.709-2.31 2.597-3.483 1.778-2.31 5.564-2.81 7.889-1.013.433.388.89.751 1.366 1.086 1.776 1.066 4.02.211 6.03-.304a17.228 17.228 0 013.92-.535 3.501 3.501 0 011.802.33c.918.519 1.24 1.688 1.206 2.728-.034 1.04-.335 2.07-.288 3.113a1.11 1.11 0 00.308.832c.191.123.403.21.626.257.865.29 1.42 1.126 1.763 1.961a8.04 8.04 0 01-.737 7.38 5.883 5.883 0 00-.76 1.287c-.13.491-.191.998-.182 1.505-.097 1.78-.864 3.701-2.506 4.447-2.113.964-4.495-.37-6.582-1.393-4.737-2.31-10.077-3.123-15.34-3.668a61.876 61.876 0 00-7.105-.416c-1.765.02-4.154.766-5.835.06-1.34-.565-1.802-1.826-1.705-3.193.177-2.314 1.829-2.988 3.132-4.579z"
                        fill="#FFCF51"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M212.16 136.469l-10.178-3.334 20.536-14.334-6.293-8.861s-16.061 8.817-29.767 20.668c2.096 12.668 18.88 20.67 18.88 20.67l6.823-14.809zm25.113 0l10.178-3.334-20.535-14.334 6.293-8.861s16.06 8.817 29.767 20.668c-2.097 12.668-18.88 20.67-18.88 20.67l-6.823-14.809z"
                        fill="#3AD29F"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M216.361 110.836s10.293-7.524 12.766-2.926c2.472 4.597-6.585 11.704-6.585 11.704l-6.18-8.778z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M216.361 109.956s10.293-7.523 12.766-2.926c2.472 4.598-6.588 11.705-6.588 11.705l-6.178-8.779z"
                        fill="#FDB797"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M216.361 109.956s10.293-7.523 12.766-2.926c2.472 4.598-6.588 11.705-6.588 11.705l-6.178-8.779z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.02}
                    />
                    <Path
                        d="M232.193 110.836s-10.293-7.524-12.766-2.926c-2.472 4.597 6.588 11.704 6.588 11.704l6.178-8.778z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.1}
                    />
                    <Path
                        d="M233.072 109.956s-10.293-7.523-12.765-2.926c-2.472 4.598 6.588 11.705 6.588 11.705l6.177-8.779z"
                        fill="#FDB797"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M233.072 109.956s-10.293-7.523-12.765-2.926c-2.472 4.598 6.588 11.705 6.588 11.705l6.177-8.779z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity={0.02}
                    />
                    <Path
                        d="M10.544 2.216L9.716.237.94 3.842c-.397.17-.656.558-.66.99v9.482l2.537.294V5.564l7.727-3.348z"
                        transform="translate(192.614 138.964)"
                        fill="url(#prefix__z)"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M202.29 141.343l-.644-1.5-8.388 3.38a1.014 1.014 0 00-.644.938v8.875h1.658v-8.47l8.017-3.223z"
                        fill="#F2F2F2"
                        fillRule="nonzero"
                    />
                    <G transform="translate(246.265 157.434)">
                        <Mask id="prefix__B" fill="#fff">
                            <Use xlinkHref="#prefix__A" />
                        </Mask>
                        <G
                            mask="url(#prefix__B)"
                            fill="#6C63FF"
                            fillRule="nonzero">
                            <Path d="M-46.462-20.012h1.768v5.773h-1.768zm-2.8 1.217h1.768v5.773h-1.768zm-.956 4.934l-1.254.38-.517-6.15h1.77z" />
                            <Path d="M-54.793-11.353v-1.822h5.604v1.822zm.003 2.508v-1.822h5.604v1.822zm0 2.505v-1.822h5.604v1.821z" />
                        </G>
                    </G>
                    <Path
                        fill="url(#prefix__C)"
                        fillRule="nonzero"
                        d="M204.048 151.277H183.82v3.094h1.38l2.814 25.05h12.09l2.498-25.195h1.447z"
                    />
                    <Path
                        fill="#6C63FF"
                        fillRule="nonzero"
                        d="M199.93 179.422h-10.82l-2.652-26.386h15.831z"
                    />
                    <Path
                        fill="#6C63FF"
                        fillRule="nonzero"
                        d="M184.699 152.157h18.47v1.759h-18.47z"
                    />
                    <Circle
                        fill="url(#prefix__D)"
                        fillRule="nonzero"
                        cx={194.373}
                        cy={164.47}
                        r={4.398}
                    />
                    <Circle
                        fill="#FFF"
                        fillRule="nonzero"
                        cx={193.934}
                        cy={164.91}
                        r={3.958}
                    />
                    <Path
                        d="M49.227 35.516a4.434 4.434 0 00-4.058-.107l.173-.334a4.497 4.497 0 00.357-3.411 4.476 4.476 0 00-2.15-2.665 4.451 4.451 0 00-6.03 1.824l-1.52 2.812 3.14-5.812c.51-.945.626-2.055.321-3.085a4.049 4.049 0 00-1.945-2.41l-.748-.408a4.02 4.02 0 00-3.073-.323 4.038 4.038 0 00-2.4 1.953L38.66 9.925a6.494 6.494 0 00.515-4.927 6.465 6.465 0 00-3.106-3.849l-.499-.27a4.444 4.444 0 00-3.401-.367 4.465 4.465 0 00-2.66 2.16L18.056 23.861l-17.836 33 17.363 9.464a17.563 17.563 0 0013.432 1.426 17.645 17.645 0 0010.495-8.538l6.383-11.812 3.14-5.812a4.497 4.497 0 00.35-3.412 4.476 4.476 0 00-2.156-2.661z"
                        opacity={0.7}
                        transform="translate(191.735)"
                        fill="url(#prefix__E)"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M212.722 66.353l-19.499-10.575 17.165-31.604 31.65 17.165-10.576 19.473a13.82 13.82 0 01-18.74 5.54v.001z"
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M239.117 46.71l-7.55-4.094 3.407-6.273a3.496 3.496 0 014.739-1.403l1.407.763a3.49 3.49 0 011.404 4.735l-3.407 6.273z"
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M233.642 40.49l-7.55-4.094 3.406-6.27a3.496 3.496 0 014.738-1.404l1.407.763a3.49 3.49 0 011.404 4.735l-3.405 6.27z"
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M227.465 33.884l-7.55-4.095 3.566-6.565a3.163 3.163 0 014.287-1.27l1.992 1.08a3.158 3.158 0 011.27 4.285l-3.565 6.565zm-7.555-4.099l-9.708-5.265 11.601-21.362a3.496 3.496 0 014.739-1.404l2.2 1.193a5.043 5.043 0 012.029 6.841l-10.86 19.997z"
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M229.828 56.793l-1.677-.91a1.499 1.499 0 01-.604-2.032h.001l8.326-15.33a1.503 1.503 0 012.034-.603l1.678.91a1.499 1.499 0 01.602 2.033l-8.325 15.33a1.503 1.503 0 01-2.035.602zm-5.269-6.578l-1.678-.91a1.499 1.499 0 01-.602-2.033l8.325-15.329a1.503 1.503 0 012.035-.603l1.677.91c.729.394.999 1.304.604 2.033h-.001l-8.326 15.329a1.503 1.503 0 01-2.034.603zm-5.79-7.331l-1.678-.91a1.499 1.499 0 01-.603-2.033s0 0 0 0l8.326-15.33a1.503 1.503 0 012.035-.602l1.677.91c.729.394.999 1.304.604 2.032h-.001l-8.326 15.33a1.503 1.503 0 01-2.034.603zm-1.996-16.897l-1.678-.91a1.499 1.499 0 01-.603-2.033s0 0 0 0l8.326-15.329a1.503 1.503 0 012.035-.603l1.677.91a1.499 1.499 0 01.603 2.033l-8.326 15.329a1.503 1.503 0 01-2.034.603z"
                        stroke="#FFF"
                        strokeWidth={0.5}
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                    <Path
                        d="M207.815 56.29s6.184-4.055-.152-11.897l12.688-6.987s2.687-6.038-5.727-4.66c-8.415 1.38-7.932 3.069-7.932 3.069"
                        stroke="#FFF"
                        strokeWidth={0.5}
                        fill="#6C63FF"
                        fillRule="nonzero"
                    />
                </G>
            </G>
        </Svg>
    );
};

export default SvgComponent;
