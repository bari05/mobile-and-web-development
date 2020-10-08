import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const CoursesFirstSem = () => {
  const uni = [
    { name: "1. CSE-4101" },
    { name: "2. CSE-4102" },
    { name: "3. CSE-4103" },
    { name: "4. CSE-4104" },
    { name: "5. CSE-4105" },
  ];


  return (
    <View style={styles.viewStyle}>
      <Text style = {styles.title}>First Semester</Text>
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
    color: "dodgerblue",
    marginVertical: 25,
  },
  viewStyle: {
    borderColor: "red",
    borderWidth: 5,
    flex: 1,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "blue",
    marginVertical: 30,
    textAlign: "center",
  },
  ListStyle: {

  },
});

export default CoursesFirstSem;
