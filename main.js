//Load any required libraries/modules
const express = require('express');

//Declare tunables
const PORT = 3000;

//Create an express application
const app = express();

//Define orutes
app.use(
    express.static(__dirname + '/public')
)

//Start the server, listen on port 3000
app.listen(PORT, () => {
  console.info(`Application started on port ${PORT} at ${new Date()}`);
  console.info(__dirname)
}

)