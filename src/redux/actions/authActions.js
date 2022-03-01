export const signUp = (user) => {
    return (dispatch) => {
        fetch('http://3001/users', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(user => dispatch())
    }
}