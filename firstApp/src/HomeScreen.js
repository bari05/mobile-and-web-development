import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";

const HomeScreen = (props)=>{
   return(
    <View style={styles.viewStyle}>
        <Image
         source = {require('./logo.png')}
        />
        <View style = {styles.textArea}>
            <Text style = {styles.textStyle}>Department of CSE</Text>
            <Text style = {styles.textStyle}>Programme : SWE</Text>
        </View>

        <TouchableOpacity
            style={styles.button}
            onPress={function () {
                props.navigation.navigate("Profile");
                // console.log("Button Pressed");
               }}
            >
            <Text style={styles.prfileButtonText}>MY PROFILE</Text>
        </TouchableOpacity>

{/* 
        <View style = {styles.buttonStyle}>
            <Button
            title="My Profile"
            onPress={function () {
             props.navigation.navigate("Profile");
            }}
            />
        </View> */}
        
        <View style = {styles.buttonStyle}>
            <Button
            title="Semester Wise Course List"
            onPress={function () {
            props.navigation.navigate("Semester");
            }}
            />
        </View>
        
        <View style = {styles.buttonStyle}>
            <Button
            title="List of Faculty Members"
            onPress={function () {
            props.navigation.navigate("Faculty");
            // console.log("Button Pressed");
            }}
            />
        </View>
    </View>   
   );
};

 const styles = StyleSheet.create(
     {
        textStyle: {
            fontSize: 30,
            color: 'blue',
            textAlign: "center",
            fontWeight: "bold",
        },
        textArea: {
            margin: 35,
            // fontWeight: "bold",
        },
        buttonStyle: {
            borderColor: 'cadetblue',
            borderWidth: 2,
            marginTop: 5,
            marginBottom: 0,
        },
        button: {
            alignItems: "center",
            backgroundColor: "dodgerblue",
            padding: 10,
        }, 
        prfileButtonText:{
            color: 'aliceblue',
            fontSize: 20,
        },
        viewStyle: {
            borderColor: "dodgerblue",
            backgroundColor: "darkseagreen",
            borderWidth: 3,
            alignItems: "center",
            paddingTop: 10,
            flex: 1,
            // marginVertical: 30,
        },
     }
 );

 export default HomeScreen;