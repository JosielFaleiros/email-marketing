import mongoose from 'mongoose'

var PessoaSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },

    cidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cidade',
        required: true
    }

})
export default mongoose.model('Pessoa', PessoaSchema)