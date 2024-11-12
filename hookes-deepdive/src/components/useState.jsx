import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log(userData);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Input: {value}</p>

      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(userData);
          }}
        >
          <input
            placeholder="Enter the name"
            type="text"
            name="firstname"
            onChange={handleChange}
          />
          <input
            placeholder="Enter the lastname"
            type="text"
            name="lasttname"
            onChange={handleChange}
          />
          <input
            placeholder="Enter the email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default UseState;
