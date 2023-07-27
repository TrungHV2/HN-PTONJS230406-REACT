import {configureStore} from '@reduxjs/toolkit'
import userReducers from '../slice/userSlice'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga';

const sagaMiddleware = createSagaMiddleware();

export const storeApp = configureStore({
    reducer: {
        users: userReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)