const express=require('express')

const app=express()

const fs=require('fs')


app.use(express.urlencoded({extended:false}))

app.use(express.json())


app.set('view engine','ejs')

app.get('/', (req,res)=>{

res.render("Servidor")

})

app.post('/sucess',(req,res)=>{

var email=req.body.Email

fs.writeFileSync(email+".json",JSON.stringify(req.body),function(error){

if(error){

console.log("Coe, algo deu errado",erro);

 }

 })

res.render('sucess')

 


})

app.post('/list',(req,res)=>{

fs.readdir(__dirname,(err,files)=>{ 

var newFiles=files.filter(data=>data.includes('.json')) 

console.log(newFiles);

res.render('list', {dados:newFiles})

 })

})


app.get('/:email', (req,res)=>{

var conta=req.params

var dadosfinais=JSON.parse(fs.readFileSync(conta.email))

res.send(dadosfinais)

})

app.get('/delete/:email',(req,res)=>{

var dados=req.params.email

fs.unlinkSync(dados)

res.send("dados apagados com sucesso")

 })


app.listen(8080, () =>{

console.log("O servidor está rodando em localhost:8080");

})
