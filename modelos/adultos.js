const db = require("./db")




/*Sequelize.authenticate()

.then(()=>{
    console.log("conexao bem sucedida")
})

.catch((erro)=>{
    console.log("erro na conexao" + erro)
})*/



const adultos = db.Sequelize.define('idade' ,{
    nome:{
        type:db.sequelize.STRING
    },
    email:{
        type:db.sequelize.STRING
    },

    telefone:{
        type:db.sequelize.TEXT
    }
})






module.exports = adultos
    