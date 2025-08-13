describe('Kanban Dusky Five - Testes E2E', () => {
  const baseUrl = 'https://kanban-dusky-five.vercel.app/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Deve carregar a página inicial com colunas principais', () => {

  });

  it('Deve criar uma nova tarefa na coluna Backlog', () => {

    cy.xpath('//*[@id="📝  To DoCreateTask"]/div/p').should('be.visible').click();
    cy.get('input.sc-gsnTZi.irWJb').type('Template de usuário{enter}');






  });




});

