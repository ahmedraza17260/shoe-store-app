import React from 'react';
import './App.css';
import Routes from './Route.js';

function App() {

  return (
	<div>
		<Routes />
		<div className="copyRight">
            <h4> Powered by Ahmed Raza </h4>
            <a href="https://github.com/ahmedraza17260" rel="noreferrer">
              {" "}
              <h3> Copyright &copy; 2020 Ahmed Raza </h3>{" "}
              <h3> All Right Reserved </h3>
            </a>
          </div>
	</div>
  );
}

export default App;
