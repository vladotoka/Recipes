import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ false: 'lightgrey', true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'ios' ? '' : Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

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

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Налични филтри / ограничения</Text>
      {/* <View style={styles.filterContainer}>
        <Text>bezglu</Text>
        <Switch
          trackColor={{ false: 'lightgrey', true: Colors.primaryColor }}
          thumbColor={Platform.OS === 'ios' ? '' : Colors.primaryColor}
          value={isGlutenFree}
          onValueChange={(newValue) => setIsGlutenFree(newValue)}
        />
      </View> */}

      <FilterSwitch
        label="Без глутен"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
        <FilterSwitch
          label="Без лактоза"
          state={isLactoseFree}
          onChange={(newValue) => setIsLactoseFree(newValue)}
        />
      <FilterSwitch
        label="Веган"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Вегетариански"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10
  },
});

export default FiltersScreen;
