import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set('strictQuery', true);

const connection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI_PROD);
    console.log("✅ Conectado a la base de datos de Railway correctamente");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error.message);
  }
};

export default connection;
