
const produto1: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 8
}

const gerarEtiqueta = (produto: { produto: string, lote: number, ano: number, qtd: number }): string[] => {

    const listaProduto: string[] = [];

    for (let index = 1; index <= produto.qtd; index++) {

        const numeroEstoque: number = index / 100;

        const infoProduto: string = `${produto.lote}-${produto.ano}-${numeroEstoque}`.replace('.', '');

        listaProduto.push(infoProduto);
    }

    return listaProduto;

}

console.log(gerarEtiqueta(produto1));
