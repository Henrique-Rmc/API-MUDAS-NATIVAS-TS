// import { testaCPF } from "./validaCPF";
// import Planta from "./models/Planta";

interface UserAttributes {
    name: string;
    key: string;
    email: string;
    cpf_or_pj: string;
    cep: string;
    phone: string;
    password: string;
}

// interface Body {
//     user_attributes: UserAttributes;
//     plant_name: string;
//     plant_qtd: number;
//     cpf_or_pj: string;
//     cep: string;
//     phone: string;
//     password: string;
// }

// interface PlantaDoc {
//     nomePopular: string;
//     quantidade_limite: number;
// }

// const formsValidator = async (body: Body): Promise<void> => {
//     const { name, key, email } = body.user_attributes;

//     userValidator(body.user_attributes);

//     const plant_name = body.plant_name;
//     const plant_qtd = body.plant_qtd;

//     if (plant_name === '') {
//         throw new Error('Campo Nome da Planta não pode ser vazio');
//     }
//     if (plant_qtd === null || plant_qtd === undefined) {
//         throw new Error('Campo Quantidade de Plantas não existe');
//     }

//     const planta: PlantaDoc | null = await Planta.findOne({ nomePopular: plant_name });

//     if (planta) {
//         const quantidade_limite = planta.quantidade_limite;

//         if (quantidade_limite < plant_qtd) {
//             throw new Error('Quantidade de plantas indisponível');
//         }
//     } else {
//         throw new Error('Planta não encontrada');
//     }
// };

const userValidator = async (body: UserAttributes): Promise<void> => {
    const { name, cpf_or_pj, cep, email,phone, password } = body;

    if (name === '') {
        throw new Error('Campo nome não pode ser vazio');
    }
    if (cpf_or_pj === '') {
        throw new Error('Campo cpf_ou_pj não pode ser vazio');
    }
    if (cep === '') {
        throw new Error('Campo CEP não pode ser vazio');
    }
    if (email === '') {
        throw new Error('Campo email não pode ser vazio');
    }
    if (phone === '') {
        throw new Error('Campo telefone não pode ser vazio');
    }
    if (password === '') {
        throw new Error('Campo senha não pode ser vazio');
    }
};

export { userValidator };
