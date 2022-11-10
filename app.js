const express = require("express");
const app = express();

// routes
const userRouter = require("./routes/userRoute");

app.use("/api/v1/users", userRouter);

// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     data: {
//       infor: "hello from server",
//     },
//   });
// });

module.exports = app;
