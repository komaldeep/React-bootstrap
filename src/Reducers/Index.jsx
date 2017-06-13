export default function Reducers(state={
    fetching_custumer: false,
}, action){
    switch (action.type){

        case "ALL_USERS":
        {
            return {...state, fetching_custumer: action.payload}
        }

        default: return state;
    }
    return state;
}