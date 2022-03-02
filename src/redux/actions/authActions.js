export const signup = (user) => {
  console.log(user)
    return (dispatch) => {
        fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({user: user}),
        })
          .then((resp) => resp.json())
          .then((data) => dispatch({ 
              type: "USER_SIGNUP", 
              payload: {
                  loggedIn: data.logged_in, 
                  currentUser: data.user
                } 
               }
            )
        );
    }
}
