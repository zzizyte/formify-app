import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { sequelize } from "./models/index.js";
import authRoutes from "./routes/authRoutes.js";
import templateRoutes from "./routes/templateRoutes.js"

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://formify-app-seven.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", authRoutes);
app.use("/api/templates", templateRoutes);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Successful sync with Supabase");

    if (process.env.NODE_ENV !== "production") {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
  })
  .catch((err) => {
    console.error("Unable to connect:", err);
  });

export default app;
