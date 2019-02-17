const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002;

// app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/healthz', (req, res) => {
  res.status(200).send();
})

app.get('/', (req, res) => {
  setTimeout(() =>{res.status(200).send(
    // express.static(path.resolve(__dirname, '../client/dist'))
  )},1270)

})

app.listen(process.env.PORT !== undefined ? process.env.PORT : PORT, () => {
  console.log(`listening on port ${PORT}`);
});
