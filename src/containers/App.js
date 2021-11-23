import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Route, Link, BrowserRouter } from 'react-router-dom'
//import Home from '../components/Home'
import { login } from '../components/Home'


const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <BrowserRouter>
    <Link to="/Home"><h3>Log In</h3></Link><br/>
    <Link to="/ProductsContainer">ProductsContainer</Link><br/>
    <Link to="/CartContainer">CartContainer</Link>

    <hr/>
    <Route exact path="/Home" component={login} />
    <Route path="/ProductsContainer" component={ProductsContainer} />
    <Route path="/CartContainer" component={CartContainer} />


    </BrowserRouter>
    
  
    <hr/>
    
  </div>
)

export default App
