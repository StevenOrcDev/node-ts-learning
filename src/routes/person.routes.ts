import { Router } from "express";
import { AppDataSource } from "../db/dbConnection";
import { Person } from "../entities/Person";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all persons" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Get person with id ${id}` });
});

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, age, email } = req.body;
    const personRepo = AppDataSource.getRepository(Person);

    const person = personRepo.create({ firstName, lastName, age, email });
    await personRepo.save(person);

    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: "Failed to create person", tips: error });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, email } = req.body;
  res.json({
    message: `Update person with id ${id}`,
    person: { firstName, lastName, age, email },
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Delete person with id ${id}` });
});

export const personRoutes = router;
