import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Details from './Pages/Details';
import Brand from './Pages/Brand';

export default function Routes() {
  return (
    <Switch>
      <Route path="/estoque" exact component={Main} />
      <Route path="/estoque/:brand" component={Brand} />
      <Route path="/detalhes/:id/:descveic" component={Details} />
    </Switch>
  );
}
