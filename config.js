import mongoose from "mongoose";
const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tp1-prog3", {});
        console.log('Conexion exitosa a mongodb');
    } catch (error) {
        console.error('Error conectandose con mongodb:', error);
    }
};

export default dbconnect;