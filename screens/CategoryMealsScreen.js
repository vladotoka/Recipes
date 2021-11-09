import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
  const { test, categoryId } = props.route.params; //react navigation v6

  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId); //{selectedCategory.title}
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  console.log(displayedMeals);

  const renderMealItem = ( itemData ) => {
    return (
      <MealItem title={itemData.item.title} onSelectMeal={() => {}}/>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
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

export default CategoryMealsScreen;
