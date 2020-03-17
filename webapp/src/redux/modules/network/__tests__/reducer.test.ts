/* eslint-env jest */
import { createAction } from '@reduxjs/toolkit';
import { 
  netStartRequest,
  netStopRequest,
  netSetError,
  netClearError
} from '../actions';
import network, { NetworkState } from '../reducer';

const invalidAction = createAction('@@invalid')();
const randomState: NetworkState = { requests: 20, error: new Error('invalid') };

test('initialState is set', () => {
  const result = network(undefined, invalidAction);
  expect(result).toBeDefined();
  expect(result.requests).toStrictEqual(0);
  expect(result.error).not.toBeDefined();
});

test('random actions return same state', () => {
  const result = network(randomState, invalidAction);
  expect(result).toBeDefined();
  expect(result).toStrictEqual(randomState);
});

test('action netStartRequest', () => {
  const startState = network(randomState, invalidAction);
  const action = netStartRequest();
  const endState = network(startState, action);
  expect(endState).toBeDefined();
  expect(endState.requests).toStrictEqual(21);
  expect(endState.error).toBeInstanceOf(Error);
});

test('action netStopRequest', () => {
  const startState = network(randomState, invalidAction);
  const action = netStopRequest();
  const endState = network(startState, action);
  expect(endState).toBeDefined();
  expect(endState.requests).toStrictEqual(19);
  expect(endState.error).toBeInstanceOf(Error);
});

test('action netSetError', () => {
  const startState = network(undefined, invalidAction);
  const action = netSetError(new Error('test error'));
  const endState = network(startState, action);
  expect(endState).toBeDefined();
  expect(endState.requests).toStrictEqual(0);
  expect(endState.error).toBeInstanceOf(Error);
  expect(endState.error?.message).toStrictEqual('test error');
});

test('action netClearError', () => {
  const startState = network(randomState, invalidAction);
  const action = netClearError();
  const endState = network(startState, action);
  expect(endState).toBeDefined();
  expect(endState.requests).toStrictEqual(20);
  expect(endState.error).not.toBeDefined();
});
