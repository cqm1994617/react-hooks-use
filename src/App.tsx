import React, {Suspense} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/index'

function App() {
  return (
    <BrowserRouter basename="/react-hooks-demo">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
