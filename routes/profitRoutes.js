import express from "express";
import {
  createProfit,
  getProfits,
  getProfitById,
  updateProfit,
  deleteProfit,
  getTotals,
  getProfits1
} from "../controllers/profitController.js";

const router = express.Router();

// CRUD routes
router.post("/create", createProfit);
router.get("/getAll/:id", getProfits);
router.get("/getAll", getProfits1);
router.get("/getOne/:id", getProfitById);
router.put("/update/:id", updateProfit);
router.delete("/delete/:id", deleteProfit);

// Totals API
router.get("/summary/totals/:id", getTotals);

export default router;
