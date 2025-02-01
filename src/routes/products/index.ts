// Product Endpoints

import { Router } from "express";
import { listProducts, getProductById, deleteProduct, createProduct, updateProduct } from "./productsController";

const router = Router();

router.get('/', listProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

export default router;