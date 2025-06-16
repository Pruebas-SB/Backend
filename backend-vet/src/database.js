import dotenv from 'dotenv';
dotenv.config();

// ODM = NoSQL -> MongoDB con mongoose
import mongoose from "mongoose";

// Configurar para que Mongoose use solo campos definidos en los modelos
mongoose.set('strictQuery', true);

// Construir la URL para producción desde Railway (cuando se use)
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_DB
} = process.env;

const MONGODB_URI_PROD = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`;

// Mostrar la URI en uso
console.log('Usando URI:', process.env.MONGODB_URI_LOCAL);

// Función para conectar a la base de datos
const connection = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGODB_URI_LOCAL // ← usar esta línea por ahora (local)
      // MONGODB_URI_PROD ← usar esta línea al desplegar en Railway
    );
    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
  }
};

export default connection;