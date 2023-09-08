import { types } from '../../../src/auth/types/types';

describe('Tests in types', () => {
  test('Should return these types', () => {

    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    });
  });
});