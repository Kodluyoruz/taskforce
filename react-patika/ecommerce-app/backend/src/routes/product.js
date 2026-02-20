import express from "express";
const router = express.Router();

import Product from "../controllers/product";
// import cache from '../cache';

import grantAccess from "../middlewares/grantAccess";
import { verifyAccessToken } from "../helpers/jwt";

router.post(
	"/",
	verifyAccessToken,
	grantAccess("createAny", "product"),
	Product.Create
);
router.get(
	"/:product_id",
	// verifyAccessToken,
	// grantAccess('readAny', 'product'),
	// cache.route(),
	Product.Get
);
// router.get('/', cache.route(), Product.GetList);
router.get("/", Product.GetList);
router.put("/:product_id", Product.Update);
router.delete("/:product_id", Product.Delete);

export default router;
