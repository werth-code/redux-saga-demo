import { takeLatest } from 'redux-saga/effects'
import { handleGetUser } from './handlers/user'
import { getUser } from '../redux/ducks/user' 
// this is a generator function
// we import this into our configureStore
export function* watchSaga() {
    yield takeLatest(getUser, handleGetUser)
}