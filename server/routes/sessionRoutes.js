var express = require('express');
var router = express.Router();
var sessionController = require('../controllers/sessionController.js');

/*
 * GET
 */
router.get('/', sessionController.list);

/*
 * GET
 */
router.get('/:id', sessionController.show);

/*
 * POST
 */
router.post('/', sessionController.create);

/*
 * PUT
 */
router.put('/:id', sessionController.update);

/*
 * DELETE
 */
router.delete('/:id', sessionController.remove);

module.exports = router;
