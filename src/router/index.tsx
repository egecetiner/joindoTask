import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from "react-native";
import React from "react";

import Profile from "../screens/profile";
import Home from "../screens/home";

import HomeIconSrc from "../assets/icons/HomeIcon";
import CardsIconSrc from "../assets/icons/CardsIcon";
import MapIconSrc from "../assets/icons/MapIcon";
import VideoIconSrc from "../assets/icons/VideoIcon";
import ProfileSmall from '../assets/images/profile_small.png';

const Tab = createBottomTabNavigator();

type IconComponentProps = {
    isActive: boolean;
};

// Memoize the icon components
const HomeIcon = React.memo((props: IconComponentProps) => <HomeIconSrc {...props} />);
const CardsIcon = React.memo((props: IconComponentProps) => <CardsIconSrc {...props} />);
const MapIcon = React.memo((props: IconComponentProps) => <MapIconSrc {...props} />);
const VideoIcon = React.memo((props: IconComponentProps) => <VideoIconSrc {...props} />);

const getTabBarIcon = (IconComponent: React.FC<IconComponentProps>) => ({ focused }: { focused: boolean }) => (
    <IconComponent isActive={focused} />
);

const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Profile"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen
                    name="Home1"
                    component={Home}
                    options={{ tabBarIcon: getTabBarIcon(HomeIcon) }}
                />
                <Tab.Screen
                    name="Home2"
                    component={Home}
                    options={{ tabBarIcon: getTabBarIcon(CardsIcon) }}
                />
                <Tab.Screen
                    name="Home3"
                    component={Home}
                    options={{ tabBarIcon: getTabBarIcon(MapIcon) }}
                />
                <Tab.Screen
                    name="Home4"
                    component={Home}
                    options={{ tabBarIcon: getTabBarIcon(VideoIcon) }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: () => (
                            <Image source={ProfileSmall} style={styles.profileIcon} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Router;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopColor: "#111A2C0A",
        borderTopWidth: 2,
    },
    profileIcon: {
        width: 30,
        height: 30,
    },
});
