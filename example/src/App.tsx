import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { TwxProvider } from '@datnq/react-tw'
import Layout from './components/Layout'
import routes from './routes'

const App = () => {
  return (
    <TwxProvider>
      <Router basename={process.env.PUBLIC_URL}>
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
    </TwxProvider>
  )
}

export default App
