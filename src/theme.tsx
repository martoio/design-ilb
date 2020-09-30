import { DefaultTheme } from 'styled-components';

export * from './__fonts/__fonts';

export interface DesignTheme extends DefaultTheme {
    colors: {
        default: string,
        primary: string,
        secondary: string,
        danger: string,
    }
}

// Colors
export const ThemeColors = {
    default: '#3F3F3F',
    primary: '#2962FF',
    secondary: '#455A64',
    danger: '#D32F2F',
};

export const Theme: DesignTheme = {
    colors: ThemeColors,
};
