export const SET_USER = 'SET_USER';

export const setUserAction = (user) => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user
    })
}
