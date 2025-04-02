import express from "express";
import cors from "cors";
import connectiondb from "./database/firebase";
import reportRoutes from "./routes/ReportRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/reportagens", reportRoutes);

if (!connectiondb)
{
  console.error("Failed to connect to the database");
}
else {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}