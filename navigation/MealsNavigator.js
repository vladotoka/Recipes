import React from 'react';
import { View, Text, Platform, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
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

const MealsNavigator = (props) => (
  <NavigationContainer>
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
          title: 'Категории храни',
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
  </NavigationContainer>
);

// export default createAppContainer(MealsNavigator);
export default MealsNavigator;
