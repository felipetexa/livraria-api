const express = require('express');
const router = express.Router();
const livrosV1Controller = require('../controllers/livrosV1Controller');

router.get('/', livrosV1Controller.showAllBooks);
router.post('/', livrosV1Controller.store);
router.get('/:id', livrosV1Controller.showOneBook);
router.put('/:id', livrosV1Controller.edit);
router.delete('/:id', livrosV1Controller.delete);

module.exports = router;
