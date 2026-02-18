import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const homeStyle = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background
    },
    
    container: {
        flex: 1,
    },

    header: {
        paddingTop: spacing.xl,
        paddingBottom: spacing.md,
        paddingHorizontal: spacing.md
    },

    title: {
        ...typography.title,
        color: colors.text,
        textAlign: 'center'
    },

    subtitle: {
        ...typography.subtitle,
        color: colors.textSecondary,
        textAlign: 'center',
        marginTop: spacing.xs
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.xs
    },

    emptyText: {
        ...typography.body,
        color: colors.textLight,
        textAlign: 'center'
    },

    gpsButton: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.sm + 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacing.md,
        marginHorizontal: spacing.md,
        minHeight: 48
    },

    gpsButtonText: {
        color: colors.background,
        fontSize: 16,
        fontWeight: '600'
    }
})