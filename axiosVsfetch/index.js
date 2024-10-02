async function main() {
  await fetch("http://sum-server.100xdevs.com/todos").then((res) => {
    const json = res.json();
    console.log(json.todos.length);
  });
}

async function main2() {
  const res = await fetch("https://sum-server.100xdevs.com/todos", {
    method: "POST",
    headers: {
      Auth: "token",
    },
  });
  const json = await res.json();
  console.log(json.todos.length);
}

// in axios

async function main3() {
  const res = await axios.post(
    "https://sum-server.100xdevs.com/todos",
    {
      name: "sumit",
      password: "1234",
    },
    {
      headers: {
        Auth: "token",
      },
    }
  );
  const json = res.data;
  console.log(json.todos.length);
}

main2();
