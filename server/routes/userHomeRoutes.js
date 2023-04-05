import express from "express";
import { getGamesPerUser } from "../controllers/userHomeController.js";

const router = express.Router({ mergeParams: true });

router.route("/").get(getGamesPerUser);

export default router;
