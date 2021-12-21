const app = require("../app")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const {MONGO_URL, PORT = 3001} = process.env

;(async () => {
  try {
    await mongoose.connect(MONGO_URL)
    console.log("Успешное подключение к базе данных")
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
})()

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})
