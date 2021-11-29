import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meal';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const { mealId } = props.route.params; // NAV v6 destruct

  const [kotka, setKotka] = useState('');

  const dispatch = useDispatch();

  //get state from redux- all meals
  const availableMeals = useSelector((state) => state.meals.meals);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  //TEMP test star
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  //right button without REACT-NAVIGATION-BUTTONS
  // React.useLayoutEffect(() => {
  //   props.navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => alert('This is a button for add this reciepe to favourites 🌟!')} title="🌟" />
  //     ),
  //   });
  // }, [props.navigation]);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            // iconName="ios-star"
            iconName={currentMealIsFavorite ? 'ios-star' : 'ios-star-outline'}
            onPress={() =>
              // alert('This is a button for add this reciepe to favourites 🌟!')
              {
                dispatch(toggleFavorite(selectedMeal.id));
              }
            }
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation, currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>kotka: {kotka}</Text>
        <DefaultText>{selectedMeal.duration} min</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Продукти:</Text>
      {selectedMeal.ingridients.map((ingridient) => (
        <ListItem key={ingridient}>{ingridient}</ListItem>
      ))}
      <Text style={styles.title}>Начин на приготвяне:</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
