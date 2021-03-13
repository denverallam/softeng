import express from 'express';
import * as action from '../controller/content.js';
const router = express.Router();

router.get('/', action.getAllContent);
router.get('/:category', action.getContentByCategory);
router.get('/post/:id', action.getContent);
router.post('/', action.createContent);
router.patch('/:id', action.updateContent);
router.delete('/:id', action.deleteContent);

export default router;
