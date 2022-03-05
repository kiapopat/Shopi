import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Scanner from "./screens/scanner.js";
import Shopping from "./screens/shopping.js";
import Pantry from "./screens/pantry.js";
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
                   name={'basket-outline'}
                   size={size}
                   color={color}
                 />
               );
             } 
             
             else if (route.name === 'Scanner') {
              return (
                <Ionicons
                  name={'scan-outline'}
                  size={size}
                  color={color}
                />
              );
            } 

            else if (route.name === 'Pantry') {
              return (
                <Ionicons
                  name={'nutrition-outline'}
                  size={size}
                  color={color}
                />
              );
            } 

            else if (route.name === 'Recipes') {
              return (
                <Ionicons
                  name={'book-outline'}
                  size={size}
                  color={color}
                />
              );
            } 
            else if (route.name === 'Donate') {
              return (
                <Ionicons
                  name={'leaf-outline'}
                  size={size}
                  color={color}
               />
              );
            } 
           },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'blue', 
        })}
        >
        { 
          <Tab.Screen
          name="Shopping"
          component={Shopping}
        /> 
        }
        
        {
        <Tab.Screen 
          name="Scanner" 
          component={Scanner}
        />
        }
         
        {  <Tab.Screen 
          name="Pantry" 
          component={Pantry} 
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