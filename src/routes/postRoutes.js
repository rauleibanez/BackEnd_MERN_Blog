const express = require('express');
const {getPost,  getPosts, createPost, updatePost, deletePost } = require('../controllers/postController');
const auth = require('../middleware/auth');

const router = express.Router();

/** 
 * @swagger 
 * /posts:
 *  get:
 *      summary: Obtener todas las publicaciones
 *      tags: [Posts]
 *      responses:
 *          200:
 *              description: Lista de publicaciones
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Post' 
 */
router.get('/posts', getPosts);

/**
 * @swagger
 * /posts/{id}:
 *  get:
 *      summary: Obtener una publicación por ID
 *      tags: [Posts]
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: ID de la publicación
 *      responses:
 *          200:
 *              description: Publicación obtenida
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Post'
 *          404:
 *              description: Publicación no encontrada
 *          500:
 *              description: Error interno del servidor
 */
router.get('/posts/:id', getPost);

/** 
 * @swagger 
 * /posts:
 *  post:
 *      summary: Crear una nueva publicación
 *      tags: [Posts]
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Post'
 *      responses:
 *          201:
 *              description: Publicación creada
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Post' 
 */
router.post('/posts', auth, createPost); // Protegido

/** 
 * @swagger 
 * /posts/{id}:
 *  put:
 *      summary: Actualizar una publicación existente
 *      tags: [Posts]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: ID de la publicación
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Post'
 *      responses:
 *          200:
 *              description: Publicación actualizada
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Post'
 */
router.put('/posts/:id', auth, updatePost); // Protegido

/** 
 * @swagger 
 * /posts/{id}:
 *  delete:
 *      summary: Eliminar una publicación existente
 *      tags: [Posts]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: ID de la publicación
 *      responses:
 *          200:
 *              description: Publicación eliminada 
 */
router.delete('/posts/:id', auth, deletePost); // Protegido

module.exports = router;
