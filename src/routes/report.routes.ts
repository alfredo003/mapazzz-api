import { Router } from "express";
import { ReportController } from "../controllers/ReportController";
import connectiondb from "../database/firebase";

const reportRoutes = Router();


reportRoutes.get("/", ReportController.getAllReports);
reportRoutes.get("/{title}", ReportController.getReportBytitle);

export default reportRoutes;