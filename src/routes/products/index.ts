// Product Endpoints

import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
  res.send('New product created!');
})

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.send('A Product details!');
})

export default router;