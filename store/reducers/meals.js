import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        //meal is in favlist => remove it
        const updatedMeals = [...state.favoriteMeals];
        updatedMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedMeals };
      } else {
        //meal is not in favlist => add it
        const newMeal = state.meals.find((meal) => meal.id === action.mealId);

        return { ...state, favoriteMeals: state.favoriteMeals.concat(newMeal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      console.log('in meals reducers');
      console.log(appliedFilters);
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFilteredMeals};
    default:
      return state;
  }
};

export default mealsReducer;
