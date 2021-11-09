import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = (props) => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={styles.mealRow}>
            <Text>{props.title}</Text>
          </View>
          <View style={styles.mealRow}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
  },
  MealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
  },
});

export default MealItem;
