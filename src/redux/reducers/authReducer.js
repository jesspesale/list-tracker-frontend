export default (state = {loggedIn: false, currentUser: {}}, action) => {
    switch (action.type) {
      case "AUTH_SUCCESSFUL":
        // console.log(state, action)
        return {
          ...state,
          loggedIn: action.payload.loggedIn,
          currentUser: action.payload.currentUser,
        };

        case "LOGOUT":
          return {
            ...state,
            loggedIn: false,
            currentUser: {},
          }

      default:
        return state;
    }
}