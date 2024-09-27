const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log(`MongoDB connecté : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erreur de connexion à MongoDB : ${error.message}`);
        process.exit(1); // Arrêter l'application si la connexion échoue
    }
};

module.exports = connectDB;