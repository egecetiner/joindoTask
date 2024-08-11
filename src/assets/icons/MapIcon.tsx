import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapIcon = ({ isActive }: { isActive: boolean }) => {
    return (
        <Svg width="27" height="24" viewBox="0 0 27 24" fill="none" stroke="#111A2C" strokeOpacity={isActive ? "100%" : "30%"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M9.75 2V23.25M17.25 22V0.75M1 18.7476V5.07379C1 2.79173 3.02121 1.03874 5.28033 1.36148L9.17556 1.91794C9.55625 1.97232 9.94305 1.96782 10.3224 1.9046L16.6776 0.845397C17.0569 0.782175 17.4437 0.777678 17.8244 0.832064L22.7803 1.54005C24.6278 1.80397 26 3.38617 26 5.25236V18.9262C26 21.2083 23.9788 22.9613 21.7197 22.6385L17.8244 22.0821C17.4437 22.0277 17.0569 22.0322 16.6776 22.0954L10.3224 23.1546C9.94305 23.2178 9.55625 23.2223 9.17556 23.1679L4.21967 22.46C2.37223 22.196 1 20.6138 1 18.7476Z" />
        </Svg>

    )
}

export default MapIcon;