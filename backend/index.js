//import
const express=require("express")
require("./connection")
var stuModel=require("./model/student")
var cors=require('cors')


//initalize
const app = express()


//mid
app.use(express.json())
app.use(cors())
 
//api creation
app.get('/',(req,res)=> {
    res.send('Hello world')
})
app.get('/sample',(req,res)=> {
    res.send('trail api')
})

//add
app.post('/add',(req,res)=> {
    stuModel(req.body).save()
    res.send('data added')
})

//view
app.get('/view',async(req,res)=> {
 const data=await stuModel.find()
    res.send(data)
})
app.delete('/remove/:id',async(req,res)=>{
   await stuModel.findByIdAndDelete(req.params.id)
  res.send("data deleted")
})

app.put('/update/:id',async(req,res)=>{
   await stuModel.findByIdAndUpdate(req.params.id,req.body)
  res.send("data updated")
})


//port setting
app.listen(3004,()=> {
    console.log('Server is running on http://localhost:3004')
})