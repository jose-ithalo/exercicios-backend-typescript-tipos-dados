
function soletrarPalavra(palavra: string): string {

    const palavraSeparada: string[] = palavra.split('');

    const palavraJunta: string = palavraSeparada.join('-');

    return palavraJunta;
}

console.log(soletrarPalavra('desenvolvedor'));
