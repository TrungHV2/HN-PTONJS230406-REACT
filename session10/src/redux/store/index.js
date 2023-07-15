import {createStore} from 'redux'
import {reducers} from '../reducer'

export const storeApp = createStore(reducers)