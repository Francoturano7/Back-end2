const mongoose=require(`mongoose`)

class ManagerMongoProduct {
    constructor(url) {
        this.url = url
    }
    connectionMongoDbProduct() {
        return mongoose.connect(this.url, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(connect=>{
        console.log(`Conexion a DB Product exitosa`)
         } ).catch(err=> console.log(err))
    }
}


module.exports = ManagerMongoProduct