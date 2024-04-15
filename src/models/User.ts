import { Schema, Document, model } from "mongoose";

interface IUser extends Document {
    name: string;
    cpf_or_pj: string;
    cep: string;
    data_standby: Map<string, any>;
    requester_type: string;
    email: string;
    phone: string;
    senha: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, uppercase: true, required: true },
    cpf_or_pj: { type: String, unique: true, required: true },
    cep: { type: String, required: true },
    data_standby: { type: Map, of: Schema.Types.Mixed }, // Exemplo de tipo Map com chave e valor de tipos variados
    requester_type: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    senha: { type: String, required: true }
});

export default model<IUser>("User", userSchema);