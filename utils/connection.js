import mongoose, { Schema, model } from "mongoose"

export const connect = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI)
    .catch((err) => console.error(err))

  mongoose.connection
    .on("open", () => console.log("connected to mongo"))
    .on("error", (error) => console.error(error))

  const DogSchema = new Schema({
    name: String,
    age: Number,
    breed: String,
    image: String,
  })

  const Dog = mongoose.models.Dog || mongoose.model("Dog", DogSchema)

  return { conn, Dog }
}