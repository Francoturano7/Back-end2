const mongoose=require(`mongoose`)

const MessageSchema = new mongoose.Schema({
    name:{
                type:String,
                required:true
            },
            lastName:{
                type:String,
                required:true
            },
            msg:{
                type:String,
                required:true
            }
        })

const Message= mongoose.model(`Message`,MessageSchema)
module.exports = Message