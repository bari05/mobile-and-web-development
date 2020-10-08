import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const SemesterListScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
        <View style = {styles.buttonStyle}>
            <Button
            title="1st Semester"
            onPress={function () {
            props.navigation.navigate("Courses-Sem-1");
            // console.log("1st Button Pressed");
            }}
            />
        </View>
        <View style = {styles.buttonStyle}>
            <Button
            title="2nd Semester"
            onPress={function () {
            props.navigation.navigate("Courses-Sem-2");
            // console.log("2nd Button Pressed");
            }}
            />
        </View>
        <View style = {styles.buttonStyle}>
            <Button
            title="3rd Semester"
            onPress={function () {
            props.navigation.navigate("Courses-Sem-3");
            console.log("3rd Button Pressed");
            }}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    color: "blue",
    paddingTop: 5,
  },
  viewStyle: {
    borderColor: "dodgerblue",
    alignItems: "center",
    flex: 1,
    paddingTop: 15,
    justifyContent: "center",
    backgroundColor: 'dodgerblue',

  },
  buttonStyle: {
    borderColor: 'dodgerblue',
    height: 60,
    width: 350,
    justifyContent: "center",
    backgroundColor: 'dodgerblue',
},
});

export default SemesterListScreen;
