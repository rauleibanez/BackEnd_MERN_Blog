const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');

//Configuracion de la Documentacion para Swagger
const options = { 
    definition: { 
        openapi: '3.0.0', 
        info: { 
            title: 'Blog API Documentation', 
            version: '1.0.0', 
            description: 'API documentation for the Blog project', 
        }, 
        servers: [ 
            { 
                url: 'http://localhost:4000/api', 
            }, 
        ], 
        components: { 
            schemas: { 
                Post: { 
                    type: 'object', 
                    required: ['title', 'body'], 
                    properties: { 
                        title: { 
                            type: 'string', 
                            description: 'Título de la publicación', 
                        }, 
                        body: { 
                            type: 'string', 
                            description: 'Contenido de la publicación', 
                        }, 
                        createdAt: { 
                            type: 'string', 
                            format: 'date-time', 
                            description: 'Fecha de creación', 
                        }, 
                        updatedAt: { 
                            type: 'string', 
                            format: 'date-time', 
                            description: 'Fecha de actualización', 
                        }, 
                    }, 
                }, 
            }, 
            securitySchemes: { 
                bearerAuth: { 
                    type: 'http', 
                    scheme: 'bearer', 
                    bearerFormat: 'JWT', 
                }, 
            }, 
        }, 
    }, 
    apis: [`${path.join(__dirname, '../routes/*.js')}`], 
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
