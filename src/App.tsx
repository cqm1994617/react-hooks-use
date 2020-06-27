import React, {Suspense} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './pages/index'

function App() {
  return (
    <BrowserRouter basename="/react-hooks-demo">
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
