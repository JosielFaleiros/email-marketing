import mongoose from 'mongoose'

var MensagemSchema = new mongoose.Schema({
    cidades: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cidade',
        required: true
    }],
    mensagem: {
        type: String,
        required: true,
    }
})
export default mongoose.model('Mensagem', MensagemSchema)