require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3501;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
