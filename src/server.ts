import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { personRoutes } from "./routes/person.routes";
import { initializeDB } from "./db/initializeDB";

dotenv.config();

initializeDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1/persons", personRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// not found route
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
