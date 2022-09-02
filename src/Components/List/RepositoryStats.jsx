import React from 'react';
import { View, StyleSheet } from 'react-native';
import { parseThousands } from '../../Utils/utils';
import StyleText from '../Text/StyleText';

const RepositoryStats = (props) => {
  return (
    <View key={props.id} style={styles.container}>
        <View>
            <StyleText align="center" fontWeight="bold">
                Stars
            </StyleText>
            <StyleText align="center">
                {parseThousands(props.stargazersCount)}
            </StyleText>
        </View>
        <View>
            <StyleText align="center" fontWeight="bold">
                Forks
            </StyleText>
            <StyleText align="center">
                {parseThousands(props.forksCount)}
            </StyleText>
        </View>
        <View>
            <StyleText align="center" fontWeight="bold">
                Review
            </StyleText>
            <StyleText align="center">
                {parseThousands(props.reviewCount)}
            </StyleText>
        </View>
        <View>
            <StyleText align="center" fontWeight="bold">
                Rating
            </StyleText>
            <StyleText align="center">
                {props.ratingAverage}
            </StyleText>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default RepositoryStats;