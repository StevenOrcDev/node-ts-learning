import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Person, Task } from '../entities';

if (process.env.NODE_ENV !== 'test') {
  dotenv.config();
}

const isProduction = process.env.NODE_ENV === 'production';

export const AppDataSource: DataSource = new DataSource({
  type: 'postgres',
  url: isProduction ? process.env.DATABASE_URL : undefined,
  host: !isProduction ? process.env.DB_HOST || 'localhost' : undefined,
  port: !isProduction ? (process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432) : undefined,
  username: !isProduction ? process.env.DB_USER : undefined,
  password: !isProduction ? process.env.DB_PASSWORD : undefined,
  database: !isProduction ? process.env.DB_NAME : undefined,
  entities: [Person, Task],
  synchronize: true,
  logging: false,
  extra: {
    ssl: isProduction ? { rejectUnauthorized: false } : false,
  },
});
