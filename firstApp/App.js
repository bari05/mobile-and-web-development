import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/HomeScreen";
import CoursesFirstSem from "./src/CoursesFirstSem";
import CoursesSecondSem from "./src/CoursesSecondSem";
import CoursesThirdSem from "./src/CoursesThirdSem";
import FacultyListScreen from "./src/FacultyListScreen";
import ProfileScreen from "./src/ProfileScreen";
import SemesterListScreen from "./src/SemesterListScreen";

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Semester" component={SemesterListScreen} />
        <stack.Screen name="Faculty" component={FacultyListScreen} />
        <stack.Screen name="Profile" component={ProfileScreen} />
        <stack.Screen name="Courses-Sem-1" component={CoursesFirstSem} />
        <stack.Screen name="Courses-Sem-2" component={CoursesSecondSem} />
        <stack.Screen name="Courses-Sem-3" component={CoursesThirdSem} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
