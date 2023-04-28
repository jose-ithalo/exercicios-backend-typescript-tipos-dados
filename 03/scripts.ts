

function criarTabuada(numeros: number[]): void {

    console.log('````');

    for (let numero of numeros) {

        for (let index = 0; index <= 10; index++) {
            console.log(`${numero} x ${index} = ${numero * index}`);
        }

        console.log('-'.repeat(17));
        console.log();

    }
}

criarTabuada([1, 4, 10, 9]);