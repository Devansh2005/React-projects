import React from 'react';
import './book.css';
import './Product';
import Product from './Product';
import BookCounter from './BookCounter';

const products = [
  {
   name: "Snow White",
   price: "4.99",
   description: "Mirror mirror on the wall..."
  },
  {
    name: "Cinderella",
    price: "£5.99",
    description: "Before the clock strikes midnight..."

  },
  {
    name: "Peter Pan",
    price: "£6.99",
    description: "I do believe in fairies, I do! I do!"

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
      {Greeting(name)}
      {products.map(product => (
        <Product
        name={product.name}
        price={product.price}
        description={product.description}
        />
      ))}
      <h1 className='header' >Welcome to My Library</h1>
      <BookCounter library={{name:"Beyonce",theme:"Modern"}}/>
    </div>
  );
}


export default App;
