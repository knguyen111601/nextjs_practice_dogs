import { getDogs, createDog } from "../../../utils/actions";

export default async function handler(req, res) {
    try {
      if (req.method === "GET") {
        res.json(await getDogs())
      }
  
      if (req.method === "POST") {
        res.json(
          (await createDog(req.body))
            ? await getDogs()
            : { error: "something happened" }
        )
      }
  
      if (!["GET", "POST"].includes(req.method)) {
        res.status(404).send("No response found for that method.")
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  }