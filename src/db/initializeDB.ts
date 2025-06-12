import { AppDataSource } from './dbConnection';

export const initializeDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established successfully.');
  } catch (error) {
    process.exit(1);
  }
};
