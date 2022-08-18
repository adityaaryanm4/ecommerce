import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice"
import userReducer from "./userSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    mode: darkModeReducer,
    user:userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const darkMode = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(darkMode)
export default darkMode



