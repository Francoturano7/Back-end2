const mongoose=require(`mongoose`)

class ManagerMongoCart {
    constructor(url) {
        this.url = url
    }
    connectionMongoDbCart() {
        return mongoose.connect(this.url, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(connect=>{
        console.log(`Conexion a DB Cart exitosa`)
         } ).catch(err=> console.log(err))
    }
}


module.exports = ManagerMongoCart