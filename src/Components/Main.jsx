import React from "react";
import { View } from "react-native";
import RepositoryList from "./List/RepositoriesList.jsx";
import AppBar from "./Navbar/AppBar.jsx";

const Main = () => {
  return (
      <View style={{ flexGrow: 1 }}>
        <AppBar />
        <RepositoryList />
      </View>
  );
};

export default Main;
