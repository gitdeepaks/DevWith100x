import { useReducer } from "react";
import "./App.css";

function App() {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };

      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };

      default:
        return state;
    }
  };

  const initialCount = {
    count: 0,
  };

  const [state, dispatch] = useReducer(countReducer, initialCount);
  return (
    <>
      <h1>use-reducer</h1>

      <p>Count:{state.count}</p>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DECREMENT",
          });
        }}
      >
        Decrement
      </button>
      <ShoppingCart />
    </>
  );
}

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
  }
};

const products = [
  { id: 1, name: "Product1" },
  { id: 2, name: "Product2" },
  { id: 3, name: "Product3" },
  { id: 4, name: "Product4" },
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div className="">
      <hr />
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: item });
              }}
            >
              Remove Item
            </button>
          </li>
        ))}
      </ul>
      {products.map((item) => (
        <button
          key={item.id}
          onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
        >
          {item.name}
        </button>
      ))}

      <button
        onClick={() => {
          dispatch({ type: "CLEAR_CART" });
        }}
      >
        {" "}
        Clear Cart
      </button>
    </div>
  );
};

export default App;
