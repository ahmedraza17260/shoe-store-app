import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
	<div className = "nav">
        <Link to="/"> Home  </Link> &nbsp; &nbsp; 
        <Link to="/product"> Product </Link>
	</div>
  );
}

export default NavBar;
