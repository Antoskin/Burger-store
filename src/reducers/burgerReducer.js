import { burgers as bur } from './list'

export default ( state = bur, action ) => {
    const { type, payload } = action
    switch(type) {
        case 'ADD':
            return [ payload.da, ...state ];
        case 'DEL':
            var card = state.splice(payload, 1)
            return state
        default: 
            return state
    } 
}