import React from 'react';
import { BrowserRouter as Router,  Route , Routes  } from "react-router-dom";
import Home from './Components/Home';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/Navbar';

function RouterConfig() {

  return (
	<div>
        <Router>
          <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product" element={<Product />}/>
                <Route path="/product/:id" element={<ProductItem />}/>
                <Route path="*" element={()=><h2>404 Not Found</h2>}/>
            </Routes>
        </Router>
	</div>
  );
}

export default RouterConfig;