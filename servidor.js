const express=require('express')

const app=express()

const fs=require('fs')
app.use(express.json())


app.post('/sucess',(req,res)=>{
var email=req.body.email
fs.writeFileSync(email+".json",JSON.stringify(req.body))
res.send('sucess')
})

app.get('/list',(req,res)=>{
fs.readdir(__dirname,(err,files)=>{ 
var newFiles=files.filter(data=>data.includes('.json')) 
res.send({dados:newFiles})
 })
})


app.get('/:email', (req,res)=>{
var conta=req.params
var dadosfinais=JSON.parse(fs.readFileSync(conta.email))
res.send(dadosfinais)
})

app.delete('/delete/:email',(req,res)=>{
var dados=req.params.email
fs.unlinkSync(dados)
res.send("dados apagados com sucesso")
 })

 app.use((req, res, next) => {
    res.send({erro: true, msg: "Rota não definida no servidor."})
});


app.listen(8080, () => console.log("O servidor está rodando em localhost:8080"))
