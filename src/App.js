import React, { Component } from 'react';
import './App.css';

class App extends Component {

  showStatusProduct(product) {
    if (product.status) {
      return (
        <h3>
          ID : {product.id}<br />
          Name: {product.name}<br />
          Price : {product.price}<br />
          Status: {product.status ? 'Active' : 'Pending'}
        </h3>
      );
    }
  }

  render() {
    // return React.createElement('h1', { className: 'label label-danger' }, 'AppComponent');


    var a = 10
    var b = 20
    var product = {
      id: 1,
      name: "Iphone 8",
      price: "18.000.000 VND",
      status: false
    }

    var users = [
      {
        id: 1,
        name: "Phan Van Hai",
        age: 22
      },
      {
        id: 2,
        name: "Phan Thi Mai",
        age: 22
      },
      {
        id: 3,
        name: "Phan Thi Anh",
        age: 22
      },
      {
        id: 4,
        name: "Phan Thi Phuong",
        age: 22
      }
    ];

    var elements = users.map((user, index) => {
      return (
        <div>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
        </div>
      )
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </nav>
        <div className="ml3">
          <h2>a = {a}</h2>
          <h2>b = {b}</h2>
          <h2>a + b = {a + b}</h2>
          {/*  <h3>
            ID : {product.id}<br />
            Name: {product.name}<br />
            Price : {product.price}<br />
            Status: {product.status ? 'Active' : 'Pending'}
          </h3> */}
          {this.showStatusProduct(product)}
          <hr />
          <br />
          {elements}
        </div>
      </div>
    );
  }
}

export default App;
