require('dotenv').config();

module.exports = {
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET_KEY,
    },
    mongodb: {
        uri: process.env.MONGO_URI
    }
};


