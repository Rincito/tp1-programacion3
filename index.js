import express from "express"
import dbconnect  from './config.js'
import ModelUser from "./usermodel.js"
const router = express.Router()
const app = express()

// CRUD

router.post("/", async (req,res) =>{
    const body = req.body
    const response = await ModelUser.create(body)
    res.send(response)
})
router.get("/", async (req,res) => {
    const response = await ModelUser.find({})
    res.send(response)
})
router.get("/:id", async (req,res) => {
    const id = req.params.id
    const response = await ModelUser.findById(id)
    res.send(response)
})
router.put("/:id", async (req,res) => {
    const body = req.body
    const id = req.params.id
    const response = await ModelUser.findOneAndUpdate({_id: id}, body )
    res.send(response)
})
router.delete("/:id", async (req,res) => {
    const id = req.params.id
    const response = await ModelUser.deleteOne({_id : id})
    res.send(response)
})
app.use(express.json())
app.use(router)
app.listen(3000, () =>{
    console.log('el server esta esperando en el puerto 3000')
})

dbconnect()