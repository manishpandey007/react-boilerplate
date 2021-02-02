import {all, takeLatest, put, call} from 'redux-saga/effects'
import actions from './actions'
import {login,verifyOtp,latestVersion} from '../../services/user'
import { push } from 'connected-react-router';

export function* LOGIN({ payload }){
    const {email,password} = payload

    yield put({
        type: actions.SET_STATE,
        payload: {
            loading:true
        }
    });

    const response = yield call(latestVersion);

    if(response.success){
        yield put({
            type:actions.LOGIN,
            payload:response.data
        })
    }

    yield put({
        type: actions.SET_STATE,
        payload: {
            loading:false
        }
    });
}

export function* LOGOUT(){
    yield put({
        type:actions.SET_STATE,
        payload:{
            token:null
        }
    })
}

export default function* userSaga(){
    yield all([
        takeLatest(actions.LOGIN, LOGIN)
    ])
}