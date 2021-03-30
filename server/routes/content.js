import express from 'express';
import * as action from '../controller/content.js';
import protect from '../middleware/authenticationToken.js'
const router = express.Router();

router.get('/', action.getAllContent);
router.get('/:category', action.getContentByCategory);
router.get('/post/:id', action.getContent);
router.post('/', protect, action.createContent);
router.patch('/:id',protect,  action.updateContent);
router.delete('/:id',protect,  action.deleteContent);

export default router;
