import express from "express";
import {
  getCurrentGamePerUser,
  getGiftIdeasFromChatGPT,
} from "../controllers/userCurrentGameController.js";

import { protect } from "./../middleware/authMiddleware.js";
const router = express.Router({ mergeParams: true });
router.use(protect);
router
  .route("/game/:id")
  .get(getCurrentGamePerUser)
  .post(getGiftIdeasFromChatGPT);

export default router;
