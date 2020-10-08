import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
         source = {require('./myPic.png')}
        />
        <View style = {styles.textArea}>
            <Text style = {styles.textStyle}>Name : Md. Abdul Bari</Text>
            <Text style = {styles.textStyle}>Student ID : 170042005</Text>
            <Text style = {styles.textStyle}>Room No : 504, South</Text>
            <Text style = {styles.textStyle}>Email : abdulbari@iut-dhaka.edu</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "blue",
    paddingTop: 5,
  },
  textArea: {
    marginTop: 35,
},
  viewStyle: {
    borderColor: "dodgerblue",
    backgroundColor: "darkseagreen",
    borderWidth: 3,
    alignItems: "center",
    flex: 1,
    paddingTop: 5,
  },
});

export default ProfileScreen;
