import fastify from 'fastify'

const app = fastify()

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

app.listen(Number(process.env.port), () => {
  console.log(`Server listening on port 3000`)
})