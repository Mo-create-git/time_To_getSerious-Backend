import express, { Router } from "express"
import { userLogin, userSignup } from "./controller.js"
import router from "./route.js"


const app = express()

const PORT = 5008

app.use(express.json());



// define a simple route 
app.get("/", (req, res) => {
    res.send('HELLO , EXPRESS')
})


app.get('/things/:name/:id', (req,res) => {
    const {name, id} = req.params
    res.json({
        id,
        name
    })
})





app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})

