import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

});

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={{ padding: 20 }}>
        <Text>FullName: {props.fullName}</Text>
        <Text>Id: {props.id}</Text>
        <Text>Description: {props.description}</Text>
        <Text>Language: {props.language}</Text>
        <Text>Stars: {props.stargazersCount}</Text>
        <Text>{props.forksCount}</Text>
        <Text>{props.reviewCount}</Text>
        <Text>{props.ratingAverage}</Text>
        <Text>{props.ownerAvatarUrl}</Text>
    </View>
    )
}

export default RepositoryItem;