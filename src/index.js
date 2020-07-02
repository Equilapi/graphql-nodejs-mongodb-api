import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import { connect } from './db/database' 

const app = express()
const port = 7000
connect()

app.get('/', (req, res) => {
    res.json({
        message: 'GraphQL, Nodejs y Mongodb'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

app.listen(port, () => console.log(`🔥🔥🔥 Server on port ${port} 🔥🔥🔥`))