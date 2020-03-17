/* eslint-env jest */
import * as network from '../actions';

test('can create NET_START_REQUEST', () => {
  const result = network.netStartRequest();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_START_REQUEST);
});

test('can create NET_STOP_REQUEST', () => {
  const result = network.netStopRequest();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_STOP_REQUEST);
});

test('can create NET_SET_ERROR', () => {
  const result = network.netSetError(new Error());
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_SET_ERROR);
  expect(result.payload).toBeInstanceOf(Error);
});

test('can create NET_CLEAR_ERROR', () => {
  const result = network.netClearError();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_CLEAR_ERROR);
});
