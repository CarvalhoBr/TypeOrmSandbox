import { Router } from 'express'

const routes = Router()

routes.get('/users', (req, res) => {
	res.send('Todos os usuários')
})

routes.post('/users', (req, res) => {
	res.send('Adicionando usuário')
})

routes.delete('/users', (req, res) => {
	res.send('Deletando usuário')
})

export default routes