import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { sportImages } from './mockData';
import DoPremium from '../../assets/images/dopremium.png';

const Identification: React.FC = () => {
    return (
        <View>
            <View style={styles.idContainer}>
                <Text style={styles.nameText}>Kıvanç,</Text>
                <Text style={styles.ageText}> 24</Text>
                <Image source={DoPremium} resizeMode="contain" style={styles.premiumImage} />
            </View>
            <Text style={styles.descriptionText}>kvncem</Text>
            <Text style={styles.descriptionText}>Ankara</Text>
            <View style={styles.sportImagesContainer}>
                {sportImages.map((image, index) => (
                    <Image key={index} source={image} resizeMode="contain" style={styles.sportImage} />
                ))}
            </View>
        </View>
    );
}

export default Identification;

const styles = StyleSheet.create({
    idContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    nameText: {
        fontFamily: "Poppins",
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
        color: "#FFFFFF",
    },
    ageText: {
        fontFamily: "Poppins",
        fontSize: 26,
        fontWeight: "500",
        textAlign: "center",
        color: "#FFFFFF",
    },
    premiumImage: {
        width: 28,
        height: 28,
        marginLeft: 8,
    },
    descriptionText: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 21,
        color: "#FFFFFF",
    },
    sportImagesContainer: {
        flexDirection: 'row',
    },
    sportImage: {
        width: 44,
        height: 44,
        marginRight: 8,
    },
});

