const sequelize = require("sequelize")

const Sequelize = new sequelize('adultos' , 'root' , 'Hadassa2609@' , {
    host:'localhost',
    dialect:'mysql'
})



/*Sequelize.authenticate()

.then(()=>{
    console.log("conexao feita com sucesso")
})

.catch((erro)=>{
    console.log("conexao falha")
})*/

module.exports ={
    sequelize:sequelize,
    Sequelize:Sequelize
}

