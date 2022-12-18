const router = require('express').Router();
const controller = require('../controllers');

router.post('/merchant', controller.createMerchant);
router.get('/merchant', controller.getMerchant);
router.get('/merchant/:id', controller.getMerchantById);
router.put('/merchant/:id', controller.UpdateMerchantById);
router.delete('/merchant/:id', controller.DeleteMerchantById);

module.exports = router;
