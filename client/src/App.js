
import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import SelectACar from './components/routes/SelectACar'
import ResultsNav from './components/ResultsNav';
import SearchWidget from './components/SearchWidget';



function App() {
  return (
    <div className="App">
      <SearchWidget />
    </div>
  <React.Fragment>
    <Route exact path="/carselect" component={SelectACar} />
  </React.Fragment>
   
  );
}


export default withRouter(App)
