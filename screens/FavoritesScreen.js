import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

      //left icon for drawer
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={Platform.OS === 'ios' ? "ios-menu" : "menu-sharp"}
            onPress={() => {
              props.navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
};


export default FavoritesScreen;
