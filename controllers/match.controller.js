const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.Match
            .find({})
            .sort({ date:-1 })
            .then(dbMatch => res.json(dbMatch))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Match
            .create(req.body)
            .then(dbMatch => res.json(dbMatch))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Match
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbMatch => res.json(dbMatch))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Match
            .findById({ _id: req.params.id })
            .then(dbMatch => dbMatch.remove())
            .then(dbMatch => res.json(dbMatch))
            .catch(err => res.status(422).json(err));
    }

}