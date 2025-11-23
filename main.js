function calcularTempoServico() {
    const dataInicio = new Date('1978-03-01'); 
    const dataFim = new Date('2019-07-01'); 

    const diffMillis = dataFim - dataInicio;

    const millisPorAno = 1000 * 60 * 60 * 24 * 365.25;
    const anosTotais = diffMillis / millisPorAno;

    const anos = Math.floor(anosTotais);
    const mesesExatos = (anosTotais - anos) * 12;
    const meses = Math.round(mesesExatos); 

    let resultado = '';
    
    if (anos > 0) {
        resultado += `${anos} ano${anos !== 1 ? 's' : ''}`;
    }
    if (meses > 0) {
        if (anos > 0) {
            resultado += ' e ';
        }
        resultado += `${meses} mese${meses !== 1 ? 's' : ''}`;
    }
    
    const elemento = document.getElementById('tempo-servico');
    if (elemento) {
        elemento.textContent = resultado;
    }
}
calcularTempoServico();