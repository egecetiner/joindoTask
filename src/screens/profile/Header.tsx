import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MessageIcon from '../../assets/icons/MessageIcon';
import BellIcon from '../../assets/icons/BellIcon';
import Logo from '../../assets/icons/Logo';

const About: React.FC = () => {
    const onPressNotifications = React.useCallback(() => {
        console.log("Pressed notifications");
    }, []);

    const onPressMessages = React.useCallback(() => {
        console.log("Pressed messages");
    }, []);

    return (
        <View style={styles.header}>
            <Logo />
            <View style={styles.notificationContainer}>
                <TouchableOpacity onPress={onPressNotifications} accessibilityLabel="Notifications">
                    <BellIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressMessages} style={styles.messageIconContainer} accessibilityLabel="Messages">
                    <View style={styles.yellowDot} />
                    <MessageIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    yellowDot: {
        backgroundColor: "#FFF63F",
        borderRadius: 10,
        borderColor: "#FFFFFF",
        width: 10,
        height: 10,
        position: 'absolute',
        right: 0,
        borderWidth: 2,
    },
    messageIconContainer: {
        marginLeft: 30,
        position: 'relative',
    },
});
