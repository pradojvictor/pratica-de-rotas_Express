const { json } = require("express/lib/response");
const res = require("express/lib/response");

const produtoController = {
    listarProdutos:(req,res)=>{                                  // metodo listaprodutos, modo tradicional, 
        res.json([{nome: "produto 1"}, {nome: "produto 2"}]);    // 
    },
    olaMundo:(req,res)=>{
        console.log(req.query); 
        res.send("ola mundo");
    },
    produtoId:(req,res)=>{
        console.log(req.params);
        res.send("compra ai");
    },
    cadastraProduto(req,res){
        console.log(req.body);
        res.json("produto cadastrado")
    }
}


module.exports = produtoController;        //exporta o objeto selecionado