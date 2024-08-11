import React from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoIcon = ({ isActive }: { isActive: boolean }) => {
    return (
        <Svg width="25" height="22" viewBox="0 0 25 22" fill="none" stroke="#111A2C" strokeOpacity={isActive ? "100%" : "30%"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M1.25 4.75C1.25 2.67893 2.92893 1 5 1H20C22.0711 1 23.75 2.67893 23.75 4.75V17.25C23.75 19.3211 22.0711 21 20 21H5C2.92893 21 1.25 19.3211 1.25 17.25V4.75Z" />
            <Path d="M8.75 8.99879V13.0012C8.75 14.9074 10.7978 16.1123 12.4641 15.1866L16.0663 13.1854C17.7808 12.2329 17.7808 9.76712 16.0663 8.81461L12.4641 6.81339C10.7978 5.88766 8.75 7.09258 8.75 8.99879Z" />
        </Svg>

    )
}

export default VideoIcon;