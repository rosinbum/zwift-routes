/* eslint-env jest */
import * as actions from '../actions';
import * as network from '../modules/network/actions';

test('can create NET_START_REQUEST', () => {
  const result = actions.netStartRequest();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_START_REQUEST);
});

test('can create NET_STOP_REQUEST', () => {
  const result = actions.netStopRequest();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_STOP_REQUEST);
});

test('can create NET_SET_ERROR', () => {
  const result = actions.netSetError(new Error());
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_SET_ERROR);
  expect(result.payload).toBeInstanceOf(Error);
});

test('can create NET_CLEAR_ERROR', () => {
  const result = actions.netClearError();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_CLEAR_ERROR);
});
