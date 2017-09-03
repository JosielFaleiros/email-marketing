import mongoose from 'mongoose'

var CampanhaSchema = new mongoose.Schema({
    data: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    mensagens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mensagem',
        required: true
    }]
})
export default mongoose.model('Campanha', CampanhaSchema)