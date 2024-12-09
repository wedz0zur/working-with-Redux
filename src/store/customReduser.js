const defaultState = { // Данные для хранилище
    customers: []
}

const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"

export const customReducer = (state = defaultState, action) => { // Логика для работы с store(хранилище)
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return { ...state, customers: [...state.customers, ...action.payload] }
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case REMOVE_CUSTOMER:
            return { ...state, customers: state.customers.filter(customers => customers.id !== action.payload) }
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const addManyCustomerAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })
export const removoCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })

