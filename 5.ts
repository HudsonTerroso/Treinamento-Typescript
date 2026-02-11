type Genero = "masculino" | "feminino"

interface Pessoa{
    nome: string,
    idade: number,
    genero: Genero
}

const novaPessoa: Pessoa = {
    nome: 'Maria',
    idade: 30,
    genero: "feminino"
}


function apresentarPessoa(pessoa: Pessoa){
    return `${pessoa.nome} tem ${pessoa.idade} ans e se identifica como ${pessoa.genero}`
}

console.log(apresentarPessoa(novaPessoa));
