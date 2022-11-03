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
    light_background: string,
    dark_background: string,

    randomPallete: string[]
}

export const Theme: ThemeProps = {
    primary: {
        default: "#ff9f1c",
        light: "#ffbf69"
    },
    secondary: {
        default: "#2ec4b6",
        light: "#56dbcf"
    },

    sky_background: "#9ddfde",

    background: "#eeeeee",
    light_background: "#ffffff",
    dark_background: "#cccccc",

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
    light_background: "#333",
    dark_background: "#0a0a0a",

    randomPallete: [
        "#ffb5a7",
        "#fcd5ce",
        "#f8edeb",
        "#f9dcc4",
        "#fec89a",
    ]
}