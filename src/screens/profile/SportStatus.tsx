import React from 'react';
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { data } from './mockData';

type SportItem = {
    title: string;
    image: ImageSourcePropType;
    id: number;
};

const SportItem: React.FC<{ item: SportItem; onPress: () => void }> = ({ item, onPress }) => (
    <View style={styles.sportItem}>
        <Image source={item.image} resizeMode="contain" style={styles.sportItemImage} />
        <Text numberOfLines={1} style={styles.sportItemTitle}>{item.title}</Text>
        <TouchableOpacity onPress={onPress} style={styles.callContainer}>
            <Text style={styles.callText}>Çağır</Text>
        </TouchableOpacity>
    </View>
);

const SportStatus: React.FC = () => {
    const handlePress = (id: number) => {
        console.log(`Clicked ${id}`);
    };

    const renderSportItem = ({ item }: { item: SportItem }) => (
        <SportItem item={item} onPress={() => handlePress(item.id)} />
    );

    return (
        <View style={styles.sportStatusContainer}>
            <Text style={styles.sportStatusText}>Aktif Spor Durumların</Text>
            <FlatList
                contentContainerStyle={styles.sportListContainer}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                renderItem={renderSportItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default SportStatus;

const styles = StyleSheet.create({
    sportListContainer: { paddingRight: 12 },
    sportStatusContainer: { height: 183, backgroundColor: "#FFFFFF", paddingLeft: 24, paddingVertical: 12 },
    sportStatusText: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 21,
        textAlign: "left",
        color: "#111A2C"
    },
    sportItem: {
        marginTop: 11,
        marginRight: 12,
        width: 128,
        height: 128,
        padding: 16,
        gap: 4,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#111A2C0D",
        display: "flex",
        alignItems: "center"
    },
    callContainer: {
        width: 94,
        height: 32,
        paddingVertical: 4,
        paddingHorizontal: 20,
        borderRadius: 21,
        backgroundColor: "#EDEDEA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    callText: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "700",
    },
    sportItemTitle: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "500",
    },
    sportItemImage: { width: 34, height: 34 }
});
