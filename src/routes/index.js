

// // aula rotas 1/2

// const express = require('express');  //importação do modulo express
// const { route } = require('express/lib/application');

// const routes = express.Router();     // inicializando o sistema de rotas do Express

// routes.get('/', (req, res)=>{        // criando uma rota com metodo GET
//     console.log(req.query);          // mostra no console a resporta => url /?name=victor
//     res.send('ola mundo, tudo bom??');
// })

// routes.get("/produto/:id?", (req, res)=>{  // rota parametizda
//     console.log(req.params);              // essa rota e uma rota parametizada logo se usa req.params, receber um objeto
//     res.send("compra ai");
// })

// routes.post('/cadastro', (req, res)=>{
//     console.log(req.body);          // quando se usa o metodo post a gente envia uma informação, serve para ver as informações que estão vindo do body
//     res.json(req.body);             // devolve uma respota em json
// })

// //aula controller 



// module.exports = routes;            // transformando o qrquivo em uma modulo exportavel



// // aula rotas 1/2 ; mesmo codigo só que reduzido

const express = require('express');                                   //importação do modulo express
const { route } = require('express/lib/application');

const produtoController = require('../controllers/produtoController')  // aula controller, immporta a exexução do controle

const routes = express.Router();                                       // inicializando o sistema de rotas do Express


//aula controller
routes.get("/", produtoController.olaMundo); 
routes.get("/produto/lista/:id" , produtoController.produtoId);
routes.get("/produto/lista", produtoController.listarProdutos);        // callback, como e um objeto vc pode chaama o metodo dele atravez de um ponto
routes.post("/cadastro"    , produtoController.cadastraProduto);


module.exports = routes;                                               // transformando o arquivo em uma modulo exportavel
