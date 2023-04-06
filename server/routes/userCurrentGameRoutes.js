import express from "express";
import {
  getCurrentGamePerUser,
  getGiftIdeasFromChatGPT,
} from "../controllers/userCurrentGameController.js";

const router = express.Router({ mergeParams: true });

router
  .route("/game/:id")
  .get(getCurrentGamePerUser)
  .post(getGiftIdeasFromChatGPT);

export default router;
