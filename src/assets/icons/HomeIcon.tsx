import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({ isActive }: { isActive: boolean }) => {
    return (
        <Svg width="25" height="26" viewBox="0 0 25 26" fill="none"
            stroke="#111A2C" strokeOpacity={isActive ? "100%" : "30%"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <Path d="M12.5 19.25V15.5M2.11794 19.6652L1.47493 11.9491C1.33462 10.2653 2.05422 8.62452 3.38796 7.58716L9.43031 2.88756C11.2359 1.48324 13.7642 1.48324 15.5697 2.88756L21.6121 7.58716C22.9458 8.62452 23.6654 10.2653 23.5251 11.9491L22.8821 19.6652C22.6661 22.2567 20.4998 24.25 17.8993 24.25H7.10067C4.50023 24.25 2.3339 22.2567 2.11794 19.6652Z" />
        </Svg>

    )
}

export default HomeIcon;