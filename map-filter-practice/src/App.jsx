import "./App.css";

const products = [
  { id: 1, name: "Product A", price: 20, category: "Electronics" },
  { id: 2, name: "Product B", price: 30, category: "Clothing" },
  { id: 3, name: "Product C", price: 15, category: "Electronics" },
  { id: 4, name: "Product D", price: 25, category: "Clothing" },
  { id: 5, name: "Product E", price: 50, category: "Electronics" },
  { id: 6, name: "Product F", price: 40, category: "Electronics" },
];
const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];

function App() {
  return (
    <>
      <ul>
        {products
          .filter((product) => product.category === "Electronics")
          .map((product) => {
            return (
              <li key={product.id}>
                {product.name}--{product.price}--{product.category}
              </li>
            );
          })}
      </ul>
      {/* reduce */}
      <div>
        Total price :
        {products.reduce((acc, product) => {
          return acc + product.price;
        }, 0)}
      </div>

      {/* Discounted Price */}

      <ul>
        {products
          .filter((product) => product.price > 20)
          .map((prd) => {
            return {
              ...prd,
              discountedPrice: prd.price - prd.price * (10 / 100),
            };
          })
          .map((product) => {
            return (
              <li key={product.id}>
                {product.name}--{product.discountedPrice}--
                {product.discountedPrice}
              </li>
            );
          })}
      </ul>

      {/* filter and render the unique element in the array  */}
      {names
        .filter((name, index) => {
          return name.indexOf(name) === index;
        })
        .map((name) => {
          return <li key={name.id}>{name}</li>;
        })}
      <Conditional />
      <OperationalChaining />
      <NullishCoalsing />
    </>
  );
}

const Conditional = () => {
  let x = 5;
  let y = 10;

  if (x > 0 || y > 0) {
    return <span>Both are greater than 0</span>;
  } else return <>One is Greater</>;
};

const OperationalChaining = () => {
  let user = {
    name: "Jonny",
    address: {
      city: "Seattle",
    },
  };

  return <p>{user?.address?.city}</p>;
};

const NullishCoalsing = () => {
  let userInput = "Jemy";
  let defaultValue = "Hello, user!";
  return <p>{userInput ?? defaultValue}</p>;
};

export default App;
