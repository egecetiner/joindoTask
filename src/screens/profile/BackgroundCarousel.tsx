import React, { useCallback } from 'react';
import { Dimensions, FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from 'react-native';

type BackgroundCarouselProps = {
    children: React.ReactNode;
    setImageIndex: (index: number) => void
    images: ImageSourcePropType[];
};

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({ children, setImageIndex, images }) => {
    const { width } = Dimensions.get('window');

    const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setImageIndex(currentIndex);
    }, [setImageIndex, width]);

    const renderImage = React.useCallback(({ item }: { item: ImageSourcePropType }) => (
        <Image source={item} resizeMode="cover" style={styles.image} />
    ), []);

    return (
        <View style={styles.absoluteImageContainer}>
            <FlatList
                pagingEnabled
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderImage}
                scrollEventThrottle={16}
                onScroll={onScroll}
            />
            {children}
        </View>
    );
};

export default BackgroundCarousel;

const styles = StyleSheet.create({
    absoluteImageContainer: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: '100%'
    }
});
