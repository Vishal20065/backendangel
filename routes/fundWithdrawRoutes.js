import express from "express";
import {
  createFundWithdraw,
  getFundWithdraws,
  getFundWithdrawById,
  updateFundWithdraw,
  deleteFundWithdraw,
  getFundWithdraws1
} from "../controllers/fundWithdrawController.js";

const router = express.Router();

router.post("/create", createFundWithdraw);         // ✅ Create
router.get("/get/:id", getFundWithdraws);      // ✅ Get One
router.get("/get", getFundWithdraws1);            // ✅ Get All
router.put("/update/:id", updateFundWithdraw);       // ✅ Update
router.delete("/dalete/:id", deleteFundWithdraw);    // ✅ Delete

export default router;
