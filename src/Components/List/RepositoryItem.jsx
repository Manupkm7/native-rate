import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../../theme";
import StyleText from "../Text/StyleText";
import RepositoryStats from "./RepositoryStats";

const RepositoryItemHeader = (props) => {
  return (
    <View style={styles.header}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyleText fontWeight="bold">
          {props.fullName}
        </StyleText>
        <StyleText color="secondary">
          {props.description}
        </StyleText>
        <StyleText style={styles.language}>{props.language}</StyleText>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

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
    marginVertical: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  header: {
    flexDirection: "row",
    paddingBottom: 4,
  },
  subHeader: {},
});

export default RepositoryItem;
