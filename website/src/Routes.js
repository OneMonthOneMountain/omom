import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Walks from './containers/Walks'
import NotFound from './containers/NotFound'

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/walks" exact component={Walks} />
        <Route component={NotFound} />
    </Switch>