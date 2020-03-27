const connection = require('../database/conection');

module.exports = {
    async create(request, response){
        const {id } = request.body;

        const ong = await connection('ong')
        .where('id', id)
        .select('name')
        .first();

        if(!ong)
        {
            return response.status(400).json({error: 'no ONG found with this ID'});
        }
        return response.json(ong);
    }
}