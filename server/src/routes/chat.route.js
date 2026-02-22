import { Router } from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import { sendMessageController } from "../controllers/chat.controller.js";

const router = Router();

router.post("/", asyncHandler(sendMessageController));

export default router;
