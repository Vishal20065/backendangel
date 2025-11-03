import express from "express";
import {
  createFund,
  getFunds,
  getFundById,
  updateFund,
  getFunds1,
  deleteFund
} from "../controllers/fundAddController.js";

const router = express.Router();

router.post("/create", createFund);      // ➕ Create
router.get("/get/:id", getFunds);         // 📖 Read All
router.get("/get", getFunds1);         // 📖 Read All
router.get("/getOne/:id", getFundById);   // 📖 Read One
router.put("/update/:id", updateFund);    // ✏️ Update
router.delete("/delete/:id", deleteFund); // ❌ Delete

export default router;
