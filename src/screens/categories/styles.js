import { StatusBar, StyleSheet } from "react-native";

import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
        marginTop: StatusBar.currentHeight,
    },
    title: {
        fontSize: 18,
        fontFamily: "OpenSans-Bold",
        color: THEME.colors.title,
        padding: 10,
    },
    containerList: {
        flex: 1,
    },
});