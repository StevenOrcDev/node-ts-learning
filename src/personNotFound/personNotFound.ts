export class PersonNotFoundError extends Error {
  constructor(personId: string) {
    super(`Person with id ${personId} not found`);
    this.name = 'PersonNotFoundError';
  }
}
