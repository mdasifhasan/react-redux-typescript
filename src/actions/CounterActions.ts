import { AppThunkAction } from '../actions';

// -----------------
// Action Types - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

// Action Types
export interface IncrementCountAction {
  type: 'INCREMENT_COUNT';
}
export interface DecrementCountAction {
  type: 'DECREMENT_COUNT';
}

export interface IncrementAsyncAction {
  type: 'INCREMENT_ASYNC';
  amount: number;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type CounterActions =
  | IncrementCountAction
  | DecrementCountAction
  | IncrementAsyncAction;

function incrementAsync(time: number): AppThunkAction<CounterActions> {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: 'INCREMENT_ASYNC',
        amount: getState().counter?.count || 1,
      });
    }, time);
  };
}

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actions = {
  increment: () => ({ type: 'INCREMENT_COUNT' } as IncrementCountAction),
  decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction),
  incrementAsync,
};
