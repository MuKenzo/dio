// Input dos Números

function compara_numeros(n1, n2) {
    if (!n1 || !n2) return 'Digite dois números';

    // Definição das Variáveis
    const soma = n1 + n2;
    var iguais = '';
    var maior10 = '';
    var menor20 = '';
    
    // Verificar se os números são iguais
    (n1 === n2) ? (iguais = 'são iguais') : (iguais = 'não são iguais');
        
    // Verificar se soma dos números é maior que 10
    (soma >= 10) ? (maior10 = 'maior ou igual') : (maior10 = 'menor');
        
    // Verificar se soma dos números é menor que 20
    (soma <= 20) ? (menor20 = 'menor ou igual') : (menor20 = 'maior');
        
    // Resultado Final
    console.log(`Os números ${n1} e ${n2} ${iguais}. Sua soma é ${soma}, que é ${maior10} que 10 e ${menor20} que 20.`);
}

compara_numeros(10, 8);