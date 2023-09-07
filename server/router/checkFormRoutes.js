import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  getCheckFormController,
  postCheckFormController,
} from "../controllers/checkFormController.js";

//router object
const router = express.Router();

//post method
router.post("/post-checkForm", postCheckFormController);

//get method
router.get("/get-checkForm", getCheckFormController);

export default router;
