import { Router } from "express";


const routes = Router();

routes.get("/", (req, res) => {
  res.send("API Route");
});



export default routes;