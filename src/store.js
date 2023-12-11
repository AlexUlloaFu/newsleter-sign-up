import {configureStore} from '@reduxjs/toolkit'

import emailReducer from './reducers/emailReducer'

const store = configureStore({
    reducer: {
        email: emailReducer
    }
})

export default store