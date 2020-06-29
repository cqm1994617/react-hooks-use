import React, {Suspense} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/index'
import IntervalPage from './pages/interval/index'
import ClosurePage from './pages/closure/index'
import LoadingPage from './pages/loading/index'
import NetworkPage from './pages/network/index'

function App() {
  return (
    <BrowserRouter basename="/react-hooks-demo">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/interval" component={IntervalPage} />
        <Route exact path="/closure" component={ClosurePage} />
        <Route exact path="/loading" component={LoadingPage} />
        <Route exact path="/network" component={NetworkPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
