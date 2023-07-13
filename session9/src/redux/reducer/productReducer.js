import {actionType} from '../constant/action-type';

const initState = [
    {id: 'SP01', name: 'tivi', price: 4500},
    {id: 'SP02', name: 'điều hòa', price: 3500},
];

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.PRO_ADD:
            state.push(action.payload);
            return [...state];
        case actionType.PRO_EDIT:
            let stateUpdated = state.map(p => {
                if (p.id === action.payload.id) {
                    p.name = action.payload.name;
                    p.price = action.payload.price;
                }
                return p;
            })
            return [...stateUpdated];
        case actionType.PRO_REMOVE:
            let index = state.findIndex(x => x.id === action.payload);
            state.splice(index, 1);
            return [...state];
        default:
            return state;
    }
}