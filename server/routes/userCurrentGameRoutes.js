import express from "express";
import {
  getCurrentGamePerUser,
  getGiftIdeasFromChatGPT,
  finishGame,
} from "../controllers/userCurrentGameController.js";

import { protect } from "./../middleware/authMiddleware.js";
const router = express.Router({ mergeParams: true });
router.use(protect);
router
  .route("/game/:id")
  .get(getCurrentGamePerUser)
  .post(getGiftIdeasFromChatGPT)
  .put(finishGame);

export default router;
