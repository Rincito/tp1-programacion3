import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
    nombre: {
        type: String
    },
    genero: {
        type: String
    },
    lanzamiento: {
        type: String
    }
    },
    {
        timestamps: true,
        versionkey: false
    })

    const ModelUser = mongoose.model("juegos", userSchema)
    export default ModelUser