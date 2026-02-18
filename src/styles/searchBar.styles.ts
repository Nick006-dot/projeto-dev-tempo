import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const searchBarStyles = StyleSheet.create({

    container: {
        flex: 1,
    },

    input: {
        flex: 1,
        backgroundColor: colors.cardBackground,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        padding: spacing.md,
        fontSize: 16,
        color: colors.text,
    },

    inputContainer: {
        flex: 1,
        backgroundColor: colors.cardBackground,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        padding: spacing.md,
        fontSize: 16,
        color: colors.text,
    },

    button: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        padding: spacing.md,
        paddingHorizontal: spacing.lg,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: colors.cardBackground,
        fontSize: 16,
        fontWeight: '600'
    }
})