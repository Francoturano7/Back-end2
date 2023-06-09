const mongoose=require(`mongoose`)

class ManagerMongoMessage {
    constructor(url) {
        this.url = url
    }
    connectionMongoDbMessage() {
        return mongoose.connect(this.url, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(connect=>{
        console.log(`Conexion a DB Message exitosa`)
         } ).catch(err=> console.log(err))
    }
}


module.exports = ManagerMongoMessage