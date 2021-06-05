const Sequelize = require('sequelize');
const sequelize = new Sequelize('sql10416933', 'sql10416933', 'p2ZiQgfJvc',{
    host: "sql10.freemysqlhosting.net",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

 //Teste de Conexão com o banco de dados Mysql
sequelize.authenticate().then(function (){
    console.log('Conectado com sucesso!');
}).catch(function(erro){
    console.log('Falha ao se conectar: '+erro);
});

/* ********************************************** */
