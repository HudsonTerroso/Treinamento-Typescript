function retornarElemento<T>(array: T[], index: number): T | undefined{
    return array[index];
}

const num = retornarElemento([10, 20, 30], 1);
const str = retornarElemento(["a", "b", "c"], 0);

//console.log(num)
//console.log(str)