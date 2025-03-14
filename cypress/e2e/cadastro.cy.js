import CadastroPage from '../support/pages/CadastroPage';
import { gerarCNPJ } from 'gerador-validador-cpf';

describe('Teste de Cadastro - Registrar Clube', () => {
  it('Deve acessar a página, clicar em Concordo, verificar o texto na tela e clicar no campo CNPJ', () => {
    CadastroPage.visitarPagina(); // Acessa a página
    CadastroPage.clicarConcordo(); // Clica no botão "Concordo" 
    CadastroPage.preencherCnpj(); // Preenche o cnpj aleatório no campo indicado.
    CadastroPage.pesquisarCnpj();
    CadastroPage.cadastroNaoEncontrado();
    CadastroPage.preencherNome(); 
    CadastroPage.preencherSigla();
    CadastroPage.preencherEmail();
    CadastroPage.preencherData();
    CadastroPage.preencherSite();
    CadastroPage.preencherTelefone();
    CadastroPage.preencherCep();
    CadastroPage.preencherEndereço();
    CadastroPage.preencherNumero();
    CadastroPage.preencherComplemento();
    CadastroPage.preencherBairro();
    CadastroPage.preencherEstado();
    CadastroPage.preencherCidade();
    

    //Dados Presidente
     CadastroPage.preenchercpfPresidencia();
     CadastroPage.pesqCpfPresidencia();
     CadastroPage.modalCpfPresidencia();
     CadastroPage.nomePresidencia();
     CadastroPage.emailPresidencia();
     CadastroPage.dtNscPresidencia();
     CadastroPage.telPresidencia();
     CadastroPage.celPresidencia();
     CadastroPage.dtInicMandPresidencia();
     CadastroPage.dtEleicao();
     CadastroPage.dtTerMand();

     //Dados Diretor
     CadastroPage.preenchercpfDiretor();
     CadastroPage.pesqCpfDiretor();
     CadastroPage.modalCpfDiretor();
     CadastroPage.nomeDiretor();
     CadastroPage.emailDiretor(),
     CadastroPage.dtInicNascDiretor();
     CadastroPage.telefoneDiretor();


     CadastroPage.selecionarModalidade();
     CadastroPage.salvarCadastro();
     CadastroPage.validarCadastro();


   cy.wait(1000)
  });
});
