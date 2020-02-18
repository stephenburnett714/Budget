import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import SelectACar from './components/routes/SelectACar'


const App = props => (
  <React.Fragment>
    <Route exact path="/carselect" component={SelectACar} />
  </React.Fragment>
)

export default withRouter(App)
