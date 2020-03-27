const crypto = require('crypto');
const connection = require('../database/conection');

module.exports ={
    async index(request,response){

        const ong = await connection('ong').select('*');
        return response.json(ong);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ong').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
            return response.json({ id });
    }
};