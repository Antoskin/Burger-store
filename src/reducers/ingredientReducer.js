import { ingredient } from './list'

export default ( state = ingredient, action ) => {
    const { type, payload } = action
    switch(type) {
        case 'ADD_ING':
            return [payload, ...state]
        case 'DEL_ING':
            var ing = state.splice(payload, 1)
            return state
        default:
            return state
    }
}
