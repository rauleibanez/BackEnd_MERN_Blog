const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Post model
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true    
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now    
  },
  updatedAt: {
    type: Date,
    default: Date.now    
  }
});

const Post = mongoose.model('Post', postSchema);

// User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Middleware para hash de la contraseña antes de guardar
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = { Post, User };
