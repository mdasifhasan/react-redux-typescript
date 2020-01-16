import * as React from 'react';
import { Route } from 'react-router';
import Counter from './components/Counter';

export default () => (
  <>
    <Route path="/" component={Counter} />
  </>
);
