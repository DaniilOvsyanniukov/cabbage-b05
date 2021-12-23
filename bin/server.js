const app = require("../app")
const mongoose = require("mongoose")
require("dotenv").config()

const url = process.env.MONGO_URL
const PORT = process.env.PORT
mongoose
  .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log("Server up and running!")))
  .catch(error => console.log(error.message))
