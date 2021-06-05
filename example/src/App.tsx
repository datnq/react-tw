import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@datnq/react-tw'
import Layout from './components/Layout'
import routes from './routes'

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App
