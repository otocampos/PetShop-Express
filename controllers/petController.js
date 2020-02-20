const petModel = require('../models/pet')

const petController = {

index:(req,res)=>{
    res.send(`<ol> ${petModel.listarPets()}</ol>`);
    },
    
    add:(req,res)=>{
        let novoPet = req.params
        petModel.adicionarPet(novoPet)
        res.send(`O Pet ${novoPet.nome} foi adicionado`);

        },

        buscar:(req,res)=>{
            let petBuscado = req.params
           if(petModel.buscarPet(petBuscado.nome).length>0){
            res.send(`O Pet ${petBuscado.nome} foi encoontrado `);
           }else{
               res.send('Pet não encontrado')
           }


            },



};
module.exports = petController;