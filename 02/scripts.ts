const pessoas: { nome: string, idade: number, status: boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

function filtrarPessoas(lista: { nome: string, idade: number, status: boolean }[],
    nomePessoa: string): object[] {

    let usuariosSelecionados = [];

    for (const pessoa of lista) {
        if (pessoa.nome.toLocaleLowerCase().includes(nomePessoa.toLocaleLowerCase())) {
            usuariosSelecionados.push(pessoa)
        }
    }

    return usuariosSelecionados;

}

console.log(filtrarPessoas(pessoas, 'guido'));
