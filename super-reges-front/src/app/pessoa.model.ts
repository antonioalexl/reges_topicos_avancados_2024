export abstract class Pessoa{

    id?: number;
    nomeCompleto?: string; //razao social
    nomeResumido?: string; //fantasia
    email?: string;
    //private Endereco endereco;
    telefone?: string;
    dataNascFund?: Date;//data de nascimento e fundação
    documento?: string; //cnpj ou cpf
    rgIe?: string;//inscricao estadual ou rg
}