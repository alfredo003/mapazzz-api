import { Router } from "express";
import { ReportController } from "../controllers/ReportController";

const reportRoutes = Router();


reportRoutes.get("/", ReportController.getAllReports);
reportRoutes.get("/buscar/:title", ReportController.getReportBytitle);
reportRoutes.get("/zonas", ReportController.getAllZona);




export default reportRoutes;