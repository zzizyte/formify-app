import dotenv from "dotenv";
import express from "express";
import cors from "cors"; //access for front end
import sequelize from "./config/database.js";
import User from "./models/user.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors({ origin: VITE_API_URL, credentials: true }));
app.use(express.json());

app.use("/api/users", authRoutes);

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("succesful sync with supabase");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err, "unable to connect");
  });

export default app;
