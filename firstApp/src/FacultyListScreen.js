import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FacultyListScreen = () => {
  const uni = [
    { name: "1. Mr. X" },
    { name: "2. Mr. Y" },
    { name: "3. Mr. Z" },
    { name: "4. Mr. XY" },
    { name: "5. Mr. YZ" },
  ];


  return (
    <View style={styles.viewStyle}>
      <FlatList
        style={styles.ListStyle}
        data={uni}
        renderItem={function ({ item }) {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
    marginVertical: 30,
    // textAlign: "center",
  },
  viewStyle: {
    borderColor: "red",
    backgroundColor: "darkseagreen",
    borderWidth: 5,
    flex: 1,
  },
  ListStyle: {},
});

export default FacultyListScreen;
