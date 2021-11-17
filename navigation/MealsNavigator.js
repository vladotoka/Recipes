import React from 'react';
import { View, Text, Platform, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';


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
);

//TEMP new stack fav nav
const StackFav = createNativeStackNavigator();

const FavNavigator = (props) => (
  <StackFav.Navigator
    initialRouteName="FAV"
    screenOptions={{
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }}
  >
    <StackFav.Screen
      name="FAV"
      component={FavoritesScreen}
      options={{
        title: 'Моите Любими',
      }}
    />
    <StackFav.Screen
      name="CategoryMeals"
      component={MealDetailScreen}
      options={({ route }) => ({
        title: 'route.params.categoryName',
        headerStyle: { backgroundColor: route.params.categoryColor },
      })}
    />
    <StackFav.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={({ route }) => ({ title: route.params.newTitle })}
    />
  </StackFav.Navigator>
);

//bottom navigation

const Tab =
  Platform.OS !== 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function MealsFavTabNavigator() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      //test TEMP параметри за materialBottomTabNav
      shifting={true}
      activeColor="white"
      // inactiveColor="#3e2465"
      // barStyle={ true ? { backgroundColor: Colors.primaryColor } : { backgroundColor: Colors.accentColor }}
      //endTest TEMP

      // параметри за BottomTabNav

      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigatorMain}
        options={{
          // tabBarColor: Colors.primaryColor, // параметри за materialBottomTabNav
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
        component={FavNavigator}
        options={{
          // tabBarColor: Colors.accentColor, // параметри за materialBottomTabNav
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

//Стак навигатор за filtersscreen
const StackFilter = createNativeStackNavigator();

const FiltersNavigator = (props) => (
  <StackFilter.Navigator
    initialRouteName="Filters"
    screenOptions={{
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }}
  >
    <StackFilter.Screen
      name="Filters"
      component={FiltersScreen}
      options={{
        title: 'Филтри',
      }}
    />
    </StackFilter.Navigator>
);




//DRAWER NAV
const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={MealsFavTabNavigator} />
      <Drawer.Screen name="Article" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
}


function MealsNavigator() {
  return (
    <NavigationContainer>
      {/* <MealsFavTabNavigator></MealsFavTabNavigator> */}
    <MainNavigator />
    </NavigationContainer>
  );
}

// export default createAppContainer(MealsNavigator); // navigation v3 &4
export default MealsNavigator;
