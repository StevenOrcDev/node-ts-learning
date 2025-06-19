import { CreatePersonDto, UpdatePersonDto } from '@dtos/persons';
import { AppDataSource } from '../../db/dbConnection';
import { Person } from '../../entities';

export async function getAllPersons(): Promise<Person[]> {
  const personRepo = AppDataSource.getRepository(Person);
  return personRepo.find();
}

export async function getPersonById(id: number): Promise<Person | null> {
  const personRepo = AppDataSource.getRepository(Person);

  return personRepo.findOneBy({ id });
}

export async function createPerson(data: CreatePersonDto): Promise<Person> {
  const personRepo = AppDataSource.getRepository(Person);

  const person = personRepo.create(data);

  return personRepo.save(person);
}

export async function updatePerson(id: number, data: UpdatePersonDto): Promise<Person | null> {
  const personRepo = AppDataSource.getRepository(Person);
  const person = await personRepo.findOneBy({ id });

  if (!person) {
    return null;
  }

  Object.assign(person, data);

  return personRepo.save(person);
}

export async function deletePerson(id: number): Promise<Person | null> {
  const personRepo = AppDataSource.getRepository(Person);
  const person = await personRepo.findOneBy({ id });

  if (!person) {
    return null;
  }

  await personRepo.remove(person);

  return person;
}
