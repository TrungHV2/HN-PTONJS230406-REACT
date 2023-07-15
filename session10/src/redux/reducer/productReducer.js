
const initState = {
    data: [
        {
            id: 1, 
            name: 'Produc load from Store', 
            img: 'img/product/faded-short-sleeves-tshirt.jpg',
            price: '$16.51', 
            status: true
        },
        {
            id: 2, 
            name: 'Blouse', 
            img: 'img/product/blouse.jpg',
            price: '$27.00', 
            status: true
        },
        {
            id: 3, 
            name: 'Printed Dress', 
            img: 'img/product/printed-dress1.jpg',
            price: '$26.00', 
            status: true
        },
        {
            id: 4, 
            name: 'Printed Dress', 
            img: 'img/product/printed-dress2.jpg',
            price: '$50.00', 
            status: true
        },
        {
            id: 5, 
            name: 'Printed Summer Dress', 
            img: 'img/product/printed-summer-dress4.jpg',
            price: '$28.00', 
            status: true
        },
        {
            id: 6, 
            name: 'Printed Summer Dress', 
            img: 'img/product/printed-summer-dress.jpg',
            price: '$30.00', 
            status: true
        },
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