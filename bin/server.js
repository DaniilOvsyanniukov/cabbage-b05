const app = require("../app")
const mongoose = require("mongoose")
require("dotenv").config()

const url = process.env.MONGO_URL
const PORT = process.env.PORT
mongoose
  .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log("Server up and running!")))
  .catch(error => console.log(error.message))

// dotenv.config()

// const {MONGO_URL, PORT = 3001} = process.env

// ;(async () => {
//   try {
//     await mongoose.connect(MONGO_URL)
//     console.log("Успешное подключение к базе данных")
//   } catch (err) {
//     console.log(err.message)
//     process.exit(1)
//   }
// })()

// app.listen(PORT, () => {
//   console.log(`Server running. Use our API on port: ${PORT}`)
// })
