const mongoose = require('mongoose');

const connectionOfDb = () => {
    try {
        mongoose
            .connect(process.env.MONGO_DB)
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch((err) => {
                throw new Error(`Could not connect to MongoDB: ${err}`);
            });
    } catch (e) {
        console.log("Not connected to DB ", e)
    }

};

module.exports = connectionOfDb;