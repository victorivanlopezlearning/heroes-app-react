import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Tests in authReducer', () => {

  const initialState = {
    logged: false,
    user: null
  };

  test('Should return the initial state', () => {

    const newState = authReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('Should return the login state', () => {

    const user = { id: 1, name: 'Víctor Iván López' };

    const action = {
      type: types.login,
      payload: user
    };

    const newState = authReducer(initialState, action);

    expect(newState.user).toBe(user);
    expect(newState.logged).toBeTruthy();
  });

  test('Should return the logout state', () => {

    const currentState = {
      logged: true,
      user: { id: 1, name: 'Víctor Iván López' }
    }

    const action = {
      type: types.logout,
    };

    const newState = authReducer(currentState, action);

    expect(newState.logged).toBeFalsy();
  });
});