import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../reducers';
import * as CounterStore from '../reducers/CounterStore';
import * as CounterActions from '../actions/CounterActions';

type CounterProps = CounterStore.State &
  typeof CounterActions.actions &
  RouteComponentProps<{}>;

class Counter extends React.PureComponent<CounterProps> {
  public render() {
    return (
      <React.Fragment>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">
          Current count: <strong>{this.props.count}</strong>
        </p>

        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => {
            this.props.increment();
          }}
        >
          Increment
        </button>

        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => {
            this.props.incrementAsync(1000);
          }}
        >
          IncrementAsync
        </button>
      </React.Fragment>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.counter,
  CounterActions.actions
)(Counter as any);
