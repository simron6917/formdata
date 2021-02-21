import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DataScreen from './screens/DataScreen'
import FormContent from "./screens/FormScreen"

const App =() => {
  return (
    <>
    <Router>
    <Route path='/' component={FormContent} exact />
    <Route path='/data' component={DataScreen} exact />

    </Router>

{/* <FormDataComponent /> */}
</>
  )
}

export default App
