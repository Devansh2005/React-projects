import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import books from "./books.json";

// const formatter = new Intl.NumberFormat('en-GB', {
//  style: 'currency',
//  currency: 'GBP'
// })

const element = (
  <Fragment>
    {books.map((book) => {
      let {
        id,
        volumeInfo: {
          title,
          authors,
          description,
          subtitle,
          maturityRating,
          imageLinks: { smallThumbnail },
        },
        saleInfo: { listPrice, buyLink },
      } = book;
      return (
        <div style={{ backgroundColor: "gold" }}>
          <p style={{ fontWeight: "bold" }}>{title}</p>
          <p style={{ fontWeight: "bold" }}>{authors}</p>
          <p>{subtitle}</p>
          <img src={smallThumbnail} alt="book cover image"></img>
          <p style={{ color: "black" }}>{description}</p>
          <p style={{ fontWeight: "bold" }}>{maturityRating}</p>
          <a href={buyLink}>Click Here To Buy</a>
        </div>
      );
    })}
  </Fragment>
);
ReactDOM.render(element, document.getElementById("root"));

// books.map(book => (
// {book.title}
// ))

// function makeItem() {
//   return {
//     data: {
//       item: {
//         name: "Shoes",
//         size: {
//           us: 10,
//           eu: 44,
//         },
//       },
//     },
//     status: "live",
//   };
// }

// TO GET TO name & eu, us

// const {
//   data: {
//     item: {
//       name,
//       size: { us, eu },
//     },
//   },
// } = makeItem();
// console.log(name, us, eu);

// function makeArrayOfItems() {
//   return {
//     data: {
//       items: [
//         { name: "Shoes", price: 100 },
//         { name: "Shirt", price: 250 },
//       ],
//     },
//     status: "live",
//   };
// }

// const {
//   data: {
//     items: [i1, i2]
//   }
// } = makeArrayOfItems();
// console.log(i1);
