import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const { test, categoryId } = props.route.params; //react navigation v6

  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId); //{selectedCategory.title}
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

export default CategoryMealsScreen;
