import { Action, Reducer } from 'redux';
import { CounterActions } from '../actions/CounterActions';

// -----------------
// STATE - This defines the type of data maintained in this Redux store.

export interface State {
  count: number;
}

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const initialState: State = {
  count: 0,
};

export const reducer: Reducer<State> = (
  state: State | undefined,
  incomingAction: Action
): State => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as CounterActions;
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { count: state.count + 1 };
    case 'DECREMENT_COUNT':
      return { count: state.count - 1 };
    case 'INCREMENT_ASYNC':
      return { count: state.count + action.amount };
    default:
      return state;
  }
};
