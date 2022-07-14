const express = require("express");
const cors = require("cors")
const axios = require("axios");
const  { product }  =  require("./data");

const app = express();

app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
    // res.send("fish")
    axios.get('https://fakerapi.it/api/v1/persons?_quantity=1000')
  .then(item => {
    console.log(`statusCode: ${item.status}`);
    console.log(item.data);
    res.statusCode = 200
    res.send(item.data)
  })
  .catch(error => {
    console.error(error);
  });

  
    
});



// PORT
const PORT = 8080;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});


