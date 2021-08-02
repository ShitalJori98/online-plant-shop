import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { Route, Switch } from "react-router-dom";
import Cart from './components/cart/Cart';
import Details from './components/Details';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <React.Fragment>
       <Navbar/>
       <SearchBar/>
          <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route exact path="/cart" component={Cart} />
          </Switch>
    </React.Fragment>
  );
}

export default App;
