import { withTheme } from "styled-components"

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        grays: { // from light to dark
            0: 'hsl(800, 13%, 100%)',
            1: 'hsl(800, 13%, 95%)',
            2: 'hsl(800, 13%, 85%)',
            3: 'hsl(800, 13%, 75%)',
            4: 'hsl(800, 13%, 65%)',
            5: 'hsl(800, 13%, 55%)',
            6: 'hsl(800, 13%, 45%)',
            7: 'hsl(800, 13%, 35%)',
            8: 'hsl(800, 13%, 25%)',
            9: 'hsl(800, 13%, 15%)',
            10: 'hsl(800, 13%, 5%)',
        }
    }
}

const variants = {
    iconButton: {
        primary: {
            color: theme.colors.grays[8]
        },
        contrast: {
            color: theme.colors.grays[0]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.grays[8]
        }
    }
}

export const Maroon = { ...theme, variants}