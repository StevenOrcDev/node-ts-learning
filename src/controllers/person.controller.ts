import * as personService from '../services/persons';

export async function getPerson(_req, res) {
  try {
    const persons = await personService.getAllPersons();

    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
}

export async function getPersonById(req, res) {
  try {
    const id = Number(req.params.id);
    const person = await personService.getPersonById(id);

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
      return;
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch person' });
  }
}

export async function postPerson(req, res) {
  try {
    const { firstName, lastName, age, email } = req.body;
    const person = await personService.createPerson({ firstName, lastName, age, email });

    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create person', tips: error });
  }
}

export async function putPerson(req, res) {
  try {
    const id = Number(req.params.id);
    const { firstName, lastName, age, email } = req.body;
    const person = await personService.updatePerson(id, { firstName, lastName, age, email });

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
      return;
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update person' });
  }
}

export async function deleteById(req, res) {
  try {
    const id = Number(req.params.id);
    const person = await personService.deletePerson(id);

    if (!person) {
      res.status(404).json({ error: 'Person not found' });
      return;
    }

    res.json({ message: `Person with id ${id} deleted` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete person' });
  }
}
