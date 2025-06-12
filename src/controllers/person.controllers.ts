import { Request, Response } from 'express';
import { Person } from '../entities/Person';
import { AppDataSource } from '../db/dbConnection';

export const getPersons = async (_req: Request, res: Response): Promise<void> => {
  try {
    const personRepo = AppDataSource.getRepository(Person);
    const persons = await personRepo.find();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
};

export const getPersonById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const personRepo = AppDataSource.getRepository(Person);
    const person = await personRepo.findOneBy({ id });

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
      return;
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch person' });
  }
};

export const createPerson = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, age, email } = req.body;
    const personRepo = AppDataSource.getRepository(Person);

    const person = personRepo.create({ firstName, lastName, age, email });
    await personRepo.save(person);

    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create person', tips: error });
  }
};

export const updatePerson = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const { firstName, lastName, age, email } = req.body;
    const personRepo = AppDataSource.getRepository(Person);

    let person = await personRepo.findOneBy({ id });
    if (!person) {
      res.status(404).json({ error: 'Person not found' });
      return;
    }

    person.firstName = firstName ?? person.firstName;
    person.lastName = lastName ?? person.lastName;
    person.age = age ?? person.age;
    person.email = email ?? person.email;

    await personRepo.save(person);

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update person' });
  }
};

export const deletePerson = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const personRepo = AppDataSource.getRepository(Person);

    const person = await personRepo.findOneBy({ id });
    if (!person) {
      res.status(404).json({ error: 'Person not found' });
      return;
    }

    await personRepo.remove(person);
    res.json({ message: `Person with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete person' });
  }
};
