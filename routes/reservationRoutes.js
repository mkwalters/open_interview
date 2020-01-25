var express = require('express');
var router = express.Router();
var reservationController = require('../controllers/reservationController.js');

/*
 * GET
 */
router.get('/', reservationController.list);

/*
 * GET
 */
router.get('/:id', reservationController.show);

/*
 * POST
 */
router.post('/', reservationController.create);

/*
 * PUT
 */
router.put('/:id', reservationController.update);

/*
 * DELETE
 */
router.delete('/:id', reservationController.remove);

module.exports = router;
