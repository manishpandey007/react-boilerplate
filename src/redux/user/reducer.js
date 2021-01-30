import actions from "./actions";

const initialState = {
    id:'',
    name:"",
    email:"",
    token:"",
    loading:false
}

export default function  userReducer(state = initialState,action){
    switch (action.type) {
        case actions.SET_STATE:
            return {...state, ...action.payload}
        case actions.LOGIN:
            return {...state, token:action.payload.token,email:action.payload.email,name:action.payload.name}
        case actions.LOGOUT:
            return {}
        default:
            return state;
    }
}