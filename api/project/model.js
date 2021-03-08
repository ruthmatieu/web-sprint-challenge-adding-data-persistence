//build your `Project` model here
const db = require('../../data/dbConfig');

function find() {
    return db('project as p')
        .leftjoin('')
}

function findById() {
    return db('project as p')
        .where('')
}


module.exports = {
    find,
    findById,
}