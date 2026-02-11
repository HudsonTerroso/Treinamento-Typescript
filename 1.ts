let total = 100;

type soma = (x: number, y: number) => number;

const adicionar: soma = (a, b) =>{
    return a + b;
}

const resultado = adicionar(20, 30)

//console.log(resultado)