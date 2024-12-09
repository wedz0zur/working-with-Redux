const defaultState = { // Данные для хранилище
    cash: 0,
}


export const cashReducer = (state = defaultState, action) => { // Логика для работы с store(хранилище)
    switch (action.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash + action.payload }
        case "GET_CASH":
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}
