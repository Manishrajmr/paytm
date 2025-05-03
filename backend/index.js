const express = require('express');
const app = express();
const mainRouter = require("./routes/index");
const cors = require("cors");
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors("*"));
app.use(express.json());

//mounting 
app.use('/api/v1',mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


