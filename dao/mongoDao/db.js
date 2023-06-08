const mongoose = require(`mongoose`)

class ManagerMongo {
    constructor(url) {
        this.url = url
    }


    connectionMongoDb() {
        return mongoose.connect(this.url, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(connect=>{
        console.log(`Conexion a DB  exitosa`)
         } ).catch(err=> console.log(err))
}
}


module.exports = ManagerMongo