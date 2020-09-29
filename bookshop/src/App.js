import React from 'react';
import './book.css';
import './Product';
import Product from './Product';

const products = [
  {
   name: "Snow White",
   price: "£3.99",
   description: "A classic"
  },
  {
    name: "Cinderella",
    price: "£5.99",
    description: "Another classic"

  }
]

function App() {
const name = 'Beyonce';
function Greeting(user) {
    if (user) {
        return <h1>{name}'s Reading List</h1>;
    }
    return <h1>Just a Reading List</h1>;
}
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="heading">Welcome to the Book Library</h1>
      <img src="../emojibook.png" className="App-logo" alt="logo" />
        <h2 className='slogan'>
          Where Books Come to Life
        </h2>
      </header>
      {products.map(product => (
        <Product
        name={product.name}
        price={product.price}
        description={product.description}
        />
      ))}
    

      {Greeting(name)}
    </div>
  );
}


export default App;
