import express from "express";
import { getCurrentGamePerUser } from "../controllers/userCurrentGameController.js";

const router = express.Router({ mergeParams: true });

router.route("/game/:id").get(getCurrentGamePerUser);

export default router;
