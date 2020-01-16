import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../reducers';
import { increaseAsync, increase } from '../reducers/CounterStore';

export default () => {
  const count = useTypedSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">
        Current count: <strong>{count}</strong>
      </p>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => {
          dispatch(increase());
        }}
      >
        Increment
      </button>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        style={{ marginLeft: '10px' }}
        onClick={() => {
          dispatch(increaseAsync(1000));
        }}
      >
        IncrementAsync
      </button>
    </React.Fragment>
  );
};
