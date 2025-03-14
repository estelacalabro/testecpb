function gerarCnpjAleatorio() {
  const cnpjBase = Math.floor(100000000000 + Math.random() * 900000000000); // Gera um número de 12 dígitos
  let cnpjFormatado = cnpjBase.toString().replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4-");
  cnpjFormatado += Math.floor(10 + Math.random() * 90); // Adiciona os últimos dois dígitos aleatórios
  return cnpjFormatado;
}
function gerarCPF() {
  const num = () => Math.floor(Math.random() * 9); // Gera um número aleatório de 0 a 9
  const calcularDV = (cpfParcial) => {
    let soma = 0;
    cpfParcial.forEach((num, index) => {
      soma += num * ((cpfParcial.length + 1) - index);
    });
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  let cpf = Array.from({ length: 9 }, num); // Gera os 9 primeiros dígitos
  cpf.push(calcularDV(cpf)); // Calcula o primeiro dígito verificador
  cpf.push(calcularDV(cpf)); // Calcula o segundo dígito verificador
  return cpf.join(''); // Retorna o CPF como string
}


class CadastroPage {
  visitarPagina() {
    cy.visit("https://homolognovocadastro.cpb.org.br/public/clubes-externos");
    cy.wait(2000);
    //cy.get('app-root', { timeout: 30000 }).should('be.visible');
  }

  clicarConcordo() {
    cy.get('.modal-content').should('be.visible');

    const clicarSeVisivel = () => {
      cy.contains('Concordo').click();
      cy.wait(1000);
    };

    clicarSeVisivel(); // Executa a função
  }

  preencherCnpj() {
    const cnpjFalso = gerarCnpjAleatorio(); // Gera um CNPJ aleatório formatado

    cy.get('#cnpjClube', { timeout: 10000 })
      .scrollIntoView()  
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type(cnpjFalso, { delay: 100 }); // Digita o CNPJ lentamente para evitar erros
  }

  pesquisarCnpj(){

    const clicarPesquisar = () => {
          cy.contains('Pesquisar')
          .click();
          cy.wait(1000);
        };

      clicarPesquisar();
    }
  
  cadastroNaoEncontrado(){
    cy.get('[aria-describedby="swal2-html-container"]') // Seleciona o modal que está aberto
    .should('be.visible') // Garante que ele está visível
    .contains('button', 'OK') // Encontra o botão "OK" dentro do modal
    .should('be.visible') // Garante que o botão está visível
    .click({ force: true }); // Clica no botão mesmo que tenha sobreposição
  }

   preencherNome(){ 
    cy.get('#nomeCompletoClube') 
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('Clube da Estela Calabro', { delay: 100 }); // Digita o CNPJ lentamente para evitar erros
   }

   preencherSigla(){
    cy.get('#siglaClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('EA', { delay: 100 }); // Digita a minha sigla
   }

   preencherEmail(){
    cy.get('#emailClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('estelacalabro@gmail.com', { delay: 100 }); // Preencher o e-mail
   }

   preencherData(){
    cy.get('#dataFundacaoClube')
   .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('12/10/1991', { delay: 100 }); // Preencher data da fundação
   }

   preencherSite(){
    cy.get('#siteClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('www.estelateste.com.br', { delay: 100 }); // Preencher site
  }

  preencherTelefone(){
    cy.get('#telefoneClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('11942058848', { delay: 100 }); // Preencher telefone
  }

  preencherCep(){
    cy.get('#cepClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('03375005', { delay: 100 }); // Preencher cep
  }

  preencherEndereço(){
    cy.get('#enderecoClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('Rua teste da silva', { delay: 100 }); // Preencher endereço
  }

  preencherNumero(){
    cy.get('#numeroClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('88', { delay: 100 }); // Preencher número
  }

  preencherComplemento(){
    cy.get('#complementoClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('Sala B', { delay: 100 }); // Preencher complemento
  }

  preencherBairro(){
    cy.get('#bairroClube')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('SantaCruz', { delay: 100 }); // Preencher Bairro
  }

  preencherEstado() {
    cy.get('#estadoClube').click();
    cy.contains('SÃO PAULO').click();
    cy.wait(3000)
  }

  preencherCidade(){
    cy.get('#cidadeClube').click();
    cy.get('.ng-option') // Aguarda as opções aparecerem
    .contains('SÃO PAULO') // Procura pelo texto
    .click();    
  }

  preenchercpfPresidencia(){
    const cpfFalso = gerarCPF(); // Gera um CNPJ aleatório formatado

    cy.get('#cpfPresidente', { timeout: 10000 })
      .scrollIntoView()  
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type(cpfFalso, { delay: 100 }); // Digita o CNPJ lentamente para evitar erros
  }
  pesqCpfPresidencia(){

    const clicarPesquisar = () => {
      cy.get('button[title="Pesquisar CPF Presidente"]').click();
          cy.wait(1000);
        };

      clicarPesquisar();
    }
    modalCpfPresidencia(){
      cy.get('[aria-describedby="swal2-html-container"]') // Seleciona o modal que está aberto
      .should('be.visible') // Garante que ele está visível
      .contains('button', 'OK') // Encontra o botão "OK" dentro do modal
      .should('be.visible') // Garante que o botão está visível
      .click({ force: true }); // Clica no botão mesmo que tenha sobreposição
    }

    nomePresidencia(){
      cy.get('#nomePresidente')
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type('Rafael Santos', { delay: 100 }); // Preencher Nome
    }
    
    emailPresidencia(){
      cy.get('#emailPresidente')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('rafaelsantos@gmail.com', { delay: 100 }); // Preencher e-mail
    }
    
    dtNscPresidencia(){
      cy.get('#dataNascimentoPresidente')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('25/06/1986', { delay: 100 }); // Preencher data de nasc
    }

    telPresidencia(){
      cy.get('#telefonePresidente')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('11942589658', { delay: 100 }); // Preencher telefone
    }
  
    celPresidencia(){
      cy.get('#celularPresidente')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('11942056645', { delay: 100 }); // Preencher celular

    }

     dtInicMandPresidencia(){
      cy.get('#dataInicioMandatoPresidente')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('01/01/2025', { delay: 100 }); // Preencher celular
    }

    dtEleicao(){
      cy.get('#dataEleicaoPresidente')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('12/12/2024', { delay: 100 }); // Preencher eleição

    }

    dtTerMand(){
      cy.get('#dataTerminoMandatoPresidente')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('12/12/2026', { delay: 100 }); // Preencher eleição

    }

    preenchercpfDiretor(){
      const cpfFalso = gerarCPF(); // Gera um CNPJ aleatório formatado
  
      cy.get('#cpfDiretor', { timeout: 10000 })
        .scrollIntoView()  
        .should('be.visible')
        .and('not.be.disabled')
        .clear()
        .type(cpfFalso, { delay: 100 }); // Digita o CNPJ lentamente para evitar erros
    }

    pesqCpfDiretor(){

      const clicarPesquisar = () => {
        cy.get('button[title="Pesquisar CPF Diretor"]').click();
            cy.wait(1000);
          };
  
        clicarPesquisar();
    }

    modalCpfDiretor(){
      cy.get('[aria-describedby="swal2-html-container"]') // Seleciona o modal que está aberto
      .should('be.visible') // Garante que ele está visível
      .contains('button', 'OK') // Encontra o botão "OK" dentro do modal
      .should('be.visible') // Garante que o botão está visível
      .click({ force: true }); // Clica no botão mesmo que tenha sobreposição
    }

    nomeDiretor(){
      cy.get('#nomeDiretor')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('Carlos Eduardo', { delay: 100 }); // Preencher Nome Diretor
    }

    emailDiretor(){
      cy.get('#emailDiretor')
      .should('be.visible')
        .and('not.be.disabled')
        .clear()
        .type('carloseduardo@gmail.com', { delay: 100 }); // Preencher e-mail diretor
    }
    
    dtInicNascDiretor(){
      cy.get('#dataNascimentoDiretor')
      .should('be.visible')
        .and('not.be.disabled')
        .clear()
        .type('25/10/1986', { delay: 100 }); // Preencher e-mail diretor
    }

    telefoneDiretor(){
      cy.get('#telefoneDiretor')
      .should('be.visible')
        .and('not.be.disabled')
        .clear()
        .type('11958658654', { delay: 100 }); // Preencher e-mail diretor
    
    }
  

  selecionarModalidade(){
    cy.get('#modalidade-0').check();  // Seleciona a modalidade Atletismo
    cy.get('#modalidade-7').check();  // Seleciona a modalidade Esqui Cross Country
    cy.get('#modalidade-14').check();  // Seleciona a modalidade Natação
    cy.get('#modalidade-21').check(); // Seleciona a modalidade Tenis de Mesa
  }

  salvarCadastro(){

    const clicarSalvar = () => {
      cy.contains('Salvar').click();
          cy.wait(1000);
        };

        clicarSalvar();
  }

  validarCadastro(){
    cy.get('.swal2-popup') // Seleciona o modal SweetAlert2
    .should('be.visible') // Garante que o modal está visível
    .within(() => {
      cy.get('#swal2-title').invoke('text').then((titulo) => {
        cy.get('#swal2-html-container').invoke('text').then((mensagem) => {
          console.log(`Título do alerta: ${titulo}`);
          console.log(`Mensagem do alerta: ${mensagem}`);
          if (titulo.trim() !== 'Sucesso') {
            throw new Error(`Erro no cadastro: ${titulo} - ${mensagem}`);
          }
        });
      });
    });
  }
}

export default new CadastroPage();
