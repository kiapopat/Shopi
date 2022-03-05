import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Expiry from "./screens/expiry.js";
import Foodfind from "./screens/foodfind.js";
import Fridge from "./screens/fridge.js";
import Recipes from "./screens/recipes.js";
import Donate from "./screens/donate.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions ={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
             if (route.name === 'Shopping') {
               return (
                 <Ionicons
                   name={'book-outline'}
                   size={size}
                   color={color}
                 />
               );
             } else if (route.name === 'Expiry') {
              return (
                <Ionicons
                  name= {"cog-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Fridge') {
              return (
                <Ionicons
                  name={'bookmark-outline'}
                  size={size}
                  color={color}
                />
              );
            } 

            else if (route.name === 'Recipes') {
              return (
                <Ionicons
                  name={'person-outline'}
                  size={size}
                  color={color}
                />
              );
            } 
            else if (route.name === 'Donate') {
              return (
                <Ionicons
                  name={'chatbox-outline'}
                  size={size}
                  color={color}
               />
              );
            } 
           },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'pink', 
        })}
        >
        { 
          <Tab.Screen
          name="Shopping"
          component={Foodfind}
        /> 
        }
        
        {
        <Tab.Screen 
          name="Scanner" 
          component={Expiry}
        />
        }
         
        {  <Tab.Screen 
          name="Pantry" 
          component={Fridge} 
          options={{ tabBarBadge: 4 }}
          />
        }
        
        {  <Tab.Screen 
          name="Recipes" 
          component={Recipes} /> 
        }

        {
          <Tab.Screen 
          name="Donate" 
          component={Donate} 
        />
        }
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}