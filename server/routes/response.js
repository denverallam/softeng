import express from 'express';
import * as action from '../controller/response.js';
import protect from '../middleware/authenticationToken.js'
const router = express.Router();

router.get('/', action.getAllResponses);
router.get('/:content_id', action.getResponseByContent);
router.get('/r/:id', action.getResponse);
router.post('/:content_id', protect, action.createResponse);
router.patch('/:id', protect, action.updateResponse);
router.delete('/:id', protect, action.deleteResponse);

export default router;