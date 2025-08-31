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

 // lets create a template

//set ejs as a view engine
app.set('view engine','ejs')

app.get('/', (req,res) =>{

  const userName = 'Mohammed Saffan'
  res.render('index',{userName})
})



app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
