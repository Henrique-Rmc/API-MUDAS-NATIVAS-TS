// import {Schema, model} from "mongoose"

// const atributosDoClienteSchema = new mongoose.Schema({
//   nome: {type: String, required: true, uppercase: true},
//   // chave obrigatório
//   chave: {type: String, sparse: true, required: true}, //cpf ou cnpj do cliente
//   // email obrigatório
//   email: {type: String, required: true},
// });

// interface IFormulario {
//   clienteId: Number ,
//   nome_da_planta:String,
//   quantidade_da_planta: Number
//   data_corte: Date
//   data_transporte: Date
//   objetivo_doacao: String
//   comentario: String
//   data:Number
//   status: String
// }

// const FormularioSchema = new Schema<IFormulario>({
//   clienteId: {type: atributosDoClienteSchema},
//   // nome da muda obrigatório 
//   nome_da_planta: {type: String, required: true, uppercase: true},
//   // quantidade da muda obrigatório
//   quantidade_da_planta: {type: Number, required: true},
//   data_corte: Date,
//   data_transporte: Date,
//   objetivo_doacao: String,
//   comentario: String,
//   // ano em que o formulário foi realizado
//   data: {type: Number, default: new Date().getFullYear()},
//   // status do formulario (pendente, atendido e negado)
//   status: {type: String, default: 'PENDENTE', uppercase: true},
// });

// export default FormularioSchema
