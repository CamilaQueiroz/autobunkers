import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Details from './Pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/estoque" exact component={Main} />
      <Route path="/detalhes/:id/:descveic" component={Details} />
    </Switch>
  );
}
