const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

// todo: connect to environment varaible
dotenv.config({ path: "./config.env" });

// todo: connect DB
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    //connect object contain all the information about DB
    // console.log(con.connections);
    console.log("DB connect successful");
  });

// todo: start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is listen to ${port}`);
});
