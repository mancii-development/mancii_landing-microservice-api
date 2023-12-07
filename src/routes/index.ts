import { Router, json } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.use(json());

index.post("/api/contact", controller.sendEmail);
// index.get("/", () => console.log("h(ola" ));

//AIzaSyAB_TdIm9y7aypQZX-IjsQ0ELO-D2-6Oy    g