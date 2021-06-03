import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import routes from './routes'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {Object.keys(routes).map((key) => {
            const route = routes[key]
            return (
              <Route
                key={key}
                exact={route.exact}
                component={route.component}
                path={route.href}
              />
            )
          })}
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
