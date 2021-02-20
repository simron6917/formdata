import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FormContent from "./screens/FormScreen"

const App =() => {
  return (
    <>
    <Router>
    <Route path='/' component={FormContent} exact />
    </Router>

{/* <FormDataComponent /> */}
</>
  )
}

export default App
