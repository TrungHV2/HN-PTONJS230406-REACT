import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../slice/counterSlice'
import UserReducer from '../slice/userSlice'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../saga'

const sagaMiddleware = createSagaMiddleware();

export const storeApp = configureStore({
    reducer: {
        counter: CounterReducer,
        user: UserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
