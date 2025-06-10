import { Router } from "express";
import { AppDataSource } from "../db/dbConnection";
import { Person } from "../entities/Person";

const router = Router();

router.get("/", async (req, res) => {
  const persRep = AppDataSource.getRepository(Person);
  const persons = await persRep.find();
  res.json(persons);
  res.json({ message: "Get all persons" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const persRep = AppDataSource.getRepository(Person);
  const person = await persRep.findOneBy({id : parseInt(id)});
  res.json(person);
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

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, email } = req.body;
  const persRep = AppDataSource.getRepository(Person)
  await persRep.update(id, { firstName, lastName, age, email });
  res.json({
    message: `Update person with id ${id}`,
    person: { firstName, lastName, age, email },
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const persReo = AppDataSource.getRepository(Person);

  await persReo.delete(id);
  res.json({ message: `Delete person with id ${id}` });
});

export const personRoutes = router;
