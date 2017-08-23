import mongoose from 'mongoose'

var MensagemSchema = new mongoose.Schema({
    pessoas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa',
        required: true
    }],
    mensagem: {
        type: String,
        required: true,
    }
})
export default mongoose.model('Mensagem', MensagemSchema)