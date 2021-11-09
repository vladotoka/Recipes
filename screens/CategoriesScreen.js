import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals', {
            test: '#424242',
            categoryId: itemData.item.id,
            categoryName: itemData.item.id,
            categoryColor: itemData.item.color,
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meals Categories',
  headerStyle: { backgroundColor: Colors.primaryColor },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
