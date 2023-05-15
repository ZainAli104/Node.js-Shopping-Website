const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
MongoClient.connect('mongodb+srv://zainfiverr44:ra4Trr0tcn6RyLt9@cluster0.sixhmey.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!');
        callback(client);
        _db = client.db();
    })
    .catch(err => {
        console.log(err);
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;