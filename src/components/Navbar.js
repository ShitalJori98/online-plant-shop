import React, { Component } from 'react'
import Avatar from "react-avatar";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
          <div className="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                 <div class="container-fluid">
               <div> <Avatar className="mr-2" size="30" round={true} /><span> {' '}OYOTEE</span> </div>

                 <ul class="navbar-nav ">
                    <li class="nav-item" style={{marginLeft:'1px'}}>
                      <Link to="/" class="nav-link active">Shop</Link>
                    </li>
                    <li class="nav-item" style={{marginLeft:'50px'}}>
                      <a class="nav-link" >Plant care</a>
                    </li>
                    <li class="nav-item" style={{marginLeft:'50px'}}>
                      <a class="nav-link" >Workshop</a>
                    </li>
                    <li class="nav-item" style={{marginLeft:'50px'}}>
                      <a class="nav-link" >Blogs</a>
                    </li>
                </ul>
                     <ul className="ml-auto">
                         <Link to="/cart">
                            <span> <ShoppingCartIcon/> {' '}</span> 
                        </Link>
                    <span> <FavoriteBorderIcon/> {' '}</span> 
                    <span> <AccountCircleIcon/></span> 
                     </ul>
                   
                
                 </div>
             </nav>
             {/* <SearchBar/> */}
        </div>
           
           
           
        )
    }
}

