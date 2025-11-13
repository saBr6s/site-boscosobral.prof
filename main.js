function calcularTempoServico() {
    // Definindo as datas da carreira
    // Data de Início: Março de 1978 (1978-03-01)
    const dataInicio = new Date('1978-03-01'); 
    // Data de Fim: Julho de 2019 (2019-07-01)
    const dataFim = new Date('2019-07-01'); 

    // Calcula a diferença em milissegundos
    const diffMillis = dataFim - dataInicio;

    // Converte milissegundos para o número total de anos (incluindo meses)
    // Usamos 365.25 para considerar anos bissextos e ser mais preciso
    const millisPorAno = 1000 * 60 * 60 * 24 * 365.25;
    const anosTotais = diffMillis / millisPorAno;

    // Separa os anos inteiros e calcula os meses restantes
    const anos = Math.floor(anosTotais);
    const mesesExatos = (anosTotais - anos) * 12;
    // Arredonda para o mês mais próximo
    const meses = Math.round(mesesExatos); 

    let resultado = '';
    
    // Constrói a string do resultado
    if (anos > 0) {
        resultado += `${anos} ano${anos !== 1 ? 's' : ''}`;
    }
    if (meses > 0) {
        // Adiciona " e " se já houver anos na string
        if (anos > 0) {
            resultado += ' e ';
        }
        resultado += `${meses} mese${meses !== 1 ? 's' : ''}`;
    }
    
    // Encontra o elemento no HTML e insere o texto
    const elemento = document.getElementById('tempo-servico');
    if (elemento) {
        elemento.textContent = resultado;
    }
}

// Garante que a função é chamada assim que o script é carregado
calcularTempoServico();