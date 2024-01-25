// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
    logger: true
})

await fastify.register(cors)

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send([
        {
            path: '/',
            component: 'Home',
            name: 'Home'
        },
        {
            path: '/marco',
            component: 'Marco',
            name: 'Marco'
        },
        {
            path: '/pippo',
            component: 'Pippo',
            name: 'Pippo'
        }
    ])
})

// Run the server!
fastify.listen({port: 3000}, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1);
    }
    // Server is now listening on ${address}
})