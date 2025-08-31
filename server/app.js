import express, { Router } from "express"
import { userLogin, userSignup } from "./controller.js"
import router from "./route.js"


const app = express()

const PORT = 5008

app.use(express.json());

app.use((req,res,next) => {
    console.log('A new request received at' +Date.now())
    next()
})

app.get('/',(req,res)=> {
    res.send('Welcome to express App')
})

app.get('/error',() => {
    throw new Error('This is an error')
})
//lets handle this error
app.use((err,req,res,next) => {
    console.error(err.message)
    res.send('Internal server error')
})

/* Types of middleware in express js
Application-level middleware: Applied to the entire app using `app.use()` or `app.METHOD()`. It runs for every request and is suitable for logging, authentication, or parsing.
•Router-level middleware: Applied to specific routers using `router.use()`. It is ideal for modularizing route groups, such as user management or API versioning.
•Error-handling middleware: Defined with four parameters `(err, req, res, next)` and handles errors throughout the middleware chain.
•Built-in middleware: Provided by Express.js itself (e.g., `express.json()`, `express.static()`) for common tasks like parsing JSON or serving static files.
•Third-party middleware: External packages like `body-parser`, `cookie-parser`, or `cors` that offer additional functionalities not included in Express’s core



// define a simple route 
app.get("/", (req, res) => {
    res.send('HELLO , EXPRESS')
})


// Middleware in expressJS
/* Middleware functions in expressJS are functions that exexutes before the final request handler . they can 
modify the request(req) and response (res) objects
end the request- response cycle
call the next middleware function in the stack*/

// MIddleware workflow 
// client request => middleware => Route Handler => Response to client

// middleware is essential for logging , authentication , request parsing, error handling, etc

// lets create a basic middleware.





app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
