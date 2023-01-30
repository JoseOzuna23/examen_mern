const Piratas = require ('../models/pirata.models')

const obtenerPiratas = (req, res)=>{
    Piratas.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })

}
const obtenerUnaPirata= (req, res)=>{
    Piratas.findById(req.params.id)
    .then((resultado)=>{
        console.log(resultado)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}
const crearPirata = (req, res)=>{
    Piratas.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editarPirata = (req, res)=>{
    Piratas.updateOne({_id: req.params.id}, req.body, {runValidators:true})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}
const eliminarPirata = (req, res)=>{
    Piratas.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports = {
    obtenerPiratas,
    crearPirata,
    obtenerUnaPirata,
    editarPirata,
    eliminarPirata
}
