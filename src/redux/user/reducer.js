import actions from "./actions";

initialState = {
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
        case actions.LOGOUT:
            return {}
        default:
            return state;
    }
}