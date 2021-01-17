import actions from "./actions";

const initialState = {
    id:'',
    name:"",
    email:"",
    token:"",
    loading:""
}

export default function  userReducer(state = initialState,action){
    switch (action.type) {
        case actions.SET_STATE:
            return {...state, ...action.payload}
        case actions.SET_TOKEN:
            return {...state, token:action.payload.token}
        case actions.LOGOUT:
            return {}
        default:
            return state;
    }
}