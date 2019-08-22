const Author = require('../models/author.model')

exports.showAll = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

exports.newAuthor = (req, res) => {
    const author = new Author(req.body);
    author.save()
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

exports.findAuthor = (req, res) => {
    console.log('finding author', req.params.id);
    Author.findOne({_id: req.params.id})
        .then(author => {
            console.log(author)
            return res.json(author)
        })
        .catch(err => {
            console.log(err)
            return res.json(err)
        })
}

exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.body._id}, req.body, {new: true})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

exports.removeAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}