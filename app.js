const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
const port = 2020;

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
/* password contains special chars so it should be ASCI II URL encoded */
mongoose.connect(
  "mongodb+srv://godisgreat:Guru%401421@cluster0.7ekp0.mongodb.net/god-graphql?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("god is great");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log("Listening on port ", port);
});
