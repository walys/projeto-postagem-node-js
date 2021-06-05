const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const  bodyParser  = require ('body-parser');
const Post = require('./models/Post');


//Config
    //Template Engine
app.engine('handlebars', handlebars({defaoltLayout:'main'}));
app.set('view engine', 'handlebars');
/* ********************************************************************* */

//Minhas bibliotecas css e js
app.use(express.static('public'));
/* ********************************************************************* */

// Body Parcer
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* ********************************************************************* */


//ROUTAS 


// Minha home, tela de onde vão ser listadas as minhas postagens
app.get('/', function(req, res){
    Post.findAll({order:[['id', 'ASC']]}).then(function(posts) {
        res.render('home', {posts: posts})
    })
});

/* ********************************************************************* */

// Meu formulario, tela de onde vão ser cadastradas as minhas postagens
app.get('/cad', function(req, res){
    res.render('formulario');
});

/* ********************************************************************* */


app.post('/add', function(req, res){

    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function (erro){
        res.redirect('/');
    }).catch(function (erro){
        res.send("Houve um erro: "+ erro);
    });
    
});

/* ********************************************************************* */

// Meu Deletar, tela de onde vão ser excluidas as minhas postagens
app.get('/del/:id', function(req, res){
   Post.destroy({where: {'id': req.params.id}}).then(function (){       
        res.redirect('/');
   }).catch(function(erro){
        req.send("Houve um problema na operação de deletar! "+ erro);
   });
});

/* ********************************************************************* */



app.listen(3000, function (){
    console.log('Bem vindo a port: http://localhost:3000');
});

