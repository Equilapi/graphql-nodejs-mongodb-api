import mongoose from 'mongoose'

export async function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/mongodbgraphql', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('>>> DB is connected')
    } catch(e) {
        console.log('>>> Something goes wrong!')
        console.log(e)
    } 
}
