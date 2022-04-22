//| `Pares` |Imprima na tela os números pares existentes entre 0 e 100..|

function numerosPares(x){

    while (x <= 100){
        x++

        if ((x % 2) == 0) {
        console.log(`${x}`)
        }
    }
}
numerosPares(0) 