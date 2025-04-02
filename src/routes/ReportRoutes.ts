import { Router } from "express";
import { ReportController } from "../controllers/ReportController";

const reportRoutes = Router();


reportRoutes.get("/", ReportController.getAllReports);
reportRoutes.get("/buscar/:title", async (req, res) => {
  await ReportController.getReportBytitle(req, res);
});
reportRoutes.get("/zonas", ReportController.getAllZona);




export default reportRoutes;