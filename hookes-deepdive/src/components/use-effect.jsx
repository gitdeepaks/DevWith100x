import React from "react";
import { useState } from "react";

const UseEffect = () => {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await fetch("https://random-data-api.com/api/v2/users");

    const data = await response.json();
    setUser(data);
    console.log(data);
  };

  React.useEffect(
    () => {
      fetchUser();

      return () => {
        //   second;
      };
    },
    [
      //dependencyArray
    ]
  );

  return (
    <div>
      firstname:{user.first_name} | lastname: {user.last_name}
    </div>
  );
};

export default UseEffect;
