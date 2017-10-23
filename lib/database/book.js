const db = require('./db.js');
const Schema = db.Schema;

const BookSchema = new Schema({
    name: String,
    author: [{type: Schema.ObjectId, ref: 'Author'}],
    anthology: String,
    title: String,
    pages: Number,
    words: Number,
    pov: String,
    povChar: String,
    type: String
});

module.exports = db.model('Book', BookSchema);
