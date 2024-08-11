import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PencilEditIcon from '../../assets/icons/PencilEditIcon';

const About: React.FC = () => {
    const onEdit = () => {
        console.log("Pressed edit");
    };

    return (
        <TouchableOpacity
            onPress={onEdit}
            style={styles.aboutContainer}
            accessibilityLabel="Edit about section"
        >
            <PencilEditIcon />
            <View style={styles.aboutTextContainer}>
                <Text style={styles.aboutText}>
                    “Kendinle ilgili bir şeyler yazabilirsin”
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default About;

const styles = StyleSheet.create({
    aboutContainer: {
        height: 44,
        backgroundColor: "#EDEDEA",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    aboutTextContainer: {
        marginLeft: 13,
        flex: 1,
    },
    aboutText: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 24,
        color: "#111A2C",
    },
});
