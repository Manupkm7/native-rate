import React from "react";
import { View, Text } from "react-native";
import RepositoryList from "./List/RepositoriesList.jsx";
import AppBar from "./Navbar/AppBar.jsx";
import { Route, Routes } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
      </Routes>
    </View>
  );
};

export default Main;
