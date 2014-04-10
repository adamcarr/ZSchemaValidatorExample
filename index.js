var ZSchema = require('z-schema');
var schema = require('./schema');
var blob = require('./blob');

ZSchema.validate(blob, schema)
    .then(function (result) {
        console.info(result);
    })
    .catch(function (result) {
        console.error(result);
    });