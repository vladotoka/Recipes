import React from 'react';
import { View, Text, Platform, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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

const Tab = createBottomTabNavigator();

function MealsFavTabNavigator() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Ястия"
        component={MealsNavigatorMain}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.color}/>;
          },
        }}
      />
      <Tab.Screen name="Любими" component={FavoritesScreen} />
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
// export default MealsFavTabNavigator;
