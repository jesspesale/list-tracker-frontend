export const signup = (user, history) => {
    return (dispatch) => {
        fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({ user: user }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            dispatch({
              type: "AUTH_SUCCESSFUL",
              payload: {
                loggedIn: data.logged_in,
                currentUser: data.user,
              },
            });
            history.push("/dashboard");
          });
    }
}

export const login = (user, history) => {
  return (dispatch) => {
    fetch("http://localhost:3001/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({ user: user }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "AUTH_SUCCESSFUL",
          payload: {
            loggedIn: data.logged_in,
            currentUser: data.user,
          },
        });
        history.push("/dashboard");
      });
  };
};


export const checkLoggedIn = (toggleLoading) => {
  return dispatch => {
    fetch("http://localhost:3001/logged_in", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) =>  
      {
        dispatch({
              type: "AUTH_SUCCESSFUL",
              payload: {
                loggedIn: data.logged_in,
                currentUser: data.user,
              },
            })
            toggleLoading()
          }
      )
  }
}

export const logout = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/logout", {
      method: "DELETE",
      credentials: "include",
    })
      .then(res => res.json())
      .then(() => dispatch({type: "LOGOUT"}) );
  };  
}
