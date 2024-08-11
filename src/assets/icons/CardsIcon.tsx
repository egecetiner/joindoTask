import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CardsIcon = ({ isActive }: { isActive: boolean }) => {
    return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none"
            stroke="#111A2C" strokeOpacity={isActive ? "100%" : "30%"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        >
            <Path d="M11.875 22L11.25 22.1575L8.27995 22.9533C6.94629 23.3107 5.57545 22.5192 5.21809 21.1856L1.33581 6.69668C0.978451 5.36301 1.76991 3.99217 3.10357 3.63481L10 1.78692M5.50195 17.6158L9.38423 3.12689C9.74159 1.79322 11.1124 1.00177 12.4461 1.35912L22.1054 3.94731C23.439 4.30467 24.2305 5.67551 23.8731 7.00917L19.9908 21.4981C19.6335 22.8317 18.2626 23.6232 16.929 23.2658L7.26971 20.6776C5.93605 20.3203 5.14459 18.9494 5.50195 17.6158Z" />
        </Svg>
    )
}

export default CardsIcon;