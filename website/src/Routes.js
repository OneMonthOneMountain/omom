import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Walks from './containers/Walks'
import NotFound from './containers/NotFound'

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upcoming" exact render={() => <Walks status="upcoming" />} />
        <Route path="/suggested" exact render={() => <Walks status="suggested" />} />
        <Route path="/completed" exact render={() => <Walks status="completed" />} />
        <Route component={NotFound} />
    </Switch>