import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'


export default (
    <Switch>
        <Header>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add" component={Form} />
        <Route component={NotFound} />
        </Header>
    </Switch>
)

function NotFound() {
    return (
        <h1>404 Page not found</h1>
    )
}