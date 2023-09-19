import { userService } from "../services/user.service.js"
import { contactReducer } from "./reducers/contact.reducer.js"
import { userReducer } from "./reducers/user.reducer.js"

const { createStore, compose, combineReducers } = Redux


const rootReducer = combineReducers({
    contactModule: contactReducer,
    // userModule: userReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

// console.log('store.getState():', store.getState())
window.gStore = store


// store.subscribe(() => {
//     console.log('Current state is:', store.getState())
// })

