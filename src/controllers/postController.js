const { Post } = require('../models/models');

// Post controllers
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPost = async (req, res) => { 
  try { 
    const post = await Post.findById(req.params.id); 
    if (!post) { 
      return res.status(404).json({ message: 'Publicación no encontrada' });
    } 
    res.json(post); 
  } catch (err) { 
    res.status(500).json({ message: err.message }); 
  } 
};

const createPost = async (req, res) => {
  const { title, body } = req.body;
  try {
    const newPost = new Post({ title, body });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
/*
const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
*/

const updatePost = async (req, res) => {
   try {
    const { title, body } = req.body; 
    const post = await Post.findById(req.params.id); 
    if (!post) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    } 
    post.title = title;
    post.body = body;
    post.updatedAt = Date.now(); // Actualizar la fecha updatedAt
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
};
