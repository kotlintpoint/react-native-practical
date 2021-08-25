// reducer is function with two parameter => 1) state, 2) action
// reducer returns updated state 

import { MEALS } from "../../data/dummy-data"
import { TOGGLE_FAVORITE } from "../actions/meal"

const initialState={
    meals:MEALS,
    favoriteMeals:[]
}

export default mealsReducer = (state=initialState, action)=>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            // update state and return 
            
            const meal=state.meals.find(theMeal=>theMeal.id===action.mealId)
            
            const favMealList=state.favoriteMeals.concat(meal)
            
            return { ...state, favoriteMeals:favMealList }

            // const index=state.favoriteMeals.findIndex(meal=>meal.id===action.mealId)
            // // if not favorite then add
            // if(index===-1){
            //     // meal not exist in favorite list
            //     const meal=state.meals.find(theMeal=>theMeal.id===action.id)
            //     return { ...state, favoriteMeals:state.favoriteMeals.concat(meal) }
            // }
            // // check if meal already in favorite then remove

            // else{
            //     const updatedMeals=[...state.favoriteMeals]
            //     updatedMeals.splice(index,1)
            //     return { ...state, favoriteMeals:updatedMeals }
            // }
        default:
            return state
    }
}