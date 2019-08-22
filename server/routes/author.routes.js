module.exports = app => {
    const authorController = require('../controllers/authors.controllers');
        app.get('/api/authors', authorController.showAll);
        app.get('/api/authors/:id', authorController.findAuthor);
        app.post('/api/authors', authorController.newAuthor);
        app.put('/api/authors/:id', authorController.updateAuthor);
        app.delete('/api/authors/:id', authorController.removeAuthor)
}