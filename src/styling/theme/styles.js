import { extendTheme } from '@chakra-ui/react'

export const generalTheme = extendTheme({
    colors:{
    //PRIMARY
        //Global text color
        instock_black: "#13182c",
        //Interactive Elements
        instock_indigo:"#2E66E5",
        //Global white color
        white:"#FFFFFF",

    //SECONDARY
        //Table column headers & placeholder text
        slate:"#5c667e",
        //Outlines, dividers, borders, table sorting icon
        cloud:"#BDC5D5",

    //BACKGROUND
        //Top navigation header background, CTA button hover state background
        graphite:"#232940",
        //Page background, table column header background, CTA background
        light_grey:"#f7f8f9",

    //SUPPORTING COLORS
        //"In stock" label
        green:"#158463",
        //"Out of stock" label, error states & delete icon
        red:"#c94515"
    }
})
