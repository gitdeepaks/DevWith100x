import axios from "axios";

// const app = express();

// // func return the boolean if that age is more than 18
// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isAdultMiddleware(req, res, next) {
//   if (age >= 19) {
//     next();
//   } else {
//     res.json({
//       message: "You are not old enough to book a ride",
//     });
//   }
// }

// app.get("/ride1", (req, res, next) => {
//   if (isAdult(req.query.age)) {
//     res.json({
//       message: "Your have successfully booked a ride 1",
//     });
//   } else {
//     res.json({
//       message: "You are not old enough to book a ride",
//     });
//   }
// });
// app.get("/ride2", (req, res) => {
//   if (isAdult(req.query.age)) {
//     res.json({
//       message: "Your have successfully booked a ride 1",
//     });
//   } else {
//     res.json({
//       message: "You are not old enough to book a ride",
//     });
//   }
// });

// app.listen(8000);

async function main() {
  const res = await axios.get("https://sum-server.100xdevs.com/todos");
  const json = res.data;
  console.log(json.todos.length);
}

main();
