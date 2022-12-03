const db = require("./db")


const usuario = db.Sequelize.define('cadastro' , {
    nome:{
        type:db.sequelize.STRING
    },

    email:{
        type:db.sequelize.TEXT

    },

    telefone:{
        type:db.sequelize.INTEGER
    }


})


usuario.sync({force:true})


module.exports = usuario



// o ideal é separar o uso do sequelize por modulos , ou seja , este é o modulo usuarios , eu poderia utilizar o modulo adultos , crio uma outro arquivo documentos e puxo um sequelize la so com a ligaçao ao banco de dados adultos e envio do formulario para la, assim os arquivos ficam separados