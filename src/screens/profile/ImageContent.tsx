import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import Identification from './Identification';
import Header from './Header';

type ImageContentProps = {
    imageIndex: number;
    imagesLength: number;
};

const ImageContent: React.FC<ImageContentProps> = ({ imageIndex, imagesLength }) => {
    const indicatorArray = Array.from({ length: imagesLength }, (_, index) => index === imageIndex);

    const onPressSettings = () => {
        console.log("Pressed settings");
    };

    return (
        <View style={styles.absoluteImageContent} pointerEvents="box-none">
            <View style={styles.imageContent} pointerEvents="box-none">
                <Header />
                <View style={styles.profileContent}>
                    <Identification />
                    <View style={styles.profileContentRight}>
                        <TouchableOpacity onPress={onPressSettings} accessibilityLabel="Settings">
                            <SettingsIcon />
                        </TouchableOpacity>
                        <View style={styles.indicatorContainer}>
                            {indicatorArray.map((isActive, index) => (
                                <View
                                    key={index}
                                    style={isActive ? styles.activeIndicator : styles.inactiveIndicator}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ImageContent;

const styles = StyleSheet.create({
    absoluteImageContent: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    imageContent: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 24,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },
    profileContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileContentRight: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    indicatorContainer: {
        marginTop: 30,
        flexDirection: 'row',
    },
    activeIndicator: {
        width: 19,
        height: 5,
        borderRadius: 34,
        backgroundColor: '#FFFFFF',
        marginLeft: 4,
    },
    inactiveIndicator: {
        width: 5,
        height: 5,
        borderRadius: 34,
        backgroundColor: '#FFFFFF',
        opacity: 0.4,
        marginLeft: 4,
    },
});

