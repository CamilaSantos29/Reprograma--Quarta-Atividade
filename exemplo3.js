//| `Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. |

function tabuada(num){
    for (let i= 1; i<=10; i++ ){
        let multiplicacao = num * i
        let resultado = console.log(`${num} * ${i} = ${multiplicacao}`)
    }
    return 'Tabuada'
}
console.log(tabuada(2))
