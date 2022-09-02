import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.texSecondary,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    textAlignCenter: {
        textAlign: "center",
    },
});

const StyleText = ({ fontSize, fontWeight, children, color, style, align, ...restOfProps }) => {
const textStyles = [
    styles.text,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize == "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style,
]
  return (
    <Text style={textStyles} {...restOfProps}>
        {children}
    </Text>
  )
};

export default StyleText;