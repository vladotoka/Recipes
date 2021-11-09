import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {

  const { test, categoryId } = props.route.params; //react navigation v6 

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);


  return (
    <View style={styles.screen}>
      {/* {props.navigation.setOptions({ title: 'променен'})} */}
      <Text>The CategoryMealsScreen</Text>
      <Text>{test}/ {categoryId}/ {selectedCategory.title}</Text>
      <Button title="go to meal details" onPress={() => props.navigation.navigate('MealDetail')} />
      <Button title="back" onPress={() => props.navigation.pop()} />
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
