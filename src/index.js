import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import { connect } from './db/database' 

const app = express()
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

app.listen(7000, () => console.log('Server on port 7000'))