import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props) => {
  const {mealId} = props.route.params; // NAV v6 destruct
 
const selectedMeal = MEALS.find(meal => meal.id === mealId);

//test right button
React.useLayoutEffect(() => {
  props.navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => alert('This is a button for add this reciepe to favourites 🌟!')} title="🌟" />
    ),
  });
}, [props.navigation]);

  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen</Text>
      <Text>{selectedMeal.title}</Text>
      <Button title="back to top" onPress={() => props.navigation.popToTop()} />

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
