import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../../theme';
import StyleText from '../Text/StyleText';
import RepositoryStats from './RepositoryStats';

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
        <StyleText fontWeight="bold" fontSize="subheading">
        {props.fullName}
        </StyleText>
        <StyleText>
          {props.description}
        </StyleText>
        <StyleText style={styles.language}>
          {props.language}
        </StyleText>
        <RepositoryStats {...props} />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 6,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  }
});

export default RepositoryItem;