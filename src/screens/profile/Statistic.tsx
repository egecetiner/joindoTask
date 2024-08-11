import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type StatisticItemProps = {
    number: number;
    text: string;
    onPress: () => void;
};

const StatisticItem: React.FC<StatisticItemProps> = ({ number, text, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.statisticItem}>
        <Text style={styles.statisticNumber}>{number}</Text>
        <Text style={styles.statisticText}>{text}</Text>
    </TouchableOpacity>
);

const Statistic: React.FC = () => {
    const handlePress = () => {
        console.log("Should be managed on parent just like this");
    };

    return (
        <View style={styles.statisticContainer}>
            <StatisticItem number={4} text="Topluluk" onPress={handlePress} />
            <StatisticItem number={7} text="Etkinlik" onPress={handlePress} />
            <StatisticItem number={78} text="do friends" onPress={handlePress} />
        </View>
    );
};

export default Statistic;

const styles = StyleSheet.create({
    statisticNumber: {
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 30,
        textAlign: "center",
        color: "#FFFFFF"
    },
    statisticText: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: "center",
        color: "#FFFFFF"
    },
    statisticContainer: {
        height: 62,
        backgroundColor: "#111A2C",
        paddingTop: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 36.5
    },
    statisticItem: {
        width: 80
    }
});

