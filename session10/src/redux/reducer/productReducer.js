
const initState = {
    data: [
        {id: 1, name: 'IPhone 14 Pro MAX', price: 28000000, status: true},
        {id: 2, name: 'Samsung S22 Plus', price: 28590000, status: true},
        {id: 3, name: 'IPhone 13 Pro MAX', price: 22490000, status: true}
    ]
}

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRO_ADD":
            return state;
        case "PRO_EDIT":
            return state;
        case "PRO_DEL":
            return state;
        default:
            return state;
    }
}