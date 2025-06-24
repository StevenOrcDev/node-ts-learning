export class PersonNotFoundError extends Error {
  constructor(personId: string) {
    super(`Person with id ${personId} not found`);
    this.name = 'PersonNotFoundError';
  }
}

export class TaskNotFoundError extends Error {
  constructor(taskId: string) {
    super(`Task with id ${taskId} not found`);
    this.name = 'TaskNotFoundError';
  }
}
