export interface ThemeProps {
    primary: {
        default: string,
        light: string
    },
    secondary: {
        default: string,
        light: string
    },

    inverse: string,
    color: string;
    sky_background: string,
    background: string,

    randomPallete: string[]
}

export const Theme: ThemeProps = {
    primary: {
        default: "#ff9f1c",
        light: "#cbf3f0"
    },
    secondary: {
        default: "#2ec4b6",
        light: "#ffbf69"
    },

    sky_background: "#9ddfde",
    background: "#eeeeee",
    color: "#fff",
    inverse: "#101010",

    randomPallete: [
        "#5f0f40",
        "#fb8b24",
        "#9a031e",
        "#0f4c5c",
        "#e36414",
    ]
}

export const DarkTheme: ThemeProps = {
    primary: {
        default: "#ff9f1c",
        light: "#cbf3f0"
    },
    secondary: {
        default: "#2ec4b6",
        light: "#ffbf69"
    },

    color: "#101010",
    inverse: "#fff",
    sky_background: "#020412",
    background: "#101010",

    randomPallete: [
        "#ee88b7",
        "#ebe5ac",
        "#c0e3cd",
        "#87bde8",
        "#e4c1f9",
    ]
}