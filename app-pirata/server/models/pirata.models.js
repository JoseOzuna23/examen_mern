const mongoose = require ('mongoose')
const PirataSchema = mongoose.Schema({
    nombre:{
        type:String,
    },
    imagen:{
        type:String,
    },
    tesoro:{
        type:Number,        
    },
    captura:{
        type:String,        
    },
    posicion:{
        type:String,
    }
    
}, {timestamps:true})
const Piratas = mongoose.model('Piratas', PirataSchema)
module.exports = Piratas