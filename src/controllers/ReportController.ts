import { Request, Response } from "express";
import connectiondb from "../database/firebase";

export class ReportController {
  static async getAllReports(req: Request, res: Response) {
    try {
      const snapshot = await connectiondb.collection("reports").get();
      const reports = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          description: data.description,
          imageUrl: data.imageUrl,
          latitude: data.latitude,
          location: data.location,
          longitude: data.longitude ,
          riskLevel: data.riskLevel,
          solutionAi: data.solutionAi,
          status: data.status,
          title: data.title,
        };
      });

      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reports" });
    }
  }

  static async getReportBytitle(req: Request, res: Response) {
    try {
      const { title } = req.params;
      const snapshot = await connectiondb
        .collection("reports")
        .where("title", "==", title)
        .get();

      if (snapshot.empty) {
        return res.status(404).json({ message: "Nenhum relatório encontrado com o título dado" });
      }

      const reports = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          description: data.description || "",
          imageUrl: data.imageUrl || "",
          latitude: data.latitude || 0,
          location: data.location || "Localização desconhecida",
          longitude: data.longitude || 0,
          riskLevel: data.riskLevel || 0,
          solutionAi: data.solutionAi || "none",
          status: data.status || "inactive",
          title: data.title || "",
        };
      });

      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch report by title" });
    }
  }

  static async getAllZona(req: Request, res: Response) {
    try {
      const snapshot = await connectiondb.collection("reports").get();
      const reports = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            location: data.location,
	    latitude:data.latitude,
            longitude: data.longitude,
            riskLevel: data.riskLevel,
        };
      });

      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reports" });
    }
  }
  
}
