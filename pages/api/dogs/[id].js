import {getDog, updateDog, destroyDog} from "../../../utils/actions" 


export default async function handler(req, res) {
    try {
      const id = req.query.id
  
      if (req.method === "GET") {
        res.json(await getDog(id))
      }
      if (req.method === "PUT") {
        res.json(await updateDog(req.body, id))
      }
      if (req.method === "DELETE") {
        res.json(await destroyDog(id))
      }
      if (!["GET", "PUT", "DELETE"].includes(req.method)) {
        res.status(404).send("No response found for that method.")
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  }