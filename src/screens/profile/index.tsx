import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import About from './About';
import Statistic from './Statistic';
import SportStatus from './SportStatus';
import BackgroundCarousel from './BackgroundCarousel';
import ImageContent from './ImageContent';
import { images } from './mockData';

const Profile: React.FC = () => {
    const [imageIndex, setImageIndex] = useState<number>(0);

    const handleSetImageIndex = useCallback((index: number) => {
        setImageIndex(index);
    }, []);

    return (
        <View style={styles.mainContainer}>
            <BackgroundCarousel setImageIndex={handleSetImageIndex} images={images}>
                <ImageContent imageIndex={imageIndex} imagesLength={images.length} />
            </BackgroundCarousel>
            <Statistic />
            <About />
            <SportStatus />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});
