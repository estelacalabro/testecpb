export function gerarCnpjAleatorio() {
    const cnpjBase = Math.floor(100000000000 + Math.random() * 900000000000); 
    let cnpjFormatado = cnpjBase.toString().replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4-");
    cnpjFormatado += Math.floor(10 + Math.random() * 90);
    return cnpjFormatado;
  }
  
  export function gerarCPF() {
    const num = () => Math.floor(Math.random() * 9);
    const calcularDV = (cpfParcial) => {
      let soma = 0;
      cpfParcial.forEach((num, index) => soma += num * ((cpfParcial.length + 1) - index));
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
  
    let cpf = Array.from({ length: 9 }, num);
    cpf.push(calcularDV(cpf));
    cpf.push(calcularDV(cpf));
    return cpf.join('');
  }