import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {
  //get stete from redux
  const availableMeals = useSelector((state) => state.meals.meals); // state.meals.filteredMeals
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  // const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  //left icon for drawer
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={Platform.OS === 'ios' ? 'ios-menu' : 'menu-sharp'}
            onPress={() => {
              props.navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}> 
        <DefaultText style={{ textAlign: 'center' }}>
          Не са открити любими. Добавете ги от иконата на звезда във всяка
          рецепта.
        </DefaultText>
      </View>
    );
  }

  
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles= StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
