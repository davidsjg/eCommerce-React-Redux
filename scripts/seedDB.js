const mongoose = require("mongoose");
const db = require("../models");

// This file empties the destination collection and inserts the destinations below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eCommerceDB");

const productSeed = [
  {
    name: "Playstation 5",
    description:
      "Playstation 5, an impossible console to buy, is now not available! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt repudiandae perferendis quidem modi temporibus tempore nemo deleniti voluptas! Eos nulla dolore unde mollitia, iusto velit adipisci! Natus perferendis ut repellendus doloremque minima similique quae voluptatum facilis dignissimos, quo deserunt rerum amet quos possimus minus laborum tempora nihil nesciunt earum!",
    price: 499,
    countInStock: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    name: "iPone 12",
    description:
      "iPhone 12 is a phone without a headphone jack, so you better buy some bluetooth headphones too! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt repudiandae perferendis quidem modi temporibus tempore nemo deleniti voluptas! Eos nulla dolore unde mollitia, iusto velit adipisci! Natus perferendis ut repellendus doloremque minima similique quae voluptatum facilis dignissimos, quo deserunt rerum amet quos possimus minus laborum tempora nihil nesciunt earum!",
    price: 1099,
    countInStock: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "Canon EOS -1D",
    description:
      "Canon camera that lets you take noir pictures of your cat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt repudiandae perferendis quidem modi temporibus tempore nemo deleniti voluptas! Eos nulla dolore unde mollitia, iusto velit adipisci! Natus perferendis ut repellendus doloremque minima similique quae voluptatum facilis dignissimos, quo deserunt rerum amet quos possimus minus laborum tempora nihil nesciunt earum!",
    price: 1300,
    countInStock: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    name: "Amazon Alexa",
    description:
      "Amazon Alexa will listen to all of your conversations and report them to the CIA! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt repudiandae perferendis quidem modi temporibus tempore nemo deleniti voluptas! Eos nulla dolore unde mollitia, iusto velit adipisci! Natus perferendis ut repellendus doloremque minima similique quae voluptatum facilis dignissimos, quo deserunt rerum amet quos possimus minus laborum tempora nihil nesciunt earum!",
    price: 50,
    countInStock: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Audio Technica Headphones",
    description:
      "Remember those bluetooth headphones we were talking about?!  Alright alright alright! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt repudiandae perferendis quidem modi temporibus tempore nemo deleniti voluptas! Eos nulla dolore unde mollitia, iusto velit adipisci! Natus perferendis ut repellendus doloremque minima similique quae voluptatum facilis dignissimos, quo deserunt rerum amet quos possimus minus laborum tempora nihil nesciunt earum!",
    price: 233,
    countInStock: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1629555258982-b920af8da52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "JBL Flip 4",
    description:
      "Seamlessly blast your favorite Nickleback album on the trail for all to hear with this sleek bluetooth player.  Look at this graph! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt repudiandae perferendis quidem modi temporibus tempore nemo deleniti voluptas! Eos nulla dolore unde mollitia, iusto velit adipisci! Natus perferendis ut repellendus doloremque minima similique quae voluptatum facilis dignissimos, quo deserunt rerum amet quos possimus minus laborum tempora nihil nesciunt earum!",
    price: 140,
    countInStock: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  },
];

db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
