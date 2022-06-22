# projeto-postagem-node.js 
Projeto inicial - Node JS que mostra um crud simples de inserção e delete usando express.js, 
nodemon, sequelize.js, mysql2 e o body-parser com uma comunicação muito simples com o mysql.

<div style="display: inline_block"><br>
  <img align="center" alt="waly-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="waly-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="waly-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="waly-Bootstrap" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
  <img align="center" alt="waly-node" height="100" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
  <img align="center" alt="waly-express" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img align="center" alt="waly-mysql" height="80" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
</div>


Caso deseje visualizar o projeto em execução segue o link: https://drive.google.com/file/d/1FOZqRa-tZJORBmyUFQIQ3Zdj-NY9olfj/view?usp=sharing

/******************************************************************************/

Primeiro comando  para instalação do express

Express.js é um framework para Node.js que fornece recursos 
mínimos para construção de servidores web. 
Foi lançado como software livre e de código aberto sob a Licença MIT. 
É um dos mais populares frameworks para servidores em Node.js.

comando : 
npm install express  --save


/******************************************************************************/

Segundo comando  para instalação do nodemon

O nodemon é um utilitário de interface de linha de comando (CLI) desenvolvido pelo 
@rem que encapsula seu aplicativo Node, monitora o sistema de arquivos e reinicia o 
processo automaticamente. Neste artigo, você irá aprender sobre a instalação e configuração 
do nodemon .

comando :

npm install nodemon -g

/******************************************************************************/

Terceiro comando para instalação do sequelize

 Sequelize, segundo o site oficial, é um ORM para Node.js baseado em Promises, 
 para os bancos PostgreSQL, MySQL, MariaDB, SQLite e MS SQL Server. Então se você 
 não usa MySQL mas usa qualquer um desses outros bancos aí, deve conseguir adaptar 
 este tutorial para sua realidade.

comando :
 npm i --save sequelize
 
/******************************************************************************/


/******************************************************************************/


Quarto comando para instalar as dependencias do SGBD que irei usar (MYSQL)


comando :

npm i --save mysql2


/******************************************************************************/



/******************************************************************************/

 Quinto comando para instalação do Handlebars.js
 

 Handlebars.js é uma extensão da linguagem de modelos Mustache criada por Chris 
 Wanstrath. Handlebars.js e Mustache são linguagens de modelagem sem lógica que mantêm a 
 visualização e o código separados como todos sabemos que deveriam ser.

comando :

npm install express-handlebars  --save


/******************************************************************************/



/******************************************************************************/

Sexto comando para instalação do body-parser


Como req.bodya forma de é baseada na entrada controlada pelo usuário, 
todas as propriedades e valores neste objeto não são confiáveis ​​e devem 
ser validados antes de confiar. Por exemplo, req.body.foo.toString()pode 
falhar de várias maneiras, por exemplo, a foopropriedade pode não estar 
lá ou pode não ser uma string e toStringpode não ser uma função e, em vez 
disso, uma string ou outra entrada do usuário.


comando: 


npm install --save body-parser



/******************************************************************************/
