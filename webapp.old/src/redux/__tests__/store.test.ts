/* eslint-env jest */
import store from '../store';

test('store is defined', () => {
  expect(store).toBeDefined();
  expect(typeof store.dispatch).toBe('function');
  expect(typeof store.getState).toBe('function');
});
