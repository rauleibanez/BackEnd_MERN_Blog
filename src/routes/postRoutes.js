const express = require('express');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', auth, createPost); // Protegido
router.put('/posts/:id', auth, updatePost); // Protegido
router.delete('/posts/:id', auth, deletePost); // Protegido

module.exports = router;
