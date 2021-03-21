export const fetchUser = (data) => {
    const statusCode = '200';
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_ATTEMPT',
            payload:data,
        });
        if (statusCode === '200') {
            dispatch({
                type: 'LOGIN_SUCCESS',
            });
        }
        else {
            dispatch({
                type: 'LOGIN_FAILED',
            });
        }
    };
};
