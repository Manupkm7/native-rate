import React from 'react'
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import Constants from "expo-constants";
import StyleText from '../Text/StyleText';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
    }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <StyleText fontWeight="bold" style={styles.text}>
            Repositories
        </StyleText>
    </View>
  )
}

export default AppBar;