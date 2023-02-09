const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const foods = [
  {
    id: 1,
    title: "Chiken Fillet Burger",
    type: "Discounted item",
    price: 70.0,
    description:
      " red onion into 1/8 inch thick slices; season lightly with sea salt and pepper. Set aside",
    shop: "Well sanitized Kitchen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KmIJNVSOcGazspDgo5r0pnIzYC3ncxd5NQ&usqp=CAU",
  },

  {
    id: 2,
    title: "Mushroom Sandwitch",
    type: "New Product",
    price: 95.0,
    description:
      "In no particular order… Olive Garden Pasta Florentine Marie Callendar’s Quish Red Lobster Grilled Salmon Chili’s Mix & Match Short RibsChevy’s Fish Taco’s Appleb",
    shop: "Al Fallah",
    image:
      "https://i.pinimg.com/564x/25/0b/b1/250bb10d2d8eaeb370689977a678a497.jpg",
  },
  {
    id: 3,
    title: "Super Star Burger",
    type: "Discounted item",
    price: 115.0,
    description:
      "Two charbroiled all-beef patties, two slices of melted American cheese, lettuce, tomato, sliced onions, dill pickles, Special Sauce, and mayonnaise on a seeded bun. Served with Fries and a Soft Drink.",
    shop: "Chicken Land",
    image:
      "https://olo-images-live.imgix.net/8f/8f390b3a937d4ab89b5cbcbf05a9fd3b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=459&h=291&fit=crop&fm=png32&s=a2b8e9233758b68ab103cb0c51147137",
  },

  {
    id: 4,
    title: "Cheese Burger",
    type: "New Product",
    price: 60.0,
    description:
      "Two charbroiled all-beef patties, two slices of melted American cheese, lettuce, tomato, sliced onions, dill pickles, Special Sauce, and mayonnaise on a seeded bun.",
    shop: "Super Food",
    image:
      "https://olo-images-live.imgix.net/4f/4fa3d29ca3a34dbfb2aabd9081bea4d9.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=459&h=291&fit=crop&fm=png32&s=a74540d8f4e66e31bd5cadccbaa2ded8",
  },

  {
    id: 5,
    title: "Breakfast Burger",
    type: "Discounted item",
    price: 45.0,
    description:
      "Charbroiled all-beef patty, crispy bacon, egg, American Cheese, Hash Rounds®, and Ketchup on a seeded bun. Breakfast served until *10:30am (*Hours may vary by day)",
    shop: "Ali Food",
    image:
      "https://olo-images-live.imgix.net/b7/b76e81b4b0c542149faedb08f9fe0181.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=459&h=291&fit=crop&fm=png32&s=16049eadc1f6c45c9e40de84bc16d1c2",
  },
];

const types = [
  {title: "Filters"},
  {title: "Hygenic"},
  {title: "Live Tracking"},
  {title: "Fast Foods"},
]

const categories = [
  {
    id: 1,
    title: "Burger",
    image:
      "https://img.freepik.com/premium-photo/classic-cheeseburger-with-beef-cheese-bacon-tomato-onion-lettuce-isolated-white-background_183587-963.jpg?size=626&ext=jpg",
  },
  {
    id: 2,
    title: "Pizza",
    image:
      "https://img.freepik.com/premium-vector/slice-pizza-from-multicolored-paints-splash-watercolor-colored-drawing-realistic_537015-136.jpg?w=740",
  },
  {
    id: 3,
    title: "Juice",
    image:
      "https://img.freepik.com/free-vector/orange-juice-splash_98292-5222.jpg?size=338&ext=jpg",
  },
  {
    id: 4,
    title: "Cola",
    image:
      "https://img.freepik.com/premium-photo/cola-glass-with-ice-white-background_38045-546.jpg?w=740",
  },
];

app.get("/foods", (req, res) => {
  res.send(JSON.stringify(foods));
});

app.get("/categories", (req, res) => {
  res.send(JSON.stringify(categories));
});

app.get("/types", (req, res) => {
  res.send(JSON.stringify(types));
});

app.get("/foods/:id", (req, res) => {
  const { id } = req.params;
  if (id > (foods.length + 1)) {
    res.send(`Can not find product with id of: ${id}`);
  } else {
    const foundedProduct = foods.find((product) => product.id == id);
    res.send(JSON.stringify(foundedProduct));
  }
});


app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  if (id < foods.length + 1) {
    const foundedProduct = categories.find((categorey) => categorey.id == id);
    res.send(JSON.stringify(foundedProduct));
  } else {
    res.send(`Can not find categorey with id of: ${id}`);
  }
});

app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});
