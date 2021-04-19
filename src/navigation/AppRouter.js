import React from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from './routes'
import history from './history'

import Container from '../pages/Container'

const AppRouter = () => {

    return (
        <Router history={history}>
            <Switch>
                <Route path={routes.APP} component={Container} />
            </Switch>
        </Router>
    )
}

export default AppRouter