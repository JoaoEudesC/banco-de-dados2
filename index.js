//config express

const express = require ("express")

const app = express()

const port = 3000


//pegando o documento usuarios que contem a criaçao da tabela do banco de dados no mysql

const usuario = require('./modelos/usuarios')

const idade = require('./modelos/adultos')


//config ejs

app.set('view engine' , 'ejs')


//config body-parser


const bodyparser = require ('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())



//renderizando html do ejs na rota formulario


app.get('/formulario' , (req ,res)=>{
    res.render('Form')
})


 

app.post('/home' , (req ,res)=>{
    idade.create({
        nome:req.body.nome,
        email:req.body.email,
        telefone:req.body.telefone
        
    })
    .then(()=>{
        res.send("formulario enviado com sucesso")
    })
    .catch((erro)=>{
        res.send("erro de conexao" + erro)
    })
})




























app.listen(port , ()=>{
    console.log(`o servidor esta disponivel em http://localhost:${port}`)
})