'use strict';

const appRoot = require('app-root-path');
const db = require(appRoot + '/lib/database');
const Book = db.Book;


const list = () => {
    return (req, res, next) => {
        Book.find({}).then((books) => {
            if (books) {
                res.json(books);
            } else {
                res.json({});
            }
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    };
};

const create = () => {
    return (req, res, next) => {
        let book = new Book(req.body);
        book.save().then(() => {
            res.status(201).json(book);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    };
};

const get = () => {
    return (req, res, next) => {
        Book.findOne({_id:req.params.id}).then((books) => {
            if (books) {
                res.json(books);
            } else {
                res.status(404).send();
            }
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    };
};


const del = () => {
    return (req, res, next) => {
        Book.findOneAndRemove({_id:req.params.id}).then(() =>{
            res.status(200).send();
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    };
};

const put = () => {
    return (req, res, next) => {
         let book = req.body;

        if (!book._id){
            book._id = req.params.id
        };
        
        Book.findOneAndUpdate({_id:book._id}, book).then(() => {
            res.status(200).send();
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        })
    };
};


module.exports = {
    list,
    create,
    get,
    del,
    put
};