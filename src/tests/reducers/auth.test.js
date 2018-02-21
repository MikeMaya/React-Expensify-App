import authReducer from '../../reducers/auth';

test('Login reducer', () => {
    const uid = 'id';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({uid});
});

test('Logout reducer', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
});