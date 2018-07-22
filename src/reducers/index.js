import { combineReducers } from 'redux'
import burgers from './burgerReducer'
import burCard from './burgerCardReducer'
import ingredients from './ingredientReducer'

const rootReducer = combineReducers({
	burgers,
	ingredients,
	burCard
})


export default rootReducer