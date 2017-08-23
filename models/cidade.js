import mongoose from 'mongoose'

var CidadeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        index: true,
        unique: true
    }
})

export default mongoose.model('Cidade', CidadeSchema)