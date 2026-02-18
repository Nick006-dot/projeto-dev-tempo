import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const detailsStyles = StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: colors.background
        },

        container: {
            flex: 1,
        },

        backButton: {
            padding: spacing.md,
            marginTop: spacing.md,
        },

        backButtonText: {
            ...typography.body,
            color: colors.primary
        },

        header: {
            paddingHorizontal: spacing.md,
            paddingBottom: spacing.md
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

        loadingContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: spacing.xl * 2
        },

        loadingText: {
            ...typography.body,
            color: colors.textSecondary,
            marginTop: spacing.md
        },

        errorContainer: {
            padding: spacing.md,
            alignItems: 'center',
        },

        errorText: {
            color: colors.error,
            fontSize: 16,
            marginBottom: spacing.md,
            textAlign: 'center'
        },

        retryButton: {
            paddingHorizontal: spacing.lg,
            padding: spacing.md,
            backgroundColor: colors.primary,
            borderRadius: 12,
            marginTop: spacing.md,
        },

        retryButtonText: {
            color: colors.cardBackground,
            fontSize: 16,
            fontWeight: '600'
        },
})