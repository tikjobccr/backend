const { update } = require('../database/connection');
const knex = require('../database/connection');

module.exports = {
    async index(req, res){
        const users = await knex('user');
        return res.status(201).json(users);
    },

    async create(req, res, next){
        try{
            const { name, email, whatsapp, senha } = req.body
            const video = req.files;
            const videos = video.map(vide => {
                return { path: vide.filename }
            })

            await knex('user').insert({ name, email, whatsapp, senha, videos});

            return res.status(201).send();
        } catch(err){
            next(err)
        }
    },

    async update(req, res, next){
        try{
            const { name, senha } = req.body
            const { id } = req.params

            await knex('user')
                .update({ name, senha })
                .where({ id })

            return res.status(201).json({Message: 'Alterado com Sucesso!'});
        } catch(err){
            next(err)
        }
    },

    async delete(req, res, next){
        try{
            const { id } = req.params

            await knex('user')
                .where({id})
                .update('deleted_at');

            return res.status(201).json({ Message: 'Deletado com Sucesso!' });
        } catch(err){
            next(err)
        }
    },
}