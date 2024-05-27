import React, { Component } from 'react';
import './App.css';
import StorePage from './Components/StorePage';
import SaleItems from './Components/SaleItems';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'


class App extends Component {



  render(){ 
    return (

      <div>
        <div style={{height: '100vh'}} >
        <div className="Container">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="text-center">Store</h1>
                    <div className="d-none d-lg-block">
                      <h3>On Sale</h3>
                      <div className="row">
                          <SaleItems />
                      </div>
                    </div>
                    <br />
                    <a href="#store" className="btn btn-primary btn-lg w-100">Enter Store</a>
                </div>
            </div>
        </div>
        <div id="#store"></div>
        <br/>
        <StorePage />
      </div> 
      
    );
}

}

export default App;