import userSchema from "../models/User";
import { RequestHandler } from "express";
import { userValidator } from "../utils/validator";

const getAllUsers: RequestHandler = async ({ }, response) => {
    try {
        const users = await userSchema.find()
        response.json(users)
    } catch (error) {
        console.error("Não foram encontrados Usuarios Cadastrados")
    }
    
}

const createUser: RequestHandler = async (request, response) => {
    try {
        const { name, cpf_or_pj, cep, email, tel, password  } = request.body
        await userValidator(request.body)
        if (!request.body['confirmasenha']) {
            return response.sendStatus(422).json({ message: "Senha obrigatória" })
        }
        if(request.body['senha'] !== request.body['confirmasenha']){
            return response.sendStatus(422).json({message: "As senhas são diferentes"})
        }
    } catch (error) {
        response.sendStatus(500).json({error: "Ocorreu um Erro"})
        }

}
    
export {createUser, getAllUsers}