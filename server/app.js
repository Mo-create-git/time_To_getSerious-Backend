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
// Dynamic Routes

app.use('/user', router)

// Handling a GET request;
/* used to fetch data from the server

Handling a post req;
used to send data to the server and create a new resource.
requires middleware {express.json()}to handle json inpur
*/

// here express.json() is middleware;



app.post('/users', express.json(), (req, res) => {
    const { name, email } = req.body;
    res.json({
        message: `User ${name} with email ${email} created successfully`
    });
})

// Handling a put req;
app.put('/users/:id', (req, res) => {
    const userId = req.params.id
    const { name, email } = req.body
    res.json({
        message: `User ${userId} updated to ${name}, ${email}`
    })
}) // here i've been stuck for an hour figuring out what the error is the error was "app.use(express.json())"

// Handlinga delete req;
/* use to send data to the server and create a new resource.
Requires middleware (express.json()) to handle JSON input.*/

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id
    res.json({
        message: `User with ID ${userId} deleted successfully`
    })
})




app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})

