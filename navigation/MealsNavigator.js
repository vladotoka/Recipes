import React from 'react';
import { View, Text, Platform, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

// import { StackRouter } from 'react-navigation';

// const MealsNavigator =  createStackNavigator({
//   Categories: CategoriesScreen,
//   CategoryMeals: { screen: CategoryMealsScreen },
//   MealDetail: MealDetailScreen
// });
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const MealsNavigatorMain = (props) => (
  // <NavigationContainer>
  <Stack.Navigator
    initialRouteName="CategoriesScreen"
    screenOptions={{
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }}
  >
    <Stack.Screen
      name="CategoriesScreen"
      component={CategoriesScreen}
      options={{
        title: 'Категории ястия',
      }}
    />
    <Stack.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={({ route }) => ({
        title: route.params.categoryName,
        headerStyle: { backgroundColor: route.params.categoryColor },
      })}
    />
    <Stack.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={({ route }) => ({ title: route.params.newTitle })}
    />
  </Stack.Navigator>
  // </NavigationContainer>
);

//bottom navigation

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

function MealsFavTabNavigator() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
    //test TEMP
    // activeColor="#f0edf6"
    // inactiveColor="#3e2465"
    // barStyle={{ backgroundColor: '#694fad' }}
    //endTest TEMP
  

      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigatorMain}
        options={{
          tabBarLabel: 'Ястия',
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Любими!',
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

function MealsNavigator() {
  return (
    <NavigationContainer>
      <MealsFavTabNavigator></MealsFavTabNavigator>
    </NavigationContainer>
  );
}

// export default createAppContainer(MealsNavigator); // navigation v3 &4
export default MealsNavigator;
