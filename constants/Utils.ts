import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

// Interface for scaling functions
interface ScaleFunction {
    (size: number): number;
}

// Scale based on device width
const spW: ScaleFunction = (size) => {
    const baseWidth = 375; // Base width (iPhone 11 Pro)
    return (size * width) / baseWidth;
};

// Scale based on device height
const spH: ScaleFunction = (size) => {
    const baseHeight = 812; // Base height (iPhone 11 Pro)
    return (size * height) / baseHeight;
};

// Normalize sizes to keep them readable
const normalize: ScaleFunction = (size) => {
    const scale = width / 375;
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Scale font size
const spFont: ScaleFunction = (size) => {
    return normalize(size);
};

// Scale border radius
const spRadius: ScaleFunction = (size) => {
    return spW(size);
};

// Scale vertical padding/margin
const spV: ScaleFunction = (size) => {
    return spH(size);
};

// Scale horizontal padding/margin
const spHorz: ScaleFunction = (size) => {
    return spW(size);
};

// Scale based on width for width-related properties
const spWidth: ScaleFunction = (size) => {
    return spW(size);
};

// Scale based on height for height-related properties
const spHeight: ScaleFunction = (size) => {
    return spH(size);
};

// Get status bar height
const statusBarHeight: number =
    Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0;

// Check if the device is a tablet
const isTablet: boolean = width >= 768;

// Interface for safe area insets
interface SafeAreaInsets {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

// Get safe area insets (useful for notches and safe areas)
const safeAreaInsets: SafeAreaInsets = {
    top: statusBarHeight,
    bottom: isTablet ? 20 : 0,
    left: 0,
    right: 0,
};

export {
    spW,
    spH,
    normalize,
    spFont,
    spRadius,
    spV,
    spHorz,
    spWidth,
    spHeight,
    statusBarHeight,
    isTablet,
    safeAreaInsets,
};
