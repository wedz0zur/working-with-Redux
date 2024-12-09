import { addManyCustomerAction } from "./customReduser"


export const fetchCustomers = () => {
    return function (dispatch) {
        fetch("https://671f75cfe7a5792f052e55dd.mockapi.io/items")
            .then(response => response.json())
            .then(json => dispatch(addManyCustomerAction(json)))
    }
}

