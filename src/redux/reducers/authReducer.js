export default (state = {loggedIn: false, currentUser: {}}, action) => {
    switch(action.type){
        case "USER_SIGNUP":
            console.log(state, action)
            // return {
            //     ...state, 
            //     loggedIn: action.payload.loggedIn, 
            //     currentUser: action.payload.currentUser}
            
        default:
                return state
    }
}