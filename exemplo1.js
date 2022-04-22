//`For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:
//a) números de 1 a 50
//b) quando chegar no número 25 interrompa a instrução e pare o loop
//c) quando chegar no número 10 pule a instrução|

function contador(i){

    while(i<50){
        i++

        if(i === 10) {
            console.log('Pule a Instrução')
            continue
        }
        if(i === 25){
            console.log ('Interrompendo a instrução')
            break
        }
        console.log(i)
    }
}
contador(0)