import { Router } from "express";
import { AppDataSource } from "../db/dbConnection";
import { Person } from "../entities/Person";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const personRepo = AppDataSource.getRepository(Person);
    const persons = await personRepo.find();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch persons" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const personRepo = AppDataSource.getRepository(Person);
    const person = await personRepo.findOneBy({ id });

    if (!person) {
      res.status(404).json({ error: "Person not found" });
      return;
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch person" });
  }
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
  try {
    const id = Number(req.params.id);
    const { firstName, lastName, age, email } = req.body;
    const personRepo = AppDataSource.getRepository(Person);

    let person = await personRepo.findOne({ where: { id } });
    if (!person) {
      res.status(404).json({ error: "Person not found" });
      return;
    }

    person.firstName = firstName ?? person.firstName;
    person.lastName = lastName ?? person.lastName;
    person.age = age ?? person.age;
    person.email = email ?? person.email;

    await personRepo.save(person);

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: "Failed to update person" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const personRepo = AppDataSource.getRepository(Person);

    const person = await personRepo.findOne({ where: { id } });
    if (!person) {
      res.status(404).json({ error: "Person not found" });
      return;
    }

    await personRepo.remove(person);
    res.json({ message: `Person with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete person" });
  }
});
export const personRoutes = router;
