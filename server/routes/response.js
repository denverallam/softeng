import express from 'express';
import * as action from '../controller/response.js';
const router = express.Router();

router.get('/', action.getAllResponses);
router.get('/:content_id', action.getResponseByContent);
router.get('/r/:id', action.getResponse);
router.post('/:content_id', action.createResponse);
router.patch('/:id', action.updateResponse);
router.delete('/:id', action.deleteResponse);

export default router;